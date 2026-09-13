import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Mail, Sparkles, MapPin } from 'lucide-react';
import { GITHUB_URL, WHATSAPP_URL } from '../config';

export const LuziaHero = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Luzia Ambient Top Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-200/40 via-purple-100/25 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* Left Column (6 cols): Signature Two-Tone Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0c0c0c]">
              <span className="text-[#0c0c0c]">TeeJay</span> <span className="text-[#8e8e93] font-normal">is building digital products through</span> <span className="text-[#0c0c0c]">strategic design</span> <span className="text-[#8e8e93] font-normal">and</span> <span className="text-[#0c0c0c]">high-performance code.</span>
            </h1>
          </motion.div>

          {/* Center Column (3 cols): Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-b from-white to-neutral-100 p-1.5 shadow-luzia border border-black/[0.06] group">
              <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
                  alt="TeeJay (SPURX)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/95 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm inline-block">
                    FULL-STACK ARCHITECT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (3 cols): Bio & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-end"
          >
            <p className="text-xs sm:text-sm text-[#6c7179] font-normal leading-relaxed">
              Full-Stack Developer & Creative Technologist based in Abuja, crafting modern web applications and SaaS platforms built for speed and scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="flex-1 py-3 px-5 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEmail}
                className="p-3 rounded-full bg-white hover:bg-neutral-50 text-[#0c0c0c] border border-black/[0.08] shadow-sm transition-all flex items-center justify-center"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-700 hover:text-black border border-black/[0.08] shadow-sm transition-all flex items-center justify-center"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
