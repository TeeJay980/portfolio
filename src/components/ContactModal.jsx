import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Framer Website',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch (_) {}
  };

  const handleReset = () => { setSubmitted(false); onClose(); };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container (Deep Matte Dark Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto my-auto bg-[#0a0a0a] text-white p-6 sm:p-8 rounded-[32px] sm:rounded-[36px] border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),0_0_80px_rgba(59,130,246,0.14)] z-10 bg-noise"
          >
            {/* Ambient edge glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-all active:scale-95 z-20"
              aria-label="Close modal"
              title="Close (ESC)"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {submitted ? (
              <div className="text-center py-8 relative z-10">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white">Inquiry Received</h3>
                <p className="mt-2 text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Thanks, <span className="font-bold text-white">{formData.name}</span>. I will review your project details and get back to you shortly.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#0c0c0c] hover:bg-neutral-100 font-bold text-xs shadow-md transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-mono font-semibold mb-3">
                    BOOK A PROJECT
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white">Get In Touch</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">Tell me about your product requirements and goals.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Project Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
                    >
                      <option value="Framer Website" className="bg-[#141416] text-white">Framer Website Development</option>
                      <option value="Product Design & SaaS" className="bg-[#141416] text-white">Product Design & SaaS UI/UX</option>
                      <option value="Branding & Identity" className="bg-[#141416] text-white">Branding & Visual Identity</option>
                      <option value="Design System & Consulting" className="bg-[#141416] text-white">Design System & Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Project Brief</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share a brief summary of what you are building..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#0c0c0c] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all mt-2"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
