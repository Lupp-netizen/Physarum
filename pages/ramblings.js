import React from 'react';
import Link from 'next/link';

// CCRU-style Numogram SVG component
const Numogram = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    {/* Outer decagon */}
    <polygon
      points="100,10 161,35 190,90 175,155 125,190 75,190 25,155 10,90 39,35 100,10"
      strokeWidth="0.8"
    />
    {/* Inner connections - the time-sorcery paths */}
    <line x1="100" y1="10" x2="100" y2="100" />
    <line x1="161" y1="35" x2="100" y2="100" />
    <line x1="190" y1="90" x2="100" y2="100" />
    <line x1="175" y1="155" x2="100" y2="100" />
    <line x1="125" y1="190" x2="100" y2="100" />
    <line x1="75" y1="190" x2="100" y2="100" />
    <line x1="25" y1="155" x2="100" y2="100" />
    <line x1="10" y1="90" x2="100" y2="100" />
    <line x1="39" y1="35" x2="100" y2="100" />
    {/* Zone connections - syzygies */}
    <line x1="100" y1="10" x2="175" y2="155" strokeDasharray="2,2" />
    <line x1="161" y1="35" x2="25" y2="155" strokeDasharray="2,2" />
    <line x1="190" y1="90" x2="75" y2="190" strokeDasharray="2,2" />
    <line x1="39" y1="35" x2="125" y2="190" strokeDasharray="2,2" />
    <line x1="10" y1="90" x2="100" y2="100" strokeDasharray="2,2" />
    {/* Zone numbers */}
    <text x="100" y="8" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">0</text>
    <text x="168" y="35" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">1</text>
    <text x="198" y="93" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">2</text>
    <text x="182" y="162" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">3</text>
    <text x="130" y="200" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">4</text>
    <text x="70" y="200" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">5</text>
    <text x="18" y="162" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">6</text>
    <text x="2" y="93" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">7</text>
    <text x="32" y="35" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">8</text>
    <text x="100" y="105" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">9</text>
    {/* Inner pentagon - the gates */}
    <polygon
      points="100,45 138,75 125,120 75,120 62,75"
      strokeWidth="0.5"
      strokeDasharray="3,2"
    />
  </svg>
);

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
      {/* Numogram - positioned on the side */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 w-32 h-32 numogram hidden lg:block" style={{ color: '#3a3a4a' }}>
        <Numogram className="w-full h-full" />
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
