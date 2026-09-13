import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Check, 
  Copy, 
  Sparkles,
  Terminal,
  Zap,
  Globe,
  Layers,
  Code2,
  Search
} from 'lucide-react';
import { STATS } from '../data/developerData';
import { GITHUB_URL } from '../config';

const TITLES = [
  'THAT SCALE.',
  'THAT CONVERT.',
  'WITH ZERO BLOAT.',
  'AT LIGHTSPEED.'
];

export const TerminalHero = ({ onOpenBooking, onOpenPalette }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  // Phrase cycling — index + animKey together re-trigger the CSS slideUpIn animation
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % TITLES.length);
      setAnimKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const snippets = {
    profile: `// SPURX Developer Engine
export default {
  architect: 'TeeJay (SPURX)',
  specialization: 'Full-Stack Web Development & Creative Technology',
  coreStack: ['Next.js 15', 'React 19', 'Astro', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Go'],
  standards: {
    lighthouseScore: 100,
    coreWebVitals: 'Optimized',
    accessibility: 'WCAG AAA',
    architecture: 'Modular & Type-Safe'
  },
  async buildExperience(clientVision) {
    const system = await createArchitecture({
      frontend: 'Fluid 60fps Micro-interactions + Server Components',
      backend: 'Distributed microservices with PostgreSQL & Redis',
      delivery: 'Sub-second P95 Latency Worldwide'
    });
    return system.deploy();
  }
};`,
    stack: `// Production Infrastructure Specs
interface SystemMetrics {
  runtime: 'Edge Computing (Cloudflare / Vercel Edge)';
  dataLayer: 'PostgreSQL + Prisma ORM + Redis Cache';
  realtime: 'WebSockets & Server-Sent Events (SSE)';
  security: 'Strict CSP + OAuth 2.0 + RBAC';
  testSuite: 'Automated Vitest & Playwright E2E';
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marqueeWords = [
    'FULL-STACK ARCHITECTURE', 'CREATIVE WEB DEVELOPMENT', 'NEXT.JS 15', 'REACT 19',
    'ASTRO', 'TYPESCRIPT', 'TAILWIND CSS', 'THREE.JS / WEBGL', '100/100 LIGHTHOUSE', 'HIGH-CONVERTING DESIGN'
  ];

  return (
    <section className="relative pt-24 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden">

      {/* Single subtle background orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-spex-volt/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">

        <div className="flex flex-col items-center text-center">
          {/* Short status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spex-surface border border-white/10 text-xs font-mono mb-5 sm:mb-7 text-slate-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-spex-volt animate-pulse" />
            <span className="text-white font-medium">FULL-STACK DEV</span>
            <span className="text-spex-muted">•</span>
            <span className="text-spex-volt font-bold">SPURX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] max-w-4xl text-white">
            BUILDING DIGITAL EXPERIENCES <br className="hidden sm:inline" />
            {/* Fixed-height clip window — phrase slides up into view, never causes layout shift */}
            <span className="block h-[1.2em] mt-1 overflow-hidden">
              <span
                key={animKey}
                className="text-spex-volt inline-flex items-baseline whitespace-nowrap"
                style={{ animation: 'slideUpIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
              >
                <span>{TITLES[phraseIndex]}</span>
                <span className="w-[0.08em] h-[0.85em] bg-spex-volt inline-block ml-[0.1em] animate-pulse" />
              </span>
            </span>
          </h1>

          {/* Concise one-line subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-spex-muted max-w-xl font-normal leading-relaxed">
            Full-stack web apps, design systems, and software products built for performance and scale.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenBooking}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white text-black hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] border border-white active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={onOpenPalette}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all transform hover:-translate-y-0.5 flex items-center gap-2 active:scale-95 shadow-sm"
            >
              <Search className="w-4 h-4 text-white" />
              <span>Explore (⌘K)</span>
            </button>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-3.5 rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-white transition-all active:scale-95"
              title="GitHub (@TeeJay980)"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Code Inspector Card */}
        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
          <div className="spex-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-[#0C0D11] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-spex-volt inline-block" />
                <span className="ml-2 text-xs font-mono text-spex-muted hidden sm:inline-block">spurx.engine.ts</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setActiveTab('profile')} className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${activeTab === 'profile' ? 'bg-white text-black font-semibold' : 'text-spex-muted hover:text-white'}`}>profile.ts</button>
                <button onClick={() => setActiveTab('stack')} className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${activeTab === 'stack' ? 'bg-white text-black font-semibold' : 'text-spex-muted hover:text-white'}`}>infrastructure.ts</button>
                <button onClick={handleCopy} className="p-1.5 rounded-md text-spex-muted hover:text-white transition-colors ml-1" title="Copy">
                  {copied ? <Check className="w-3.5 h-3.5 text-spex-volt" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-[#090A0D] font-mono text-xs sm:text-[13px] text-slate-200 overflow-x-auto leading-relaxed max-h-60 sm:max-h-80 overflow-y-auto">
              <pre className="whitespace-pre"><code>{snippets[activeTab]}</code></pre>
            </div>
            <div className="bg-[#0C0D11] px-4 py-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-spex-muted">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-spex-volt" />
                <span className="text-slate-300">CLEAN ARCHITECTURE • ZERO BLOAT</span>
              </div>
              <div className="text-spex-volt font-bold">100/100 LIGHTHOUSE READY</div>
            </div>
          </div>
        </div>

        {/* Stats — always 4 cols on sm+ */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5">
          {STATS.map((stat, idx) => (
            <div key={idx} className="spex-card p-4 sm:p-5 rounded-2xl border border-white/[0.08] hover:border-spex-volt/40 transition-all group shadow-sm">
              <div className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-spex-volt transition-colors">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-[11px] sm:text-xs text-spex-muted font-mono mt-0.5 line-clamp-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-10 sm:mt-14 py-3 bg-spex-surface border-y border-white/[0.08] overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-8 items-center text-xs font-mono font-bold tracking-widest text-slate-300">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
