import React from 'react';
import { motion } from 'framer-motion';
import { LuziaProjects } from '../components/LuziaProjects';
import { LuziaWorkflow } from '../components/LuziaWorkflow';
import { DevFooter } from '../components/DevFooter';

export const WorkPage = ({ onSelectProject, onOpenBooking, onOpenEmail }) => {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6E2CF4]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#0c0c0c] tracking-tight leading-[1.1]">
            Selected Works & <br />
            <span className="text-[#8e8e93] font-normal">Shipped Systems.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6c7179] mt-3 leading-relaxed">
            A curation of real-world production web applications, SaaS platforms, and client storefronts.
          </p>
        </motion.div>
      </div>

      <LuziaProjects onSelectProject={onSelectProject} />
      <LuziaWorkflow />
      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
