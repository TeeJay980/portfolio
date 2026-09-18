import React from 'react';
import { motion } from 'framer-motion';
import {
  sectionContainer,
  sectionItem,
  heroSpring,
  buttonHover,
} from '../lib/motion';

export const LuziaHero = ({ onOpenEmail }) => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F3F4F6]"
      style={{ minHeight: '90vh' }}
    >
      {/* ── Atmospheric background gradients ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(190,210,255,0.42) 0%, transparent 70%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] blur-[90px]"
          style={{ background: 'rgba(116,48,247,0.12)' }}
        />
      </div>

      {/* ── 3-column layout ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full"
        style={{ minHeight: '90vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-end">

          {/* LEFT — Badge + Headline (staggered) */}
          <div className="lg:col-span-4 pb-10 lg:pb-14 z-20 order-2 lg:order-1">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 20,
                delay: 0.15,
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.07] shadow-sm text-xs font-medium text-[#555] mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>2 projects left in March</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.28,
              }}
              className="text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[52px] font-display font-bold leading-[1.1] tracking-[-0.035em] text-[#111111]"
            >
              Carter is solving problems through strategic design and compelling visuals
            </motion.h1>
          </div>

          {/* CENTER — Large portrait rising from below */}
          <div className="lg:col-span-4 flex justify-center items-end z-10 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 140, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 45,
                damping: 14,
                mass: 1.1,
                delay: 0.08,
              }}
              className="relative w-full flex justify-center items-end"
              style={{ maxWidth: '520px' }}
            >
              <img
                src="/images/tj_hero.png"
                alt="TJ - Digital Product Designer"
                className="w-full h-auto object-contain select-none pointer-events-none block drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
                style={{
                  maxHeight: '80vh',
                }}
              />
              {/* Floor fade */}
              <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                  height: '28%',
                  background:
                    'linear-gradient(to top, #F3F4F6 15%, rgba(243,244,246,0.7) 55%, transparent 100%)',
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT — Bio + Email CTA (staggered) */}
          <div className="lg:col-span-4 pb-10 lg:pb-14 flex flex-col items-start z-20 order-3">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.42,
              }}
              className="text-sm sm:text-[15px] text-[#4b5563] font-normal leading-[1.72] max-w-[280px] lg:max-w-xs"
            >
              As a digital product designer with a strong focus on visual design
              and Framer websites, he collaborates closely with teams to craft
              seamless, user-centered experiences. A reliable partner in bringing
              ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 18,
                delay: 0.56,
              }}
              className="mt-7"
            >
              <motion.button
                {...buttonHover}
                onClick={onOpenEmail}
                className="py-3.5 px-8 rounded-full bg-[#111111] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(0,0,0,0.22)] hover:bg-neutral-800 transition-colors"
              >
                Email Me
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── "Made in Framer" badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
        className="absolute bottom-5 right-6 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-sm"
      >
        <svg className="w-3.5 h-3.5 fill-black flex-shrink-0" viewBox="0 0 24 24">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
        <span className="text-[11px] font-sans font-semibold text-[#111]">
          Made in Framer
        </span>
      </motion.div>
    </section>
  );
};
