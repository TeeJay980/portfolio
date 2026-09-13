import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
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

  return (
    <section className="relative pt-24 sm:pt-36 pb-12 sm:pb-20 flex flex-col justify-between overflow-hidden">

      {/* Single subtle background orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-spex-volt/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">

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
            {/* clip-path clips only vertically — no horizontal text cutoff */}
            <span className="block h-[1.2em] mt-1" style={{ clipPath: 'inset(0 -50vw)' }}>
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

        {/* Stats — 4 cols on sm+, 2 cols on mobile */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5">
          {STATS.map((stat, idx) => (
            <div key={idx} className="spex-card p-4 sm:p-5 rounded-2xl border border-white/[0.08] hover:border-spex-volt/40 transition-all group shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-spex-volt transition-colors">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-[11px] sm:text-xs text-spex-muted font-mono mt-0.5 line-clamp-1">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
