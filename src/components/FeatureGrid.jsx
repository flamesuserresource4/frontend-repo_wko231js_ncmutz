import React from 'react';
import { Coins, Zap, Server, Shield, Cloud, Settings, Youtube, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Coins className="h-5 w-5" />,
    title: 'Multiple income streams',
    desc: 'Affiliate sales, digital downloads, memberships, and data subscriptions compounding over time.'
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Lightning trading engine',
    desc: 'Low-latency execution, risk controls, and AI-assisted signals for paper/live trading.'
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    title: 'YouTube + AI automation',
    desc: 'Auto-generate scripts, voiceovers, edits, and publish with SEO metadata and scheduling.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Autonomous operations',
    desc: 'Research, create, price, list, promote, and iterate—continuously, with minimal oversight.'
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'AWS-native architecture',
    desc: 'API Gateway, Lambda, DynamoDB, S3, Step Functions, and EventBridge for scale and reliability.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Defense-in-depth security',
    desc: 'Zero-trust IAM, KMS encryption, VPC isolation, WAF, and continuous audit trails.'
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: 'Lean cost model',
    desc: 'Serverless, usage-based spend with autoscaling to keep margins high.'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: 'Pluggable connectors',
    desc: 'Integrate marketplaces and socials via modular adapters and API keys.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Designed for compounding cashflow</h2>
          <p className="mt-3 text-white/70">
            A modern fintech-grade system that creates, lists, promotes, and monetizes assets while learning from every cycle.
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
