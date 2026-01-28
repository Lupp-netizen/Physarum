import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const MusicPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

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
            <h1 className="text-2xl font-share-tech mt-8 mb-4 text-gray-300">
              {tokiPonaMode ? 'kalama tan selo' : 'music from the Outside'}
            </h1>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-8 pb-16">
          <div className="text-center">
            <div className="text-gray-600 text-sm font-mono">
              {tokiPonaMode ? '[ kama ]' : '[ coming soon ]'}
            </div>
            <div className="mt-8 text-gray-700 text-xs max-w-xs mx-auto leading-relaxed">
              {tokiPonaMode
                ? 'kalama li kama tan ma ante...'
                : 'sounds transmitted from elsewhere...'}
            </div>

            {/* Decorative elements */}
            <div className="mt-16 flex justify-center gap-8">
              <div className="w-1 h-1 bg-gray-700 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MusicPage;
