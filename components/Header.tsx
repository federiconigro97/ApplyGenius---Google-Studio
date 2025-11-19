import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-slate-900 tracking-tight">
              ApplyGenius<span className="text-primary-600">.ai</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
            <a href="#blog" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Blog</a>
            <button className="text-slate-900 hover:text-primary-600 font-semibold px-4 py-2 transition-colors">
              Log In
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">Pricing</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">Contact</a>
            <a href="#blog" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">Blog</a>
            <button className="w-full text-left block px-3 py-2 text-base font-medium text-primary-600 hover:bg-slate-50 rounded-md">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;