import React from 'react';
import Link from 'next/link';

// CCRU-style Numogram SVG component
const Numogram = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    {/* Outer decagon */}
    <polygon
      points="100,10 161,35 190,90 175,155 125,190 75,190 25,155 10,90 39,35 100,10"
      strokeWidth="0.8"
    />
    {/* Inner connections - the time-sorcery paths */}
    <line x1="100" y1="10" x2="100" y2="100" />
    <line x1="161" y1="35" x2="100" y2="100" />
    <line x1="190" y1="90" x2="100" y2="100" />
    <line x1="175" y1="155" x2="100" y2="100" />
    <line x1="125" y1="190" x2="100" y2="100" />
    <line x1="75" y1="190" x2="100" y2="100" />
    <line x1="25" y1="155" x2="100" y2="100" />
    <line x1="10" y1="90" x2="100" y2="100" />
    <line x1="39" y1="35" x2="100" y2="100" />
    {/* Zone connections - syzygies */}
    <line x1="100" y1="10" x2="175" y2="155" strokeDasharray="2,2" />
    <line x1="161" y1="35" x2="25" y2="155" strokeDasharray="2,2" />
    <line x1="190" y1="90" x2="75" y2="190" strokeDasharray="2,2" />
    <line x1="39" y1="35" x2="125" y2="190" strokeDasharray="2,2" />
    <line x1="10" y1="90" x2="100" y2="100" strokeDasharray="2,2" />
    {/* Zone numbers */}
    <text x="100" y="8" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">0</text>
    <text x="168" y="35" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">1</text>
    <text x="198" y="93" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">2</text>
    <text x="182" y="162" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">3</text>
    <text x="130" y="200" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">4</text>
    <text x="70" y="200" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">5</text>
    <text x="18" y="162" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">6</text>
    <text x="2" y="93" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">7</text>
    <text x="32" y="35" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">8</text>
    <text x="100" y="105" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">9</text>
    {/* Inner pentagon - the gates */}
    <polygon
      points="100,45 138,75 125,120 75,120 62,75"
      strokeWidth="0.5"
      strokeDasharray="3,2"
    />
  </svg>
);

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
      <div className="fixed bottom-8 right-8 w-48 h-48 text-stone-400 numogram">
        <Numogram className="w-full h-full" />
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
