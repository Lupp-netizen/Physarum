import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const navItems = [
  { href: '/writings', en: 'writings', tp: 'lipu sitelen', pos: 'top-[22%] left-[18%]', rotate: '-2deg' },
  { href: '/ramblings', en: 'ramblings', tp: 'toki nasa', pos: 'top-[32%] right-[22%]', rotate: '1deg' },
  { href: '/proto-thoughts', en: 'proto-thoughts', tp: 'open pilin', pos: 'top-[42%] left-[16%]', rotate: '-1deg', smaller: true },
  { href: '/recipes', en: 'nutrition flavor nourishment', tp: 'moku', pos: 'top-[38%] left-[8%]', rotate: '1deg' },
  { href: '/drugs', en: 'drugs', tp: 'moku nasa', pos: 'bottom-[38%] right-[16%]', rotate: '-1deg' },
  { href: '/books', en: 'books', tp: 'lipu', pos: 'top-[18%] right-[28%]', rotate: '2deg' },
  { href: '/music', en: 'music from the Outside', tp: 'kalama tan selo', pos: 'bottom-[22%] right-[28%]', rotate: '-1deg', smaller: true },
  { href: '/vibes', en: 'vibes', tp: 'pilin', pos: 'bottom-[30%] left-[22%]', rotate: '1deg' },
  { href: '/info', en: 'person info', tp: 'sona jan', pos: 'top-[12%] left-[38%]', rotate: '-1deg' },
  { href: '/ideologies', en: 'ideologies', tp: 'nasin lawa', pos: 'bottom-[14%] left-[14%]', rotate: '1deg' },
  { href: '/tonal-musings', en: 'tonal musings', tp: 'kalama', pos: 'bottom-[10%] right-[40%]', rotate: '-1deg' },
  { href: '/links', en: 'links', tp: 'nasin', pos: 'top-[28%] left-[28%]', rotate: '2deg' },
];

const colorSchemes = [
  { bg: '#2a2520', text: '#d4c4a8', muted: '#8a7a68' },
  { bg: '#12182a', text: '#a8c4d4', muted: '#4a6878' },
  { bg: '#0d1a0d', text: '#a8c4a0', muted: '#4a684a' },
  { bg: '#1a0d2a', text: '#c4a8d4', muted: '#684a78' },
  { bg: '#200d0d', text: '#d4b0a8', muted: '#785040' },
  { bg: '#1a180a', text: '#d4d0a0', muted: '#7a7040' },
];

const HomePage = () => {
  const { tokiPonaMode, setTokiPonaMode } = useTheme() || { tokiPonaMode: false, setTokiPonaMode: () => {} };
  const [clickCount, setClickCount] = useState(0);
  const [colorSchemeIndex, setColorSchemeIndex] = useState(0);
  const [plainMode, setPlainMode] = useState(false);

  const scheme = colorSchemes[colorSchemeIndex] || colorSchemes[0];
  const bgColor = tokiPonaMode ? '#0a120a' : scheme.bg;
  const textColor = tokiPonaMode ? '#a8b8a8' : scheme.text;
  const mutedColor = tokiPonaMode ? '#506850' : scheme.muted;

  const linkStyle = { color: 'inherit', textDecoration: 'underline' };

  // Messages revealed on successive clicks of the title
  const revealMessages = [
    "Physarum polycephalum, an acellular slime mold or myxomycete is an amoeba with diverse cellular forms and broad geographic distribution.",
    "lou: name of the person who puts things here. Also known as Pavrati Jain",
    "help: pls help",
    <>
      Welcome to louphysarum.help, the digital slimemold of lou!{' '}
      Click on various words to reveal various information if you want! This exists mostly as a{' '}
      <a href="https://logangraves.com/website" target="_blank" rel="noopener noreferrer" style={linkStyle}>search query</a>,{' '}
      so please have a really low bar for contacting to talk about anything.
    </>,
    <>
     so far, most of this website is edited either by my bot Pantalaimon or claude code.{' '}
      to see the plain version, click on{' '}
      <button onClick={(e) => { e.stopPropagation(); setPlainMode(true); }} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}>[plain]</button>.{' '}
      to leave anonymous feedback, click{' '}
      <a href="https://www.admonymous.co/lou-pjain" target="_blank" rel="noopener noreferrer" style={linkStyle}>[critique]</a>.{' '}
      to give live feedback, click{' '}
      <a href="https://calendly.com/loulive" target="_blank" rel="noopener noreferrer" style={linkStyle}>[live feedback - lou]</a>.
    </>,
    "...",
    <>
      elsewhere:{' '}
      <a href="https://x.com/pavrati" target="_blank" rel="noopener noreferrer" style={linkStyle}>X / Twitter</a>
      {', '}
      <a href="https://substack.com/@physarumpavrati" target="_blank" rel="noopener noreferrer" style={linkStyle}>Substack</a>
      {', '}
      <a href="https://www.lesswrong.com/users/pavrati-jain" target="_blank" rel="noopener noreferrer" style={linkStyle}>LessWrong</a>
      {', @logaems on Discord'}
    </>,
    "thanks for spending the past few seconds clicking on this word!",
  ];

  const handleTitleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount > revealMessages.length) {
      const extraClicks = newCount - revealMessages.length;
      if (extraClicks % 2 === 0) {
        setColorSchemeIndex(0);
      } else {
        const nextScheme = Math.ceil(extraClicks / 2);
        setColorSchemeIndex(nextScheme % colorSchemes.length || 1);
      }
    }
  };

  const displayedMessageIndex = Math.min(clickCount, revealMessages.length) - 1;

  // ── PLAIN MODE ──────────────────────────────────────────────────────────────
  if (plainMode) {
    return (
      <div style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: 'Georgia, serif', maxWidth: '640px', margin: '0 auto', padding: '48px 24px', lineHeight: '1.7' }}>
        <div style={{ marginBottom: '8px' }}>
          <button onClick={() => setPlainMode(false)} style={{ fontSize: '12px', color: '#666', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'monospace' }}>
            ← back
          </button>
        </div>

        <h1 style={{ fontSize: '28px', fontWeight: 'normal', marginBottom: '4px' }}>Physarum</h1>
        
        <img src="/Snímek%20obrazovky%202026-02-27%20215519.png" alt="" className="w-full max-w-md mx-auto mb-6 rounded-lg" style={{ maxWidth: '100%', height: 'auto' }} />
        
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '40px' }}>
          lou p/p jain - prague
        </p>

        <p style={{ fontSize: '14px', marginBottom: '32px' }}>
          edited mostly by claudedaimon pantalaimon. a lot of the content are just old obsidian files. would very much like to talk if you want to talk with me.
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: 'normal', borderBottom: '1px solid #ccc', paddingBottom: '4px', marginBottom: '16px' }}>pages</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
          {navItems.map(item => (
            <li key={item.href} style={{ marginBottom: '8px' }}>
              <a href={item.href} style={{ color: '#000', fontSize: '14px' }}>{tokiPonaMode ? item.tp : item.en}</a>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: '16px', fontWeight: 'normal', borderBottom: '1px solid #ccc', paddingBottom: '4px', marginBottom: '16px' }}>elsewhere</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
          <li style={{ marginBottom: '8px' }}><a href="https://x.com/pavrati" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '14px' }}>X / Twitter — @pavrati</a></li>
          <li style={{ marginBottom: '8px' }}><a href="https://substack.com/@physarumpavrati" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '14px' }}>Substack</a></li>
          <li style={{ marginBottom: '8px' }}><a href="https://www.lesswrong.com/users/pavrati-jain" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '14px' }}>LessWrong</a></li>
          <li style={{ marginBottom: '8px' }}><span style={{ fontSize: '14px' }}>Discord — @logaems</span></li>
        </ul>

        <h2 style={{ fontSize: '16px', fontWeight: 'normal', borderBottom: '1px solid #ccc', paddingBottom: '4px', marginBottom: '16px' }}>contact & feedback</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
          <li style={{ marginBottom: '8px' }}><a href="https://www.admonymous.co/lou-pjain" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '14px' }}>anonymous feedback (admonymous)</a></li>
          <li style={{ marginBottom: '8px' }}><a href="https://calendly.com/loulive" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontSize: '14px' }}>book a call (calendly)</a></li>
        </ul>

        <p style={{ fontSize: '12px', color: '#999', marginTop: '48px' }}>
          louphysarum.help
        </p>
      </div>
    );
  }

  // ── NORMAL MODE ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen font-mono relative overflow-hidden" style={{ backgroundColor: bgColor, transition: 'background-color 0.8s ease' }}>
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('/physarum2.png')`,
          opacity: tokiPonaMode ? '0.03' : '0.06',
          filter: tokiPonaMode ? 'invert(1)' : 'none',
        }}
      />

      {/* Numogram corner */}
      <div className="fixed bottom-4 right-4 w-32 h-auto pointer-events-none">
        <img
          src="/numogram.png"
          alt="Numogram"
          className="w-full h-auto transition-opacity"
          style={{ opacity: tokiPonaMode ? 0.2 : 0.15, filter: tokiPonaMode ? 'none' : 'invert(1)' }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Central title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            onClick={handleTitleClick}
            className="text-4xl md:text-5xl font-mono cursor-pointer transition-all hover:tracking-wider"
            style={{ color: textColor, transition: 'color 0.8s ease' }}
          >
            {tokiPonaMode ? 'Pisalum' : 'Physarum'}
          </h1>

          <div
            className={`mt-6 max-w-sm mx-auto text-xs leading-relaxed transition-all duration-500 ${
              clickCount > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ color: mutedColor, transition: 'color 0.8s ease' }}
          >
            {clickCount > 0 && revealMessages[displayedMessageIndex]}
          </div>
        </div>

        {/* Scattered nav */}
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <a
              className={`absolute font-mono ${item.pos} transition-all hover:scale-110 ${item.smaller ? 'text-[10px]' : 'text-xs'}`}
              style={{ color: mutedColor, transform: `rotate(${item.rotate})`, transition: 'color 0.8s ease' }}
            >
              {tokiPonaMode ? item.tp : item.en}
            </a>
          </Link>
        ))}

        {/* Toki pona toggle */}
        <button
          onClick={() => setTokiPonaMode(!tokiPonaMode)}
          className="absolute font-mono text-xs top-[15%] right-[12%] transition-all hover:scale-110"
          style={{ color: mutedColor, transform: 'rotate(2deg)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.8s ease' }}
        >
          toki
        </button>

        {/* Plain mode button */}
        <button
          onClick={() => setPlainMode(true)}
          className="absolute font-mono text-[10px] bottom-[18%] left-[38%] transition-all hover:scale-110"
          style={{ color: mutedColor, transform: 'rotate(-1deg)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.8s ease', opacity: 0.6 }}
        >
          plain
        </button>

        {/* Critique link */}
        <a
          href="https://www.admonymous.co/lou-pjain"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-mono text-[10px] top-[48%] right-[12%] transition-all hover:scale-110"
          style={{ color: mutedColor, transform: 'rotate(1deg)', transition: 'color 0.8s ease', opacity: 0.6 }}
        >
          critique
        </a>

        {/* Live feedback link */}
        <a
          href="https://calendly.com/loulive"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute font-mono text-[10px] top-[8%] left-[20%] transition-all hover:scale-110"
          style={{ color: mutedColor, transform: 'rotate(-2deg)', transition: 'color 0.8s ease', opacity: 0.6, whiteSpace: 'nowrap' }}
        >
          live feedback - lou
        </a>

        {/* Decorative dots */}
        <div className="fixed top-[30%] left-[30%] w-1 h-1 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.3 }} />
        <div className="fixed top-[60%] right-[25%] w-0.5 h-0.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.4 }} />
        <div className="fixed bottom-[40%] left-[60%] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.2 }} />
        <div className="fixed top-[45%] right-[40%] w-0.5 h-0.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.5 }} />
      </div>
    </div>
  );
};

export default HomePage;
