import React from 'react';

const companies = [
  "Google", "Meta", "OpenAI", "Tesla", "Spotify", "Amazon", "Microsoft", "Apple"
];

const LogoTicker: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div className="text-center mb-6 px-4">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Use ApplyGenius to target AI roles at top-tier tech companies
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-infinite-scroll flex whitespace-nowrap">
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;