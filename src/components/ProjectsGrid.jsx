import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Gauge, 
  Layers,
  Sparkles
} from 'lucide-react';
import { PROJECTS } from '../data/developerData';

export const ProjectsGrid = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full-Stack SaaS', 'E-Commerce', 'Fintech & Web3', 'Design Systems', 'Developer Tools'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 sm:py-20 relative bg-spex-bg">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spex-surface border border-white/10 text-xs font-mono text-spex-muted mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
              SELECTED WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              FEATURED SOFTWARE & <br className="hidden sm:inline" />
              <span className="text-spex-volt">
                DIGITAL PRODUCTS
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  activeFilter === cat
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-spex-surface text-spex-muted hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spex-Style Projects Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="spex-card rounded-2xl p-4 sm:p-5 border border-white/[0.08] flex flex-col justify-between group shadow-sm hover:border-white/20 transition-all"
            >
              <div>
                {/* Project Image Banner */}
                <div 
                  onClick={() => onSelectProject(project)}
                  className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-spex-surface cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-spex-volt text-black">
                      {project.stats.lighthouse} Performance
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-spex-volt text-black shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-display font-bold text-white group-hover:text-spex-volt transition-colors cursor-pointer truncate"
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-spex-muted">{project.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 line-clamp-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-spex-muted mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-spex-surface text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-spex-surface hover:bg-white/10 text-spex-muted hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-spex-surface hover:bg-spex-volt hover:text-black text-spex-muted transition-colors"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-spex-muted group-hover:text-spex-volt transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
