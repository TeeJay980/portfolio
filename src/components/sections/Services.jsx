import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const hoverProps = {
  whileHover: {
    y: -2,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
};

export const Services = ({ onOpenBooking }) => {
  return (
    <section id="services" className="max-w-[1140px] mx-auto px-6 my-16">
      {/* ── Section Header ── */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E5] text-xs font-medium text-[#111111] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span>Services</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-normal text-[#111111] tracking-[-0.02em] max-w-3xl mt-4 leading-[1.25]">
          Design solutions that elevate brands and create seamless user experiences. I help bring ideas to life with strategy and creativity
        </h2>
      </motion.div>

      {/* ── 3 Stacked Service Blocks ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col gap-4 mt-10"
      >
        {/* ════════ BLOCK 1: Branding Design ════════ */}
        <motion.div
          variants={cardVariants}
          {...hoverProps}
          className="bg-white rounded-[24px] p-8 border border-[#E7E7E5] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-medium text-[#111111] tracking-tight">
              Branding Design
            </h3>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#111111] text-xs font-semibold transition-colors shadow-sm group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[#666665] leading-relaxed max-w-2xl mt-3 font-normal">
            A strong brand is more than just a logo—it&apos;s the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints
          </p>

          {/* Horizontal pill tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Logo design', 'Brand guideline', 'Brand strategy', '+more'].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#333333] rounded-full text-xs px-3 py-1.5 font-medium transition-colors cursor-pointer select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Portrait Thumbnail Showcase */}
          <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
            {['/images/luzia_img_13.png', '/images/luzia_img_14.png', '/images/luzia_img_15.png'].map((imgSrc, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden h-56 sm:h-64 w-40 sm:w-48 border border-[#E7E7E5] flex-shrink-0 bg-[#F2F2F0] shadow-sm hover:scale-[1.02] transition-transform duration-200"
              >
                <img
                  src={imgSrc}
                  alt="Example work of branding design"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>


        {/* ════════ BLOCK 2: Framer Development ════════ */}
        <motion.div
          variants={cardVariants}
          {...hoverProps}
          className="bg-white rounded-[24px] p-8 border border-[#E7E7E5] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-medium text-[#111111] tracking-tight">
              Framer Development
            </h3>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#111111] text-xs font-semibold transition-colors shadow-sm group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[#666665] leading-relaxed max-w-2xl mt-3 font-normal">
            Transforming designs into fully responsive, interactive websites with Framer. Whether it&apos;s a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance
          </p>

          {/* Horizontal pill tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Landing page', 'Multipages', 'Web migration', '+more'].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#333333] rounded-full text-xs px-3 py-1.5 font-medium transition-colors cursor-pointer select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Portrait Thumbnail Showcase */}
          <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
            {['/images/luzia_img_8.png', '/images/luzia_img_4.webp', '/images/luzia_img_9.png'].map((imgSrc, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden h-56 sm:h-64 w-40 sm:w-48 border border-[#E7E7E5] flex-shrink-0 bg-[#F2F2F0] shadow-sm hover:scale-[1.02] transition-transform duration-200"
              >
                <img
                  src={imgSrc}
                  alt="Example work of framer development"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>


        {/* ════════ BLOCK 3: UI/UX Design ════════ */}
        <motion.div
          variants={cardVariants}
          {...hoverProps}
          className="bg-white rounded-[24px] p-8 border border-[#E7E7E5] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-medium text-[#111111] tracking-tight">
              UI/UX Design
            </h3>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#111111] text-xs font-semibold transition-colors shadow-sm group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[#666665] leading-relaxed max-w-2xl mt-3 font-normal">
            Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability
          </p>

          {/* Horizontal pill tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Web & app design', 'Design system', 'Prototyping', '+more'].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#F2F2F0] hover:bg-[#E7E7E5] text-[#333333] rounded-full text-xs px-3 py-1.5 font-medium transition-colors cursor-pointer select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Portrait Thumbnail Showcase */}
          <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
            {['/images/luzia_img_10.png', '/images/luzia_img_11.png', '/images/luzia_img_12.png'].map((imgSrc, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden h-56 sm:h-64 w-40 sm:w-48 border border-[#E7E7E5] flex-shrink-0 bg-[#F2F2F0] shadow-sm hover:scale-[1.02] transition-transform duration-200"
              >
                <img
                  src={imgSrc}
                  alt="Example work of ui ux design"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
