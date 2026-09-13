import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE } from '../data/developerData';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF4]" />
              TRACK RECORD
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 tracking-tight">
              Work Experience & Shipped Systems
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1 max-w-md leading-relaxed">
              Production web applications, client systems, and live platforms engineered by TeeJay.
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-neutral-200 ml-3 sm:ml-6 space-y-6 sm:space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-[#F3F4F6] border-2 border-neutral-400 group-hover:border-[#6E2CF4] group-hover:bg-[#6E2CF4] transition-all" />

              <div className="bg-white p-5 sm:p-6 rounded-[24px] border border-black/[0.06] hover:border-black/[0.12] transition-all shadow-luzia">
                
                {/* Top Row: Period, Location & Live Demo Link */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6E2CF4] font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.projectUrl && (
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6E2CF4]/10 hover:bg-[#6E2CF4] text-[#6E2CF4] hover:text-white text-[11px] font-mono font-bold border border-[#6E2CF4]/20 transition-all active:scale-95"
                        title="Open Live App"
                      >
                        <span>Live App</span>
                        <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900 group-hover:text-[#6E2CF4] transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-600 mt-0.5">
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech stack pills */}
                {exp.techStack && (
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-black/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
