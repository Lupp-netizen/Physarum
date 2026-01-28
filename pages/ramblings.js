import React from 'react';
import Link from 'next/link';

const RamblingsPage = () => {
  const posts = [
    {
      id: 1,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "January 25, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "first-rambling"
    },
    {
      id: 2,
      title: "Aaaa Aaaa Aaaa",
      date: "January 18, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "second-rambling"
    },
    {
      id: 3,
      title: "Aaaa Aaaa Aaaa Aaaa",
      date: "January 5, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "third-rambling"
    },
    {
      id: 4,
      title: "Aaaa Aaaa",
      date: "December 28, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fourth-rambling"
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "December 15, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fifth-rambling"
    }
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#0a0a12' }}>
      {/* Numogram - positioned on the left side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 w-28 h-auto hidden lg:block">
        <img
          src="/numogram.png"
          alt="Numogram"
          className="w-full h-auto opacity-30 hover:opacity-50 transition-opacity"
        />
      </div>

      {/* Reticulum - positioned on the right side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 w-36 h-auto hidden lg:block">
        <img
          src="/reticulum.png"
          alt="Reticulum"
          className="w-full h-auto opacity-20 hover:opacity-40 transition-opacity"
          style={{ filter: 'saturate(0.7)' }}
        />
      </div>

      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide" style={{ color: '#606068' }}>
                &larr; home
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-4" style={{ color: '#a0a0a8' }}>
              ramblings
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b pb-8" style={{ borderColor: 'rgba(160, 160, 168, 0.15)' }}>
                <h2 className="text-xl font-mono mb-2" style={{ color: '#b0b0b8' }}>
                  {post.title}
                </h2>
                <div className="text-xs mb-4" style={{ color: '#606068' }}>
                  {post.date}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#808088' }}>
                  {post.excerpt}
                </p>
                <Link href={`/ramblings/${post.slug}`}>
                  <a className="text-xs hover:underline" style={{ color: '#707078' }}>
                    read more &rarr;
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

export default RamblingsPage;
