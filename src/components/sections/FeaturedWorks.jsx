import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/developerData';

const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
  hover: { scale: 1.06, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3, transition: { type: 'spring', stiffness: 400, damping: 20 } },
};

export const FeaturedWorks = ({ onSelectProject }) => {
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
      <div className="max-w-[1140px] mx-auto px-6">

        {/* ── Section header + filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-[#111111]">
              Selected Works
            </h2>
            <p className="text-xs sm:text-sm text-[#666665] mt-1">
              A curation of digital products, Framer websites, and SaaS platforms.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeFilter === cat
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-black border border-[#EBEBEA] hover:bg-[#F4F4F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Staggered project grid ── */}
        <motion.div
          layout
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={sectionItem}
                initial="rest"
                animate="rest"
                whileHover="hover"
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-white border border-[#EBEBEA] hover:border-[#D2D2CF] transition-colors duration-300 p-4 sm:p-5 flex flex-col justify-between"
                onClick={() => onSelectProject && onSelectProject(project)}
              >
                <div>
                  {/* ── Project thumbnail container (fixed-height frame) ── */}
                  <div className="w-full h-[320px] md:h-[400px] overflow-hidden rounded-[20px] relative bg-neutral-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      variants={imageVariants}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Category pill */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-md text-[#111111] border border-black/[0.06] shadow-sm">
                        {project.category}
                      </span>
                      {project.secondaryCategory && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md text-white border border-white/10 shadow-sm hidden sm:inline-block">
                          {project.secondaryCategory}
                        </span>
                      )}
                    </div>

                    {/* Arrow badge — moves diagonally on card hover */}
                    <div className="absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full bg-black/80 text-white shadow-md">
                      <motion.div variants={arrowVariants} className="flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="mt-4 px-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666665] mt-1 line-clamp-2 leading-relaxed font-normal">
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
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#F4F4F3] group-hover:bg-[#EAEAE8] text-[#333333] border border-[#EBEBEA] transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom action row */}
                <div className="mt-5 pt-3.5 border-t border-[#EBEBEA] flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#111111] flex items-center gap-1 group-hover:underline">
                    <span>View Project Case</span>
                    <motion.span variants={arrowVariants} className="inline-flex">
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.span>
                  </span>
                  <span className="text-xs font-semibold text-[#888888] group-hover:text-[#111111] transition-colors">
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

export default FeaturedWorks;
