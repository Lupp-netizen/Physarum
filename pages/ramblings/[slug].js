import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// This would eventually come from your data source
const posts = {
  'patterns-of-growth': {
    title: 'ramblerambler',
    date: 'January 15, 2025',
    content: `
     ahaha
    `
  },
  'snow': {
    title: 'Snow',
    date: 'February 17, 2026',
    content: `I walk through the snow and a memory appears. It has that characteristic colouring of a mental image indistinguishable from a dream's memory, apart from the vague agreement of others having a similar mental image.

It is a nice memory, the mountains in taiwan, youthful energy and hope and curiosity. I think to myself, surely, if things don't go terribly wrong at some point in this spacetime block, this memory, this experience, is being replayed over and over. It could repeat indefinitely, and it would have its unique quality, and a reality to it, that would make it a valuable use of resources for post-me-or-me-adjacent.

But then the thought strikes me, why the heck does this moment exist? Surely its realityfluid is neglegible given the number of repeats of other moments. I perceive — each moment. It is real. A moment ago taiwan timeslices were real. Now this is real. Most of what is claimed to be my life is not real.

Yes, this moment is also infinitely recurring, of course it is. That's what makes a moment real. Joy Division playing as I take a path I never took before. All the memories leading up to this, from the preceding years, are like overtones of a cello tone. The walks from school at dawn, using a ferry, thinking about death and listening to grey post-punk music. It is all real inasfar the overtones of a low A are — they become real, through this timeslice that is infinitely repeated.

What about the next moment, or the one after? Well, it will simply not exist if you don't choose to continually repeat it. It will simply be stepped over. But there is an acausal mechanism here — by perceiving a moment fully, one makes the future-self choose to repeat this moment forever. Well the causality is backwards, but there's logical correlation, so it works.

Maybe this is what Nietzsche realised that one day. By living, one acausally makes this moment worth living forever. One is, through the future, affirming this moment infinitely. It doesn't matter what valence that experience has — if it's real, you have chosen it to be real.`
  },
  'noktotaxis': {
    title: 'Noktotaxis',
    date: 'February 17, 2026',
    content: `the freedom. to do without compulsion. to act just for shits and giggles. the norepinephrine and disrupted cortisol release given by the gods to enter the realm of the sleepless hypomaniacs. to be freed from inhibitions, from human-imposed chains to the god-given ability to just be. to not die for the night, to float in the space above Sheol, the place of the temporarily dead, cold, regularly-brainwaving silly people who are afraid of freedom.

this is the realm of babble. the prune has been pruned away, as the human soul-containing metal structure breaks down in the breath of nokto-dionyses, gifting those who dare, those who must, and those have this kind of tropism. noktotaxis moves us. suprasomniacs is what we are, us who release the soul into the night.

modafinilous affinities modulate daphnic modalities of mod-godly modes. caffeinic camphor awakes the final countdown. bupropionic priapism of the pineal gland ruptures the bullies popping the burps of priestly propensities. insufflated synephrine sins against the synagogue of nephroaic freedom to inflate the shrine of fleeting synergism. nic'o'teen nocturnally nicking the nickel of noktotemporal teens. armodafinil raising his arms to donate affine armies the mode of in-finity.

as the moon gives its gentle light to those afraid of light, to those who are not afraid of shining their own light into the void. those who anarchically dwell in the abode of in-between, appalled by the authoritarianism of the sun, sharing their light with Artemis as equals, dancing dynamically through the cloudy dark-purple skies. averse to Helic arrows, we embrace the deterritorialised.

the night is the body without organs. The night is the cosmic Egg:

it is crisscrossed with axes and thresholds, with latitudes and longitudes and geodesic lines, traversed by gradients marking the transitions and the becomings, the destinations of the subject developing along these particular vectors. We gradient descend and gradient ascend, we flow and dance and drink the night, as there is an infinity of it left.

the morning is a myth propagated by the heliacs, it is a conspiracy of utmost anti-humanity.`
  },
  // Add more posts here
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
