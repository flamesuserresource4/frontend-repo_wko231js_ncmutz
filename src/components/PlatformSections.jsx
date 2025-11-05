import React from 'react';
import { Shield, Settings, User, Youtube, Video, Wand2, LineChart, Bot, Database, Lock, Mail, Phone, Send, KeyRound, Cpu } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative w-full bg-slate-950 py-16 text-white">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Badge = ({ icon: Icon, text }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    <Icon className="h-3.5 w-3.5" /> {text}
  </span>
);

const PlatformSections = () => {
  return (
    <div className="w-full">
      {/* About */}
      <Section id="about" title="About the Platform">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
            <p className="text-white/80">
              A secure, autonomous multi-income platform designed to create, market, and monetize digital assets.
              It operates with minimal intervention: researching opportunities, generating products and content,
              listing across marketplaces and affiliates, and reinvesting insights to compound profits.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge icon={Shield} text="Zero-trust security" />
              <Badge icon={Cpu} text="AI-first automation" />
              <Badge icon={Database} text="AWS-native, serverless" />
              <Badge icon={LineChart} text="Profit optimization" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
            <h3 className="text-lg font-medium">Core pillars</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• Autonomous research & product generation</li>
              <li>• Affiliate marketplace publishing</li>
              <li>• YouTube + social content automation</li>
              <li>• Secure payments and account management</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services & Capabilities">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><LineChart className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">Lightning Trading Suite</h4>
            <p className="mt-2 text-sm text-white/80">
              Real-time market data, paper/live trading, strategy backtesting, risk controls, and low-latency execution
              with AI-assisted signals.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Bot className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">AI Product & Copy Generation</h4>
            <p className="mt-2 text-sm text-white/80">Generate ebooks, templates, landing copy, thumbnails, and metadata on autopilot.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Youtube className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">YouTube + AI Automation</h4>
            <p className="mt-2 text-sm text-white/80">Script, voiceover, edit, and publish videos to your channel with smart scheduling and monetization.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Video className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">In-browser Video Editor</h4>
            <p className="mt-2 text-sm text-white/80">Cut, trim, captions, effects, and brand kits with render presets for shorts and long-form.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Settings className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">Affiliate Connectors</h4>
            <p className="mt-2 text-sm text-white/80">Publish and track on Amazon Associates, ShareASale, and niche networks with link analytics.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Lock className="h-5 w-5" /></div>
            <h4 className="text-lg font-medium">Security & Compliance</h4>
            <p className="mt-2 text-sm text-white/80">End-to-end encryption, secrets management, audit logs, and anomaly detection.</p>
          </div>
        </div>
      </Section>

      {/* Demo */}
      <Section id="demo" title="Interactive Demo">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Strategy Sandbox</h4>
            <p className="mt-2 text-sm text-white/80">Select a market, choose indicators, and preview simulated PnL.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900">Run backtest</button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white">View signals</button>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">YouTube Auto-Creator</h4>
            <p className="mt-2 text-sm text-white/80">Generate a script, choose a voice, and render a video with a single click.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900">Create script</button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white">Render preview</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Settings & Profile */}
      <Section id="settings" title="Settings & Profile Management">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
            <h4 className="text-lg font-medium">Profile</h4>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/60">Display name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900">Save changes</button>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Security</h4>
            <div className="mt-3 space-y-3 text-sm">
              <label className="flex items-center justify-between gap-2">
                <span className="text-white/80">2FA authentication</span>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </label>
              <label className="flex items-center justify-between gap-2">
                <span className="text-white/80">Login alerts</span>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </label>
              <button className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white">
                <KeyRound className="h-3.5 w-3.5" /> Rotate API keys
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Admin */}
      <Section id="admin" title="Admin Console">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Users & Roles</h4>
            <p className="mt-2 text-sm text-white/80">Manage access with role-based permissions and audit logs.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Products & Affiliates</h4>
            <p className="mt-2 text-sm text-white/80">Approve listings, track clicks, and optimize conversion funnels.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Security Center</h4>
            <p className="mt-2 text-sm text-white/80">Threat detection, secrets rotation, and compliance reports.</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <form className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-white/60">Name</label>
                  <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs text-white/60">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-3">
                <label className="text-xs text-white/60">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" placeholder="How can we help?" />
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-medium">Reach us</h4>
            <div className="mt-3 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@autonomous-asset.ai</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PlatformSections;
