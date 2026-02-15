import React from 'react';
import Link from 'next/link';

const RecipesPage = () => {
  const posts = [
    {
      id: 6,
      title: "savoury intercultural hot fluid",
      date: "",
      excerpt: "",
      slug: "savoury-intercultural-hot-fluid"
    },
    {
      id: 7,
      title: "Bioenergetic ice cream",
      date: "",
      excerpt: "",
      slug: "bioenergetic-ice-cream"
    },
    {
      id: 8,
      title: "Tea archive",
      date: "",
      excerpt: "",
      slug: "tea-archive"
    },
    {
      id: 9,
      title: "Good things (like sugar) are good",
      date: "",
      excerpt: "",
      slug: "good-things-like-sugar-are-good"
    },
    {
      id: 4,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      date: "December 18, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fourth-recipe"
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa",
      date: "December 5, 2025",
      excerpt: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa...",
      slug: "fifth-recipe"
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#1a1612' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide" style={{ color: '#806850' }}>
                &larr; home
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-4" style={{ color: '#c8b8a0' }}>
              recipes
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b pb-8" style={{ borderColor: 'rgba(200, 184, 160, 0.15)' }}>
                <h2 className="text-xl font-mono mb-2" style={{ color: '#d0c0a8' }}>
                  {post.title}
                </h2>
                <div className="text-xs mb-4" style={{ color: '#806850' }}>
                  {post.date}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#a09080' }}>
                  {post.excerpt}
                </p>
                <Link href={`/recipes/${post.slug}`}>
                  <a className="text-xs hover:underline" style={{ color: '#907860' }}>
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

export default RecipesPage;
