import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "I struggled with how to list side projects on resume effectively. ApplyGenius scanned my GitHub, found my old PyTorch experiments, and framed them as a solid portfolio. Got an interview at a Series B AI startup.",
    name: "Alex Chen",
    role: "ML Engineer",
    previousRole: "Previously: Backend Engineer, 5 YOE"
  },
  {
    quote: "The hardest part was quantifying technical impact. This tool forced me to dig up the metrics on my API latency work, which ended up being the main talking point in my interview for an MLOps role.",
    name: "Jordan Martinez",
    role: "AI Platform Engineer",
    previousRole: "Previously: Full-Stack Developer, 2 YOE"
  },
  {
    quote: "I used the LLM Engineer interview prep feature to practice explaining my architecture choices. It gave me the confidence to show how my Distributed Systems background is perfect for training large models.",
    name: "Sam Patel",
    role: "Senior ML Engineering Manager",
    previousRole: "Previously: Engineering Director, 12 YOE"
  },
  // Duplicates for visual fullness as per prompt structure implies volume
  {
    quote: "I struggled with how to list side projects on resume effectively. ApplyGenius scanned my GitHub, found my old PyTorch experiments, and framed them as a solid portfolio. Got an interview at a Series B AI startup.",
    name: "Alex Chen",
    role: "ML Engineer",
    previousRole: "Previously: Backend Engineer, 5 YOE"
  },
  {
    quote: "The hardest part was quantifying technical impact. This tool forced me to dig up the metrics on my API latency work, which ended up being the main talking point in my interview for an MLOps role.",
    name: "Jordan Martinez",
    role: "AI Platform Engineer",
    previousRole: "Previously: Full-Stack Developer, 2 YOE"
  },
  {
    quote: "I used the LLM Engineer interview prep feature to practice explaining my architecture choices. It gave me the confidence to show how my Distributed Systems background is perfect for training large models.",
    name: "Sam Patel",
    role: "Senior ML Engineering Manager",
    previousRole: "Previously: Engineering Director, 12 YOE"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Developers who successfully made the pivot
          </h3>
          <p className="text-lg text-slate-600">
            Real users. Real interviews. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col">
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />
              <p className="text-slate-700 italic mb-6 flex-grow">"{t.quote}"</p>
              <div className="mt-auto">
                <h5 className="text-slate-900 font-bold">{t.name}</h5>
                <p className="text-indigo-600 text-sm font-medium">{t.role}</p>
                <p className="text-slate-400 text-xs mt-1">{t.previousRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;