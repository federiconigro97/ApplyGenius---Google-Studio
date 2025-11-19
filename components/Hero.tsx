import React from 'react';
import { ArrowRight, CheckCircle, FileText, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase">New Feature</span>
            <span className="text-sm text-indigo-900 font-medium">LLM Engineer Interview Prep Simulator</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Resume Builder for Developers Switching to <span className="text-indigo-600">AI Roles</span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            The only tool specialized in the Backend to AI transition. Create an <span className="font-semibold text-slate-900">LLM/AI Engineer resume</span> that translates your code into the experience recruiters are searching for.
          </p>

          <p className="text-sm font-semibold text-slate-500 mb-6 flex items-center gap-2">
            <CheckCircle className="text-green-500 w-4 h-4" />
            The secret weapon for 1.2k+ engineers breaking into the AI elite
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
              Build My AI Resume Free
            </button>
            <button className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm">
              See How It works
            </button>
          </div>
        </div>

        {/* Visual Content - "Before vs After" Concept */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative rounded-xl bg-white shadow-2xl border border-slate-200 overflow-hidden p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="p-4 bg-slate-50 rounded border border-slate-200 opacity-60">
                        <div className="flex items-center gap-2 mb-3 text-slate-500">
                            <Code2 size={16} />
                            <span className="text-xs font-bold uppercase">Before: Generic Backend</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                            <div className="h-2 bg-slate-300 rounded w-full"></div>
                            <div className="h-2 bg-slate-300 rounded w-5/6"></div>
                            <div className="text-xs text-red-400 font-mono mt-2">"Managed API endpoints..."</div>
                        </div>
                    </div>
                    {/* After */}
                    <div className="p-4 bg-indigo-50 rounded border border-indigo-100 ring-2 ring-indigo-500/20">
                        <div className="flex items-center gap-2 mb-3 text-indigo-600">
                            <FileText size={16} />
                            <span className="text-xs font-bold uppercase">After: AI Engineered</span>
                        </div>
                         <div className="space-y-2">
                            <div className="h-2 bg-indigo-200 rounded w-3/4"></div>
                            <div className="h-2 bg-indigo-200 rounded w-full"></div>
                            <div className="h-2 bg-indigo-200 rounded w-5/6"></div>
                             <div className="text-xs text-indigo-700 font-mono mt-2">"Reduced inference latency by 40% via quantization..."</div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                   <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                        <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                        <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" />
                   </div>
                   <div className="text-sm text-slate-500">
                       <span className="font-bold text-indigo-600">1.2k+</span> Developers Joined
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;