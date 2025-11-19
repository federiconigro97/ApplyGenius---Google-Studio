import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "How to list side projects on resume for AI roles?",
    answer: "Our optional GitHub repository scanner automatically identifies relevant side projects, analyzes the libraries used (like Pandas or Torch), and frames them as professional experience in your LLM/AI Engineer resume."
  },
  {
    question: "I am a backend dev. Can I really make a Backend to AI transition?",
    answer: "Yes. AI teams need strong engineers for infrastructure, data pipelines, and deployment. We specialize in translating coding experience to AI terms, showing recruiters that your skills in scaling systems are exactly what they need."
  },
  {
    question: "How does your tool handle ATS optimization for technical roles?",
    answer: "Generic tools just stuff keywords. We analyze the specific system architecture description for recruiters required by the job post and ensure your resume matches the semantic meaning, not just the buzzwords."
  },
  {
    question: "Do you offer LLM Engineer interview prep?",
    answer: "Yes. Getting the interview is only half the battle. Our Pro tier includes an interview simulator that helps you practice answering technical questions based on the specific claims in your new resume."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Questions from Developers Pivoting to AI
          </h3>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-8">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;