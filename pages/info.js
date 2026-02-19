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
            <section className="space-y-4">
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'nimi' : 'name'}</span>
                <span className="text-black">Lou / Pavrati Jain</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'ma' : 'location'}</span>
                <span className="text-black">Prague, Czech Republic</span>
              </div>
            </section>

            <hr className="border-gray-200" />

            <section>
              <h2 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                {tokiPonaMode ? 'toki tawa mi' : 'find me'}
              </h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400 inline-block w-24">X / Twitter</span>
                  <a
                    href="https://x.com/pavrati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black underline underline-offset-2"
                  >
                    @pavrati
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 inline-block w-24">Substack</span>
                  <a
                    href="https://substack.com/@physarumpavrati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black underline underline-offset-2"
                  >
                    @physarumpavrati
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 inline-block w-24">LessWrong</span>
                  <a
                    href="https://www.lesswrong.com/users/pavrati-jain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black underline underline-offset-2"
                  >
                    pavrati-jain
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 inline-block w-24">Discord</span>
                  <span className="text-gray-700">@logaems</span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InfoPage;
