"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/developerData';
import { ProjectCard } from '../ProjectCard';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
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
            {filteredProjects.map((project) => {
              const tags = [
                project.category,
                ...(project.secondaryCategory ? [project.secondaryCategory] : []),
                ...(project.deliverables ? project.deliverables.slice(0, 1) : [])
              ];

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={sectionItem}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    tags={tags}
                    imageSrc={project.image}
                    onClick={() => onSelectProject && onSelectProject(project)}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedWorks;
