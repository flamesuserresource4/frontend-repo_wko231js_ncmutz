import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        {/* Top nav */}
        <nav className="mb-10 hidden w-full items-center justify-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#settings" className="hover:text-white">Settings</a>
          <a href="#admin" className="hover:text-white">Admin</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield size={14} /> Secure, autonomous & scalable
        </span>
        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Autonomous crypto-fintech engine for compounding cashflow
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Create and sell products, automate YouTube content, run lightning-fast trading strategies, and scale with
          airtight cloud security—all without extra overhead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            Explore capabilities
            <ArrowRight size={16} />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Rocket size={16} /> Launch your asset
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
