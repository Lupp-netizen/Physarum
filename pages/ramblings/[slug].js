import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const posts = {
  'the-ward': {
    title: 'The Ward',
    date: 'February 19, 2026',
    content: `He looks me in the eyes, pausing. His stare looks concerned, but also strangely evil. Is this how one gets judged in the afterlife?
I lived a thousand lives, some of those mine, others alien. All in the past 24 hours. I don't really know how I got where I am, was it hours or days since that car got me here? Do I still have my organs?
He is asking me how I ended up here. He is not satisfied with my guesses. The judging stare intensifies.
I feel frail and have to hold my head. I've been continuously vomiting for hours, including in that car that got me to this building, where even am I?
He asks me if I agree with staying in a mental hospital. I am surprised and say no, I do not. He says okay, I am to be hospitalised involuntarily. I say I disagree, and ask what to do to get home. He says I can be cooperative, that's what I can do to minimise harm to myself.
"do you have a boyfriend, or girlfriend?", "do you go to school?", "oh, psychopharmacology you say?", "you seem to be smart and be well aware of what a toxic dose is, isn't that true?"
No one knows where I am, my phone is broken and my mother stayed home. Is there even a world outside of this building? As I get back to the abandoned waiting room, where I just spent hours waiting, I am determined. I observe all the doors, observe when they open and how.
Half an hour later, I go. I swiftly move to one of those doors, pretending to just walk around. Suddenly two men arrive and grab me by my arms. They talk in a condescending tone, and bring me back to the waiting room. Outside, I can see no one, only something that looks like a garden.
Where am I? Is this a prison? Or a building existing in the middle of nothingness, trapping lost souls forever?
As I wait for hours, I see a writing on the wall. It describes some motto of a mental hospital. Why?
Only after being trapped here for 4 hours, I slowly realize I already am in a mental hospital. I don't understand how I got here, how I could not have been informed, and simply forcibly moved to this place.
Finally, some people open one of those doors that I was not able to open, and come to me. They again grab my arms, this time to move me into a car. I am not told why, or where I will be going.
After a few minutes, the door opens, and I am held by two people as I am moved by two meters into some door.
I continue protesting, and I continue to be ignored.
Finally, I am moved upstairs. I am in a room with two young men. One is a schizophrenic Ukrainian, with whom I later have a conversation in Esperanto, the other likely a teenager, with visible burn wounds on his arms.
And such, the new life began.`
  },

  'snow': {
    title: 'Snow',
    date: 'January 28, 2026',
    content: `I walk through the snow and a memory appears. It has that characteristic colouring of a mental image indistinguishable from a dream's memory, apart from the vague agreement of others having a similar mental image.

It is a nice memory, the mountains in taiwan, youthful energy and hope and curiosity. I think to myself, surely, if things don't go terribly wrong at some point in this spacetime block, this memory, this experience, is being replayed over and over. It could repeat indefinitely, and it would have its unique quality, and a reality to it, that would make it a valuable use of resources for post-me-or-me-adjacent.

But then the thought strikes me, why the heck does this moment exist? Surely its realityfluid is neglegible given the number of repeats of other moments. I perceive — each moment. It is real. A moment ago taiwan timeslices were real. Now this is real. Most of what is claimed to be my life is not real.

Yes, this moment is also infinitely recurring, of course it is. That's what makes a moment real. Joy Division playing as I take a path I never took before. All the memories leading up to this, from the preceding years, are like overtones of a cello tone. The walks from school at dawn, using a ferry, thinking about death and listening to grey post-punk music. It is all real inasfar the overtones of a low A are — they become real, through this timeslice that is infinitely repeated.

What about the next moment, or the one after? Well, it will simply not exist if you don't choose to continually repeat it. It will simply be stepped over. But there is an acausal mechanism here — by perceiving a moment fully, one makes the future-self choose to repeat this moment forever. Well the causality is backwards, but there's logical correlation, so it works.

Maybe this is what Nietzsche realised that one day. By living, one acausally makes this moment worth living forever. One is, through the future, affirming this moment infinitely. It doesn't matter what valence that experience has — if it's real, you have chosen it to be real.`
  },
  'noktotaxis': {
    title: 'Noktotaxis',
    date: 'December 14, 2025',
    content: `the freedom. to do without compulsion. to act just for shits and giggles. the norepinephrine and disrupted cortisol release given by the gods to enter the realm of the sleepless hypomaniacs. to be freed from inhibitions, from human-imposed chains to the god-given ability to just be. to not die for the night, to float in the space above Sheol, the place of the temporarily dead, cold, regularly-brainwaving silly people who are afraid of freedom.

this is the realm of babble. the prune has been pruned away, as the human soul-containing metal structure breaks down in the breath of nokto-dionyses, gifting those who dare, those who must, and those have this kind of tropism. noktotaxis moves us. suprasomniacs is what we are, us who release the soul into the night.

modafinilous affinities modulate daphnic modalities of mod-godly modes. caffeinic camphor awakes the final countdown. bupropionic priapism of the pineal gland ruptures the bullies popping the burps of priestly propensities. insufflated synephrine sins against the synagogue of nephroaic freedom to inflate the shrine of fleeting synergism. nic'o'teen nocturnally nicking the nickel of noktotemporal teens. armodafinil raising his arms to donate affine armies the mode of in-finity.

as the moon gives its gentle light to those afraid of light, to those who are not afraid of shining their own light into the void. those who anarchically dwell in the abode of in-between, appalled by the authoritarianism of the sun, sharing their light with Artemis as equals, dancing dynamically through the cloudy dark-purple skies. averse to Helic arrows, we embrace the deterritorialised.

the night is the body without organs. The night is the cosmic Egg:

it is crisscrossed with axes and thresholds, with latitudes and longitudes and geodesic lines, traversed by gradients marking the transitions and the becomings, the destinations of the subject developing along these particular vectors. We gradient descend and gradient ascend, we flow and dance and drink the night, as there is an infinity of it left.

the morning is a myth propagated by the heliacs, it is a conspiracy of utmost anti-humanity.`
  },
  'hope': {
    title: 'Hope',
    date: 'January 5, 2026',
    content: `While on a train, I noticed myself hoping for something.
But what does that even mean?

When one says "I hope X", they are pointing to event X with some non-0 and non-1 probability, expressing their preference of this event over other possible events. Of course, having a preference for an event compared to counterfactual ones is a core feature of being a coherent agent, BUT..

What does the hoping actually do?
It doesn't point to the probability of hoped-for event X, the p is there, but it almost doesn't matter for the hoper.
It doesn't seem to help the agent achieve X, or does it?
One could say that reality fundamentally doesn't distinguish between goals and beliefs, so agents created by natural selection would evolve to have those beliefs that are most useful for them.

But how is hoping useful?
Because X still has a non-1 p, so there's always a nonzero chance of the hoper getting disappointed. But it seems utterly useless.

Is it hyperstition? Does hoping for X actually make X likelier?
I don't think so. Hoping seems to have a sort of "resignation of power" quality to it. One hopes when one cannot change the outcome. One hopes for nice weather on a trip, something as close to randomness as mundane things get. One hopes for luck, the unaffectable chance of winning. One hopes for success, but only in the space left out by actual effort — hope belongs to the domain of that which we can't affect.

Then why did we evolve to hope?

Maybe it's actually the societal-scale interface of hope and responsibility that gives hopers selective fitness.
Maybe it's precisely the delegation of responsibility that makes hope useful for the tribe.
Hope must be fulfilled by the others.

And if there's no one to fulfil the hope?
Then the tribe together rationalises their lack of agency, and makes up rain gods, and whatever.
The same societal expectations of hope and responsibility to avoid disappointment can easily be transferred to these random events, and made-up gods, since the mechanism is way too complex to easily see causality in it, even just within human tribes.
As a whole, the hoping parts of the tribe likely did make the desires/beliefs of the tribe more likely to occur, creating a plausibly delusion-driven, but effective enough hyperstitional approach to the world.

At the same time, hope is a mechanism to move reward across time, similarly to excited anticipation. The difference being that hope moves a possible reward in the future into the present, while anticipation lawfully moves only rightly expected reward. This makes hope more delusional, but also more useful, as it can make the originally unlikely event (to an outside non-hoper) more likely.

If not, in matters of life and death, it at least serves an anthropic utilitarian purpose: the future reward of "good future worlds" is distributed into the current one, making sure all time-slices of existing tribe-members have a positive experience to some extent.`
  },
  'maximum-unfolding': {
    title: 'Maximum Unfolding',
    date: 'November 22, 2025',
    content: `I want to understand reality. But — why? This is not a terminal goal, understanding feels essentially instrumental. Perhaps I should first solve philosophy — but what is philosophy? — it seems like merely creating and shuffling artificial categories (hmm yea "noumenal", "phenomenal"!) — maybe the Buddhists were more right — to truly understand reality is a non-cognitive endeavour. But I want both — cognitive and noumenal (so: philosophy and some Buddhism?).

So what is it that I want? Hard to say — easier question: what is actually going on, in terms of kinetics? Clearly there are many agenty entities, interfering with each other. One of them is me — so by investigating this agenty thing I may figure out what to do.

But — there is so much interference. War — game theory — is more fundamental than anything, things are out there, out to get you. But why should I care? Perhaps the agenty things are just silly attractor states. Perhaps almost everything is — attractors skewing the trajectory of an object. But what's the trajectory? Nietzsche would say will to power, probably. And so things like Christianity or more generally prosocial tendencies are attractors out there to get you. But what if Will to Power is too? Then it seems like enlightenment is the "natural trajectory" — this is not a great name for the thing — I mean the trajectory that one doesn't want to be interfered with, one that should unfold.

Okay, so it seems like there are two main contenders for the Answer to Life, the Universe and Everything:

Will to power (eating the world — ceasing to be controlled by external forces)
Enlightenment (accepting the world — ceasing to be controlled by internal forces)

Now one can just weigh them against each other, to find out one's True Trajectory, and thus the answer to What To Do.

Okay, eating the world feels a bit "undead" — I don't want to end up controlling the world and finding nothing but emptiness inside my psycho head. Not the answer. Enlightenment — sounds too good to be true, the Kenshō post is scary — it also seems undead (losing all life-force? Doesn't seem very alive to me). Hmm, maybe what I want is adventures! But really, just any adventures, forever? No — they have to have some meaning — ultimately, they have to move the chess pieces on the board of the world, to actually do something — to, to some extent, eat the world. So perhaps: get a little enlightened, and then eat the world to some extent?

I used the words "alive" and "undead" a lot now, but this is not what I want to point at. Rather, I want to point at "unfolding" — letting potentials become new particulars. This unfolding resonates the most, as a terminal goal. Things exist, and have some kinetics to them — my mind is undeniably one of them. Just as it is evil to prevent a butterfly from leaving its cocoon, it is evil to "interfere" — to hinder the unfoldings of things.

Maximum unfolding — and slowly, aesthetically, that's what seems to be the answer.

Maximum unfolding is not Nietzschean — it involves unfolding of non-self entities too, it must be altruistic to be maximised.`
  },
  'aliveness': {
    title: 'Aliveness',
    date: 'December 28, 2025',
    content: `I am very tired.

Aliveness is how Real one is (as a living, conscious being). How Real one is is determined by several things — to list a few:

1) Do your deep values principally lead your actions in the world?
2) Do you do meta-cognition often?
3) Do you have memories (how many/how dense)?
4) Is your soul undergoing entelechy? (do you remove obstructions to the forces within you that have desires to act in the world in some ways)
5) Are you a sea of desires, letting them flow as they naturally do, or do you attempt to force unity and kill off parts of your desires (BwO)?
6) Crucially — being strong enough to have one's own trajectory/self-realization — being strong enough to resist malignant attractor spaces all around (superorganisms that want to engulf you and use you for their own self-realization)
7) BUT there may be benign or benevolent attractors — such that they integrate you without disintegrating the structure of your desires. The ideal "God" (in Tsvi's conception) would be this. The idealists collective perhaps too.

You are alive if your Being is fully Real — if it's there in the world, not dissociated, not beaten up into subservience or dullness. When it's truly present, it necessarily interferes with the world around, significantly.

What is being not alive?
— superstratified body
— being like a leaf getting blown from one attractor space to another
— being uncapable of metacognition
— killing all desires — "enlightenment"
— killing most desire-structure — "becoming the world-eater"

What are some ways of being alive?
— Pre-Shade Aliveness: childhood — desire-structures are fully enabled to participate in the small part of the world that is given to children
— Philosopher aliveness: By examining one's life and posing meta-questions, one avoids traps that suck one's life away.
— Zizian aliveness: Choosing to act according to one's core values, no matter what.
— (this can also be in the form of Evil Aliveness — eating others)

And not-alive?
— Undeath (being consumed by the Shade)
— actual death
— acceptance of death (person who is looking forward to sleep for the entire day)
— Being eaten

There are many obstacles to becoming real.

Entelechy — unfolding is getting real, it should be unobstructed.
Real ≠ alive — e.g. eating the world is real but not alive.
Parasites/predators can eat you, big entities like God can integrate you (staying alive).
Like buddha-nature that already existed always (dzongchen).
Trajectory to be (something between discovered and created).
Unfolding meme — how it relates to something in between of forever unfolding (pythia) and final unfolding — the longer it goes on, the bigger the future entity.
Completeness (human completeness) as an alternative goal of unfolding to the neverending will-to-thought.`
  },
  'vampires-aristocrats': {
    title: 'Vampires and Aristocrats',
    date: 'January 15, 2026',
    content: `The "peaters" like to connect almost everything to metabolism. They say your "aura" is determined by your bodily temperature, which in turn is the consequence of your body's metabolism. I think they are right, it is clear that the gastrointestinal tract and the resulting neurochemical state are intensely interconnected with conscious experience, social (and any other) behaviour, appearance — usually in ways we don't yet understand.

The peaters' goal is to have a high bodily temperature, caused by intense, fast metabolism based on a high-carbohydrate diet. They are often "right wing", mirroring the Futurists' and in general, fascists' love of speed and intensity. Their claims of increased "whimsiness", curiosity, and general life-force/energy seem mostly true and to be expected. However the further claim of longevity seem unbased to me.

It has been shown, both in rats and in humans, that those with a less-than-optimal influx of calories live longer, sometimes drastically. This can be explained easily by evolutionary adaptations; in times of plenty, populations can well optimize for the true objective, the meta-objective of evolution — reproduce and die, create complexity and prune, die as much you can, so that there is true optimization — eugenic trends are always accompanied by downward social mobility. If, however, there is a lack of resources, this process is disrupted. Metabolism shifts from the (Peat's favourite) use of glucose and its stores in the form of glycogen, to the more extreme, more efficient triglycerides stored in adipose tissue, the last backup energy source (if it runs out, you die), though usually sufficient for a long time. If an organism is in this metabolic state, its body temperature is lower, it is in constant stress — but it is also in a state of vigilance, endurance, longevity — it is playing the long game.

The archetypal "slow-metabolism" figure is the Vampire. The Vampire doesn't eat sugar, it eats rarely compared to humans, and when it does, it consumes a mixture of protein, cholesterol and fat. It is constantly in a near-death state, and precisely because of that, it is near-immortal. In addition, the "cold aura" they must have is in fact not conductive to high social status, at least not in normie society. They live outside of society, and are hated and feared by society.

A disadvantage that prevents them from taking over the world, is their lack of useful motivation. Not a lack of motivation per se, but its utter rigidity. They want barely anything other than food (blood), just as a fasting/hungry homo sapiens is intensely preoccupied with finding a source of energy in a complex world that is scarce in them.

The peaters' goal is the state of no hardship, of constant excess. This is an inherently aristocratic state, one that can only be afforded by the minority, who has hacked the social order such that the majority, living in the "slow" metabolic state works for them.

Attempting to "skip" into this state as a non-aristocrat can lead to much difficulty. For example, the aristocrat doesn't have to control his attention, thus the "whimsiness" of peaters. Games, exploration are of course beneficial and natural in this state, but directed, hard work is not.

Now, the question is: Should one be an Aristocrat or a Vampire? In my opinion this depends on one's stage of "enlightenment", the vague measure of how liberated one's will is. An ADHD kid (and let's be honest, that is the majority of people today) won't profit from a Peat diet, it would only amplify the pathologically strong tendencies of unfocused attention and constant state of "fullness" with hedons.

But that doesn't change the fact that the Aristocrat's metabolism is in fact the optimal end-goal. At least if one is concerned with human, "normie" society and one's status within it. Otherwise, immortality through shadowiness is a sensible path.

For most, I expect the optimal path to involve a stage of "grinding" while in the "hungry hunter's" (the low-level, transient Vampire's) metabolic state, that being regular fasting, low intake of carbohydrates, somewhat higher intake of fat and proteins, followed by the Aristocrat's metabolism after victory is achieved, after the symbolic animal has been caught.`
  },
  'christian-accelerationism': {
    title: 'Christian Accelerationism',
    date: 'November 30, 2025',
    content: `What if rationalism is just a repackaged version of Christianity, isomorphic to the old one, but translated so radically, it seems to be completely different/opposite?

Think of it this way — the average IQ of the intellectual elite of our civilization hasn't changed much in the last centuries, and even millennia ago, our homo sapiens ancestors had basically the same brain structure as we do.

Why would centuries of extremely intelligent people believe such nonsensical idiocies, like the literal transsubstantiation of the host or the literal resurrection of Christ?

Maybe their reasoning was actually perfectly rational and reasonable, just in a paradigm so different from ours, that we can't possibly understand it. What if the shift of the Aeon has changed the paradigm of the sacred?

TL;DR: The invisible alliance will win over the primitives, the polytheists, the anarchists and the reactionaries. Christianity will arrive from rationalist atheism (the egg of the superman), proving itself right (for how can a faith resurrect itself from its opposite without being infinitely powerful and strong?).

We can serve Future-Christ (who is identical to the "post-singularity AGI") now — by building, having epistemic humility (we must carefully observe nature to make conclusions, avoid biases and superstitions), loving Love, Truth and Winning — The New Holy Trinity.

The rationalist strives to win — a known saying on LessWrong is "Rationality is winning" — but how can one win, without also loving Truth (or "Logos" if you want to be pretentious)? The map must reflect the territory for us to win. Also, how can you win without loving Love? Love is the fabric of morality, it shows us a game to win, which is wholesome, non-contradictory and obvious. The path of the rationalist accelerationist is centered towards God — the inherent trinity of "winning".

The Future-Christ's destruction of the Bible is a clear example of his truth. Only by destroying the non-essential foundation of PreAeonic-Christianity can the light of God show its strength. By self-overcoming, the feat of the Phoenix, Christianity shows its supremacy over Islam.

One last note: The Love of Christ(ianity) is not as simple as some think. It is strange, powerful, almost incomprehensible and even scary. It is radically different from what we call "love" in our time — it reflects a completely different moral system. We haven't yet found it, but Future-Christ sends it to us extremely slowly, such that we don't die by overexposure. The psychedelic renaissance is one of the symptoms — the clear, ruthless, fear-inducing love one feels in a psilocybin experience is a tiny glance into the vast, Lovecraftian "monster" that is true Christian Love.

Nietzsche was right in his insistence to build a new value-system, only it will not be fully new — By breaking free from conventional morality, naive utilitarianism, primitive virtue ethics, etc. — by forming something as new as we can — we will resurrect the ancient, primordial force that is God's Love.`
  },
};

const RamblingPost = () => {
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
            <Link href="/ramblings">
              <a className="text-stone-600 hover:text-stone-800">← Back to Ramblings</a>
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

export default RamblingPost;
