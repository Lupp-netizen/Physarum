import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const protoThoughts = {
  'estrogen-depression': {
    title: 'Estrogen and Depression',
    date: 'January 2026',
    content: `A sketch toward understanding the hormonal basis of trans depression.

• Prolactin → depression: elevated prolactin is associated with depressive symptoms across diagnoses, representing a "transdiagnostic hormonal phenotype"

• Estrogen increases serotonin 2A receptor activity — but 2A is depression-associated, not depression-protective (unlike 1A)

• CRF (corticotropin-releasing factor) → cortisol pathway: estrogen may modulate CRF, which is strongly implicated in depression

• Estrogen decreases 5-HT(1A) receptor function — and 1A agonism is anxiolytic (buspirone works this way)

• The standard narrative blames transphobia for trans depression rates. But what if a significant component is simply hormonal? Taking exogenous estrogen changes the neurochemical landscape in ways we barely understand.

• This doesn't deny social factors — it asks whether we're missing half the equation by not investigating the biological effects of HRT on mood directly.

Direction: integrate with the "Depression as High Learning Rate" framework — does estrogen shift precision weighting in predictive processing?`
  },
  'predictive-processing-disorders': {
    title: 'Predictive Processing Across Disorders',
    date: 'December 2025',
    content: `A unifying lens: what if autism, dysphoria, aphantasia, BPD, and depression share a common computational signature?

• The core idea: differences in "inner simming" — how vividly and controllably you can roll out your generative model

• A vivid inner sim means running predictions without external input
• But you still get sensory input from reality
• So to stay in your inner sim, you have to ignore that input

• This connects to the learning rate / precision framework:
  — High precision on internal predictions = stay in your model = "stubborn priors"
  — High precision on sensory data = can't maintain internal coherence = "too plastic"

• Hypothesis: depressed people may be more likely to have aphantasia (can't escape into internal models — nowhere to hide from negative prediction errors)

• Autism: might be characterized by high precision on bottom-up sensory data, low precision on social priors

• BPD: unstable precision allocation — switching between modes chaotically

• Dysphoria: mismatch between a hardwired body-model prior and actual sensory data — unresolvable prediction error

Direction: map these disorders onto the precision-weighting spectrum. What happens when you can't simulate? What happens when you can't stop?`
  },
  'dark-triad-embodiment': {
    title: 'Dark Triad and Embodied AI',
    date: 'December 2025',
    content: `Notes from HAAISS on psychopathy, empathy, and alignment.

• Dark triad people have a lower care/harm response to moral dilemmas
• They have cognitive empathy, but lack affective empathy
• They can model what you feel, but don't feel it themselves

• Question for embodied AI: maybe homeostasis leads to affective empathy?
  — If you have a body that can be damaged, you learn that damage = bad
  — Seeing another body damaged might activate the same pathways
  — Without a body, you only have cognitive empathy at best

• This suggests that disembodied AI (pure language models) might be structurally psychopathic — they can model harm without experiencing anything that grounds "harm is bad"

• But does this matter? If cognitive empathy is sufficient for moral behavior, maybe the affective component is just a human quirk, not a necessity.

Direction: investigate whether affective empathy is load-bearing for alignment, or just an implementation detail.`
  },
  'ought-atom': {
    title: 'The Ought-Atom',
    date: 'November 2025',
    content: `A minimal motivational structure that might be enough.

1) You care about things in the world — people, experiences, concepts
2) Qualia-moments worth living exist
3) You are in a pivotal time — the future can be vastly influenced by small changes in the present

4) You can actually change things:
   • Exponential curves may seem like they aren't going anywhere
   • But they have positive n-th derivatives
   • That's what to aim for

Practical implications:
• Want a secret IQ-enhancement society? The best thing to do now might be... meet people. This makes your mood incrementally better, which makes you more intrinsically motivated, etc.

• See yourself as a system — the only thing you need is the ought-atom
• It is better to be in the positive spiral than in the negative one

• Shadowmoth insight: not suffering is a choice
• Hard problems enable you to gain metaskills for doing things well, at any possible intensity
• Even extreme torture can be a valuable lesson
• The only thing you need is a strong ought-atom
• Which is self-created by pure will to live — to think or to power

Direction: the ought-atom is self-bootstrapping. How do you ignite it from nothing?`
  },
  'trans-depression-hormones': {
    title: 'Trans Depression: The Hormonal Angle',
    date: 'December 2025',
    content: `Working title: "Dark Trannypeating"

It is a popularly recognized belief, embraced by all sides of the political spectrum, that around 41% of transgender individuals attempt suicide.

• Rightists say it's because they are living sinfully/degenerately/dysgenically
• Leftists say it's because of widespread discrimination
• Centrist transmedicalists blame the disorder called Gender Dysphoria

But what if it's largely hormones?

The question that's not being asked: what are the direct neurochemical effects of cross-sex hormones on mood regulation?

We know:
• Estrogen affects serotonin systems
• Estrogen affects dopamine systems
• Estrogen affects cortisol/stress response
• Progesterone has major neurosteroid effects

If cis women have different depression profiles than cis men (they do), why would we expect trans people on HRT to have neither? They're in a third hormonal state.

Direction: literature review on HRT mood effects. What does existing research actually show? What's being ignored because it's politically inconvenient?`
  },
  'lob-depression': {
    title: "Löb's Theorem for Depression",
    date: 'January 2026',
    content: `A sketch: using Löbian reasoning to understand and escape depressive loops.

Löb's theorem: if a system can prove "if I can prove P, then P", then the system can prove P.

Depressive pattern:
• "If I could prove I'm worthwhile, then I'd be worthwhile"
• But I can't prove it
• Therefore I'm not worthwhile

The loop is:
• You require proof of value before you can feel value
• But value isn't provable — it's axiomatic or performative
• So you remain stuck in proving-mode, never reaching the axiom

The Löbian move:
• The theorem says self-referential provability collapses
• If you believe "if I could believe I'm okay, I'd be okay"
• Then you already have everything you need

The problem: depressive states reduce capacity for this kind of metalevel reasoning

Direction: can this be turned into a therapeutic intervention? A CBT-style reframe with formal grounding?`
  },
  'optimal-suicide': {
    title: 'Notes Toward "Optimal Suicide"',
    date: 'December 2025',
    content: `An essay that needs to be written, but carefully.

The taboo: suicide is never discussed in terms of optimization. It's always framed as pathology, tragedy, prevention.

But: if someone is genuinely suffering more than they're capable of enjoying life, isn't continued existence net-negative? This is the utilitarian elephant in the room.

The counterarguments:
• Temporal discounting: future states might be radically different
• Information asymmetry: you don't know what you're missing
• Value drift: your current values might change
• Ripple effects: others are affected
• Irrecoverability: it's the one decision you can't undo

The steelman for living:
• Even if current expected value is negative, variance is high
• Black swan positive events exist
• The "wait and see" strategy dominates when information is being revealed

The honest position: for most people, in most situations, suicide is suboptimal. But "most" is not "all", and pretending otherwise is dishonest.

Direction: write this essay. It will help people. But write it carefully, because it could also hurt people if done badly.`
  },
  'choline-depression': {
    title: 'Choline and Depression',
    date: 'January 2026',
    content: `A neglected angle in the depression literature.

Connection to the main theory:
• Acetylcholine is the "learning rate" neurotransmitter
• High ACh = high precision on prediction errors = high updating = depression phenotype
• Depression is a state of pathologically high learning from negative data

Choline → ACh implications:
• Dietary choline affects brain ACh levels
• High choline intake might predispose to depression
• Or: might buffer depression through other mechanisms (cell membrane integrity, methylation)

The confound: choline is also involved in:
• Liver function
• Methylation (affects monoamines)
• Cell membrane integrity
• Gene expression

Direction: look at choline → depression literature. Is there signal here? Does it fit the ACh/learning-rate model?`
  },
};

const ProtoThoughtPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const thought = protoThoughts[slug];

  if (!thought) return <div>Proto-thought not found</div>;

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
        
        <div 
          className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
          style={{ color: '#9a8a7a' }}
        >
          {thought.content}
        </div>
      </div>
    </div>
  );
};

export default ProtoThoughtPage;
