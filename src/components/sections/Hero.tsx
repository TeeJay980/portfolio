"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Logo from "../Logo";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E7E5] bg-white px-4 py-1.5 shadow-sm">
              <Logo variant="text" size="sm" />
              <span className="text-xs sm:text-sm font-medium text-[#111111]">
                — Web Developer &amp; Spex Intern
              </span>
            </div>

            {/* Display Headline */}
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

          {/* Right Column: Hero Portrait Bento Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square rounded-[32px] sm:rounded-[36px] border border-[#E7E7E5] bg-gradient-to-b from-white via-[#F8F8F7] to-[#F1F1EF] p-3 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.03)] group transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
              {/* Inner picture container */}
              <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#F4F4F3]">
                <Image
                  src="/images/tj_portrait.jpg"
                  alt="Terrence J. Mark - Web Developer"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Bottom subtle gradient blend */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#111111]/70 via-[#111111]/20 to-transparent pointer-events-none" />

                {/* Floating Badges inside frame */}
                <div className="absolute bottom-3 sm:bottom-3.5 inset-x-3 sm:inset-x-3.5 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 text-xs font-medium text-[#111111] shadow-sm border border-white/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
                    </span>
                    <span>Terrence J. Mark</span>
                  </div>

                  <span className="rounded-full bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white/95 border border-white/10">
                    12 y/o Developer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
