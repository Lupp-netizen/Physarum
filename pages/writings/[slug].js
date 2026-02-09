import React from 'react';
import Link from 'next/link';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

const PostPage = ({ postData }) => {
  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#2a2520' }}>
      {/* Content area with sepia background */}
      <div className="min-h-screen" style={{ backgroundColor: '#d4c4a8' }}>
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/writings">
              <a className="text-xs tracking-wide" style={{ color: '#1a1714' }}>
                &larr; writings
              </a>
            </Link>
          </div>
        </header>

        <main className="px-8 pb-16">
          <article className="max-w-2xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-mono mb-4" style={{ color: '#1a1714' }}>
                {postData.title}
              </h1>
              <div className="text-xs" style={{ color: 'rgba(26, 23, 20, 0.6)' }}>
                {postData.date}
                {postData.tags && postData.tags.length > 0 && (
                  <span className="ml-4">
                    {postData.tags.map(tag => (
                      <span key={tag} className="mr-2">#{tag}</span>
                    ))}
                  </span>
                )}
              </div>
            </header>

            <div
              className="prose prose-sm max-w-none"
              style={{ 
                color: '#1a1714',
                '--tw-prose-headings': '#1a1714',
                '--tw-prose-links': '#4a3a28',
                '--tw-prose-code': '#3a2a18',
              }}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </main>
      </div>

      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4 {
          color: #1a1714;
          font-family: ui-monospace, SFMono-Regular, monospace;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h1 { font-size: 1.5rem; }
        .prose h2 { font-size: 1.25rem; }
        .prose h3 { font-size: 1.1rem; }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .prose a {
          color: #4a3a28;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #1a1714;
        }
        .prose code {
          background: rgba(26, 23, 20, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        .prose pre {
          background: rgba(26, 23, 20, 0.1);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .prose pre code {
          background: none;
          padding: 0;
        }
        .prose blockquote {
          border-left: 3px solid rgba(26, 23, 20, 0.3);
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: rgba(26, 23, 20, 0.8);
        }
        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose hr {
          border: none;
          border-top: 1px solid rgba(26, 23, 20, 0.2);
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default PostPage;
