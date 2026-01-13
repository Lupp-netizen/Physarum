import React from 'react';
import Link from 'next/link';

const RamblingsPage = () => {
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
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-stone-600 hover:text-stone-800">← Home</a>
            </Link>
            <h1 className="text-4xl font-light text-stone-800 mt-8 mb-4">Ramblings</h1>
            <p className="text-lg text-stone-600 font-light">
              uuuu
            </p>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-16">
            {/* Example rambling posts */}
            <article className="prose">
              <h2 className="text-2xl font-light text-stone-800 mb-4">
                Help help wubaduba dub dub i need help
              </h2>
              <div className="text-sm text-stone-500 mb-4">January 15, 2025</div>
              <p className="text-stone-700 leading-relaxed">
                gwuk
              </p>
              <div className="mt-4">
                <Link href="/ramblings/patterns-of-growth">
                  <a className="text-stone-600 hover:text-stone-800 transition-colors">
                    Read more →
                  </a>
                </Link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RamblingsPage;
