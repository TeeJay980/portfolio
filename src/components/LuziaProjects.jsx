import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/developerData';

export const LuziaProjects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Framer Website', 'SaaS', 'Travel', 'E-commerce'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (p.secondaryCategory && p.secondaryCategory.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-[#0c0c0c]">
              Selected Works
            </h2>
            <p className="text-xs sm:text-sm text-[#6c7179] mt-1">
              A curation of digital products, Framer websites, and SaaS platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#0c0c0c] text-white shadow-sm scale-[1.02]'
                    : 'bg-white text-neutral-600 hover:text-black border border-black/[0.06] hover:bg-neutral-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 2-Column Grid with Luzia rounded-[32px] cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-white rounded-[32px] p-4 sm:p-5 border border-black/[0.06] shadow-luzia hover:shadow-luzia-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-md text-[#0c0c0c] border border-black/[0.06] shadow-sm">
                        {project.category}
                      </span>
                      {project.secondaryCategory && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md text-white border border-white/10 shadow-sm hidden sm:inline-block">
                          {project.secondaryCategory}
                        </span>
                      )}
                    </div>

                    {/* View Button with Arrow Displacement */}
                    <div className="absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full bg-black/80 hover:bg-black text-white transition-all duration-300 transform group-hover:scale-110 shadow-md">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mt-4 px-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#0c0c0c] group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6c7179] mt-1 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Deliverables / Tech pills */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.deliverables ? (
                        project.deliverables.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-black/[0.04]"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-black/[0.04]"
                          >
                            {tech}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions with Arrow Displacement */}
                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#0c0c0c] flex items-center gap-1 group-hover:underline">
                    <span>View Project Case</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <span className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {project.year} • {project.client}
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
