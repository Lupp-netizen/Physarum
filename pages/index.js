import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

// Navigation items with positions closer to center, same font, toki pona translations
const navItems = [
  { href: '/writings', en: 'writings', tp: 'lipu sitelen', pos: 'top-[25%] left-[22%]', rotate: '-2deg' },
  { href: '/ramblings', en: 'ramblings', tp: 'toki nasa', pos: 'top-[28%] right-[24%]', rotate: '1deg' },
  { href: '/recipes', en: 'recipes', tp: 'nasin moku', pos: 'bottom-[38%] left-[18%]', rotate: '1deg' },
  { href: '/drugs', en: 'drugs', tp: 'moku nasa', pos: 'top-[42%] right-[20%]', rotate: '-1deg' },
  { href: '/books', en: 'books', tp: 'lipu', pos: 'bottom-[32%] right-[22%]', rotate: '2deg' },
  { href: '/music', en: 'music from the Outside', tp: 'kalama tan selo', pos: 'top-[58%] left-[15%]', rotate: '-1deg', smaller: true },
  { href: '/vibes', en: 'vibes', tp: 'pilin', pos: 'bottom-[25%] left-[30%]', rotate: '1deg' },
  { href: '/info', en: 'person info', tp: 'sona jan', pos: 'top-[18%] left-[42%]', rotate: '-1deg' },
  { href: '/ideologies', en: 'ideologies', tp: 'nasin lawa', pos: 'bottom-[20%] right-[18%]', rotate: '1deg' },
];

const HomePage = () => {
  const { tokiPonaMode, setTokiPonaMode } = useTheme() || { tokiPonaMode: false, setTokiPonaMode: () => {} };
  const [titleRevealed, setTitleRevealed] = useState(false);

  const bgColor = tokiPonaMode ? '#0a120a' : '#2a2520';
  const textColor = tokiPonaMode ? '#a8b8a8' : '#d4c4a8';
  const mutedColor = tokiPonaMode ? '#506850' : '#8a7a68';

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
            No particular significance.
          </div>
        </div>

        {/* Scattered navigation links - all same font */}
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <a
              className={`absolute font-mono ${item.pos} transition-all hover:scale-110 ${item.smaller ? 'text-[10px]' : 'text-xs'}`}
              style={{
                color: mutedColor,
                transform: `rotate(${item.rotate})`,
              }}
            >
              {tokiPonaMode ? item.tp : item.en}
            </a>
          </Link>
        ))}

        {/* Language toggle - styled like nav links */}
        <button
          onClick={() => setTokiPonaMode(!tokiPonaMode)}
          className="absolute font-mono text-xs top-[15%] right-[12%] transition-all hover:scale-110"
          style={{
            color: mutedColor,
            transform: 'rotate(2deg)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          toki
        </button>

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
