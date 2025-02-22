import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Organic shapes background */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
             style={{animationDuration: '10s'}} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"
             style={{animationDuration: '15s'}} />
      </div>

      <div className="relative">
        <main className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center">
            <h1 className="text-6xl font-light text-stone-800 mb-8">Physarum</h1>
            
            <div className="space-y-6">
              <Link href="/blog">
                <a className="block text-2xl text-stone-600 hover:text-stone-800 transition-colors">
                  Blog
                </a>
              </Link>
              
              <Link href="/ramblings">
                <a className="block text-2xl text-stone-600 hover:text-stone-800 transition-colors">
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
