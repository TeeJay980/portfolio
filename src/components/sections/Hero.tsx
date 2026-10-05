"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Luzia Framer 3-Column / Centered Portrait Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Availability Badge + Main Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 z-20 space-y-4 sm:space-y-6 text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7E7E5] bg-white/90 backdrop-blur-sm px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
              </span>
              <span className="text-xs font-medium text-[#333333]">
                Available for projects
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-0.03em] text-[#111111] leading-[1.14]">
              Terrence is solving problems through{" "}
              <span className="font-medium text-[#111111]">
                clean code and modern web design
              </span>
            </h1>
          </motion.div>

          {/* Center Column: Prominent Portrait Cutout (Luzia Framer Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center items-center relative z-10 -my-4 sm:-my-6 lg:-my-8"
          >
            <div className="relative w-[270px] sm:w-[320px] md:w-[360px] aspect-[3/4] max-h-[470px]">
              {/* Main Cutout Portrait Seamlessly Blended on Page Canvas */}
              <Image
                src="/images/tj_hero.png"
                alt="Terrence J. Mark - Web Developer"
                fill
                priority
                className="object-contain object-top select-none pointer-events-none"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Bottom Soft Gradient Mask to blend torso seamlessly into page background */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F8F8F7] via-[#F8F8F7]/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Bio Summary + Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 z-20 space-y-6 text-left lg:text-left flex flex-col lg:items-start justify-center"
          >
            <p className="text-sm sm:text-base text-[#666665] leading-relaxed font-normal max-w-md">
              As a 12-year-old web developer and Spex intern, I collaborate closely with teams to craft seamless, responsive, and user-centered web applications. I partner in bringing digital ideas to life.
            </p>

            <div className="pt-1">
              <a
                href="mailto:mctjay80@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#222222] active:scale-[0.97] shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
              >
                <span>Email Me</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

