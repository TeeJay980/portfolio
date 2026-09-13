import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LuziaBentoProof } from '../components/LuziaBentoProof';
import { LuziaClientStrip } from '../components/LuziaClientStrip';
import { DevFooter } from '../components/DevFooter';
import { ArrowUpRight, ShieldCheck, Zap, Code2, Globe, Heart } from 'lucide-react';

export const AboutPage = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <div className="pt-24 sm:pt-32">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/30 via-purple-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ABOUT THE DEVELOPER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#0c0c0c] tracking-tight leading-[1.1]">
              Engineering with <br />
              <span className="text-[#8e8e93] font-normal">taste, precision & scale.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#6c7179] mt-4 leading-relaxed font-normal">
              I am <strong>Terrence J. Mark (TeeJay)</strong>, a Full-Stack Web Developer & Creative Technologist based in Abuja, Nigeria. I specialize in bridging high-aesthetic creative design with rock-solid, production-grade software architecture.
            </p>

            <p className="text-xs sm:text-sm text-[#6c7179] mt-3 leading-relaxed">
              Every system I build is engineered with strict type safety, modular component hierarchies, sub-second Core Web Vitals, and 60fps micro-interactions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEmail}
                className="px-5 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#0c0c0c] border border-black/[0.08] font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>Email Inquiry</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[36px] overflow-hidden bg-white p-2 shadow-luzia border border-black/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
                alt="Terrence J. Mark"
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>

        </div>

      </div>

      <LuziaClientStrip />
      <LuziaBentoProof />
      <ExperienceTimeline />
      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
