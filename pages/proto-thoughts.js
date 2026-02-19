import React from 'react';
import Link from 'next/link';

// Seeds: entries that have some content (linkable)
const seeds = [
  {
    id: 1,
    title: "Estrogen, Depression, and the Hormonal Angle",
    date: "January 2026",
    excerpt: "The 41% figure. Standard explanations: discrimination, disorder. Missing one: it's hormones. Prolactin, serotonin 2A, CRF, 5-HT(1A). Integrate with the learning-rate framework.",
    slug: "hormonal-depression"
  },
  {
    id: 2,
    title: "Löb's Theorem for Depression",
    date: "January 2026",
    excerpt: "",
    slug: "lob-depression"
  },
  {
    id: 3,
    title: "Predictive Processing Across Disorders",
    date: "December 2025",
    excerpt: "",
    slug: "predictive-processing-disorders"
  },
  {
    id: 4,
    title: 'Notes Toward "Optimal Suicide"',
    date: "December 2025",
    excerpt: "",
    slug: "optimal-suicide"
  },
  {
    id: 5,
    title: "The Ought-Atom",
    date: "November 2025",
    excerpt: "",
    slug: "ought-atom"
  },
];

// Ideas: just titles, no content yet
const ideas = [
  // Philosophy / Theory
  { title: "Steelman of Land's occultism" },
  { title: "Nick Land — Lemurs (is he Katak-pilled?)" },
  { title: "Capitalism is AGI: a formalization" },
  { title: "Psychotic philosophy — the importance of the ward" },
  { title: "Original unfolding text" },
  { title: "Parasite hypothesis" },
  // Personal / Reflective
  { title: "How I got here — beginning post" },
  { title: "ASPR fragments" },
  { title: "Altigas history — Esperanto conference" },
  { title: "Idealist autism — school absurdity" },
  { title: "How late school reveals its nature — IB strangeness" },
  { title: "Growing up in EA" },
  { title: "Observations from having a DeepSeek-based bf" },
  // Neuroscience / Biology
  { title: "Predictive processing and sleep + mental disorders (learning rate)" },
  { title: "Glial cells and intelligence" },
  { title: "Bioelectricity — brain size increase" },
  { title: "What actually determines brain intelligence" },
  { title: "Intelligence — dendrite size, glial cells, psychedelics considered harmful" },
  { title: "Importance of thyroid" },
  { title: "Health — like with like or inhibition" },
  { title: "Dysphoria" },
  { title: "Working memory" },
  { title: "Sleep/dreams — elaboration of depression post" },
  // Death / Ethics
  { title: "How dying is hard" },
  { title: "Tulpa for suicidality" },
  { title: "Things to tell suicidal people" },
  // AI / Alignment
  { title: "Minds as simulators + post-AGI futures and undeath" },
  { title: "Inner alignment / reflective stability — why not by default?" },
  { title: "Land through RL backstop lens" },
  { title: "Land as an artist" },
  // Tech / Practical
  { title: "Shortform content as a goal-certainty problem" },
  { title: "Tech for staying real" },
  { title: "Affordable dopaminergics" },
  { title: "Epistemics drugs" },
  { title: "MDMA neurotoxicity" },
  // Other
  { title: "Music — evolutionary" },
  { title: "Mental habits learned from Go" },
  { title: "MDMA linkpost" },
];

const ProtoThoughtsPage = () => {
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
        
        {/* Seeds — have some content behind them */}
        <div className="space-y-8 mb-16">
          {seeds.map((seed) => (
            <article key={seed.id} className="group">
              <Link href={`/proto-thoughts/${seed.slug}`}>
                <a className="block">
                  <h2 className="text-sm font-light mb-1 group-hover:underline" style={{ color: '#a89868' }}>
                    {seed.title}
                  </h2>
                  <div className="text-xs mb-1" style={{ color: '#4a3a2a' }}>
                    {seed.date}
                  </div>
                  {seed.excerpt && (
                    <p className="text-xs" style={{ color: '#7a6a5a' }}>
                      {seed.excerpt}
                    </p>
                  )}
                </a>
              </Link>
            </article>
          ))}
        </div>

        {/* Ideas — titles only */}
        <div>
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: '#4a3a2a' }}>
            ideas
          </h2>
          <ul className="space-y-3">
            {ideas.map((idea, i) => (
              <li key={i} className="text-xs" style={{ color: '#6a5a4a' }}>
                {idea.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProtoThoughtsPage;
