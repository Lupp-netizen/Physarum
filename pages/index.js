import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Modified organic shapes background */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-slow-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-slow-pulse" />
      </div>

      <div className="relative">
        <main className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center">
            <h1 className="text-7xl font-serif text-stone-800 mb-12 vintage-text" style={{ letterSpacing: '0.05em' }}>
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
