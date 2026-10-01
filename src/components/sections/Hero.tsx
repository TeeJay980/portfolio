"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Responsive Grid with Interactive Avatar Hover Card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Availability Badge + Main Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 z-20 space-y-4 sm:space-y-6 text-left"
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

            <p className="text-sm sm:text-base text-[#666665] leading-relaxed font-normal max-w-md">
              As a 12-year-old web developer and Spex intern, he collaborates closely with teams to craft seamless, responsive, and user-centered web applications.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#222222] active:scale-[0.97] shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
              >
                <span>Email Me</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile Card with Dark Metallic Transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end items-center relative z-10"
          >
            <div className="group relative w-full max-w-[320px] sm:max-w-[360px] rounded-[24px] border border-[#e2e8f0] bg-white p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[linear-gradient(145deg,#242933_0%,#15181e_100%)] hover:border-white/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.4)] cursor-pointer">
              {/* Target Avatar Frame Ring */}
              <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] rounded-full p-1 bg-white border-[1.5px] border-[#e2e8f0] shadow-[0_4px_12px_rgba(0,0,0,0.06)] mb-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/40 group-hover:bg-transparent group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
                <Image
                  src="/images/tj_portrait.jpg"
                  alt="Terrence J. Mark - Profile Avatar"
                  fill
                  priority
                  className="rounded-full object-cover object-top p-0.5"
                  sizes="170px"
                />
              </div>

              {/* Title & Location */}
              <h2 className="text-lg sm:text-xl font-semibold tracking-[-0.015em] text-[#0f172a] mb-1 transition-colors duration-200 group-hover:text-white">
                Frontend Developer
              </h2>
              <span className="text-xs sm:text-sm font-medium text-[#64748b] transition-colors duration-200 group-hover:text-[#cbd5e1]">
                Abuja, Nigeria
              </span>

              {/* Dynamic Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1 rounded-full bg-[#f1f5f9] text-[#475569] font-semibold tracking-[0.5px] uppercase transition-all duration-200 group-hover:bg-white/15 group-hover:text-[#e2e8f0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C047] group-hover:bg-[#00FF87]" />
                <span>12 y/o • Spex Intern</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
