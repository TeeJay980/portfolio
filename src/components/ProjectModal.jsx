import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    if (project) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto my-auto bg-white p-6 sm:p-8 rounded-[32px] border border-black/[0.08] shadow-2xl text-neutral-900 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-all active:scale-95"
              aria-label="Close modal"
              title="Close (ESC)"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Project Image Banner */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 mb-6 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-neutral-900 shadow-sm">
                  {project.category}
                </span>
                {project.secondaryCategory && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white shadow-sm">
                    {project.secondaryCategory}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Info */}
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-neutral-500 mt-1">
              {project.client} • {project.year}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#6c7179] leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>

            {/* Deliverables / Scope */}
            {project.deliverables && (
              <div className="mt-5 pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Key Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((del) => (
                    <span
                      key={del}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-black/[0.04]"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <span>View Full Showcase</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => { onClose(); onOpenBooking(); }}
                className="text-xs font-bold text-neutral-900 hover:text-black flex items-center gap-1 transition-colors"
              >
                <span>Book a similar project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
