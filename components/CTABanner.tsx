import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Apply to AI Jobs You're Qualified For and Start Landing Interviews
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Your backend experience translates to AI/LLM work. We'll prove it to recruiters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors text-lg">
            Try it Free – No Credit Card Required
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;