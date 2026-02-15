import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const WritingsPage = ({ allPostsData }) => {
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
            {allPostsData.length === 0 ? (
              <p className="text-sm" style={{ color: 'rgba(26, 23, 20, 0.6)' }}>
                No writings yet. Add markdown files to content/writings/
              </p>
            ) : (
              allPostsData.map((post) => (
                <article key={post.slug} className="border-b pb-8" style={{ borderColor: 'rgba(26, 23, 20, 0.2)' }}>
                  <h2 className="text-xl font-mono mb-2" style={{ color: '#1a1714' }}>
                    {post.linkUrl ? (
                      <a href={post.linkUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {post.title} <span className="text-xs" style={{ color: 'rgba(26, 23, 20, 0.5)' }}>[linkpost]</span>
                      </a>
                    ) : post.title}
                  </h2>
                  <div className="text-xs mb-4" style={{ color: 'rgba(26, 23, 20, 0.6)' }}>
                    {post.date}
                    {post.tags && post.tags.length > 0 && (
                      <span className="ml-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="mr-2">#{tag}</span>
                        ))}
                      </span>
                    )}
                  </div>
                  {post.tldr && (
                    <div className="text-sm leading-relaxed mb-3 pl-3" style={{ color: '#1a1714', borderLeft: '2px solid rgba(26, 23, 20, 0.3)' }}>
                      <span className="text-xs font-bold" style={{ color: 'rgba(26, 23, 20, 0.5)' }}>TL;DR: </span>
                      {post.tldr}
                    </div>
                  )}
                  {post.excerpt && !post.tldr && (
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#1a1714' }}>
                      {post.excerpt}
                    </p>
                  )}
                  {post.linkUrl ? (
                    <a href={post.linkUrl} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'rgba(26, 23, 20, 0.8)' }}>
                      read on LessWrong &rarr;
                    </a>
                  ) : (
                    <Link href={`/writings/${post.slug}`}>
                      <a className="text-xs hover:underline" style={{ color: 'rgba(26, 23, 20, 0.8)' }}>
                        read more &rarr;
                      </a>
                    </Link>
                  )}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WritingsPage;
