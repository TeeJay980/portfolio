import React, { useState, useEffect } from 'react';
import { SpurxLogo } from './SpurxLogo';
import { DeviceDetectorBadge } from './DeviceDetectorBadge';
import {
  ArrowUpRight, Search, Mail, MessageCircle, Github, Layers, Code2,
  Rocket, Clock, Check, ExternalLink, ChevronLeft, ChevronRight,
  Sparkles, Zap, Star, Briefcase, Terminal
} from 'lucide-react';
import { PROJECTS, SERVICES, SKILLS_MATRIX, EXPERIENCE, TESTIMONIALS } from '../data/developerData';
import { GITHUB_URL, WHATSAPP_URL } from '../config';

// Typewriter titles — defined outside component to avoid stale closures
const TITLES = ['THAT SCALE.', 'THAT CONVERT.', 'ZERO BLOAT.', 'AT LIGHTSPEED.'];

export const MobileSinglePageView = ({ onSelectProject, onOpenBooking, onOpenPalette, onOpenEmail }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [projectIndex, setProjectIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  // Phrase cycling — same slide-up approach as desktop
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % TITLES.length);
      setAnimKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = PROJECTS[projectIndex];
  const currentService = SERVICES[serviceIndex];

  return (
    <div className="fixed inset-0 h-[100dvh] w-full bg-spex-bg text-slate-100 flex flex-col justify-between overflow-hidden select-none z-30">

      {/* Header */}
      <header className="flex-shrink-0 px-4 py-2.5 bg-[#08080A]/95 border-b border-white/[0.08] backdrop-blur-xl flex items-center justify-between z-40">
        <SpurxLogo size="sm" />
        <div className="flex items-center gap-2">
          <DeviceDetectorBadge variant="navbar" />
          <button onClick={onOpenPalette} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 active:scale-95" aria-label="Search">
            <Search className="w-3.5 h-3.5 text-white" />
          </button>
          <button onClick={onOpenEmail} className="p-2 rounded-full bg-white text-black hover:bg-slate-100 font-bold active:scale-95 shadow-sm" aria-label="Email">
            <Mail className="w-3.5 h-3.5 text-black stroke-[2.2]" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 w-full p-3 sm:p-4 flex flex-col justify-center relative overflow-hidden">

        {/* TAB: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200 py-1">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-spex-volt animate-pulse" />
                <span>FULL-STACK DEV • ABUJA</span>
              </div>
              <h1 className="text-2xl xs:text-3xl font-display font-black tracking-tight leading-tight mt-2 text-white">
                BUILDING EXPERIENCES <br />
                {/* clip-path clips only vertically — no horizontal text cutoff */}
                <span className="block h-[1.2em]" style={{ clipPath: 'inset(0 -50vw)' }}>
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
              <p className="text-xs text-spex-muted mt-1.5 leading-relaxed line-clamp-2">
                Full-stack apps, design systems & SaaS — built fast, zero bloat.
              </p>
            </div>

            {/* 2 key stats — bigger, more readable */}
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-3 rounded-xl bg-spex-surface border border-white/[0.08] text-center">
                <div className="text-xl font-display font-black text-white">50+</div>
                <div className="text-[10px] font-mono text-spex-muted uppercase mt-0.5">Projects Shipped</div>
              </div>
              <div className="p-3 rounded-xl bg-spex-surface border border-white/[0.08] text-center">
                <div className="text-xl font-display font-black text-spex-volt">5+ Yrs</div>
                <div className="text-[10px] font-mono text-spex-muted uppercase mt-0.5">Experience</div>
              </div>
            </div>

            <div className="space-y-2">
              <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white active:scale-98">
                <span>Start Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={onOpenEmail} className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-1.5 active:scale-98">
                  <Mail className="w-3.5 h-3.5" /><span>Email</span>
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98">
                  <MessageCircle className="w-3.5 h-3.5 fill-white" /><span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB: WORKS */}
        {activeTab === 'works' && (
          <div className="h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">PROJECTS ({projectIndex + 1}/{PROJECTS.length})</span>
              </div>
              <div className="flex items-center gap-1">
                {PROJECTS.map((p, idx) => (
                  <button key={p.id} onClick={() => setProjectIndex(idx)} className={`w-6 h-6 rounded-md overflow-hidden border transition-all ${projectIndex === idx ? 'border-spex-volt scale-110 shadow-[0_0_8px_rgba(231,254,0,0.5)]' : 'border-white/20 opacity-60 hover:opacity-100'}`} title={p.title}>
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div onClick={() => onSelectProject(currentProject)} className="flex-1 my-1.5 rounded-xl bg-spex-surface border border-white/10 overflow-hidden flex flex-col justify-between p-2.5 cursor-pointer group active:scale-[0.99] transition-transform shadow-lg">
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/40 border border-white/10">
                <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-white border border-white/15">{currentProject.category}</div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-spex-volt text-[9px] font-mono font-bold text-black">{currentProject.stats.lighthouse}</div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-mono text-white flex items-center gap-1"><span>Tap to Expand</span><ArrowUpRight className="w-2.5 h-2.5" /></div>
              </div>
              <div className="mt-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-display font-bold text-white line-clamp-1">{currentProject.title}</h3>
                  <p className="text-[11px] text-spex-muted line-clamp-1 mt-0.5">{currentProject.tagline}</p>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {currentProject.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white/5 text-slate-300 border border-white/5">{tech}</span>
                  ))}
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white/10 text-white">+{currentProject.techStack.length - 3}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => onSelectProject(currentProject)} className="py-2 px-3 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-1.5 border border-white active:scale-98">
                <span>View Details</span><ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
              <a href={currentProject.demoUrl} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-1.5 active:scale-98">
                <ExternalLink className="w-3.5 h-3.5" /><span>Live Demo</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB: STACK */}
        {activeTab === 'stack' && (
          <div className="h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold text-white uppercase">TECH STACK</span>
              <span className="text-[9px] font-mono text-spex-volt">100% TYPE-SAFE</span>
            </div>
            <div className="flex-1 my-2 space-y-2 overflow-y-auto pr-1">
              {SKILLS_MATRIX.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-spex-surface border border-white/[0.08]">
                  <div className="text-[11px] font-display font-bold text-white mb-1.5">{cat.category}</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.slice(0, 4).map((s, i) => (
                      <span key={i} className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#090A0D] text-slate-200 border border-white/5">{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-spex-muted text-[10px]">GitHub:</span>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-spex-volt font-bold text-[11px] flex items-center gap-1 hover:underline">
                <span>@TeeJay980</span><ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* TAB: SERVICES */}
        {activeTab === 'services' && (
          <div className="h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
                <span className="text-[10px] font-mono font-bold text-white uppercase">SERVICES ({serviceIndex + 1}/{SERVICES.length})</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setServiceIndex(prev => (prev === 0 ? SERVICES.length - 1 : prev - 1))} className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-90" aria-label="Previous service">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => setServiceIndex(prev => (prev === SERVICES.length - 1 ? 0 : prev + 1))} className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-90" aria-label="Next service">
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex-1 my-2 rounded-xl bg-spex-surface border border-white/10 p-3.5 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-spex-volt text-black uppercase">{currentService.timeline}</span>
                  <span className="text-sm font-mono font-black text-white">From {currentService.priceStarting}</span>
                </div>
                <h3 className="text-base font-display font-bold text-white">{currentService.title}</h3>
                <p className="text-[11px] text-spex-muted mt-1 line-clamp-2">{currentService.tagline}</p>
                <div className="mt-2.5 space-y-1">
                  {currentService.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[10px] text-slate-300">
                      <Check className="w-3 h-3 text-spex-volt mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={onOpenBooking} className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-1.5 border border-white active:scale-98 mt-2">
                <span>Book Inquiry</span><ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
            </div>

            <div className="flex items-center justify-between px-2 text-[10px] font-mono text-spex-muted">
              <span>Need custom requirements?</span>
              <button onClick={onOpenEmail} className="text-white hover:text-spex-volt font-bold underline">Email Draft</button>
            </div>
          </div>
        )}

        {/* TAB: ABOUT */}
        {activeTab === 'about' && (
          <div className="h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold text-white uppercase">TRACK RECORD</span>
              <span className="text-[9px] font-mono text-emerald-400">AVAILABLE FOR HIRE</span>
            </div>

            <div className="flex-1 my-2 space-y-2 overflow-y-auto pr-1">
              <div className="p-3 rounded-xl bg-[#090A0D] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-display font-bold text-white">SPURX (TeeJay)</div>
                  <div className="text-[10px] text-spex-muted font-mono mt-0.5">Abuja, Nigeria • Remote Worldwide</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-spex-surface border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-spex-volt">{exp.period}</span>
                  </div>
                  <div className="text-[10px] text-spex-muted font-mono mt-0.5">{exp.company} • {exp.location}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98">
                <MessageCircle className="w-3.5 h-3.5 fill-white" /><span>WhatsApp</span>
              </a>
              <button onClick={onOpenEmail} className="py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-1.5 border border-white active:scale-98">
                <Mail className="w-3.5 h-3.5 text-black stroke-[2.2]" /><span>Email</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Nav — icon only on xs, icon+label on sm+ */}
      <nav className="flex-shrink-0 bg-[#0C0D12] border-t border-white/10 px-2 py-2 flex items-center justify-around z-40 backdrop-blur-xl">
        {[
          { id: 'overview', label: 'Home', icon: Zap },
          { id: 'works', label: 'Works', icon: Layers },
          { id: 'stack', label: 'Stack', icon: Code2 },
          { id: 'services', label: 'Services', icon: Rocket },
          { id: 'about', label: 'About', icon: Briefcase }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 sm:px-3 rounded-xl transition-all duration-200 active:scale-90 ${isActive ? 'bg-white text-black shadow-md font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-black stroke-[2.4]' : 'text-slate-400'}`} />
              <span className="hidden sm:inline text-[10px] font-mono mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileSinglePageView;
