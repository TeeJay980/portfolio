import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const serviceContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const arrowIconVariants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 3,
    y: -3,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
};

export const Services = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-16 sm:py-24 relative bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Category Pill */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-black/[0.07] dark:border-neutral-800 shadow-sm text-xs font-semibold text-[#111] dark:text-neutral-200 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            <span>Services</span>
          </motion.div>

          {/* Section Headline */}
          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-[1.25] tracking-tight text-[#111111] dark:text-white"
          >
            Design solutions that elevate brands and create seamless user experiences. I help bring ideas to life with strategy and creativity
          </motion.h2>
        </div>

        {/* ── 3 Service Cards Grid ── */}
        <motion.div
          variants={serviceContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7"
        >

          {/* ════════ CARD 1: Branding Design ════════ */}
          <motion.div
            variants={serviceCardVariants}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
            className="group relative bg-white dark:bg-neutral-900/90 rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400/80 dark:hover:border-neutral-600 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between cursor-default overflow-hidden"
          >
            <div>
              {/* Top: Title & CTA Button */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111] dark:text-white tracking-tight">
                  Branding Design
                </h3>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenBooking}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-semibold transition-colors duration-150 shadow-sm"
                >
                  <span>Start a Project</span>
                  <motion.span variants={arrowIconVariants} className="inline-block">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                A strong brand is more than just a logo—it&apos;s the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints
              </p>

              {/* Branding Visual Abstract Card */}
              <div className="mt-7 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-700/40 flex flex-col items-center justify-center min-h-[140px] text-center">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-black/[0.05] dark:border-white/10 flex items-center justify-center mb-2.5 text-neutral-800 dark:text-white">
                  <Sparkles className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                </div>
                <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  Identity &amp; Strategy
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">
                  Distinctive creative direction
                </span>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2">
              {['Logo design', 'Brand guideline', 'Brand strategy', '+more'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors duration-150 cursor-pointer select-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>


          {/* ════════ CARD 2: Framer Development ════════ */}
          <motion.div
            variants={serviceCardVariants}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
            className="group relative bg-white dark:bg-neutral-900/90 rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400/80 dark:hover:border-neutral-600 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between cursor-default overflow-hidden"
          >
            <div>
              {/* Top: Title & CTA Button */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111] dark:text-white tracking-tight">
                  Framer Development
                </h3>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenBooking}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-semibold transition-colors duration-150 shadow-sm"
                >
                  <span>Start a Project</span>
                  <motion.span variants={arrowIconVariants} className="inline-block">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Transforming designs into fully responsive, interactive websites with Framer. Whether it&apos;s a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance
              </p>

              {/* Thumbnail Showcase: 3 interactive floating preview images */}
              <div className="mt-7 relative h-[140px] flex items-center justify-center overflow-visible">
                {/* Thumb 1 (Left tilt) */}
                <motion.div
                  initial={{ rotate: -4, y: 0 }}
                  whileHover={{ y: -8, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute left-3 w-28 h-24 rounded-xl overflow-hidden shadow-md border border-black/[0.08] dark:border-white/10 bg-neutral-100 z-10 transition-transform"
                >
                  <img
                    src="/images/luzia_img_8.png"
                    alt="Example work of framer development"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumb 2 (Center) */}
                <motion.div
                  initial={{ rotate: 1, y: -4 }}
                  whileHover={{ y: -10, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute z-20 w-32 h-26 rounded-xl overflow-hidden shadow-lg border border-black/[0.08] dark:border-white/10 bg-neutral-100 transition-transform"
                >
                  <img
                    src="/images/luzia_img_4.webp"
                    alt="Example work of framer development"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumb 3 (Right tilt) */}
                <motion.div
                  initial={{ rotate: 5, y: 2 }}
                  whileHover={{ y: -8, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute right-3 w-28 h-24 rounded-xl overflow-hidden shadow-md border border-black/[0.08] dark:border-white/10 bg-neutral-100 z-10 transition-transform"
                >
                  <img
                    src="/images/luzia_img_9.png"
                    alt="Example work of framer development"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2">
              {['Landing page', 'Multipages', 'Web migration', '+more'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors duration-150 cursor-pointer select-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>


          {/* ════════ CARD 3: UI/UX Design ════════ */}
          <motion.div
            variants={serviceCardVariants}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
            className="group relative bg-white dark:bg-neutral-900/90 rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400/80 dark:hover:border-neutral-600 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between cursor-default overflow-hidden"
          >
            <div>
              {/* Top: Title & CTA Button */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111] dark:text-white tracking-tight">
                  UI/UX Design
                </h3>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenBooking}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-semibold transition-colors duration-150 shadow-sm"
                >
                  <span>Start a Project</span>
                  <motion.span variants={arrowIconVariants} className="inline-block">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability
              </p>

              {/* Thumbnail Showcase: 3 interactive preview mockup thumbnails */}
              <div className="mt-7 relative h-[140px] flex items-center justify-center overflow-visible">
                {/* Thumb 1 (Left tilt) */}
                <motion.div
                  initial={{ rotate: -3, y: 2 }}
                  whileHover={{ y: -8, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute left-3 w-28 h-24 rounded-xl overflow-hidden shadow-md border border-black/[0.08] dark:border-white/10 bg-neutral-100 z-10 transition-transform"
                >
                  <img
                    src="/images/luzia_img_10.png"
                    alt="Example work of ui ux design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumb 2 (Center) */}
                <motion.div
                  initial={{ rotate: 2, y: -4 }}
                  whileHover={{ y: -10, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute z-20 w-32 h-26 rounded-xl overflow-hidden shadow-lg border border-black/[0.08] dark:border-white/10 bg-neutral-100 transition-transform"
                >
                  <img
                    src="/images/luzia_img_11.png"
                    alt="Example work of ui ux design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumb 3 (Right tilt) */}
                <motion.div
                  initial={{ rotate: -2, y: 1 }}
                  whileHover={{ y: -8, scale: 1.05, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="absolute right-3 w-28 h-24 rounded-xl overflow-hidden shadow-md border border-black/[0.08] dark:border-white/10 bg-neutral-100 z-10 transition-transform"
                >
                  <img
                    src="/images/luzia_img_12.png"
                    alt="Example work of ui ux design"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2">
              {['Web & app design', 'Design system', 'Prototyping', '+more'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors duration-150 cursor-pointer select-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;
