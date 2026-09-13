import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Rocket, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/developerData';

export const LuziaServices = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF4]" />
            SERVICES & OFFERINGS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
            How I can help you ship <br />
            <span className="text-neutral-400 font-medium">remarkable software.</span>
          </h2>
        </div>

        {/* 3-Column Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Full-Stack Web Apps (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[28px] p-6 sm:p-7 border border-black/[0.06] shadow-luzia flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900">
                Full-Stack SaaS & Web Apps
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Complete web applications built with Next.js 15, React, Node.js, and secure databases.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-neutral-100">
                {['Next.js 15 & React Full-Stack', 'PostgreSQL, Redis & REST APIs', 'Cloudflare Turnstile Security', 'Sub-second P95 Latency'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-[#6E2CF4] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Book Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Featured Electric Purple Card (#6E2CF4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#6E2CF4] text-white rounded-[28px] p-6 sm:p-7 shadow-purple-glow flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-white/20 text-white border border-white/20">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white text-[#6E2CF4] uppercase tracking-wider">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-white">
                Frontend & UI/UX Architecture
              </h3>
              <p className="text-xs text-white/90 mt-2 leading-relaxed">
                Transform Figma layouts into 60fps micro-interactions, responsive design systems, and fast code.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-white/20">
                {['Pixel-perfect Figma to React', 'Fluid animations & micro-interactions', 'Tailwind CSS design token system', '100% Mobile touch responsiveness'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white">
                    <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/20">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-2xl bg-white text-[#6E2CF4] hover:bg-neutral-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>Book Service</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Rapid Startup MVPs (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[28px] p-6 sm:p-7 border border-black/[0.06] shadow-luzia flex flex-col justify-between group"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 mb-5">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-neutral-900">
                Rapid Startup MVP Builder
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Launch your product to market in 10-14 days with clean code and zero corners cut.
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-neutral-100">
                {['High-velocity delivery for founders', 'Modular architecture ready to scale', 'Integrated auth & databases', 'Vercel / AWS CI/CD deployment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-[#6E2CF4] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Book Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
