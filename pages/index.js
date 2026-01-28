import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen theme-home font-mono">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/physarum2.png')`,
          opacity: '0.08'
        }}
      />

      {/* Numogram - positioned in corner */}
      <div className="fixed bottom-4 right-4 w-40 h-auto numogram">
        <img
          src="/numogram.png"
          alt="Numogram"
          className="w-full h-auto invert opacity-20 hover:opacity-40 transition-opacity"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <main className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-mono text-stone-800 mb-16 tracking-tight">
              Physarum
            </h1>

            {/* Polyhedron-style navigation - triangular arrangement */}
            <nav className="relative w-64 h-56 mx-auto">
              {/* Top vertex */}
              <Link href="/writings">
                <a className="nav-link absolute top-0 left-1/2 -translate-x-1/2 text-sm text-stone-600 hover:text-stone-900 transition-colors">
                  writings
                </a>
              </Link>

              {/* Bottom left vertex */}
              <Link href="/ramblings">
                <a className="nav-link absolute bottom-8 left-4 text-sm text-stone-600 hover:text-stone-900 transition-colors">
                  ramblings
                </a>
              </Link>

              {/* Bottom right vertex */}
              <Link href="/recipes">
                <a className="nav-link absolute bottom-8 right-4 text-sm text-stone-600 hover:text-stone-900 transition-colors">
                  recipes
                </a>
              </Link>

              {/* Connecting lines - subtle polyhedron effect */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 224">
                <line x1="128" y1="20" x2="40" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-stone-300" />
                <line x1="128" y1="20" x2="216" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-stone-300" />
                <line x1="40" y1="180" x2="216" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-stone-300" />
                {/* Small circles at vertices */}
                <circle cx="128" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-400" />
                <circle cx="40" cy="180" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-400" />
                <circle cx="216" cy="180" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-400" />
              </svg>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
