import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/developerData';

export const LuziaProjects = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-[#0c0c0c]">
              Selected Works
            </h2>
            <p className="text-xs sm:text-sm text-[#6c7179] mt-1">
              Production web applications and live client systems engineered by TeeJay.
            </p>
          </div>
        </div>

        {/* 2-Column Grid with Luzia rounded-[32px] cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[32px] p-4 sm:p-5 border border-black/[0.06] shadow-luzia hover:shadow-luzia-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-md text-[#0c0c0c] border border-black/[0.06] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Live Link Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full bg-black/80 hover:bg-black text-white transition-all transform hover:scale-105 shadow-md active:scale-95"
                    title="Open Live Website"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>

                {/* Project Details */}
                <div className="mt-4 px-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#0c0c0c] group-hover:text-[#6E2CF4] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6c7179] mt-1 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-black/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between px-1">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6E2CF4] hover:underline"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <span className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  View Case Study →
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
