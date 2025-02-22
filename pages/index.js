import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Physarum-inspired pattern - ADD THIS SECTION */}
      <div className="fixed inset-0 z-0" style={{ opacity: 0.15 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="physarum-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Branching structures */}
            <path d="M100 0 C130 50, 70 100, 100 150 C130 200, 170 150, 200 200" 
                  fill="none" stroke="#786D5F" strokeWidth="3" opacity="0.6"/>
            <path d="M0 100 C50 130, 100 70, 150 100 C200 130, 150 170, 200 200" 
                  fill="none" stroke="#786D5F" strokeWidth="2" opacity="0.5"/>
            {/* Veins */}
            <path d="M50 0 C80 40, 20 80, 50 120" 
                  fill="none" stroke="#786D5F" strokeWidth="1" opacity="0.4"/>
            {/* Nodes */}
            <circle cx="100" cy="100" r="4" fill="#786D5F" opacity="0.5"/>
            <circle cx="50" cy="120" r="3" fill="#786D5F" opacity="0.4"/>
            <circle cx="150" cy="80" r="3" fill="#786D5F" opacity="0.4"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#physarum-pattern)"/>
        </svg>
      </div>

      {/* Keep your existing organic shapes */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-slow-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-slow-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <main className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center">
            <h1 className="text-7xl font-serif text-stone-800 mb-12 vintage-text">
              Physarum
            </h1>
            
            <div className="space-y-8 border-t border-b py-8 vintage-border">
              <Link href="/blog">
                <a className="block text-3xl text-stone-700 hover:text-stone-900 transition-colors italic">
                  Blog
                </a>
              </Link>
              
              <Link href="/ramblings">
                <a className="block text-3xl text-stone-700 hover:text-stone-900 transition-colors italic">
                  Ramblings
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
