import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const DrugsPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  const posts = [
    {
      id: 1,
      title: "Aaaa Aaaa Aaaa",
      date: "January 26, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "first-drug"
    },
    {
      id: 2,
      title: "Aaaa Aaaa Aaaa Aaaa",
      date: "January 10, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "second-drug"
    },
    {
      id: 3,
      title: "Aaaa Aaaa",
      date: "December 20, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "third-drug"
    },
    {
      id: 4,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "December 5, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fourth-drug"
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa",
      date: "November 18, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fifth-drug"
    }
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#ffffff' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide text-gray-400 hover:text-gray-600">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-4 text-black">
              {tokiPonaMode ? 'kili nasa' : 'drugs'}
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-8">
                <h2 className="text-xl font-mono mb-2 text-black">
                  {post.title}
                </h2>
                <div className="text-xs mb-4 text-gray-400">
                  {post.date}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-gray-700">
                  {post.excerpt}
                </p>
                <Link href={`/drugs/${post.slug}`}>
                  <a className="text-xs text-gray-500 hover:text-black hover:underline">
                    {tokiPonaMode ? 'lukin e ale' : 'read more'} &rarr;
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
