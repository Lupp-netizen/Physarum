import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const VibesPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  // Scattered text fragments and their positions
  const fragments = [
    { text: 'aaaa aaaa aaaa', pos: 'top-[20%] left-[15%]', rotate: '-5deg', font: 'font-mono', size: 'text-xs' },
    { text: 'AAAA', pos: 'top-[35%] right-[20%]', rotate: '3deg', font: 'font-vt323', size: 'text-2xl' },
    { text: 'aaaa aaaa', pos: 'bottom-[40%] left-[10%]', rotate: '2deg', font: 'font-special-elite', size: 'text-sm' },
    { text: 'aaaa?', pos: 'top-[50%] left-[45%]', rotate: '-2deg', font: 'font-courier italic', size: 'text-xs' },
    { text: 'AAAA AAAA AAAA', pos: 'bottom-[25%] right-[15%]', rotate: '-3deg', font: 'font-mono', size: 'text-[10px]' },
    { text: 'aaaa...', pos: 'top-[15%] right-[35%]', rotate: '1deg', font: 'font-xanh', size: 'text-sm' },
    { text: 'aaaa aaaa aaaa aaaa', pos: 'bottom-[60%] left-[55%]', rotate: '4deg', font: 'font-cutive', size: 'text-xs' },
    { text: '(aaaa)', pos: 'bottom-[15%] left-[30%]', rotate: '-1deg', font: 'font-share-tech', size: 'text-xs' },
  ];

  // Placeholder image positions
  const imagePlaceholders = [
    { pos: 'top-[25%] right-[8%]', size: 'w-24 h-16' },
    { pos: 'bottom-[35%] left-[25%]', size: 'w-16 h-16' },
    { pos: 'top-[60%] right-[30%]', size: 'w-20 h-12' },
  ];

  return (
    <div className="min-h-screen font-mono relative overflow-hidden" style={{ backgroundColor: '#f0f0e8' }}>
      <header className="relative z-20 pt-8 px-8">
        <Link href="/">
          <a className="text-xs tracking-wide text-gray-400 hover:text-gray-600">
            &larr; {tokiPonaMode ? 'tomo' : 'home'}
          </a>
        </Link>
      </header>

      {/* Page title - also scattered */}
      <h1
        className="absolute top-[8%] left-[50%] -translate-x-1/2 text-2xl font-xanh italic text-gray-700"
        style={{ transform: 'translateX(-50%) rotate(-1deg)' }}
      >
        {tokiPonaMode ? 'pilin' : 'vibes'}
      </h1>

      {/* Scattered text fragments */}
      {fragments.map((frag, i) => (
        <div
          key={i}
          className={`absolute ${frag.pos} ${frag.font} ${frag.size} text-gray-600`}
          style={{ transform: `rotate(${frag.rotate})` }}
        >
          {frag.text}
        </div>
      ))}

      {/* Image placeholders */}
      {imagePlaceholders.map((img, i) => (
        <div
          key={`img-${i}`}
          className={`absolute ${img.pos} ${img.size} border border-dashed border-gray-300 flex items-center justify-center`}
        >
          <span className="text-[8px] text-gray-400">[img]</span>
        </div>
      ))}

      {/* Decorative scattered dots */}
      <div className="absolute top-[40%] left-[20%] w-2 h-2 rounded-full bg-gray-300" />
      <div className="absolute top-[70%] right-[40%] w-1 h-1 rounded-full bg-gray-400" />
      <div className="absolute bottom-[20%] right-[55%] w-1.5 h-1.5 rounded-full bg-gray-300" />
    </div>
  );
};

export default VibesPage;
