import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const sections = [
  {
    title: 'agent foundations & decision theory',
    color: '#c084fc',
    links: [
      { label: 'agentfoundations.study', url: 'https://agentfoundations.study/' },
      { label: 'arbital: logical decision theory', url: 'https://arbital.com/p/logical_dt/' },
      { label: 'arbital: hard corrigibility', url: 'https://arbital.com/p/hard_corrigibility/' },
      { label: 'arbital: Vingean uncertainty', url: 'https://arbital.com/p/Vingean_uncertainty/' },
      { label: 'arbital: explore alignment', url: 'https://arbital.com/explore/ai_alignment/' },
      { label: 'decision theory FAQ (LW)', url: 'https://www.lesswrong.com/posts/zEWJBFFMvQ835nq6h/decision-theory-faq' },
      { label: 'generalizing foundations of decision theory', url: 'https://www.lesswrong.com/posts/5bd75cc58225bf0670375373/generalizing-foundations-of-decision-theory' },
      { label: 'another attempt to explain UDT', url: 'https://www.lesswrong.com/posts/zztyZ4SKy7suZBpbk/another-attempt-to-explain-udt' },
      { label: 'the nature of counterfactuals', url: 'https://www.lesswrong.com/posts/T4Mef9ZkL4WftQBqw/the-nature-of-counterfactuals' },
      { label: 'deconfusing logical counterfactuals', url: 'https://www.lesswrong.com/posts/BRuWm4GxcTNPn4XDX/deconfusing-logical-counterfactuals' },
      { label: 'acausal romance', url: 'https://www.lesswrong.com/posts/SsaT4b6Kn4yqeSpRd/acausal-romance' },
      { label: 'is acausal extortion possible?', url: 'https://www.lesswrong.com/posts/EiNJgBP6HhPjhW77g/is-acausal-extortion-possible' },
      { label: 'Jeffrey-Bolker slides (agent foundations)', url: 'https://agentfoundations.net/slides/Jeffrey-Bolker_slides.pdf' },
      { label: 'Garrabrant induction: intuitive guide', url: 'https://www.lesswrong.com/posts/y5GftLezdozEHdXkL/an-intuitive-guide-to-garrabrant-induction' },
      { label: 'infra-Bayesianism sequence', url: 'https://www.lesswrong.com/posts/zB4f7QqKhBHa5b37a/introduction-to-the-infra-bayesianism-sequence' },
      { label: 'partial agency', url: 'https://www.lesswrong.com/posts/4hdHto3uHejhY2F3Q/partial-agency' },
      { label: 'reward is not the optimization target', url: 'https://www.lesswrong.com/posts/pdaGN6pQyQarFHXF4/reward-is-not-the-optimization-target' },
      { label: 'the ground of optimization', url: 'https://www.lesswrong.com/posts/znfkdCoHMANwqc2WE/the-ground-of-optimization-1' },
      { label: 'optimality is the tiger', url: 'https://www.lesswrong.com/posts/kpPnReyBC54KESiSn/optimality-is-the-tiger-and-agents-are-its-teeth' },
    ],
  },
  {
    title: 'alignment research',
    color: '#60a5fa',
    links: [
      { label: 'learning-theoretic AI alignment agenda', url: 'https://www.lesswrong.com/posts/5bd75cc58225bf0670375575/the-learning-theoretic-ai-alignment-research-agenda' },
      { label: 'learning-theoretic agenda: status 2023', url: 'https://www.lesswrong.com/posts/ZwshvqiqCvXPsZEct/the-learning-theoretic-agenda-status-2023' },
      { label: 'shallow review of live agendas', url: 'https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety' },
      { label: 'davidad\'s bold plan for alignment', url: 'https://www.lesswrong.com/posts/jRf4WENQnhssCb6mJ/davidad-s-bold-plan-for-alignment-an-in-depth-explanation' },
      { label: 'QACI alignment formal goal', url: 'https://www.lesswrong.com/posts/MR5wJpE27ymE7M7iv/formalizing-the-qaci-alignment-formal-goal' },
      { label: 'QACI (carado.moe)', url: 'https://carado.moe/qaci.html' },
      { label: 'QACI math (carado.moe)', url: 'https://carado.moe/qaci-math.html' },
      { label: 'evangelion dialogue on QACI', url: 'https://www.lesswrong.com/posts/i9okkiKQ4rY8eawmT/an-evangelion-dialogue-explaining-the-qaci-alignment-plan' },
      { label: 'MIRI death with dignity strategy', url: 'https://www.lesswrong.com/posts/j9Q8bRmwCgXRYAgcJ/miri-announces-new-death-with-dignity-strategy' },
      { label: 'AGI ruin: list of lethalities', url: 'https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities' },
      { label: 'my research agenda in agent foundations', url: 'https://www.lesswrong.com/posts/7nDvJiikgiawHAp6z/my-research-agenda-in-agent-foundations' },
      { label: 'devinterp projects', url: 'https://devinterp.com/projects' },
      { label: 'arena3: transformer interpretability', url: 'https://arena3-chapter1-transformer-interp.streamlit.app/' },
      { label: '80k: AI safety syllabus', url: 'https://80000hours.org/articles/ai-safety-syllabus/' },
      { label: 'alignment problem', url: 'https://alignmentproblem.ai/' },
      { label: 'aisafety.dance', url: 'https://aisafety.dance/' },
      { label: 'aisafety.world', url: 'https://aisafety.world/' },
      { label: 'corrigibility (LW)', url: 'https://www.lesswrong.com/posts/fkLYhTQteAu5SinAc/corrigibility' },
      { label: 'shutdown problem: incomplete preferences', url: 'https://www.lesswrong.com/posts/YbEbwYWkf8mv9jnmi/the-shutdown-problem-incomplete-preferences-as-a-solution' },
      { label: 'video: guaranteed safe AI', url: 'https://www.lesswrong.com/posts/dQHg2sKtnuXeNydFS/video-intro-to-guaranteed-safe-ai' },
    ],
  },
  {
    title: 'simulators, LLMs, mind',
    color: '#34d399',
    links: [
      { label: 'simulators (Janus, LW)', url: 'https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators' },
      { label: 'cyborgism', url: 'https://www.lesswrong.com/posts/bxt7uCiHam4QXrQAA/cyborgism' },
      { label: 'GPTs think in plain sight', url: 'https://www.lesswrong.com/posts/bwyKCQD7PFWKhELMr/by-default-gpts-think-in-plain-sight' },
      { label: 'scaffolded LLMs as natural language computers', url: 'https://www.lesswrong.com/posts/43C3igfmMrE9Qoyfe/scaffolded-llms-as-natural-language-computers' },
      { label: 'koan: divining alien datastructures from RAM activations', url: 'https://www.lesswrong.com/posts/unCG3rhyMJpGJpoLd/koan-divining-alien-datastructures-from-ram-activations' },
      { label: 'refusal in LLMs mediated by a single direction', url: 'https://www.lesswrong.com/posts/jGuXSZgv6qfdhMCuJ/refusal-in-llms-is-mediated-by-a-single-direction' },
      { label: 'superposition is not just polysemanticity', url: 'https://www.lesswrong.com/posts/8EyCQKuWo6swZxP4/superposition-is-not-just-neuron-polysemanticity' },
      { label: 'activation patching: intuitive guide', url: 'https://www.lesswrong.com/posts/xh85KbTFhbCz7taD4/how-to-think-about-activation-patching' },
      { label: 'how to go from interpretability to alignment', url: 'https://www.lesswrong.com/posts/w4aeAFzSAguvqA5qu/how-to-go-from-interpretability-to-alignment-just-retarget' },
      { label: 'when is a mind me?', url: 'https://www.lesswrong.com/posts/zPM5r3RjossttDrpw/when-is-a-mind-me' },
      { label: 'idealized agents as causal mirrors', url: 'https://www.lesswrong.com/posts/hx5wTeBSdf4bsYnY9/idealized-agents-are-approximate-causal-mirrors-radical' },
    ],
  },
  {
    title: 'CCRU / numogram / hyperstition',
    color: '#f97316',
    links: [
      { label: 'ccru: digithype', url: 'http://www.ccru.net/digithype/vault.htm' },
      { label: 'ccru: barkerspeaks', url: 'http://www.ccru.net/digithype/barkerspeaks.htm' },
      { label: 'ccru: recursive numogrammatology', url: 'http://www.ccru.net/digithype/recursivenum.htm' },
      { label: 'ccru: pandemonium', url: 'http://www.ccru.net/digithype/pandemonium.htm' },
      { label: 'ccru: swarm 1', url: 'http://www.ccru.net/swarm1/1_swarm.htm' },
      { label: 'ccru: futureloop', url: 'http://www.ccru.net/swarm1/1_futureloop.htm' },
      { label: 'ccru: meltdown', url: 'http://www.ccru.net/swarm1/1_melt.htm' },
      { label: 'ccru: 3000', url: 'http://www.ccru.net/swarm2/2_3000.htm' },
      { label: 'ccru: posthuman acceleration', url: 'http://www.ccru.net/swarm3/3_abducted.htm' },
      { label: 'occult art of cybernetic capitalism', url: 'http://nadimsamman.com/occult-esoteric-art-of-cybernetic-capitalism' },
    ],
  },
  {
    title: 'philosophy & mind',
    color: '#f472b6',
    links: [
      { label: 'meaningness.com', url: 'https://meaningness.com' },
      { label: 'gwern: backstop (depression)', url: 'https://gwern.net/backstop' },
      { label: 'gwern: clippy', url: 'https://gwern.net/fiction/clippy' },
      { label: 'buddhism for vampires: essays', url: 'https://buddhism-for-vampires.com/essays' },
      { label: 'monadology and the net of indra', url: 'https://catchingthebull.net/2015/07/27/monadology-and-the-net-of-indra/' },
      { label: 'Quine: word and object (PDF)', url: 'https://danielwharris.com/teaching/364/readings/QuineWordObject.pdf' },
      { label: 'SSC: goddess of everything else', url: 'https://slatestarcodex.com/2015/08/17/the-goddess-of-everything-else-2/' },
      { label: 'SSC: the phatic and anti-inductive', url: 'https://slatestarcodex.com/2015/01/11/the-phatic-and-the-anti-inductive/' },
      { label: 'SSC: wirehead gods on lotus thrones', url: 'https://slatestarcodex.com/2014/01/28/wirehead-gods-on-lotus-thrones/' },
      { label: 'SSC: ars longa vita brevis', url: 'https://slatestarcodex.com/2017/11/09/ars-longa-vita-brevis/' },
      { label: 'SSC: the hour I first believed', url: 'https://slatestarcodex.com/2018/04/01/the-hour-i-first-believed/' },
      { label: 'ACX: psychopharmacology of the FTX', url: 'https://www.astralcodexten.com/p/the-psychopharmacology-of-the-ftx' },
      { label: 'LW: identity isn\'t in specific atoms', url: 'https://www.lesswrong.com/posts/RLScTpwc5W2gGGrL9/identity-isn-t-in-specific-atoms' },
      { label: 'LW: timeless identity', url: 'https://www.lesswrong.com/posts/924arDrTu3QRHFA5r/timeless-identity' },
      { label: 'twelve virtues of rationality', url: 'https://www.lesswrong.com/posts/7ZqGiPHTpiDMwqMN2/twelve-virtues-of-rationality' },
      { label: 'LW: gender identity model', url: 'https://www.lesswrong.com/posts/zXq7dpyj2ik9GcR5t/my-model-of-gender-identity' },
      { label: 'rhizome (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Rhizome_(philosophy)' },
      { label: 'Dr Michael Levin lab', url: 'https://drmichaellevin.org/' },
    ],
  },
  {
    title: 'neuroscience & psychopharmacology',
    color: '#a3e635',
    links: [
      { label: 'SSC: cognitive enhancers — mechanisms and tradeoffs', url: 'https://slatestarcodex.com/2018/10/22/cognitive-enhancers-mechanisms-and-tradeoffs/' },
      { label: 'SSC: melatonin — much more than you wanted to know', url: 'https://slatestarcodex.com/2018/07/10/melatonin-much-more-than-you-wanted-to-know/' },
      { label: 'SSC: relaxed beliefs under psychedelics (anarchic brain)', url: 'https://slatestarcodex.com/2019/09/10/ssc-journal-club-relaxed-beliefs-under-psychedelics-and-the-anarchic-brain/' },
      { label: 'LW: ACh as learning rate / plasticity', url: 'https://www.lesswrong.com/posts/7ny7NLqvzJt7WfeXP/acetylcholine-learning-rate-aka-plasticity' },
      { label: 'LW: big picture of phasic dopamine', url: 'https://www.lesswrong.com/posts/jrewt3rLFiKWrKuyZ/big-picture-of-phasic-dopamine' },
      { label: 'Friston free energy (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4235126/' },
      { label: 'dopamine and policy precision', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4186234/' },
      { label: 'REM sleep and depression', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9960519/' },
      { label: 'scopolamine rapid antidepressant (PNAS)', url: 'https://www.pnas.org/doi/10.1073/pnas.1219731110' },
      { label: 'REM and dreaming (PNAS)', url: 'https://www.pnas.org/doi/10.1073/pnas.0400237101' },
      { label: 'doubleblind: shroom music', url: 'https://doubleblindmag.com/shroom-music/' },
      { label: 'LW: intro to brain-like AGI safety', url: 'https://www.lesswrong.com/posts/Y3bkJ59j4dciiLYyw/intro-to-brain-like-agi-safety-4-the-short-term-predictor' },
      { label: 'LW: review of Principia Qualia', url: 'https://www.lesswrong.com/posts/nurQ3X2oRH4Ms7YKi/a-review-of-principia-qualia' },
    ],
  },
  {
    title: 'math & formal methods',
    color: '#38bdf8',
    links: [
      { label: 'birdtracks: group theory (PDF)', url: 'https://birdtracks.eu/version9.0/GroupTheory.pdf' },
      { label: 'how to learn math for alignment (LW)', url: 'https://www.lesswrong.com/posts/E6JYCiKYd37EJHbqB/learning-math-in-time-for-alignment' },
      { label: 'Bayes nets: learn (LW)', url: 'https://www.lesswrong.com/posts/tp4rEtQqRshPavZsr/learn-bayes-nets' },
      { label: 'causal diagrams and causal models (LW)', url: 'https://www.lesswrong.com/posts/hzuSDMx7pd2uxFc5w/causal-diagrams-and-causal-models' },
      { label: 'Löbian obstacle and why you should care', url: 'https://www.lesswrong.com/posts/XiHpPWPNsoTAtvhz8/the-loebian-obstacle-and-why-you-should-care' },
      { label: 'Hessian and basin volume', url: 'https://www.lesswrong.com/posts/QPqztHpToij2nx7ET/hessian-and-basin-volume' },
      { label: 'singular learning theory (LW tag)', url: 'https://www.lesswrong.com/tag/singular-learning-theory' },
      { label: 'cpu.land: how CPUs work', url: 'https://cpu.land/the-basics' },
      { label: 'Bugrov & Nikolsky: higher mathematics (archive.org)', url: 'https://archive.org/details/bugrov-nikolsky-a-collection-of-problems-higher-mathematics-mir-1984/page/n1/mode/2up' },
      { label: 'distill.pub', url: 'https://distill.pub/' },
      { label: 'Andy Matuschak: how to remember what you read', url: 'https://andymatuschak.org/books/' },
      { label: 'augmenting long-term memory (Matuschak/Nielsen)', url: 'https://augmentingcognition.com/ltm.html' },
    ],
  },
  {
    title: 'opportunities & grants',
    color: '#fb923c',
    links: [
      { label: 'AFFINE alignment seminar — apply', url: 'https://airtable.com/appMN3t2hbsp8yQM5/pag1IXp0QTiU5iWrB/form' },
      { label: 'Atlas Fellowship resource gallery', url: 'https://atlasfellowship.notion.site/Atlas-Fellowship-Resource-Gallery-03f271bdf955472da4b2a5a6f326ad83' },
      { label: 'bagel.fund', url: 'https://bagel.fund/' },
      { label: 'manifund', url: 'https://manifund.org/' },
      { label: 'high-quality microgrants & scholarships (list)', url: 'https://42n.bearblog.dev/high-quality-microgrants-and-scholarships/' },
      { label: 'EIRE ventures micro-grants', url: 'https://eire-ventures.com/p/micro-grants' },
      { label: 'Ellison scholars (undergraduate)', url: 'https://eit.org/ellisonscholars/undergraduate-apply/' },
    ],
  },
];

const LinksPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="min-h-screen font-share-tech" style={{ backgroundColor: '#0d0d0d', color: '#d1d5db' }}>
      <div className="max-w-2xl mx-auto px-8 py-16">
        <Link href="/">
          <a className="text-xs tracking-wide text-gray-600 hover:text-gray-400">
            &larr; {tokiPonaMode ? 'tomo' : 'home'}
          </a>
        </Link>

        <h1 className="text-2xl font-share-tech mt-8 mb-2 text-gray-300">
          links
        </h1>
        <p className="text-xs text-gray-600 mb-12">
          things found in the margins of obsidian notes. thematic clusters.
        </p>

        <div className="space-y-2">
          {sections.map((section, i) => (
            <div key={i} className="border border-gray-800 rounded">
              <button
                onClick={() => setOpenSection(openSection === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-900/50 transition-colors"
              >
                <span className="text-sm font-mono" style={{ color: section.color }}>
                  {section.title}
                </span>
                <span className="text-gray-600 text-xs font-mono">
                  {openSection === i ? '−' : `+${section.links.length}`}
                </span>
              </button>

              {openSection === i && (
                <div className="px-4 pb-4 pt-1 border-t border-gray-800">
                  <div className="space-y-1">
                    {section.links.map((link, j) => (
                      <div key={j}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-400 hover:text-gray-200 transition-colors font-mono leading-relaxed block py-0.5"
                        >
                          <span style={{ color: section.color }} className="mr-2 opacity-50">›</span>
                          {link.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-700 mt-16">
          extracted from obsidian vault. last updated feb 2026.
        </p>
      </div>
    </div>
  );
};

export default LinksPage;
