import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

// === NUMOGRAM CORE FUNCTIONS ===

const triangular = (n) => (n * (n + 1)) / 2;

const digitReduce = (n) => {
  n = Math.abs(n);
  if (n < 10) return n % 9 || 9;
  const sum = String(n).split('').reduce((acc, d) => acc + parseInt(d), 0);
  return digitReduce(sum);
};

const gate = (n) => digitReduce(triangular(Math.abs(n)));

const syzygyPartner = (n) => (9 - (n % 9)) % 9 || 9;

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

const toPrime = (n) => {
  if (n === 0) return 1;
  return primes[(n - 1) % primes.length];
};

// Edge types
const EdgeType = {
  X: 'syzygy',    // Syzygy edge
  Y: 'gate',      // Gate edge
  Z: 'current',   // Current edge (follows syzygy)
  Q: 'prime'      // Prime edge
};

// Generate path with probabilistic edge selection
const generatePathProbabilistic = (start, numSteps) => {
  const path = [];
  let current = start;
  let forcedEdge = null;
  let prevNum = null;

  for (let step = 0; step < numSteps; step++) {
    let edgeType, next;

    if (forcedEdge === EdgeType.Z) {
      // Current edge: use difference from previous
      const prev = prevNum !== null ? prevNum : current;
      const diff = Math.abs(current - prev);
      edgeType = EdgeType.Z;
      next = diff || 1; // Avoid 0
    } else {
      // Select edge probabilistically
      const r = Math.random();
      if (r < 0.5) {
        // 50% syzygy
        edgeType = EdgeType.X;
        next = syzygyPartner(current);
      } else if (r < 0.8) {
        // 30% gate
        edgeType = EdgeType.Y;
        next = gate(current);
      } else {
        // 20% prime
        edgeType = EdgeType.Q;
        next = digitReduce(toPrime(current));
      }
    }

    path.push({ from: current, edge: edgeType, to: next });

    // Force Z edge after X edge
    forcedEdge = edgeType === EdgeType.X ? EdgeType.Z : null;
    prevNum = current;
    current = next;
  }

  return path;
};

// === RATIO & FREQUENCY CALCULATION ===

const normalizeRatio = (from, to) => {
  let f = from || 1;
  let t = to || 1;

  while (f / t > 2.0) f = f / 2.0;
  while (f / t < 0.5) t = t / 2.0;

  return [f, t];
};

const ratioToCents = (from, to) => 1200 * Math.log2(from / to);

// Base frequency: A220
const BASE_FREQ = 220;

const centsToFrequency = (cents) => BASE_FREQ * Math.pow(2, cents / 1200);

// === WEB AUDIO SYNTHESIS ===

const createAudioContext = () => {
  return new (window.AudioContext || window.webkitAudioContext)();
};

const playNote = (audioCtx, frequency, startTime, duration, gainNode) => {
  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency, startTime);

  // ADSR envelope
  noteGain.gain.setValueAtTime(0, startTime);
  noteGain.gain.linearRampToValueAtTime(0.3, startTime + 0.02);
  noteGain.gain.linearRampToValueAtTime(0.2, startTime + duration * 0.3);
  noteGain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(noteGain);
  noteGain.connect(gainNode);

  osc.start(startTime);
  osc.stop(startTime + duration);

  return osc;
};

// === MIDI GENERATION ===

const word16ToBytes = (n) => [(n >> 8) & 0xFF, n & 0xFF];
const word32ToBytes = (n) => [(n >> 24) & 0xFF, (n >> 16) & 0xFF, (n >> 8) & 0xFF, n & 0xFF];

const encodeVLQ = (n) => {
  if (n === 0) return [0];
  const bytes = [];
  let first = true;
  while (n > 0) {
    let byte = n & 0x7F;
    n = n >> 7;
    if (!first) byte |= 0x80;
    bytes.unshift(byte);
    first = false;
  }
  return bytes;
};

const generateMidi = (path, bpm = 120) => {
  const ticksPerQuarter = 480;
  const microsecondsPerQuarter = Math.floor(60000000 / bpm);

  // Track events
  const events = [];

  // Tempo event
  events.push([
    0x00, 0xFF, 0x51, 0x03,
    (microsecondsPerQuarter >> 16) & 0xFF,
    (microsecondsPerQuarter >> 8) & 0xFF,
    microsecondsPerQuarter & 0xFF
  ]);

  // Generate notes
  let currentPitch = 57; // A220 = MIDI note 57

  path.forEach(({ from, edge, to }) => {
    const [fn, tn] = normalizeRatio(from, Math.max(1, to));
    const cents = ratioToCents(fn, tn);
    const semitones = Math.round(cents / 100);
    currentPitch = Math.max(0, Math.min(127, currentPitch + semitones));

    const durationMult = edge === EdgeType.Z ? 0.5 : 1.0;
    const duration = Math.round(ticksPerQuarter * durationMult);
    const velocity = 64;

    // Note on
    events.push([0x00, 0x90, currentPitch, velocity]);

    // Note off
    events.push([...encodeVLQ(duration), 0x80, currentPitch, 0x40]);
  });

  // End of track
  events.push([0x00, 0xFF, 0x2F, 0x00]);

  // Flatten track data
  const trackData = events.flat();

  // Build MIDI file
  const header = [
    0x4D, 0x54, 0x68, 0x64, // "MThd"
    0x00, 0x00, 0x00, 0x06, // Header length
    0x00, 0x01,             // Format 1
    ...word16ToBytes(1),    // 1 track
    ...word16ToBytes(ticksPerQuarter)
  ];

  const track = [
    0x4D, 0x54, 0x72, 0x6B, // "MTrk"
    ...word32ToBytes(trackData.length),
    ...trackData
  ];

  return new Uint8Array([...header, ...track]);
};

// === NUMOGRAM VISUALIZATION ===

const NumogramVisualization = ({ currentNode, visitedNodes, pathEdges }) => {
  // Node positions in a circular arrangement (0-8, with 9 in center)
  const nodePositions = {
    1: { x: 100, y: 30 },
    2: { x: 155, y: 50 },
    3: { x: 180, y: 100 },
    4: { x: 170, y: 160 },
    5: { x: 130, y: 195 },
    6: { x: 70, y: 195 },
    7: { x: 30, y: 160 },
    8: { x: 20, y: 100 },
    9: { x: 45, y: 50 },
    0: { x: 100, y: 115 } // Center
  };

  return (
    <svg viewBox="0 0 200 230" className="w-48 h-56 mx-auto">
      {/* Draw edges */}
      {pathEdges.slice(-10).map((edge, i) => {
        const from = nodePositions[edge.from];
        const to = nodePositions[edge.to];
        const color = edge.edge === EdgeType.X ? '#c084fc' :
                      edge.edge === EdgeType.Y ? '#60a5fa' :
                      edge.edge === EdgeType.Z ? '#f97316' : '#34d399';
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={color}
            strokeWidth="1.5"
            opacity={0.3 + (i / 15)}
          />
        );
      })}

      {/* Draw nodes */}
      {Object.entries(nodePositions).map(([num, pos]) => {
        const isActive = parseInt(num) === currentNode;
        const wasVisited = visitedNodes.has(parseInt(num));
        return (
          <g key={num}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 14 : 10}
              fill={isActive ? '#a855f7' : wasVisited ? '#374151' : '#1f2937'}
              stroke={isActive ? '#c084fc' : wasVisited ? '#4b5563' : '#374151'}
              strokeWidth="2"
              className={isActive ? 'animate-pulse' : ''}
            />
            <text
              x={pos.x}
              y={pos.y + 4}
              textAnchor="middle"
              fill={isActive ? '#fff' : wasVisited ? '#9ca3af' : '#6b7280'}
              fontSize="11"
              fontFamily="monospace"
            >
              {num}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// === MAIN COMPONENT ===

const MusicPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  const [startNum, setStartNum] = useState(5);
  const [numSteps, setNumSteps] = useState(16);
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [visitedNodes, setVisitedNodes] = useState(new Set());

  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const stopPlayback = useCallback(() => {
    oscillatorsRef.current.forEach(osc => {
      try { osc.stop(); } catch (e) {}
    });
    oscillatorsRef.current = [];
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
    setCurrentStep(-1);
  }, []);

  const generateAndPlay = useCallback(async () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    const newPath = generatePathProbabilistic(startNum, numSteps);
    setPath(newPath);
    setVisitedNodes(new Set());
    setIsPlaying(true);
    setCurrentStep(0);

    const audioCtx = createAudioContext();
    audioCtxRef.current = audioCtx;

    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    let currentPitch = 0; // cents from base
    let time = audioCtx.currentTime + 0.1;
    const bpm = 120;
    const quarterDuration = 60 / bpm;

    newPath.forEach(({ from, edge, to }, i) => {
      const [fn, tn] = normalizeRatio(from, Math.max(1, to));
      const cents = ratioToCents(fn, tn);
      currentPitch += cents;

      const frequency = centsToFrequency(currentPitch);
      const durationMult = edge === EdgeType.Z ? 0.5 : 1.0;
      const duration = quarterDuration * durationMult;

      const osc = playNote(audioCtx, frequency, time, duration * 0.9, masterGain);
      oscillatorsRef.current.push(osc);

      // Update visualization
      const stepTime = time - audioCtx.currentTime;
      setTimeout(() => {
        setCurrentStep(i);
        setVisitedNodes(prev => new Set([...prev, from, to]));
      }, stepTime * 1000);

      time += duration;
    });

    // Stop after playback
    const totalDuration = time - audioCtx.currentTime;
    setTimeout(() => {
      setIsPlaying(false);
      setCurrentStep(-1);
    }, totalDuration * 1000 + 100);
  }, [isPlaying, startNum, numSteps, stopPlayback]);

  const downloadMidi = useCallback(() => {
    const newPath = path.length > 0 ? path : generatePathProbabilistic(startNum, numSteps);
    if (path.length === 0) setPath(newPath);

    const midiData = generateMidi(newPath);
    const blob = new Blob([midiData], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `numogram_${startNum}_${numSteps}_${Date.now()}.mid`;
    a.click();
    URL.revokeObjectURL(url);
  }, [path, startNum, numSteps]);

  const currentNode = currentStep >= 0 && path[currentStep]
    ? path[currentStep].to
    : startNum;

  return (
    <div className="min-h-screen font-share-tech" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="relative min-h-screen flex flex-col">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide text-gray-600 hover:text-gray-400">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-2xl font-share-tech mt-8 mb-2 text-gray-300">
              {tokiPonaMode ? 'kalama musi tan selo' : 'music from the Outside'}
            </h1>
            <p className="text-xs text-gray-600">
              {tokiPonaMode
                ? 'nanpa numokalam li pali e kalama'
                : 'Music generated by the numogram'}
            </p>
          </div>
        </header>

        <main className="flex-1 px-8 pb-16">
          <div className="max-w-2xl mx-auto">
            {/* Numogram Visualization */}
            <div className="mb-8">
              <NumogramVisualization
                currentNode={currentNode}
                visitedNodes={visitedNodes}
                pathEdges={path}
              />
            </div>

            {/* Controls */}
            <div className="bg-gray-900/50 rounded-lg p-6 mb-6 border border-gray-800">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    {tokiPonaMode ? 'nanpa open (0-9)' : 'starting number (0-9)'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="9"
                    value={startNum}
                    onChange={(e) => setStartNum(Math.max(0, Math.min(9, parseInt(e.target.value) || 0)))}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300 font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    {tokiPonaMode ? 'nanpa tawa' : 'number of steps'}
                  </label>
                  <input
                    type="number"
                    min="4"
                    max="64"
                    value={numSteps}
                    onChange={(e) => setNumSteps(Math.max(4, Math.min(64, parseInt(e.target.value) || 16)))}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300 font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={generateAndPlay}
                  className={`flex-1 py-3 px-4 rounded font-mono text-sm transition-colors ${
                    isPlaying
                      ? 'bg-red-900/50 text-red-400 border border-red-800 hover:bg-red-900/70'
                      : 'bg-purple-900/50 text-purple-400 border border-purple-800 hover:bg-purple-900/70'
                  }`}
                >
                  {isPlaying
                    ? (tokiPonaMode ? '[ pini ]' : '[ stop ]')
                    : (tokiPonaMode ? '[ kalama ]' : '[ generate & play ]')}
                </button>
                <button
                  onClick={downloadMidi}
                  className="py-3 px-4 rounded font-mono text-sm bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  {tokiPonaMode ? '[ kama MIDI ]' : '[ download MIDI ]'}
                </button>
              </div>
            </div>

            {/* Path Display */}
            {path.length > 0 && (
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                <div className="text-xs text-gray-500 mb-3">
                  {tokiPonaMode ? 'nasin:' : 'path:'}
                </div>
                <div className="flex flex-wrap gap-1 font-mono text-xs">
                  {path.slice(0, 32).map((step, i) => {
                    const edgeSymbol = step.edge === EdgeType.X ? '↔' :
                                       step.edge === EdgeType.Y ? '⊳' :
                                       step.edge === EdgeType.Z ? '∿' : '→';
                    const edgeColor = step.edge === EdgeType.X ? 'text-purple-400' :
                                      step.edge === EdgeType.Y ? 'text-blue-400' :
                                      step.edge === EdgeType.Z ? 'text-orange-400' : 'text-green-400';
                    const isActive = i === currentStep;
                    return (
                      <span
                        key={i}
                        className={`${isActive ? 'bg-purple-900/50 rounded px-1' : ''}`}
                      >
                        <span className={isActive ? 'text-white' : 'text-gray-500'}>{step.from}</span>
                        <span className={edgeColor}>{edgeSymbol}</span>
                      </span>
                    );
                  })}
                  {path.length > 0 && (
                    <span className="text-gray-500">{path[path.length - 1].to}</span>
                  )}
                  {path.length > 32 && (
                    <span className="text-gray-600">... +{path.length - 32}</span>
                  )}
                </div>

                {/* Legend */}
                <div className="mt-4 pt-3 border-t border-gray-800 flex flex-wrap gap-4 text-xs">
                  <span className="text-gray-600">
                    <span className="text-purple-400">↔</span> syzygy (50%)
                  </span>
                  <span className="text-gray-600">
                    <span className="text-blue-400">⊳</span> gate (30%)
                  </span>
                  <span className="text-gray-600">
                    <span className="text-orange-400">∿</span> current
                  </span>
                  <span className="text-gray-600">
                    <span className="text-green-400">→</span> prime (20%)
                  </span>
                </div>
              </div>
            )}

            {/* Hand-drawn numogram */}
            <div className="mt-8 mb-8">
              <img
                src="/numogram-handdrawn.jpg"
                alt="hand-drawn numogram diagram"
                className="w-full max-w-md mx-auto block rounded opacity-80"
                style={{ filter: 'grayscale(20%) contrast(1.1)' }}
              />
              <p className="text-xs text-gray-700 text-center mt-2 font-mono">
                numogram — hand-drawn
              </p>
            </div>

            {/* Info Section */}
            <div className="mt-8 text-xs text-gray-600 leading-relaxed">
              <p className="mb-2">
                {tokiPonaMode
                  ? 'Numokalam li nasin nanpa. ona li kama tan lipu pi jan Nik Lant. nanpa li tawa kepeken nasin mute: sisiki (nanpa tu li kama nanpa 9), lupa tawa (nanpa pi sitelen tu wan  li kama lili), nanpa wan taso (nanpa li tawa nanpa wan taso).'
                  : 'The numogram is a representation of the decimal system, "received" by the CCRU in the 90s. It is claimed to be a "lemurian" alternative to the "atlantean" Tree of life or tetractys (where the Lemurs are demon-like entities waging a time war - and the different regions of the numogram thus represent different modes of time. This is achieved by the summation to 9, as opposed to the atlantean centralisation of the number 1, and summation to 10). Numbers traverse edges according to these rules: syzygy (pairs summing to 9), currents (the difference of the numbers of a syzygy), gates (triangular reduction), and a later tentative addition suggested by Nick Land recently, a "prime gate" to the Nth prime number (this prevents the otherwise inevitable trapping in either the Warp or the Plex). Each step produces an interval, which is the ratio of [previous number]:[pointed-to number] (with correction for super-octave intervals, such that each step is within an octave of the previous one - but nothing prevents rising many octaves over several steps). Land claims the numogram is "a natural consequence of the decimal system, if summation to 9 is utilised", and thus sees its structure as revealing something significant about our world - which obviously is significantly marked by decimal numeracy, and more esoterically - has been transformed by the addition of 0 to European thinking in the renaissance. There is much to be said about the numogram, so there will likely soon be a page dedicated to it, and I am happy to talk about it on a call as well. The idea of this music generator is simply that it seems cool to create music from an occult representation of decimal numeracy, in the simplest way possible (musical intervals literally are just ratios of frequencies, with ratios of smaller numbers sounding more pleasant) '}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MusicPage;
