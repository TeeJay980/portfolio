"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { springPreset } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-8"
        >
          {/* Top Pill Bar */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-4 py-1.5 shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-[#111111]">
              Michael Carter, Digital Product Designer
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E7E7E5] hidden sm:inline-block" />
            <span className="rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-medium text-[#333333]">
              2 projects left in March
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-[-0.025em] text-[#111111] leading-[1.08] max-w-4xl">
            Carter is solving problems through strategic design and compelling visuals
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#666665] max-w-[640px] font-normal leading-relaxed">
            Partnering with ambitious founders and engineering teams worldwide to transform complex software products and ideas into refined, high-converting digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="mailto:michael@carterdesign.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springPreset}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#222222]"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springPreset}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-6 py-3.5 text-sm font-medium text-[#111111] transition-colors hover:bg-[#F8F8F7] shadow-sm"
            >
              <span>Book a Call</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
