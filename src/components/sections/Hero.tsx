"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "../Logo";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text Content pushed to the left */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-4 py-1.5 shadow-sm">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#111111]">
                <Logo variant="text" size="sm" />
                <span>— Web Developer &amp; Spex Intern</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E7E7E5] hidden sm:inline-block" />
              <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-2.5 py-0.5 text-xs font-medium text-[#333333]">
                2 projects left
              </span>
            </div>

            {/* Display Headline with Interning at Spex on next line */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-[-0.025em] text-[#111111] leading-[1.18] mt-6">
              Hi, my name is Terrence mark.
              <br className="hidden sm:inline" />
              <span className="block mt-1 sm:mt-0 font-medium text-[#111111]">
                Interning at Spex.
              </span>
            </h1>

            {/* Subtext / Bio */}
            <p className="text-base sm:text-lg text-[#666665] max-w-xl mt-6 leading-relaxed font-normal">
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

          {/* Right Column: Slot reserved for upcoming picture */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
