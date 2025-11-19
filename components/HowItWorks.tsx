import React from 'react';
import { UploadCloud, FileText, MessageSquare } from 'lucide-react';

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
            Stop guessing keywords. We act as a GitHub repository scanner for resume building, extracting hidden value from your code and preparing you to defend it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-indigo-600">1</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Upload Resume + GitHub Scan</h4>
            <p className="text-slate-600 leading-relaxed">
              Don't know how to list side projects on resume? Connect GitHub. We scan your repos to build a Data Scientist portfolio from GitHub history, finding libraries and patterns you forgot to mention.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-indigo-600">2</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Paste the Target Job Description</h4>
            <p className="text-slate-600 leading-relaxed">
              Whether it's MLOps or AI Research, we analyze the gap. We master ATS optimization for technical roles, ensuring your profile matches the specific jargon of the job post.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-indigo-600">3</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Consultation: Quantifying Technical Impact</h4>
            <p className="text-slate-600 leading-relaxed">
              Recruiters need numbers. We ask specific questions to help you with quantifying technical impact, turning "improved speed" into "reduced inference latency by 40%".
            </p>
          </div>
        </div>

        {/* Success Banner */}
        <div className="mt-16 bg-green-50 border border-green-100 rounded-lg p-6 flex items-center justify-center gap-4 animate-fade-in-up">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-green-800 font-semibold">You're almost there! Interview Invitation at Greener</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;