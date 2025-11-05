import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and noise overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield size={14} /> Secure, autonomous & scalable
        </span>
        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          An autonomous asset that creates, markets, and monetizes for you
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          A beautiful, secure platform that generates multiple passive income streams with minimal input—
          from product creation to affiliate sales—running 24/7 without manual intervention.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            See how it works
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
