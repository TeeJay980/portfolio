"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cardArrowVariants, cardImageVariants, fadeUpVariants, springPreset } from "@/lib/motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F7] text-[#111111] py-16 md:py-24">
      {/* Luzia Container Standard: max-w-[1140px] mx-auto px-6 */}
      <div className="max-w-[1140px] mx-auto px-6 space-y-12">
        {/* Header / Hero Unit */}
        <section className="rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="max-w-2xl space-y-6">
            {/* Secondary Badge / Tag Standard: bg-[#F2F2F0] text-[#333333] rounded-full */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F2F2F0] px-3.5 py-1.5 text-xs font-medium text-[#333333]">
              <span className="flex h-2 w-2 rounded-full bg-[#00C047] animate-pulse" />
              <span>Available for select design & build projects</span>
            </div>

            {/* Typography Standard: Heading #111111 with -0.025em letter-spacing */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] text-[#111111] leading-[1.1]">
              Crafting premium digital products & websites.
            </h1>

            {/* Typography Standard: Subtext #666665 */}
            <p className="text-lg text-[#666665] font-normal leading-relaxed">
              Clean Next.js App Router, Tailwind CSS, TypeScript, and Framer Motion architecture configured to the exact Luzia design system specification.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springPreset}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#222222]"
              >
                <span>Explore Work</span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springPreset}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-6 py-3.5 text-sm font-medium text-[#111111] transition-colors hover:bg-[#F8F8F7]"
              >
                <span>Get in Touch</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Tokens & Specifications Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative rounded-[28px] border border-[#E7E7E5] bg-white p-7 transition-colors duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-medium text-[#333333]">
                  Layout & Viewport
                </span>
                <motion.div variants={cardArrowVariants}>
                  <ArrowUpRight className="h-4 w-4 text-[#666665] group-hover:text-[#111111] transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111] mb-2">
                1140px Grid Standard
              </h3>
              <p className="text-sm text-[#666665] leading-relaxed">
                Constrained container with 24px padding (`px-6`), 28px outer section radius, and 18px inner element radius.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2F2F0] flex items-center justify-between text-xs text-[#666665]">
              <span>Background: #F8F8F7</span>
              <span>Border: #E7E7E5</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative rounded-[28px] border border-[#E7E7E5] bg-white p-7 transition-colors duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-medium text-[#333333]">
                  Typography & Colors
                </span>
                <motion.div variants={cardArrowVariants}>
                  <ArrowUpRight className="h-4 w-4 text-[#666665] group-hover:text-[#111111] transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111] mb-2">
                Plus Jakarta Sans
              </h3>
              <p className="text-sm text-[#666665] leading-relaxed">
                Charcoal headings (`#111111`), neutral subtext (`#666665`), and secondary tags (`#F2F2F0` / `#333333`).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2F2F0] flex items-center justify-between text-xs text-[#666665]">
              <span>Tracking: -0.025em</span>
              <span>Weights: 400-800</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative rounded-[28px] border border-[#E7E7E5] bg-white p-7 transition-colors duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-medium text-[#333333]">
                  Motion Engine
                </span>
                <motion.div variants={cardArrowVariants}>
                  <ArrowUpRight className="h-4 w-4 text-[#666665] group-hover:text-[#111111] transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111] mb-2">
                Framer Motion 12
              </h3>
              <p className="text-sm text-[#666665] leading-relaxed">
                Spring curve preset (350/25/0.8) and cubic-bezier (0.25, 1, 0.5, 1) without transform conflicts.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2F2F0] flex items-center justify-between text-xs text-[#666665]">
              <span>Stiffness: 350</span>
              <span>Damping: 25</span>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
