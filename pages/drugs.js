import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const DrugsPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  const posts = [
    {
      id: 1,
      title: "Reducing MDMA neurotoxicity",
      date: "2024",
      excerpt: "MDMA is neurotoxic primarily through serotonin syndrome-adjacent mechanisms, oxidative stress, and hyperthermia. This post surveys harm reduction approaches: 5-HTP timing, antioxidants, temperature control, and related pharmacology. Originally published on LessWrong.",
      slug: "reducing-mdma-neurotoxicity",
      crosspost: "https://www.lesswrong.com/posts/f6j72RCcfAa7bRq4o/reducing-mdma-neurotoxicity"
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#0a0a0a', color: '#d1d5db' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide text-gray-600 hover:text-gray-400">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-2 text-gray-300">
              {tokiPonaMode ? 'kili nasa' : 'drugs'}
            </h1>
            <p className="text-xs text-gray-600 mb-8">pharmacology, harm reduction, psychedelics, nootropics</p>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-800 pb-8">
                <h2 className="text-lg font-mono mb-2 text-gray-300">
                  {post.title}
                </h2>
                <div className="text-xs mb-4 text-gray-600">
                  {post.date}
                  {post.crosspost && (
                    <span className="ml-3 text-gray-700">crosspost</span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-gray-500">
                  {post.excerpt}
                </p>
                <Link href={`/drugs/${post.slug}`}>
                  <a className="text-xs text-gray-600 hover:text-gray-300 hover:underline">
                    {tokiPonaMode ? 'lukin e ale' : 'read'} &rarr;
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DrugsPage;
