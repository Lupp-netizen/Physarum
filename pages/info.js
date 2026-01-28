import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const InfoPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#fefefe' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide text-gray-400 hover:text-gray-600">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-2xl font-mono mt-8 mb-8 text-black">
              {tokiPonaMode ? 'sona jan' : 'person info'}
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-xl mx-auto space-y-8">
            {/* Basic info section */}
            <section className="space-y-4">
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-20">{tokiPonaMode ? 'nimi' : 'name'}</span>
                <span className="text-black">Aaaa Aaaa</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-20">{tokiPonaMode ? 'ma' : 'location'}</span>
                <span className="text-black">Aaaa, Aaaa</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-20">{tokiPonaMode ? 'pali' : 'doing'}</span>
                <span className="text-black">Aaaa aaaa aaaa</span>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* About section */}
            <section>
              <h2 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                {tokiPonaMode ? 'toki' : 'about'}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa.
              </p>
            </section>

            <hr className="border-gray-200" />

            {/* Contact section */}
            <section>
              <h2 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                {tokiPonaMode ? 'toki tawa mi' : 'contact'}
              </h2>
              <div className="space-y-2 text-sm">
                <div className="text-gray-600">aaaa@aaaa.aaa</div>
                <div className="text-gray-600">@aaaa</div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InfoPage;
