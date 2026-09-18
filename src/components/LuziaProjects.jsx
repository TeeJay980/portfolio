import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/developerData';
import {
  sectionContainer,
  sectionItem,
  fadeUp,
  viewport,
  snappySpring,
  easeOutQuint,
} from '../lib/motion';

export const LuziaProjects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Framer Website', 'SaaS', 'Travel', 'E-commerce'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            (p.secondaryCategory &&
              p.secondaryCategory
                .toLowerCase()
                .includes(activeFilter.toLowerCase()))
        );

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header + filter pills ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
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

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                transition={snappySpring}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${
                  activeFilter === cat
                    ? 'bg-[#0c0c0c] text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-black border border-black/[0.06] hover:bg-neutral-50'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Staggered project grid ── */}
        <motion.div
          layout
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={sectionItem}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                whileHover={{ y: -6 }}
                transition={snappySpring}
                className="bg-white rounded-[32px] p-4 sm:p-5 border border-black/[0.06] shadow-luzia hover:shadow-luzia-hover flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* ── Project image with hover zoom ── */}
                  <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-neutral-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={snappySpring}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Category pill */}
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

                    {/* Arrow badge — displaces on card hover */}
                    <motion.div
                      className="absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full bg-black/80 hover:bg-black text-white shadow-md"
                      whileHover={{ x: 3, y: -3 }}
                      transition={snappySpring}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.div>
                  </div>

                  {/* Project details */}
                  <div className="mt-4 px-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#0c0c0c] group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6c7179] mt-1 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Deliverables / tech pills */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {(project.deliverables
                        ? project.deliverables.slice(0, 3)
                        : project.techStack.slice(0, 3)
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 text-neutral-700 border border-black/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom action row */}
                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#0c0c0c] flex items-center gap-1 group-hover:underline">
                    <span>View Project Case</span>
                    <motion.span
                      whileHover={{ x: 2, y: -2 }}
                      transition={snappySpring}
                      className="inline-flex"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.span>
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
