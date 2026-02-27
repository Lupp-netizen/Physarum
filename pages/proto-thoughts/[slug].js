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

—

The neurochemical picture of exogenous estrogen:

Prolactin ↑ → depression-associated
  Prolactin elevation is a transdiagnostic hormonal phenotype in depression (see Wieck et al.)
  High prolactin → low dopamine (they're inversely related via tuberoinfundibular pathway)
  This creates a depression-compatible neurochemical state independent of social factors

Serotonin receptor changes:
  5-HT(2A) receptors ↑ → depression-associated (this is NOT protective — the 1A is the good one)
  Estrogen decreases 5-HT(1A) function
  1A agonism is anxiolytic (buspirone works here)
  So estrogen shifts serotonergic balance toward the depression-associated phenotype

CRF pathway:
  Estrogen modulates corticotropin-releasing factor
  CRF strongly implicated in depression and anxiety
  Estrogen can increase HPA axis reactivity

—

The active inference angle (connecting to "Depression as High Learning Rate"):

Depression = high precision on ascending prediction errors (ACh↑) + low precision on priors/policies (DA↓)

Does estrogen shift precision weighting in predictive processing?

Hypothesis: Estrogen may increase ACh-mediated gain on sensory prediction errors while decreasing catecholaminergic precision on high-level priors

Mechanisms:
  • Prolactin elevation → DA suppression → lower prior precision
  • Estrogen's effects on cholinergic system (complex but generally facilitatory)
  • Net effect: bias toward the "high learning rate" depressive phenotype

This would mean HRT doesn't just "add stress via social factors" — it directly shifts the computational parameters of the brain toward a depression-susceptible regime.

—

Trans-specific considerations:

If cis women have different depression profiles than cis men (they do — ~2x prevalence, different symptom clusters), why would we expect someone on HRT to sit in neither category?

They're in a third hormonal state:
  • Exogenous estrogen without endogenous cycling
  • Different receptor sensitivities (natal male brain exposed to estrogen late)
  • Different feedback loops (no ovaries to regulate)

This third state has its own neurochemical signature that we haven't properly characterized.

The question isn't being seriously investigated. The biological channel is politically inconvenient:
  • Right doesn't want to admit transition could be medically valid at all
  • Left doesn't want to admit transition has biological costs beyond "discrimination stress"
  • Medicine follows the funding

—

Possible interventions (speculative, based on mechanism):

Buspirone
  5-HT(1A) partial agonist
  May partially compensate for estrogen's 5-HT(1A) downregulation
  Already used for anxiety; underexplored for HRT-associated depression

Dopamine support
  Bupropion (DA/NE reuptake inhibitor)
  Bromantane (non-depleting dopaminergic)
  Targeting the prolactin→DA suppression axis

Progesterone considerations
  Progesterone has its own neuroactive effects (GABA-A modulation)
  Some trans women report mood improvement with progesterone
  Mechanism unclear but may provide counterbalance

Thyroid optimization
  Estrogen increases thyroid-binding globulin
  Can effectively reduce free T3/T4
  Thyroid intimately linked to mood
  May need to dose thyroid higher on HRT

—

Integration with Depression as High Learning Rate framework:

The depressive state is characterized by:
  • High ACh → high gain on prediction errors → treating noise as signal
  • Low DA → low precision on policies/priors → fragile high-level beliefs
  • Excessive REM → nightly erosion of stabilizing self-models

Estrogen potentially pushes all three dials in the depression direction.

This doesn't mean transition is wrong. It means:
  1. The depression isn't purely social/psychological
  2. It may be pharmacologically addressable
  3. We need actual research instead of pretending the question doesn't exist

Direction for future thinking:
  • Does estrogen shift precision weighting? (testable in neuroimaging)
  • Does prolactin mediate a significant portion of HRT-depression? (testable with prolactin-lowering drugs)
  • Is there an optimal HRT protocol that minimizes depression-susceptibility? (requires actually looking)

The 41% is not destiny. It might be partly iatrogenic. And iatrogenic problems are solvable.`
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
