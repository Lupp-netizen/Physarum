import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const InfoPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  const bgColor = '#fefefe';
  const mutedColor = '#888';

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: bgColor }}>
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
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'nimi' : 'name'}</span>
                <span className="text-black">Lou Pfau &mdash; also Pavrati Jain, also @pavrati</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'ma' : 'location'}</span>
                <span className="text-black">Prague, Czech Republic</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'pali' : 'doing'}</span>
                <span className="text-black">
                  AI alignment research, high school student (maturita), Go player, toki pona enthusiast,
                  algorithmic music with Strudel, occasional blogger
                </span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400 w-24 shrink-0">{tokiPonaMode ? 'sona' : 'into'}</span>
                <span className="text-black">
                  decision theory, agent foundations, mechanistic interpretability, Deleuze &amp; Guattari,
                  Nick Land, Ziz, numograms, chaos magick, functional programming (Haskell, SML),
                  cyborgism, cognitive enhancement, the LessWrong ecosystem
                </span>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* About section */}
            <section>
              <h2 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                {tokiPonaMode ? 'toki' : 'about'}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                I&apos;m Lou. I live somewhere between the rationalist/EA world and the stranger edges
                of philosophy &mdash; postrationalism, accelerationism, esoteric decision theory.
                I think a lot about how minds work, how to make them better, and what it means to
                unfold fully into yourself.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                This site is a kind of slime mold: sprawling, distributed, no central authority.
                It exists mostly so I have somewhere to put things. If anything here resonates,
                I have a very low bar for being contacted about it.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                I published &ldquo;Why Rationalists Get Depressed&rdquo; on LessWrong. I write about
                alignment, phenomenology, and whatever I&apos;m obsessed with. I play Go seriously.
                I&apos;m trans.
              </p>
            </section>

            <hr className="border-gray-200" />

            {/* Find me section */}
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
                <div>
                  <span className="text-gray-400 inline-block w-24">email</span>
                  <a
                    href="mailto:lou.pfau@email.cz"
                    className="text-gray-700 hover:text-black underline underline-offset-2"
                  >
                    lou.pfau@email.cz
                  </a>
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
