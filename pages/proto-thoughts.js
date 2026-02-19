import React from 'react';
import Link from 'next/link';

const ProtoThoughtsPage = () => {
  const thoughts = [
    {
      id: 1,
      title: "Löb's Theorem for Depression",
      date: "January 2026",
      excerpt: "Using Löbian reasoning to understand and escape depressive loops...",
      slug: "lob-depression"
    },
    {
      id: 2,
      title: "Estrogen and Depression",
      date: "January 2026",
      excerpt: "A sketch toward understanding the hormonal basis of trans depression...",
      slug: "estrogen-depression"
    },
    {
      id: 3,
      title: "Choline and Depression",
      date: "January 2026",
      excerpt: "A neglected angle: choline → ACh → learning rate → depression...",
      slug: "choline-depression"
    },
    {
      id: 4,
      title: "Trans Depression: The Hormonal Angle",
      date: "December 2025",
      excerpt: "What if it's largely hormones? The question that's not being asked...",
      slug: "trans-depression-hormones"
    },
    {
      id: 5,
      title: "Predictive Processing Across Disorders",
      date: "December 2025",
      excerpt: "Autism, dysphoria, aphantasia, BPD, depression — a unifying computational signature?",
      slug: "predictive-processing-disorders"
    },
    {
      id: 6,
      title: "Dark Triad and Embodied AI",
      date: "December 2025",
      excerpt: "Cognitive vs affective empathy. Maybe homeostasis leads to caring?",
      slug: "dark-triad-embodiment"
    },
    {
      id: 7,
      title: "Notes Toward 'Optimal Suicide'",
      date: "December 2025",
      excerpt: "An essay that needs to be written, but carefully...",
      slug: "optimal-suicide"
    },
    {
      id: 8,
      title: "The Ought-Atom",
      date: "November 2025",
      excerpt: "A minimal motivational structure that might be enough. Self-bootstrapping will.",
      slug: "ought-atom"
    },
  ];

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#12100e' }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <Link href="/">
          <a className="text-xs hover:underline" style={{ color: '#5a4a3a' }}>← back</a>
        </Link>
        
        <h1 className="text-2xl font-light mt-8 mb-4" style={{ color: '#c4a878' }}>
          proto-thoughts
        </h1>
        <p className="text-xs mb-12" style={{ color: '#6a5a4a' }}>
          preliminary ideas, bullet points, half-formed essays. seeds.
        </p>
        
        <div className="space-y-8">
          {thoughts.map((thought) => (
            <article key={thought.id} className="group">
              <Link href={`/proto-thoughts/${thought.slug}`}>
                <a className="block">
                  <h2 className="text-sm font-light mb-1 group-hover:underline" style={{ color: '#a89868' }}>
                    {thought.title}
                  </h2>
                  <div className="text-xs mb-2" style={{ color: '#4a3a2a' }}>
                    {thought.date}
                  </div>
                  <p className="text-xs" style={{ color: '#7a6a5a' }}>
                    {thought.excerpt}
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

export default ProtoThoughtsPage;
