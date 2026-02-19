import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const BooksPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  // Different format for books - more like a reading list
  const books = [
    {
      id: 1,
      title: "Gödel, Escher, Bach: An Eternal Golden Braid",
      author: "Douglas Hofstadter",
      year: "1979",
      status: "reading",
      notes: "On strange loops, self-reference, consciousness, and formal systems. One of those books that rearranges your mind's furniture."
    },
    {
      id: 2,
      title: "Harry Potter and the Methods of Rationality",
      author: "Eliezer Yudkowsky",
      year: "2015",
      status: "reading",
      notes: "Fanfic as philosophy of science. Harry as rationalist protagonist navigating magic systematically. Unreasonably good."
    },
    {
      id: 3,
      title: "Thus Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      year: "1883",
      status: "finished",
      notes: "Nietzsche at his most lyrical. The overman, eternal recurrence, will to power — but as poetry, not argument. Worth reading before the secondary literature."
    },
    {
      id: 4,
      title: "Conceptual Mathematics: A First Introduction to Categories",
      author: "F. William Lawvere & Stephen Schanuel",
      year: "1997",
      status: "reading",
      notes: "Category theory from first principles, aimed at people without heavy math background. Lawvere's conceptual clarity is remarkable. Working through this."
    },
    {
      id: 5,
      title: "Stahl's Essential Psychopharmacology",
      author: "Stephen M. Stahl",
      year: "2013",
      status: "reading",
      notes: "The canonical clinical psychopharmacology textbook. Beautifully illustrated. I use it constantly for receptor pharmacology and drug mechanisms."
    },
    {
      id: 6,
      title: "The Precipice: Existential Risk and the Future of Humanity",
      author: "Toby Ord",
      year: "2020",
      status: "finished",
      notes: "The clearest statement of the existential risk case. Less abstract than Bostrom, more empirically grounded. The probability estimates are worth thinking hard about."
    },
    {
      id: 7,
      title: "Thinking Functionally with Haskell",
      author: "Richard Bird",
      year: "2014",
      status: "reading",
      notes: "Rigorous Haskell through mathematical reasoning and equational proofs. Less hand-holding than most Haskell books, more satisfying."
    },
    {
      id: 8,
      title: "Visual Group Theory",
      author: "Nathan Carter",
      year: "2009",
      status: "want to read",
      notes: "Group theory via visual intuition before the formalism. Supposed to be unusually good for building geometric understanding."
    },
    {
      id: 9,
      title: "There Is No Antimemetics Division",
      author: "qntm",
      year: "2021",
      status: "finished",
      notes: "SCP fiction about entities that cannot be remembered. Genuinely epistemically interesting — what does it mean for something to be cognitively invisible? One of the best things I've read."
    },
    {
      id: 10,
      title: "Fanged Noumena: Collected Writings 1987–2007",
      author: "Nick Land",
      year: "2011",
      status: "reading",
      notes: "Land before and during CCRU. Accelerationism, Deleuze-Guattari-as-weapon, hyperstition, the numogram. Dense and rewarding."
    },
    {
      id: 11,
      title: "CCRU Writings 1997–2003",
      author: "CCRU",
      year: "2017",
      status: "reading",
      notes: "The primary source for Lemurian time war mythology, numogrammatic theory, hyperstition. Somewhere between philosophy, horror fiction, and occult manual."
    },
    {
      id: 12,
      title: "Intelligence and Spirit",
      author: "Reza Negarestani",
      year: "2018",
      status: "want to read",
      notes: "Philosophy of mind as Hegelian project — intelligence as something that makes demands on us, not just a property we have. Reputed to be extremely dense."
    },
    {
      id: 13,
      title: "Being and Time",
      author: "Martin Heidegger",
      year: "1927",
      status: "want to read",
      notes: "Dasein, thrownness, being-toward-death. The foundational text of existential phenomenology. I keep deferring this one."
    },
    {
      id: 14,
      title: "Phenomenology of Spirit",
      author: "G.W.F. Hegel",
      year: "1807",
      status: "want to read",
      notes: "The dialectical unfolding of consciousness toward Absolute Knowing. Notorious difficulty. On the list."
    },
    {
      id: 15,
      title: "Probability Theory: The Logic of Science",
      author: "E.T. Jaynes",
      year: "2003",
      status: "want to read",
      notes: "Bayesian probability as extended logic. Jaynes' Maxent formalism and his critique of frequentism. Essential for anyone thinking carefully about inference."
    },
    {
      id: 16,
      title: "Mutual Aid: A Factor of Evolution",
      author: "Peter Kropotkin",
      year: "1902",
      status: "want to read",
      notes: "Kropotkin's counter-argument to social Darwinism — mutual aid, not competition, as the dominant mechanism in evolution. Historically important; also just true."
    },
    {
      id: 17,
      title: "Otherness and Control in the Age of AGI",
      author: "Unknown",
      year: "2024",
      status: "want to read",
      notes: ""
    },
  ];

  const statusColors = {
    'reading': '#4a9eff',
    'finished': '#4ade80',
    'want to read': '#a78bfa',
    'abandoned': '#f87171'
  };

  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: '#fafafa' }}>
      <div className="relative">
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/">
              <a className="text-xs tracking-wide text-gray-400 hover:text-gray-600">
                &larr; {tokiPonaMode ? 'tomo' : 'home'}
              </a>
            </Link>
            <h1 className="text-3xl font-cutive mt-8 mb-4 text-black">
              {tokiPonaMode ? 'lipu' : 'books'}
            </h1>
          </div>
        </header>

        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-6">
            {books.map((book) => (
              <div key={book.id} className="border-l-2 pl-4 py-2" style={{ borderColor: statusColors[book.status] }}>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-base font-mono text-black">
                    {book.title}
                  </h2>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {book.year}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {book.author}
                </div>
                <div className="text-[10px] mt-2 uppercase tracking-wider" style={{ color: statusColors[book.status] }}>
                  {book.status}
                </div>
                {book.notes && (
                  <p className="text-xs text-gray-600 mt-2 italic">
                    {book.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BooksPage;
