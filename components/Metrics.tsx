import React from 'react';

const Metrics: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-base text-indigo-300 font-semibold tracking-wide uppercase mb-2">METRICS</h2>
           <h3 className="text-3xl font-bold">The numbers don't lie</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl font-extrabold text-white mb-2">78%</div>
            <p className="text-indigo-200 text-lg">Of users land a technical screen within 30 days</p>
          </div>
          <div className="p-6 border-t md:border-t-0 md:border-l border-indigo-800">
            <div className="text-5xl font-extrabold text-white mb-2">2,437+</div>
            <p className="text-indigo-200 text-lg">Backend to AI transitions facilitated</p>
          </div>
          <div className="p-6 border-t md:border-t-0 md:border-l border-indigo-800">
            <div className="text-5xl font-extrabold text-white mb-2">15 min</div>
            <p className="text-indigo-200 text-lg">From upload to Machine Learning Engineer resume</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;