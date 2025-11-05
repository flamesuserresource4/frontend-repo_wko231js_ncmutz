import React from 'react';
import { Lock, Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Launch your autonomous asset in days, not months
            </h3>
            <p className="mt-3 max-w-2xl text-white/75">
              Get a ready-to-deploy, secure AWS blueprint with infrastructure, automations, and integration playbooks—
              plus a beautiful, user-friendly interface you can customize.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
              >
                <Rocket className="h-4 w-4" /> Start now
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View AWS architecture
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
              <Lock className="h-4 w-4" /> No hidden fees • Usage-based costs • Own your data
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">What you get</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• 3D landing hero and UI kit</li>
              <li>• AWS IaC blueprint (serverless)</li>
              <li>• Affiliate connectors pattern</li>
              <li>• Content generation workflow</li>
              <li>• Security hardening checklist</li>
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-white/70">
              Note: Always comply with affiliate platform terms and applicable laws when automating listings and promotions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
