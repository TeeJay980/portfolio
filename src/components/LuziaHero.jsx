import React from 'react';
import { motion } from 'framer-motion';

export const LuziaHero = ({ onOpenEmail }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-end">
      
      {/* Background Soft Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-blue-100/40 via-purple-50/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* 3-Column Layout: Left Headline, Center Cutout Portrait, Right Bio & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end relative">
          
          {/* Left Column (5 cols): Status Badge & Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-5 pb-4 lg:pb-8 z-20"
          >
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-black/[0.06] text-xs font-medium text-[#555555] shadow-sm mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>2 projects left in March</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-display font-bold leading-[1.14] tracking-[-0.03em] text-[#111111]">
              Carter is solving problems through strategic design and compelling visuals
            </h1>
          </motion.div>

          {/* Center Column (4 cols): Cutout Portrait with Smooth Gradient Bottom Blur */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-3 flex justify-center items-end relative z-10 -mb-4 lg:-mb-10"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex justify-center items-end">
              <img
                src="/images/hero_carter.webp"
                onError={(e) => {
                  e.currentTarget.src = 'https://framerusercontent.com/images/yHECzzvtCQT7X8sGipPGW5sEc.webp?width=2400&height=1904';
                }}
                alt="Michael Carter, Digital Product Designer"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)'
                }}
              />
              {/* Bottom Edge Fade Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F3F4F6] via-[#F3F4F6]/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column (3-4 cols): Bio & Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 pb-4 lg:pb-8 flex flex-col items-start lg:items-start z-20"
          >
            <p className="text-sm sm:text-[15px] lg:text-base text-[#4b5563] font-normal leading-[1.65]">
              As a digital product designer with a strong focus on visual design and Framer websites, he collaborates closely with teams to craft seamless, user-centered experiences. A reliable partner in bringing ideas to life
            </p>

            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenEmail}
                className="py-3 px-7 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-sm shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-lg transition-all flex items-center justify-center"
              >
                <span>Email Me</span>
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* "Made in Framer" Badge in bottom right corner */}
      <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-sm text-xs font-semibold text-[#111111]">
        <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
        <span className="text-[11px] font-sans">Made in Framer</span>
      </div>

    </section>
  );
};
