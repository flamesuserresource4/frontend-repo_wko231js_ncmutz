import React from 'react';
import Hero3D from './components/Hero3D';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      <Hero3D />
      <FeatureGrid />
      <HowItWorks />
      <CTASection />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} Autonomous Asset. Built with modern 3D design and secure cloud patterns.
        </div>
      </footer>
    </div>
  );
}

export default App;
