import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WHATSAPP_URL } from '../config';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App (SaaS)',
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
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto my-auto bg-white p-6 sm:p-8 rounded-[32px] border border-black/[0.08] shadow-2xl text-neutral-900 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-all active:scale-95"
              aria-label="Close modal"
              title="Close (ESC)"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-neutral-900">Inquiry Received</h3>
                <p className="mt-2 text-neutral-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thanks, <span className="font-bold text-neutral-900">{formData.name}</span>. I will review your project details and get back to you within 12 hours.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#6E2CF4]/10 text-[#6E2CF4] text-xs font-mono font-bold mb-2">
                    PROJECT ESTIMATOR
                  </div>
                  <h3 className="text-2xl font-display font-black text-neutral-900">Start a New Project</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Tell me about your product requirements and timeline.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    >
                      <option value="Full-Stack Web App (SaaS)">Full-Stack Web App (SaaS)</option>
                      <option value="Frontend Architecture & UI/UX">Frontend Architecture & UI/UX</option>
                      <option value="Rapid Startup MVP Builder">Rapid Startup MVP Builder</option>
                      <option value="Performance & Core Web Vitals">Performance & Core Web Vitals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Brief</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share a brief summary of what you are building..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
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
