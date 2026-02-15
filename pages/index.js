import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

// Navigation items with positions closer to center, same font, toki pona translations
const navItems = [
  { href: '/writings', en: 'writings', tp: 'lipu sitelen', pos: 'top-[22%] left-[18%]', rotate: '-2deg' },
  { href: '/ramblings', en: 'ramblings', tp: 'toki nasa', pos: 'top-[32%] right-[22%]', rotate: '1deg' },
  { href: '/recipes', en: 'recipes', tp: 'nasin moku', pos: 'top-[38%] left-[12%]', rotate: '1deg' },
  { href: '/drugs', en: 'drugs', tp: 'moku nasa', pos: 'bottom-[38%] right-[16%]', rotate: '-1deg' },
  { href: '/books', en: 'books', tp: 'lipu', pos: 'top-[18%] right-[28%]', rotate: '2deg' },
  { href: '/music', en: 'music from the Outside', tp: 'kalama tan selo', pos: 'bottom-[22%] right-[28%]', rotate: '-1deg', smaller: true },
  { href: '/vibes', en: 'vibes', tp: 'pilin', pos: 'bottom-[30%] left-[22%]', rotate: '1deg' },
  { href: '/info', en: 'person info', tp: 'sona jan', pos: 'top-[12%] left-[38%]', rotate: '-1deg' },
  { href: '/ideologies', en: 'ideologies', tp: 'nasin lawa', pos: 'bottom-[14%] left-[14%]', rotate: '1deg' },
  { href: '/tonal-musings', en: 'tonal musings', tp: 'kalama', pos: 'bottom-[10%] right-[40%]', rotate: '-1deg' },
];

// Messages revealed on successive clicks
const revealMessages = [
  "Physarum polycephalum, an acellular slime mold or myxomycete is an amoeba with diverse cellular forms and broad geographic distribution.",
  "lou: name of the person who puts things here. Also known as Pavrati Jain",
  "help: pls help",
  <>Welcome to louphysarum.help, the digital slimemold of lou!<br />Click on various words to reveal various information if you want! This exists mostly as a <a href="https://logangraves.com/website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>search query</a>, so please have a really low bar for contacting to talk about anything.</>,
  "...",
  "@logaems on discord, @pavrati on X, @physarumpavrati on Substack, Pjain on LessWrong",
  "thanks for spending the past few seconds clicking on this word! highly appreciated.",
];

const HomePage = () => {
  const { tokiPonaMode, setTokiPonaMode } = useTheme() || { tokiPonaMode: false, setTokiPonaMode: () => {} };
  const [clickCount, setClickCount] = useState(0);

  const bgColor = tokiPonaMode ? '#0a120a' : '#2a2520';
  const textColor = tokiPonaMode ? '#a8b8a8' : '#d4c4a8';
  const mutedColor = tokiPonaMode ? '#506850' : '#8a7a68';

  const handleTitleClick = () => {
    if (clickCount < revealMessages.length) {
      setClickCount(clickCount + 1);
    }
  };

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
            onClick={handleTitleClick}
            className="text-4xl md:text-5xl font-mono cursor-pointer transition-all hover:tracking-wider"
            style={{ color: textColor }}
          >
            {tokiPonaMode ? 'Pisalum' : 'Physarum'}
          </h1>

          {/* Revealed text - cycles through messages */}
          <div
            className={`mt-6 max-w-sm mx-auto text-xs leading-relaxed transition-all duration-500 ${
              clickCount > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ color: mutedColor }}
          >
            {clickCount > 0 && revealMessages[clickCount - 1]}
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
