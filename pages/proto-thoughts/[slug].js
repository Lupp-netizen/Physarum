import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const protoThoughts = {
  'hormonal-depression': {
    title: 'Estrogen, Depression, and the Hormonal Angle',
    date: 'January 2026',
    content: `Two proto-notes merged: estrogen depression effects + the trans-specific angle.

Standard narratives for trans depression rates (~41% attempted suicide):
• Rightists: degeneracy
• Leftists: discrimination
• Transmedicalists: the disorder called Gender Dysphoria

Missing hypothesis: it's largely hormones.

The neurochemical picture of exogenous estrogen:
• Prolactin ↑ → depression-associated (transdiagnostic hormonal phenotype; see Wieck et al.)
• Serotonin 2A receptors ↑ → depression-associated (not protective — the 1A is the good one)
• Estrogen decreases 5-HT(1A) function → 1A agonism is anxiolytic (buspirone works here)
• CRF (→ cortisol) pathway: estrogen modulates corticotropin-releasing factor, strongly implicated in depression

If cis women have different depression profiles than cis men (they do), why would we expect someone on HRT to sit in neither category? They're in a third hormonal state.

The question isn't being seriously investigated. The biological channel is politically inconvenient.

Direction: integrate with the "Depression as High Learning Rate" framework — does estrogen shift precision weighting in predictive processing? Does prolactin provide a direct mechanism?`
  },
  'predictive-processing-disorders': {
    title: 'Predictive Processing Across Disorders',
    date: 'December 2025',
    content: ``
  },
  'lob-depression': {
    title: "Löb's Theorem for Depression",
    date: 'January 2026',
    content: ``
  },
  'optimal-suicide': {
    title: 'Notes Toward "Optimal Suicide"',
    date: 'December 2025',
    content: ``
  },
  'ought-atom': {
    title: 'The Ought-Atom',
    date: 'November 2025',
    content: ``
  },
};

const ProtoThoughtPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const thought = protoThoughts[slug];

  if (!thought) return (
    <div className="min-h-screen" style={{ backgroundColor: '#12100e' }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <Link href="/proto-thoughts">
          <a className="text-xs hover:underline" style={{ color: '#6a5a4a' }}>← back to proto-thoughts</a>
        </Link>
        <p className="mt-8 text-sm" style={{ color: '#5a4a3a' }}>not found</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#12100e' }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <Link href="/proto-thoughts">
          <a className="text-xs hover:underline" style={{ color: '#6a5a4a' }}>← back to proto-thoughts</a>
        </Link>
        
        <h1 className="text-2xl font-light mt-8 mb-2" style={{ color: '#c4a878' }}>
          {thought.title}
        </h1>
        <div className="text-xs mb-8" style={{ color: '#5a4a3a' }}>
          {thought.date}
        </div>
        
        {thought.content ? (
          <div 
            className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
            style={{ color: '#9a8a7a' }}
          >
            {thought.content}
          </div>
        ) : (
          <p className="text-xs" style={{ color: '#4a3a2a' }}>—</p>
        )}
      </div>
    </div>
  );
};

export default ProtoThoughtPage;
