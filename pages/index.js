import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Keep the organic shapes background */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
             style={{animationDuration: '10s'}} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"
             style={{animationDuration: '15s'}} />
      </div>

      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-light text-stone-800 mb-4">Physarum</h1>
            <p className="text-lg text-stone-600 font-light">
              Your main description here
            </p>
          </div>
        </header>

        <nav className="px-8 pb-16">
          <div className="max-w-2xl mx-auto">
            <Link href="/blog">
              <a className="block text-xl text-stone-600 hover:text-stone-800 mb-4 transition-colors">
                Blog →
              </a>
            </Link>
            <Link href="/old-ramblings">
              <a className="block text-xl text-stone-600 hover:text-stone-800 transition-colors">
                Old Ramblings →
              </a>
            </Link>
          </div>
        </nav>

        {/* Add any other homepage content here */}
      </div>
    </div>
  );
};

export default HomePage;
