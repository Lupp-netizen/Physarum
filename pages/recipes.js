import React, { useState } from 'react';
import Link from 'next/link';

const recipes = [
  {
    id: 1,
    title: "savoury intercultural hot fluid",
    content: [
      "take a mug. put in it:",
      "— 1 tsp marmite\n— 1 tsp miso paste\n— 1–2 cloves garlic, crushed",
      "pour boiling water over. stir. drink.",
      "that's it. deeply umami, warming, slightly salty. marmite is british yeast extract; miso is japanese fermented soybean paste. they have no business being combined and yet they work suspiciously well together. the garlic is there because garlic is always correct.",
      "good when you want something warm and savoury but not a meal. also surprisingly hydrating."
    ]
  },
  {
    id: 2,
    title: "bioenergetic ice cream",
    content: [
      "ray peat coconut oil ice cream — a vehicle for fat-soluble things.",
      "base (make an emulsion):\n— coconut oil (solid, ~3-4 tbsp)\n— whole milk (~200ml)\n— milk powder (~2-3 tbsp, for texture and protein)\n— egg yolk (1-2, raw — the lecithin is the emulsifier)\n— sugar (to taste, white is fine, peat doesn't hate sugar)\n\nblend or whisk vigorously until emulsified. freeze in a container, stirring every hour or so until set. no ice cream maker needed.",
      "add whatever fat-soluble things you want dissolved in the coconut oil before emulsifying:\n— vitamin D (5000–10000 IU, dissolve in the warm oil)\n— vitamin E (tocopherols, not tocotrienols ideally)\n— progesterone (if you have it — dissolves readily in fat)\n\nadd these stirred into the final mix:\n— taurine (1–2g)\n— creatine (3–5g)\n— glycine (1–2g)\n— any other water-soluble things you want to take",
      "why coconut oil specifically: it's almost entirely medium-chain saturated fats, which means it oxidises quickly for energy rather than getting stored or undergoing lipid peroxidation. polyunsaturated fats (sunflower, soybean, basically everything in processed food) accumulate in your tissues and generate lipid peroxidation products that suppress mitochondrial function. coconut oil doesn't do this. peat saw this as central — that the chronic unsaturated fat load of modern diets is a primary driver of metabolic dysfunction, because oxidised PUFA competes with glucose for oxidation and loses, leaving you in a low-energy state that cortisol has to compensate for. coconut oil just burns. the egg yolk adds cholesterol (good, needed for steroid hormones including progesterone and vitamin D metabolism), fat-soluble vitamins in their natural context, and lecithin for the emulsion.",
      "the sugar isn't an afterthought. peat was basically alone in defending sugar (specifically sucrose and fructose) at a time when the world was going low-carb. his argument: fructose is the preferred liver fuel for glycogen synthesis, supports thyroid conversion (T4→T3), and doesn't require insulin the way glucose does. the combination of saturated fat + sugar + adequate protein is what he called the anti-stress diet. ice cream is close to optimal on this account.",
      "it tastes like coconut. you can add vanilla or salt to make it more interesting."
    ]
  },
  {
    id: 3,
    title: "tea archive",
    content: []
  },
  {
    id: 4,
    title: "good things (like sugar) are good",
    content: []
  },
];

const RecipesPage = () => {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#1a1612' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide" style={{ color: '#806850' }}>
                &larr; home
              </a>
            </Link>
            <h1 className="text-3xl font-mono mt-8 mb-4" style={{ color: '#c8b8a0' }}>
              recipes
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-12">
            {recipes.map((recipe) => (
              <article key={recipe.id} className="border-b pb-8" style={{ borderColor: 'rgba(200, 184, 160, 0.15)' }}>
                <h2 className="text-xl font-mono mb-4" style={{ color: '#d0c0a8' }}>
                  {recipe.title}
                </h2>

                {recipe.content.length > 0 ? (
                  <div className="space-y-4">
                    {(expanded[recipe.id] ? recipe.content : recipe.content.slice(0, 2)).map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#a09080' }}>
                        {para}
                      </p>
                    ))}
                    {recipe.content.length > 2 && (
                      <button
                        onClick={() => toggle(recipe.id)}
                        className="text-xs hover:underline mt-2"
                        style={{ color: '#907860', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        {expanded[recipe.id] ? '↑ less' : '↓ more'}
                      </button>
                    )}
                  </div>
                ) : (
                  <p className="text-xs" style={{ color: '#4a3a2a' }}>—</p>
                )}
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecipesPage;
