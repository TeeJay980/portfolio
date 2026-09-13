import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/developerData';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <Briefcase className="w-3.5 h-3.5 text-neutral-700" />
              <span>EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0c0c0c] tracking-tight">
              Work Experiences
            </h2>
            <p className="text-[#6c7179] text-xs sm:text-sm mt-1 max-w-md leading-relaxed">
              A track record of digital product design, leadership, and craftsmanship.
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 sm:p-7 rounded-[28px] bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#0c0c0c]">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-bold text-neutral-400">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0c0c0c]">
                    {exp.company}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#6c7179] mt-1.5 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </div>
              <div className="text-xs font-mono font-medium text-neutral-500 md:text-right flex-shrink-0">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
