import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../data/developerData';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 relative bg-[#090A0D] border-t border-white/[0.08]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spex-surface border border-white/10 text-xs font-mono text-spex-muted mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
              TRACK RECORD
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              WORK EXPERIENCE
            </h2>
            <p className="text-spex-muted text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
              Leading frontend engineering and full-stack software initiatives.
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-6 sm:space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-2.5 w-3.5 h-3.5 rounded-full bg-spex-bg border-2 border-white/30 group-hover:border-spex-volt group-hover:bg-spex-volt transition-all" />

              <div className="spex-card p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-spex-volt">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-spex-muted">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-spex-volt transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mt-0.5">
                  {exp.company}
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-spex-muted font-normal leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
