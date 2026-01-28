import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const IdeologiesPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  const posts = [
    {
      id: 1,
      title: "Aaaa Aaaa Aaaa Aaaa",
      date: "January 22, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "first-ideology"
    },
    {
      id: 2,
      title: "Aaaa Aaaa Aaaa",
      date: "January 8, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "second-ideology"
    },
    {
      id: 3,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "December 25, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "third-ideology"
    },
    {
      id: 4,
      title: "Aaaa Aaaa",
      date: "December 12, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fourth-ideology"
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa",
      date: "November 28, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fifth-ideology"
    }
  ];

  return (
    <div className="min-h-screen font-vt323" style={{ backgroundColor: '#fafafa' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-sm tracking-wide text-gray-400 hover:text-gray-600">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-4xl font-vt323 mt-8 mb-4 text-black">
              {tokiPonaMode ? 'nasin lawa' : 'ideologies'}
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-vt323 mb-2 text-black">
                  {post.title}
                </h2>
                <div className="text-sm mb-4 text-gray-400">
                  {post.date}
                </div>
                <p className="text-lg leading-relaxed mb-4 text-gray-700 font-mono text-sm">
                  {post.excerpt}
                </p>
                <Link href={`/ideologies/${post.slug}`}>
                  <a className="text-sm text-gray-500 hover:text-black hover:underline font-vt323">
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

export default IdeologiesPage;
