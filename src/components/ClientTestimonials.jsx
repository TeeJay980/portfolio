import React from 'react';
import { CLIENT_LOGOS } from '../data/developerData';

export const ClientTestimonials = () => {
  return (
    <section id="about" className="py-12 sm:py-20 relative bg-spex-bg border-t border-white/[0.08]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Client Logos Strip */}
        <div className="pb-6 sm:pb-8 border-b border-white/[0.08]">
          <p className="text-center text-[11px] font-mono text-spex-muted uppercase tracking-widest mb-4">
            TRUSTED BY TEAMS & PRODUCT FOUNDERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="font-display font-black text-sm sm:text-lg tracking-widest text-slate-400 hover:text-white transition-colors select-none"
              >
                {client.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bio & Philosophy Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Developer Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden spex-card border border-white/15 p-1.5 group">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden bg-spex-surface">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
                  alt="SPURX Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-[10px] font-mono text-spex-volt uppercase tracking-wider">CREATIVE TECHNOLOGIST</div>
                  <h3 className="text-xl font-display font-black text-white mt-0.5">SPURX</h3>
                  <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                    Abuja, Nigeria • Remote Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-spex-surface border border-white/10 text-[11px] font-mono text-spex-muted mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
              PHILOSOPHY
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight leading-tight">
              PERFORMANCE IS A FEATURE. <br />
              <span className="text-spex-volt">
                DESIGN IS THE DIFFERENTIATOR.
              </span>
            </h2>

            <p className="mt-3 text-spex-muted text-xs sm:text-sm leading-relaxed font-normal">
              I bridge aesthetic creative design with bulletproof software engineering. Every web application is crafted with strict type safety, modular architecture, and sub-second Core Web Vitals.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-spex-surface border border-white/[0.08]">
                <div className="text-xs sm:text-sm font-display font-bold text-white">Full-Stack Fluency</div>
                <p className="text-[11px] text-spex-muted mt-0.5">Next.js 15, React, Node.js, Go, PostgreSQL & Redis.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-spex-surface border border-white/[0.08]">
                <div className="text-xs sm:text-sm font-display font-bold text-white">Zero Technical Debt</div>
                <p className="text-[11px] text-spex-muted mt-0.5">Modular TypeScript codebase with automated tests.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
