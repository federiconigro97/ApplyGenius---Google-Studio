import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA in Footer */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your dev experience is enough. We'll prove it.</h2>
          <p className="text-slate-600 mb-8">Join 1,200+ developers making the Backend to AI transition with ApplyGenius.</p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg">
            Try it Free – No Credit Card Required
          </button>
        </div>

        <hr className="border-slate-100 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-xl font-bold text-slate-900 tracking-tight mb-4 block">
              ApplyGenius<span className="text-indigo-600">.ai</span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              The only resume builder designed for the Machine Learning Engineer pivot.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Bootcamps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-8">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            ApplyGenius • Copyright © 2025
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">Terms of service</a>
            <a href="#" className="hover:text-slate-900">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;