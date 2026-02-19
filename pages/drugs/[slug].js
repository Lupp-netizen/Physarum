import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const posts = {
  'reducing-mdma-neurotoxicity': {
    title: 'Reducing MDMA neurotoxicity',
    date: '2024',
    crosspost: 'https://www.lesswrong.com/posts/f6j72RCcfAa7bRq4o/reducing-mdma-neurotoxicity',
    content: `MDMA neurotoxicity is primarily mediated through serotonergic mechanisms: excessive serotonin release causes oxidative stress via MAO-B metabolism (producing free radicals), hyperthermia compounds this substantially, and downstream glutamate excitotoxicity contributes in higher-dose scenarios.

The key harm-reduction interventions, roughly by evidence quality:

**Temperature control** is probably the most important single factor. MDMA-induced hyperthermia dramatically increases neurotoxicity — animal studies suggest that preventing temperature elevation almost completely prevents the neurotoxic effects. Stay cool, don't overheat. This is also the main acute danger.

**Alpha-lipoic acid** (ALA) — a mitochondrial antioxidant that crosses the blood-brain barrier. Taken before and during use, it reduces oxidative stress from MAO-mediated serotonin breakdown. 100-200mg reasonable.

**Vitamin C** — another antioxidant. Some evidence for neuroprotective effect in combination with other antioxidants. Common harm reduction recommendation.

**5-HTP timing** — 5-HTP supplementation can help replenish serotonin post-use, but should not be taken before or during (increases serotonin syndrome risk). Take 24+ hours after, not before.

**NAC (N-acetyl cysteine)** — glutathione precursor, reduces oxidative stress. Pre- and post-load.

**Magnesium glycinate** — reduces jaw clenching (trismus), which is both uncomfortable and can damage teeth. Doesn't affect the experience much.

**EGCG (green tea extract)** — some evidence for neuroprotection via antioxidant mechanisms.

**Frequency and dose** are upstream of all of this. The "3 month rule" (one use per 3 months maximum) is based on the serotonin recovery timescale and is probably the most impactful thing. Dose also matters significantly — neurotoxicity shows steep dose-response curves.

The pharmacology of all this is genuinely interesting — MDMA primarily releases serotonin, dopamine, and norepinephrine through reversal of their respective transporters (rather than blocking reuptake like SSRIs). The serotonin syndrome risk comes from the massive serotonergic surge.

---

*Originally published on LessWrong. Read the full post with discussion there.*`,
  },
};

const DrugPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen font-mono flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="text-center text-gray-600">
          <p>post not found</p>
          <Link href="/drugs"><a className="text-xs underline mt-4 block">← back to drugs</a></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#0a0a0a', color: '#d1d5db' }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link href="/drugs">
            <a className="text-xs text-gray-600 hover:text-gray-400">← drugs</a>
          </Link>
        </div>

        <h1 className="text-2xl font-mono text-gray-200 mb-2">{post.title}</h1>
        <div className="text-xs text-gray-600 mb-2">{post.date}</div>

        {post.crosspost && (
          <div className="mb-8">
            <a
              href={post.crosspost}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-300 underline"
            >
              originally published on LessWrong ↗
            </a>
          </div>
        )}

        <div className="text-sm leading-relaxed text-gray-400 whitespace-pre-wrap space-y-4">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') || para.startsWith('*')) {
              return <p key={i} className="text-gray-300" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />;
            }
            return <p key={i}>{para}</p>;
          })}
        </div>

        {post.crosspost && (
          <div className="mt-12 pt-6 border-t border-gray-800">
            <a
              href={post.crosspost}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-300"
            >
              read full post + discussion on LessWrong ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrugPost;
