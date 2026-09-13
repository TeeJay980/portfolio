import React, { useState } from 'react';
import { SpurxLogo } from './SpurxLogo';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  ArrowUpRight,
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  Globe 
} from 'lucide-react';
import { GITHUB_URL, WHATSAPP_URL } from '../config';

export const DevFooter = ({ onOpenBooking, onOpenEmail }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="relative bg-[#060709] pt-16 sm:pt-24 pb-12 sm:pb-16 border-t border-white/[0.08] overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-spex-volt/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Big CTA Closer Banner */}
        <div className="spex-card p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#111218] to-[#0B0C10] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14 sm:mb-16 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-spex-volt mb-4">
              <span className="w-2 h-2 rounded-full bg-spex-volt animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.1]">
              HAVE A PRODUCT IN MIND? <br />
              <span className="text-spex-volt">LET'S BUILD IT.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-300 font-normal leading-relaxed">
              Available for full-stack engineering, SaaS architecture, web applications, and technical partnerships.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-2xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-slate-100 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.25)] border border-white"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-[0_0_25px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={onOpenEmail}
              className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </button>
          </div>
        </div>

        {/* 4-Column Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Column 1: Brand & Bio (5 cols on lg) */}
          <div className="lg:col-span-4">
            <SpurxLogo size="md" />
            <p className="text-xs sm:text-sm text-spex-muted mt-4 leading-relaxed max-w-sm">
              Full-Stack Web Developer & Creative Technologist crafting modern, high-converting digital experiences with zero technical debt.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Abuja, Nigeria • Remote Worldwide</span>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <a href="#projects" className="hover:text-spex-volt transition-colors inline-block">
                  Featured Works
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-spex-volt transition-colors inline-block">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-spex-volt transition-colors inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-spex-volt transition-colors inline-block">
                  Experience
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-spex-volt transition-colors inline-block">
                  Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Inboxes (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs font-mono text-slate-300">
              <li>
                <button
                  onClick={() => handleCopyEmail('mctjay80@gmail.com')}
                  className="flex items-center gap-2 hover:text-spex-volt transition-colors text-left group w-full"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-spex-volt flex-shrink-0" />
                  <span className="truncate">mctjay80@gmail.com</span>
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-spex-volt ml-auto" />
                  ) : (
                    <Copy className="w-3 h-3 text-spex-muted group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  )}
                </button>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                  <span>+234 809 144 1008</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/[0.06] text-[11px] text-spex-muted flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-spex-volt" />
                <span>Response time: &lt; 2 hours</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Socials (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Socials & Code
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Github className="w-4 h-4" />, name: 'GitHub', href: GITHUB_URL },
                { icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />, name: 'WhatsApp', href: WHATSAPP_URL },
                { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <Twitter className="w-4 h-4" />, name: 'Twitter/X', href: 'https://twitter.com' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-spex-surface border border-white/10 text-slate-300 hover:text-white hover:border-spex-volt/50 hover:bg-white/5 transition-all"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>Request Project Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-spex-muted">
          <div>
            © {new Date().getFullYear()} SPURX (TeeJay). All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline-block text-[11px] text-slate-400">
              100/100 LIGHTHOUSE READY
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-spex-surface border border-white/10 text-spex-muted hover:text-white hover:border-spex-volt transition-all flex items-center gap-1.5"
              title="Back to Top"
            >
              <span className="text-[11px] font-mono font-bold">TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
