import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const entries = [
  {
    id: 'codeine',
    title: 'codeine',
    code: `setcpm(48)
$: s("rim sd, hh*6".gain(0.12)).off(1/6, x=>x.speed(1.5)).gain(sine.range(0.025, 0.08)).fast(1.5)
$: s("sd ~ ~ sd ~ ~".speed(1.5).gain(0.1)).fast(0.75)
$: s("rim ~ ~ hh ~ ~".speed(1.5).gain(0.1)).fast(1.5)
$: note("<g1 <<c2 d2> [gb1 eb1] f1*2 g1>>*3".add("<7 4 5>/6")).fast(1.5).gain(0.7).lpf(sine.range(500, 800)).sound("sawtooth")
 .fanchor(0.5).lpq(1.5)
 .ftype("ladder").lpf(perlin.range(400,1800).slow(3))
 .lpenv(-3).lpa(.1).room(.4)
$: note("<[[g3 a3] bb3!2] ~ [[[c4, e3] a3] bb3!2] ~ [[[f3, a3] g3] g3!2] ~ >*6".add("<0 -4 -3>/3"))
 .s("triangle").gain(square.range(0.055, 0.09).fast(0.75)).fast(0.5)
$: note("[e2 d2] f2 g2").gain(0.09)
$: note("<[g4@2 [a4]] [bb4@2 [a4]] [bb4@2 [g4]] <[d5@2 [c5]] [eb5@2 [d5]]>>".speed(square.range(1, 0.5).slow(1.5)).add("<0 4 <5 7>>/8")).fast("<1.5 3>/8")
 .gain(square.range(0.15, saw.range(0.3, 1.7)
 .slow(12)).slow(8)).s("triangle").lpf(sine.range(1500, 2600).slow(1.5)).delay(.35).room(.4).roomsize(7)
$: note("<[g4@2 [a4]] [bb4@2 [a4]] [bb4@2 [g4]] <[d5@2 [c5]] [eb5@2 [d5]]>>".add("<3 7 <7 3>>/8".scale("G:minor"))).fast("<1.5 3>/8")
 .gain(square.range(0.17, saw.range(0.08, 0.3).slow(12)).slow(8)).s("triangle").lpf(900)`,
  },
  {
    id: 'nausea',
    title: 'nausea',
    code: `setcpm(48)
$: s("rim sd, hh*6".gain(0.1)).off(1/6, x=>x.speed(1.5)).gain(sine.range(0.025, 0.07)).fast(1.5)
$: s("sd ~ ~ sd ~ ~".speed(1.5).gain(0.1)).fast(0.75)
$: s("hh ~ ~ hh ~ ~".speed(1.5).gain(0.07)).fast(1.5)
$: note("[a3 ab3 a3] <f3 fb3>".add("<0 -4 -7>/6")).s("triangle").jux(rev).gain(0.7)
$: n("<0 2 4 5 6 7>*6".add("<0 -7>")).scale("A:minor").gain(sine.range(0.02, 0.13).slow(6)).s("triangle")
 .jux(add("<7>")).off(1/6, x=>x.speed(1.5)).room(.5)
$: n("5 ~ ~ 7 ~ ~".add("<0 3 2 4 5 0>/3")).scale("A:minor").gain(0.1)
 .room(.9).off(1/6, x=>x.speed(1.5).gain(0.125)).lpf(saw.range(400, 1000).slow(6))
$: n("5 ~ ~ 7 ~ ~").scale("A:minor").gain(0.05)
 .room(.5).off(1/6, x=>x.speed(1.5).gain(0.1)).lpf(saw.range(400, 800).slow(3)).fast(1.5).delay(.4)
$: n("<[0 1] [0, 3] [4 5] [3, 7]>".add("<4 0>/3")).scale("A:minor").struct(5,12).fast(1.5).gain(.1)`,
  },
  {
    id: 'dust',
    title: 'Dust',
    code: `setcpm(68)
// deep bass drone
$: s("bd*2 ~ rim ~")
  .gain(.8)
  .lpf(200)
  .room(.4)
$: s("rim*8").gain("[.05 0.1]*2").lpf(sine.range(80, 250).slow(4))
$: s("~ ~ ~ marktrees").slow(4).gain(sine.range(0.07, 0.2).slow(4))
// low minor pattern
$: note("<a2 e3 b2 g2>*2".add("<0 0 7 5 7>/5")).punchcard()
  .s("sawtooth")
  .lpf(sine.range(200, 900).slow(8))
  .decay(.2)
  .sustain(.15)
  .gain(.45)
  .room(.4)
$: note("<a2 e3 b2 g2>*2")
  .s("sine")
  .lpf(sine.range(300, 900).slow(8))
  .decay(.2)
  .sustain(.15)
  .gain(.35)
  .room(.4)
//emergent melody
_$: note("<c2@ [a1 b1] c2 [a2 d2] e2 [a2] b2>*2".add("<0 2 4 -1>/4"))
.s("sine sawtooth")
  .lpf(800)
.decay(.3)
  .sustain(.3)
  .gain(saw.range(0.15, 0.6).slow(12))
  .room(.4)
// main melody
$: note("a4 c5 d5 e5 g5 e5 d5 c5".slow(square.range(2, 4).slow(4).add("<0 1>/4")))
  .struct("t(5,8)").ply("<1 2 0.5 1>/4")
  .s("<triangle sawtooth>/3")
  .lpf(perlin.range(80,1200).slow(6))
  .lpenv(-3).lpa(.1).room(.5).fast(1)
  .delay(.3)
  .delaytime(.375)
  .gain(.35)
  .room(.5)
  .pan(sine.range(.3,.7).slow(3))
// chaos layer
$: note("[a3|b3|e4|g4|a4]")
  .struct("t(7,16)")
  .s("sine")
  .lpf(sine.range(500, 800))
  .noise("0.2")
  .decay(.15)
  .gain(sine.range(0.2, 0.6))
  .delay(.5)
  .delaytime(.25)
  .pan(rand)
// synth harmonic
$: note("<a5 e6 b5>".add("<0 -4 -7>/3").slow(4))
  .s("sawtooth")
  .partials([1, 0, 0.4, 0.2, 0.15, 0, 0.0, 0.3])
  ._scope()
  .gain(.12)
  .lpf(800)
  .room(.7)
  .slow(2)
$: note("<e5 b6 b5>".add("<0 -4 -7>/3").slow(4))
  .s("sine")
  .partials([1, 0., 0.4, 0.2, 0.15, 0, 0, 0.3])
  .gain(.08)
  .lpf(600)
  .room(.7)
  .slow(2)
$: note("a2, c3, e4".add("<0 -5 -7>/2").slow(6))
.s("clavisynth")
  .partials([1, 0.15, 0, 0.15, 0, 0.1, 0, 0.1])
  .attack(0.5)
  .sustain(1.2)
  .gain(sine.range(0.5, 1).slow(4))
  .lpf(saw.range(200, 850).slow(6))
  .room(.7)
  .delay(0.5)
  .slow(2)`,
  },
  {
    id: 'neurotic-waiting',
    title: 'Neurotic waiting in the hospital',
    code: `setcpm(55)
$: s("rim sd, hh*8").off(1/8, x=>x.speed(2)).gain(sine.range(0.05, 0.3))
$: note("[[a2 bb2] a2 [d3 bb2] c3]".add("<0 0 5 7>")).off(1/4, x=>x.speed(2).gain(0.75))
.s("triangle").gain(0.55).room(.5).lpf(sine.range(200, 750).slow(3))
$: note("~ eb3 <d4 a4>".slow(square.range(2, 4).slow(8).add("<0 7>/4")))
.struct("t(5,8)").s("triangle").gain(square.range(0.17, 0.27).slow(4))
$: note("~ a4@ [d4 a4] <d5 c5>".add("<0 7 -1 0>/2")).off(1/16, x=>x.speed(2)).struct("t(5,8)").lpf(square.range(600, 1500).slow(2))
  .s("triangle").gain(square.range(0, saw.range(0.15, 0.5)).slow(16))
.lpenv(-2).lpa(.2).room(.7).fast(1).fm("<0.7 <0.9 1.25>>").fmh("<1 <2 <1.5 3>>>").attack("<0.02 <0.04 0.01>>")
$: note("<~ [c4 eb4] ~ a4@>").off(1/4, x=>x.speed(2)).s("gm_xylophone").gain(0.25).lpf(500)
$: note("<c4 <g4 f4 g4> a4>*2").gain(0.2).ply("<1 2 4 2>").s("gm_xylophone").lpf(sine.range(200, 900).slow(2))
$: note("<~ d3! ~ c3>").s("gm_acoustic_guitar_steel").gain(0.2)
$: note("<<f3 <g3 eb3>>, [bb3 [c3 d3]] <c3 a3>>".add("<0 <-1 4 -7>>/4")).s("clavisynth").ply("<0.5 1 2>").gain(sine.range(0.1, 0.2))
  .lpf(saw.range(800, 1200).fast(2)).room(0.5)
.scope().punchcard()`,
  },
];

const TonalMusingsPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="relative min-h-screen flex flex-col">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-6 text-xs">
              <Link href="/">
                <a className="tracking-wide text-gray-600 hover:text-gray-400">
                  &larr; {tokiPonaMode ? 'tomo' : 'home'}
                </a>
              </Link>
              <Link href="/music">
                <a className="tracking-wide text-gray-600 hover:text-gray-400">
                  &larr; {tokiPonaMode ? 'kalama tan selo' : 'music from the Outside'}
                </a>
              </Link>
            </div>
            <h1 className="text-2xl font-mono mt-8 mb-2 text-gray-300">
              {tokiPonaMode ? 'kalama' : 'tonal musings'}
            </h1>
            <p className="text-xs text-gray-600">
              {tokiPonaMode
                ? 'sitelen kalama kepeken strudel'
                : 'pieces written in strudel.cc / tidal cycles'}
            </p>
          </div>
        </header>

        <main className="flex-1 px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-8">
            {entries.map((entry) => (
              <article
                key={entry.id}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-900/50 transition-colors"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <h2 className="text-lg font-mono text-gray-300">{entry.title}</h2>
                  <span className="text-gray-600 text-xs">
                    {expanded === entry.id ? '[ collapse ]' : '[ expand ]'}
                  </span>
                </button>

                {expanded === entry.id && (
                  <div className="px-6 pb-6">
                    <pre
                      className="text-xs leading-relaxed overflow-x-auto p-4 rounded"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        color: '#b0b0b0',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <code>{entry.code}</code>
                    </pre>
                  </div>
                )}
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TonalMusingsPage;
