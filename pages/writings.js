import React from 'react';
import Link from 'next/link';

const WritingsPage = () => {
  const posts = [
    {
      id: 1,
      title: "Aaaa Aaaa Aaaa Aaaa",
      date: "January 28, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "first-writing"
    },
    {
      id: 2,
      title: "Aaaa Aaaa Aaaa",
      date: "January 15, 2026",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "second-writing"
    },
    {
      id: 3,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "December 22, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "third-writing"
    },
    {
      id: 4,
      title: "Aaaa Aaaa",
      date: "December 10, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fourth-writing"
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa Aaaa",
      date: "November 30, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fifth-writing"
    }
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#2a2520' }}>
      {/* Content area with sepia background */}
      <div className="min-h-screen" style={{ backgroundColor: '#d4c4a8' }}>
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide" style={{ color: '#1a1714' }}>
                &larr; home
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-4" style={{ color: '#1a1714' }}>
              writings
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b pb-8" style={{ borderColor: 'rgba(26, 23, 20, 0.2)' }}>
                <h2 className="text-xl font-mono mb-2" style={{ color: '#1a1714' }}>
                  {post.title}
                </h2>
                <div className="text-xs mb-4" style={{ color: 'rgba(26, 23, 20, 0.6)' }}>
                  {post.date}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#1a1714' }}>
                  {post.excerpt}
                </p>
                <Link href={`/writings/${post.slug}`}>
                  <a className="text-xs hover:underline" style={{ color: 'rgba(26, 23, 20, 0.8)' }}>
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

export default WritingsPage;
