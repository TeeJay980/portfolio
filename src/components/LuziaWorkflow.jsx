import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../data/developerData';
import {
  sectionContainer,
  sectionItem,
  fadeUp,
  viewport,
  snappySpring,
} from '../lib/motion';

export const LuziaWorkflow = () => {
  return (
    <section id="process" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#0a0a0a] text-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.14)] bg-noise">

        {/* Ambient blue aura */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">

          {/* ── Section header ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-xl mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              A structured process <br />
              <span className="text-[#8e8e93] font-normal">designed for speed &amp; quality.</span>
            </h2>
          </motion.div>

          {/* ── Steps grid — staggered ── */}
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5"
          >
            {HOW_IT_WORKS.map((step) => (
              <motion.div
                key={step.step}
                variants={sectionItem}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(255, 255, 255, 0.28)',
                  backgroundColor: 'rgba(20, 20, 24, 0.95)',
                  transition: snappySpring,
                }}
                className="p-5 sm:p-6 rounded-[24px] bg-[#141416] border border-white/[0.07] flex flex-col justify-between shadow-md group cursor-pointer"
              >
                <div>
                  {/* Step number badge */}
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#202024] flex items-center justify-center text-xs font-mono font-bold text-neutral-300 mb-4"
                    whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
                    transition={snappySpring}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-base font-display font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8e8e93] mt-2.5 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
