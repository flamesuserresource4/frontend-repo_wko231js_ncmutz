import React from 'react';
import { Coins, Zap, Server, Shield, Cloud, Settings } from 'lucide-react';

const features = [
  {
    icon: <Coins className="h-5 w-5" />,
    title: 'Multiple income streams',
    desc: 'Generate revenue via affiliate marketplaces, digital downloads, lead-gen funnels, and recurring memberships.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Autonomous operations',
    desc: 'Automates product research, content generation, pricing, listing, and promotion—no manual oversight required.'
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'AWS-native architecture',
    desc: 'Orchestrated with Step Functions, Lambda, API Gateway, DynamoDB, S3, and EventBridge for scale and reliability.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Security-first',
    desc: 'IAM least-privilege, KMS encryption, private networking, and audit trails to protect your assets and data.'
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: 'Low cost, high margin',
    desc: 'Serverless compute with usage-based costs keeps overhead minimal while maximizing profit potential.'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: 'Pluggable affiliates',
    desc: 'Integrate with platforms like Amazon Associates, ShareASale, and niche partner APIs using modular connectors.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Designed for compounding cashflow</h2>
          <p className="mt-3 text-white/70">
            A modern fintech-grade system that creates, lists, and sells digital products while reinvesting results into new opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur transition hover:border-white/20 hover:from-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
