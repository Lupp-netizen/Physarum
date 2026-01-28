import React from 'react';
import Link from 'next/link';
import { useTheme } from './_app';

const BooksPage = () => {
  const { tokiPonaMode } = useTheme() || { tokiPonaMode: false };

  // Different format for books - more like a reading list
  const books = [
    {
      id: 1,
      title: "Aaaa Aaaa Aaaa",
      author: "Aaaa Aaaa",
      year: "2024",
      status: "reading",
      notes: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa..."
    },
    {
      id: 2,
      title: "Aaaa Aaaa Aaaa Aaaa",
      author: "Aaaa Aaaa Aaaa",
      year: "1998",
      status: "finished",
      notes: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa..."
    },
    {
      id: 3,
      title: "Aaaa Aaaa",
      author: "Aaaa",
      year: "2019",
      status: "finished",
      notes: "Aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa..."
    },
    {
      id: 4,
      title: "Aaaa Aaaa Aaaa Aaaa Aaaa",
      author: "Aaaa Aaaa",
      year: "1972",
      status: "want to read",
      notes: ""
    },
    {
      id: 5,
      title: "Aaaa Aaaa Aaaa",
      author: "Aaaa Aaaa Aaaa",
      year: "2021",
      status: "abandoned",
      notes: "Aaaa aaaa aaaa aaaa aaaa aaaa..."
    }
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
