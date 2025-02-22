import React, { useState, useEffect } from 'react';

const BlogTemplate = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Organic shapes background */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
             style={{animationDuration: '10s'}} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"
             style={{animationDuration: '15s'}} />
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Header */}
        <header className="pt-16 pb-8 px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-light text-stone-800 mb-4">Lupp</h1>
            <p className="text-lg text-stone-600 font-light">
              Exploring cognitive enhancement, rationality, and the patterns of growth
            </p>
          </div>
        </header>

        {/* Blog posts */}
        <main className="px-8 pb-16">
          <div className="max-w-2xl mx-auto space-y-16">
            <article className="prose">
              <h2 className="text-2xl font-light text-stone-800 mb-4">
                On Biological Interventions and Epistemic Enhancement
              </h2>
              <div className="text-sm text-stone-500 mb-4">February 22, 2025</div>
              <p className="text-stone-700 leading-relaxed">
                Initial explorations into the intersection of cognitive enhancement and forecasting accuracy. 
                How might we systematically improve our epistemic capabilities through biological interventions?
              </p>
              <div className="mt-4">
                <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                  Read more →
                </a>
              </div>
            </article>

            <article className="prose">
              <h2 className="text-2xl font-light text-stone-800 mb-4">
                Notes on Agent Foundations
              </h2>
              <div className="text-sm text-stone-500 mb-4">February 20, 2025</div>
              <p className="text-stone-700 leading-relaxed">
                Thoughts on embedded agency, decision theory, and the fundamental nature of intelligence.
                What does it mean to be an agent embedded in the world you're trying to understand?
              </p>
              <div className="mt-4">
                <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                  Read more →
                </a>
              </div>
            </article>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-8 py-8 border-t border-stone-200">
          <div className="max-w-2xl mx-auto text-center text-stone-500 text-sm">
            © 2025 • Built with curiosity and care
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogTemplate;
