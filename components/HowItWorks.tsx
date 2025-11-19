import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">HOW IT WORKS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Three steps to Translate Coding Experience to AI
          </h3>
          <p className="text-lg text-slate-600">
            Stop guessing keywords. We act as a scanner for your experience, extracting hidden value from your code and preparing you to defend it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-indigo-200 z-0" aria-hidden="true"></div>
            
            {/* Desktop Arrows for Flow */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-6 z-0 pointer-events-none">
                 <div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1 text-indigo-200">
                    <ChevronRight size={24} />
                 </div>
                 <div className="absolute left-2/3 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1 text-indigo-200">
                    <ChevronRight size={24} />
                 </div>
            </div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-indigo-600">1</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Upload Resume + Optional GitHub Scan</h4>
            <p className="text-slate-600 leading-relaxed">
              Don't know how to list side projects? Connect GitHub (optional). We scan your repos to build an <strong>LLM/AI Engineer</strong> portfolio from history, finding libraries and patterns you forgot.
            </p>
          </div>

          {/* Mobile Connector 1 */}
          <div className="md:hidden flex justify-center items-center -my-6 z-0">
            <ChevronDown className="text-indigo-200" size={32} />
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-indigo-600">2</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Paste the Target Job Description</h4>
            <p className="text-slate-600 leading-relaxed">
              Whether it's MLOps or AI Research, we analyze the gap. We master ATS optimization for technical roles, ensuring your profile matches the specific jargon of the job post.
            </p>
          </div>

          {/* Mobile Connector 2 */}
          <div className="md:hidden flex justify-center items-center -my-6 z-0">
            <ChevronDown className="text-indigo-200" size={32} />
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-indigo-600">3</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Consultation: Quantifying Technical Impact</h4>
            <p className="text-slate-600 leading-relaxed">
              Recruiters need numbers. We ask specific questions to help you with quantifying technical impact, turning "improved speed" into "reduced inference latency by 40%".
            </p>
          </div>
        </div>

        {/* Success Banner */}
        <div className="mt-16 bg-green-50 border border-green-100 rounded-lg p-6 flex items-center justify-center gap-4 shadow-sm">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-green-800 font-semibold">You're almost there! Interview Invitation at Greener</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;