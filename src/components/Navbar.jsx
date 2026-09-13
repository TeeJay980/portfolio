import React, { useState, useEffect } from 'react';
import { SpurxLogo } from './SpurxLogo';
import { DeviceDetectorBadge } from './DeviceDetectorBadge';
import { X, ArrowUpRight, Github, Mail, MessageCircle, Search } from 'lucide-react';
import { GITHUB_URL, WHATSAPP_URL } from '../config';

export const Navbar = ({ onOpenBooking, onOpenPalette, onOpenEmail }) => {
  const [onHero, setOnHero] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setOnHero(scrollY < 480);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape' && menuOpen) setMenuOpen(false); };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { num: '01', name: 'Works', href: '#projects', desc: 'Full-stack SaaS, MVPs & 3D apps', tag: '6 Projects' },
    { num: '02', name: 'Tech Stack', href: '#skills', desc: 'Next.js 15, TypeScript & Cloud Architecture', tag: 'Core Stack' },
    { num: '03', name: 'Services', href: '#services', desc: 'Full-stack engineering & performance', tag: 'Offerings' },
    { num: '04', name: 'Experience', href: '#experience', desc: 'Track record & past roles', tag: '5+ Years' },
    { num: '05', name: 'About', href: '#about', desc: 'Philosophy & client reviews', tag: 'Reviews' },
  ];

  const isVisible = onHero || menuOpen;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'} ${scrolled ? 'py-3.5 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/[0.07]' : 'py-5 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 z-50 focus:outline-none">
              <SpurxLogo size="md" />
            </a>

            <div className="flex items-center gap-2.5 sm:gap-3 z-50">
              <DeviceDetectorBadge variant="navbar" />

              <button onClick={onOpenPalette} className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-spex-muted hover:text-white border border-white/10 transition-colors" title="Open Command Palette (Cmd + K)">
                <Search className="w-3.5 h-3.5 text-spex-volt" />
                <span className="text-[11px]">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-slate-300">⌘K</kbd>
              </button>

              <button onClick={onOpenBooking} className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-black bg-white hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white">
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button onClick={() => setMenuOpen(!menuOpen)} className={`group flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all duration-300 transform active:scale-95 ${menuOpen ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-[#111218]/90 text-slate-100 border-white/[0.15] hover:border-white hover:text-white'}`} aria-label="Toggle navigation">
                <span className="tracking-widest uppercase text-[11px]">{menuOpen ? 'CLOSE' : 'MENU'}</span>
                <div className="flex flex-col justify-center gap-1.5 w-4 h-4">
                  <span className={`h-[2px] w-full rounded-full transition-all duration-300 ${menuOpen ? 'bg-black rotate-45 translate-y-[4px]' : 'bg-current'}`} />
                  <span className={`h-[2px] w-full rounded-full transition-all duration-300 ${menuOpen ? 'bg-black -rotate-45 -translate-y-[4px]' : 'bg-current'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08080A]/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 pt-24 sm:pt-28 overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between">

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-spex-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-spex-volt animate-pulse" />
                <span>SPURX STUDIO // NAVIGATION</span>
              </span>
              <span className="hidden sm:inline-block">PRESS [ESC] TO CLOSE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-auto py-4">
              {/* Nav links */}
              <div className="lg:col-span-8 flex flex-col space-y-2 sm:space-y-3">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}
                    className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-xs sm:text-sm font-mono text-spex-volt font-bold opacity-80 group-hover:opacity-100">{link.num}</span>
                      <span className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white group-hover:text-spex-volt transition-colors">{link.name}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <span className="text-xs text-spex-muted font-mono hidden md:inline-block group-hover:text-slate-200 transition-colors">{link.desc}</span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10 group-hover:border-spex-volt/40 group-hover:text-spex-volt transition-colors">{link.tag}</span>
                      <ArrowUpRight className="w-4 h-4 text-spex-muted group-hover:text-spex-volt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Right panel */}
              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10 space-y-6">
                <div className="p-6 rounded-2xl bg-spex-surface border border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-spex-volt uppercase tracking-wider font-bold">DIRECT PROPOSAL</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">Need an elite full-stack engineer?</h4>
                  <p className="text-xs text-spex-muted leading-relaxed">Fast turnaround on SaaS MVPs, creative frontends, and high-conversion storefronts.</p>
                  <button onClick={() => { setMenuOpen(false); onOpenBooking(); }} className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white">
                    <span>Launch Project Estimator</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.06] space-y-3">
                  <span className="text-[11px] font-mono text-spex-muted uppercase tracking-wider block">DIRECT EMAIL</span>
                  <button onClick={() => { setMenuOpen(false); onOpenEmail(); }} className="w-full text-left text-xs sm:text-sm font-mono text-white hover:text-spex-volt transition-colors flex items-center justify-between group">
                    <span>Send Email Inquiry</span>
                    <Mail className="w-4 h-4 text-spex-muted group-hover:text-spex-volt" />
                  </button>
                </div>

                <DeviceDetectorBadge variant="overlay" />
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                {[
                  { name: 'GitHub', href: GITHUB_URL },
                  { name: 'WhatsApp', href: WHATSAPP_URL },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'X / Twitter', href: 'https://twitter.com' }
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-spex-muted hover:text-spex-volt transition-colors">{s.name}</a>
                ))}
              </div>
              <div className="text-[11px] font-mono text-spex-muted">SPURX ENGINEERING • ABUJA, NIGERIA</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
