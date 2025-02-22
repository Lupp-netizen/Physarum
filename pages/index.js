import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/physarum2.png')`,
          opacity: '0.15'  // adjust this value between 0 and 1 to make it more/less visible
        }}
      />

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
