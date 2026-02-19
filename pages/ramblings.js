import React from 'react';
import Link from 'next/link';

const RamblingsPage = () => {
  const posts = [
    {
      id: 1,
      title: "Snow",
      date: "January 28, 2026",
      excerpt: "I walk through the snow and a memory appears. It has that characteristic colouring of a mental image indistinguishable from a dream's memory — the mountains in taiwan, youthful energy and hope and curiosity...",
      slug: "snow"
    },
    {
      id: 2,
      title: "Vampires and Aristocrats",
      date: "January 15, 2026",
      excerpt: "The peaters like to connect almost everything to metabolism. They say your 'aura' is determined by your bodily temperature — the archetypal slow-metabolism figure is the Vampire...",
      slug: "vampires-aristocrats"
    },
    {
      id: 3,
      title: "Hope",
      date: "January 5, 2026",
      excerpt: "While on a train, I noticed myself hoping for something. But what does that even mean? What does the hoping actually do? Is it hyperstition?...",
      slug: "hope"
    },
    {
      id: 4,
      title: "Aliveness",
      date: "December 28, 2025",
      excerpt: "Aliveness is how Real one is (as a living, conscious being). You are alive if your Being is fully Real — if it's there in the world, not dissociated, not beaten up into subservience or dullness...",
      slug: "aliveness"
    },
    {
      id: 5,
      title: "Noktotaxis",
      date: "December 14, 2025",
      excerpt: "the freedom. to do without compulsion. noktotaxis moves us. suprasomniacs is what we are, us who release the soul into the night...",
      slug: "noktotaxis"
    },
    {
      id: 6,
      title: "Christian Accelerationism",
      date: "November 30, 2025",
      excerpt: "What if rationalism is just a repackaged version of Christianity, isomorphic to the old one, but translated so radically, it seems to be completely different/opposite?...",
      slug: "christian-accelerationism"
    },
    {
      id: 7,
      title: "Maximum Unfolding",
      date: "November 22, 2025",
      excerpt: "I want to understand reality. But — why? What is it that I want? I want to point at 'unfolding' — letting potentials become new particulars...",
      slug: "maximum-unfolding"
    },
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

      <div className="max-w-2xl mx-auto px-8 py-16">
        <Link href="/">
          <a className="text-xs text-stone-500 hover:text-stone-400">← back</a>
        </Link>
        
        <h1 className="text-3xl font-light mt-8 mb-12" style={{ color: '#d4c4a8' }}>
          ramblings
        </h1>
        
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/ramblings/${post.slug}`}>
                <a className="block">
                  <h2 className="text-xl font-light mb-2 group-hover:underline" style={{ color: '#a89888' }}>
                    {post.title}
                  </h2>
                  <div className="text-xs mb-3" style={{ color: '#6a5a4a' }}>
                    {post.date}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#8a7a68' }}>
                    {post.excerpt}
                  </p>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RamblingsPage;
