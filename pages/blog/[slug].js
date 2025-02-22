import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// This would eventually come from your data source
const posts = {
  'first-post': {
    title: 'On Biological Interventions and Epistemic Enhancement',
    date: 'February 22, 2025',
    content: `
      Initial explorations into the intersection of cognitive enhancement and forecasting accuracy.
      How might we systematically improve our epistemic capabilities through biological interventions?

      This is where your full blog post content would go. You can include multiple paragraphs,
      links, and other content.
    `
  },
  // Add more posts here
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts[slug];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Organic shapes background */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
             style={{animationDuration: '10s'}} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"
             style={{animationDuration: '15s'}} />
      </div>

      <div className="relative">
        <article className="max-w-2xl mx-auto px-8 py-16">
          <div className="mb-8">
            <Link href="/blog">
              <a className="text-stone-600 hover:text-stone-800">← Back to Blog</a>
            </Link>
          </div>
          
          <h1 className="text-4xl font-light text-stone-800 mb-4">{post.title}</h1>
          <div className="text-sm text-stone-500 mb-8">{post.date}</div>
          
          <div className="prose text-stone-700 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
