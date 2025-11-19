import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    category: "ARTICLES",
    title: "The Ultimate Guide to the Backend to AI Transition in 2025",
    type: "ARTICLE"
  },
  {
    category: "CASE STUDIES",
    title: "How to Create a Data Scientist Portfolio from GitHub Projects (Even Private Ones)",
    type: "CASE STUDIES"
  },
  {
    category: "CASE STUDIES",
    title: "Quantifying Technical Impact: 5 Metrics AI Recruiters Look For",
    type: "CASE STUDIES"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">BLOG</h2>
          <h3 className="text-3xl font-bold text-slate-900">From our Blog</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full flex flex-col">
                 <div className="h-48 overflow-hidden">
                    <img 
                        src={`https://picsum.photos/800/600?random=${i + 10}`} 
                        alt="Blog Thumbnail" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">{post.category}</span>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                    </h4>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;