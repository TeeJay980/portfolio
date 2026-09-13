import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data/developerData';

export const LuziaClientStrip = () => {
  return (
    <section className="py-8 border-y border-black/[0.05] bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8e8e93]">
            Trusted by teams & products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {CLIENT_LOGOS.map((client, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="font-display font-extrabold text-xs sm:text-sm tracking-wider text-neutral-400 hover:text-neutral-900 transition-colors select-none cursor-default"
              >
                {client.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
