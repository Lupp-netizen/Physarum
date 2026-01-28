import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

// Navigation items with their positions, fonts, and toki pona translations
const navItems = [
  { href: '/writings', en: 'writings', tp: 'lipu sitelen', font: 'font-mono', pos: 'top-[15%] left-[12%]', rotate: '-3deg' },
  { href: '/ramblings', en: 'ramblings', tp: 'toki nasa', font: 'font-vt323 text-lg', pos: 'top-[22%] right-[18%]', rotate: '2deg' },
  { href: '/recipes', en: 'recipes', tp: 'nasin moku', font: 'font-special-elite', pos: 'bottom-[35%] left-[8%]', rotate: '1deg' },
  { href: '/drugs', en: 'drugs', tp: 'kili nasa', font: 'font-courier italic', pos: 'top-[38%] right-[10%]', rotate: '-2deg' },
  { href: '/books', en: 'books', tp: 'lipu', font: 'font-cutive', pos: 'bottom-[28%] right-[15%]', rotate: '3deg' },
  { href: '/music', en: 'music from the Outside', tp: 'kalama tan selo', font: 'font-share-tech', pos: 'top-[55%] left-[5%]', rotate: '-1deg', smaller: true },
  { href: '/vibes', en: 'vibes', tp: 'pilin', font: 'font-xanh italic', pos: 'bottom-[18%] left-[25%]', rotate: '2deg' },
  { href: '/info', en: 'person info', tp: 'sona jan', font: 'font-mono', pos: 'top-[12%] left-[45%]', rotate: '-1deg' },
  { href: '/ideologies', en: 'ideologies', tp: 'nasin lawa', font: 'font-vt323 text-lg', pos: 'bottom-[12%] right-[8%]', rotate: '1deg' },
];

const HomePage = () => {
  const { tokiPonaMode, setTokiPonaMode } = useTheme() || { tokiPonaMode: false, setTokiPonaMode: () => {} };
  const [titleRevealed, setTitleRevealed] = useState(false);

  const bgColor = tokiPonaMode ? '#0a0a0a' : '#f5f5f0';
  const textColor = tokiPonaMode ? '#e0e0e0' : '#1a1a1a';
  const mutedColor = tokiPonaMode ? '#606060' : '#707070';

  return (
    <div className="min-h-screen font-mono relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('/physarum2.png')`,
          opacity: tokiPonaMode ? '0.03' : '0.06',
          filter: tokiPonaMode ? 'invert(1)' : 'none'
        }}
      />

      {/* Numogram - positioned in corner */}
      <div className="fixed bottom-4 right-4 w-32 h-auto pointer-events-none">
        <img
          src="/numogram.png"
          alt="Numogram"
          className="w-full h-auto transition-opacity"
          style={{
            opacity: tokiPonaMode ? 0.2 : 0.15,
            filter: tokiPonaMode ? 'none' : 'invert(1)'
          }}
        />
      </div>

      {/* Theme/Language toggle button */}
      <button
        onClick={() => setTokiPonaMode(!tokiPonaMode)}
        className="fixed top-4 right-4 z-50 px-3 py-1 text-xs font-mono border transition-all hover:scale-105"
        style={{
          borderColor: mutedColor,
          color: mutedColor,
          backgroundColor: 'transparent'
        }}
      >
        {tokiPonaMode ? 'EN' : 'TP'}
      </button>

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Central title - clickable */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            onClick={() => setTitleRevealed(!titleRevealed)}
            className="text-4xl md:text-5xl font-mono cursor-pointer transition-all hover:tracking-wider"
            style={{ color: textColor }}
          >
            {tokiPonaMode ? 'Pisalum' : 'Physarum'}
          </h1>

          {/* Revealed text */}
          <div
            className={`mt-6 max-w-xs mx-auto text-xs leading-relaxed transition-all duration-500 ${
              titleRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ color: mutedColor }}
          >
            {tokiPonaMode
              ? 'mi kama tan ma ante. mi awen lon ni. mi tawa.'
              : 'a slime mold learning to think. somewhere between organism and algorithm.'}
          </div>
        </div>

        {/* Scattered navigation links */}
        {navItems.map((item, i) => (
          <Link href={item.href} key={item.href}>
            <a
              className={`absolute ${item.font} ${item.pos} transition-all hover:scale-110 ${item.smaller ? 'text-[10px]' : 'text-xs'}`}
              style={{
                color: mutedColor,
                transform: `rotate(${item.rotate})`,
              }}
            >
              {tokiPonaMode ? item.tp : item.en}
            </a>
          </Link>
        ))}

        {/* Decorative scattered dots */}
        <div className="fixed top-[30%] left-[30%] w-1 h-1 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.3 }} />
        <div className="fixed top-[60%] right-[25%] w-0.5 h-0.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.4 }} />
        <div className="fixed bottom-[40%] left-[60%] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.2 }} />
        <div className="fixed top-[45%] right-[40%] w-0.5 h-0.5 rounded-full" style={{ backgroundColor: mutedColor, opacity: 0.5 }} />
      </div>
    </div>
  );
};

export default HomePage;
