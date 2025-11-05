import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Blueprint your income streams',
    items: [
      'Define niches and product types (templates, guides, micro-tools, data packs).',
      'Pick affiliate platforms to target (Amazon Associates, ShareASale, niche networks).',
      'Decide monetization mix: affiliate, direct sales, subscriptions.'
    ]
  },
  {
    title: 'Set up the AWS backbone',
    items: [
      'API Gateway + Lambda for stateless microservices (content, pricing, listings).',
      'DynamoDB for event logs, product catalogs, and affiliate link tracking.',
      'S3 for product hosting, assets, and generated media with CloudFront CDN.',
      'EventBridge + Step Functions to orchestrate research → create → list → promote.'
    ]
  },
  {
    title: 'Automate creation and listing',
    items: [
      'Use content generation services for product copy, images, and metadata.',
      'Publish to marketplaces via partner APIs and auto-track approvals.',
      'Spin up landing pages with dynamic content sections from your catalog.'
    ]
  },
  {
    title: 'Promote and optimize',
    items: [
      'Distribute to social channels and newsletters with scheduled posts.',
      'Run lightweight experiments on pricing, thumbnails, and titles.',
      'Continuously reinvest learnings into new product ideas.'
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">
            A clear, step-by-step path to a secure, autonomous income-generating asset you can host on AWS.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-medium">{idx + 1}. {s.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            Get the step-by-step guide
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
