"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 sm:space-y-6"
        >
          {/* Top Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-4 py-1.5 shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-[#111111]">
              TJ — Senior Designer &amp; Web Specialist
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E7E7E5] hidden sm:inline-block" />
            <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-2.5 py-0.5 text-xs font-medium text-[#333333]">
              2 projects left
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.025em] text-[#111111] leading-[1.15] max-w-4xl mt-6">
            Hi, my name is Terrence mark. Interning at Spex.
          </h1>

          {/* Subtext / Bio */}
          <p className="text-base sm:text-lg text-[#666665] max-w-2xl mt-6 leading-relaxed font-normal">
            My name is Terrence J. Mark I am 12 years old learning HTML, JS and React, and an upcoming web developer
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#222222] active:scale-[0.97] shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
