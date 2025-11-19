import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import IncludedFeatures from './components/IncludedFeatures';
import CTABanner from './components/CTABanner';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <HowItWorks />
        <Features />
        <IncludedFeatures />
        <CTABanner />
        <Metrics />
        <Testimonials />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;