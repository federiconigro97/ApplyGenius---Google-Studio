import React from 'react';
import { Server, Target, BrainCircuit, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">HOW WE HELP YOU</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stop Getting Auto-Rejected from AI Roles
          </h3>
          <p className="text-lg text-slate-600">
            Turn your Software Engineer background into an asset, not a liability. Get past the ATS and prepare for the technical screen.
          </p>
        </div>

        <div className="space-y-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-slate-100">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-indigo-50 p-6 rounded-full">
                        <Server className="w-16 h-16 text-indigo-600" />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">FEATURE 1</h4>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">System Architecture Description for Recruiters</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Your backend scaling work is valid <strong>AI infrastructure</strong> experience. We help you write a system architecture description for recruiters that highlights your ability to deploy models at scale.
                    </p>
                    <a href="#" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700">
                        Get started <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center border border-slate-100">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-indigo-50 p-6 rounded-full">
                        <Target className="w-16 h-16 text-indigo-600" />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">FEATURE 2</h4>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Pass the ATS with Intelligent Keyword Matching</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        We don't just stuff keywords. We align your profile with the job description to ensure you pass the ATS optimization for technical roles without sounding like a bot.
                    </p>
                    <a href="#" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700">
                        Get started <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-slate-100">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-indigo-50 p-6 rounded-full">
                        <BrainCircuit className="w-16 h-16 text-indigo-600" />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">FEATURE 3</h4>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">LLM Engineer Interview Prep</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Getting the interview is step one. Our LLM Engineer interview prep module helps you practice defending your new resume points with confidence.
                    </p>
                    <a href="#" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700">
                        Get started <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;