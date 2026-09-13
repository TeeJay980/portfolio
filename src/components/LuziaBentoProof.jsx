import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/developerData';

export const LuziaBentoProof = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Performance Benchmarking (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 bg-white rounded-[28px] p-6 border border-black/[0.06] shadow-luzia flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-extrabold text-neutral-900">
                100/100 Lighthouse
              </h3>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Zero-bloat engineering standards. Sub-second Core Web Vitals and 60fps responsive interfaces across every breakpoint.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Audited & Verified
              </span>
              <span>P95 &lt; 40ms</span>
            </div>
          </motion.div>

          {/* Card 2: Dark Engineering Philosophy (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 bg-neutral-950 text-white rounded-[28px] p-6 border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#6E2CF4]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="p-3 w-fit rounded-2xl bg-white/10 text-white border border-white/10 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-display font-extrabold text-white">
                Zero Technical Debt
              </h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Clean, modular TypeScript architecture, strict type safety, automated tests, and production security with Cloudflare Turnstile.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-[#6E2CF4] font-bold">TYPE-SAFE SPEC</span>
              <span>SCALABLE CODE</span>
            </div>
          </motion.div>

          {/* Card 3: Metrics Stack (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-[28px] p-6 border border-black/[0.06] shadow-luzia flex flex-col justify-between"
          >
            <div className="space-y-4 my-auto">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-600">Shipped Projects</span>
                <span className="text-xl font-display font-black text-neutral-900">50+</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-600">Years Experience</span>
                <span className="text-xl font-display font-black text-[#6E2CF4]">5+ Yrs</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-600">Core Web Vitals</span>
                <span className="text-xl font-display font-black text-emerald-600">100/100</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
