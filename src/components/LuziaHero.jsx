import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react';
import { GITHUB_URL, WHATSAPP_URL } from '../config';

export const LuziaHero = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Subtle ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#6E2CF4]/10 via-[#00B4D8]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* Left Column (6 cols): Two-Tone Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.07] text-xs font-semibold text-neutral-800 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold leading-[1.1] tracking-tight text-neutral-900">
              <span className="text-neutral-900">TeeJay</span> <span className="text-neutral-400 font-medium">is building digital products through</span> <span className="text-neutral-900">strategic design</span> <span className="text-neutral-400 font-medium">and</span> <span className="text-neutral-900">high-performance code.</span>
            </h1>
          </motion.div>

          {/* Center Column (3 cols): Portrait with soft bottom fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-200 to-neutral-100 p-1 shadow-luzia group">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
                  alt="TeeJay (SPURX)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    FULL-STACK ARCHITECT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (3 cols): Bio & Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-end"
          >
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Full-Stack Developer & Creative Technologist based in Abuja, crafting modern web applications and SaaS platforms built for scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <button
                onClick={onOpenBooking}
                className="flex-1 py-3 px-5 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenEmail}
                className="py-3 px-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-900 font-bold text-xs sm:text-sm border border-black/[0.08] shadow-sm transition-all flex items-center justify-center gap-1.5 active:scale-95"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-700 hover:text-black border border-black/[0.08] shadow-sm transition-all flex items-center justify-center active:scale-95"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
