import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Gauge, 
  ArrowUpRight 
} from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenBooking }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto my-auto bg-spex-surface p-6 sm:p-8 rounded-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Prominent High-Contrast Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 shadow-lg backdrop-blur-md"
          aria-label="Close project modal"
          title="Close (ESC)"
        >
          <X className="w-5 h-5 text-white stroke-[2.2]" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-white/10 text-white">
            {project.category}
          </span>
          <span className="text-xs font-mono text-spex-muted">• {project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-spex-volt font-medium mt-1">
          {project.tagline}
        </p>

        {/* Project Image */}
        <div className="my-6 rounded-xl overflow-hidden aspect-video border border-white/10 bg-spex-bg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="p-3.5 rounded-xl bg-spex-bg border border-white/[0.08] text-center">
              <div className="text-xs font-mono text-spex-muted uppercase tracking-wider">{key}</div>
              <div className="text-xl font-mono font-black text-spex-volt mt-0.5">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <h4 className="text-base font-display font-bold text-white">
            Architecture & Engineering Breakdown
          </h4>
          <p>{project.longDescription}</p>
        </div>

        {/* Tech Stack */}
        <div className="my-6 pt-4 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-spex-muted uppercase mb-3">Tech Stack:</div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-spex-bg text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-black shadow-lg flex items-center gap-2 hover:bg-slate-100 transition-all border border-white"
            >
              <ExternalLink className="w-4 h-4 text-black stroke-[2.2]" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-spex-bg border border-white/10 text-slate-300 hover:text-white flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="text-xs sm:text-sm font-semibold text-spex-volt hover:underline flex items-center gap-1"
          >
            Build similar project <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
