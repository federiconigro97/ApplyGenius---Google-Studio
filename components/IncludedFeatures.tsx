import React from 'react';
import { Languages, Github, Sliders, Briefcase, MessageSquareText, RefreshCw } from 'lucide-react';

const items = [
  {
    icon: Languages,
    title: "Intelligent Translation",
    desc: "We translate coding experience to AI language, mapping your dev skills to ML equivalents."
  },
  {
    icon: Github,
    title: "GitHub Repository Scanner",
    desc: "The only GitHub repository scanner for resume building that finds ML-relevant libraries in your code."
  },
  {
    icon: Sliders,
    title: "ATS Optimization",
    desc: "Real-time scoring and ATS optimization for technical roles to beat the filters."
  },
  {
    icon: Briefcase,
    title: "Portfolio Generation",
    desc: "Turn private repos and side projects into a Data Scientist portfolio from GitHub analysis."
  },
  {
    icon: MessageSquareText,
    title: "Interview Simulator",
    desc: "Dedicated LLM Engineer interview prep to help you explain your pivot narrative."
  },
  {
    icon: RefreshCw,
    title: "3 Free Optimizations/Month",
    desc: "Test the system risk-free. Resets monthly."
  }
];

const IncludedFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">INCLUDED FEATURES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need for the<br />Backend to AI Transition
          </h3>
          <p className="text-lg text-slate-600">
            No hidden fees. Just end-to-end support to frame your experience correctly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-slate-50/50">
              <item.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedFeatures;