import React, { useState, useEffect } from 'react';
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch (_) {}
  };

  const handleReset = () => { setSubmitted(false); onClose(); };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto my-auto bg-spex-surface p-6 sm:p-8 rounded-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-slate-100" onClick={(e) => e.stopPropagation()}>

        <button onClick={onClose} className="sticky top-0 float-right -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 shadow-lg backdrop-blur-md" aria-label="Close modal" title="Close (ESC)">
          <X className="w-5 h-5 text-white stroke-[2.2]" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-full bg-spex-volt/20 text-spex-volt flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">INQUIRY RECEIVED</h3>
            <p className="mt-3 text-spex-muted text-sm max-w-md mx-auto leading-relaxed">
              Thanks, <span className="text-white font-bold">{formData.name}</span>. I will review your project and reply within 12 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 fill-white" /> Chat on WhatsApp
              </a>
              <button onClick={handleReset} className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm">Close</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 text-spex-volt text-xs font-mono font-bold mb-2">PROJECT ESTIMATOR</div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">Start a New Project</h3>
              <p className="text-xs sm:text-sm text-spex-muted mt-1">Tell me about your requirements and timeline.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                  <input type="text" required placeholder="e.g. Alex Rivera" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-spex-bg border border-white/10 text-white text-sm focus:outline-none focus:border-spex-volt" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                  <input type="email" required placeholder="alex@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-spex-bg border border-white/10 text-white text-sm focus:outline-none focus:border-spex-volt" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Scope *</label>
                <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-spex-bg border border-white/10 text-white text-sm focus:outline-none focus:border-spex-volt">
                  <option value="Full-Stack Web App (SaaS)">Full-Stack SaaS ($2.5K+)</option>
                  <option value="Creative Frontend / Design System">Creative Frontend ($1.5K+)</option>
                  <option value="E-Commerce Storefront">3D / Headless E-Commerce ($2.2K+)</option>
                  <option value="Performance & Core Web Vitals Audit">Performance Audit ($900+)</option>
                  <option value="Full-Time / Senior Role">Full-Time / Contract Role</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Brief</label>
                <textarea rows="3" placeholder="Describe your goals, target launch date, and key features..." value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-spex-bg border border-white/10 text-white text-sm focus:outline-none focus:border-spex-volt resize-none" />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white">
                  <Send className="w-4 h-4 text-black stroke-[2.2]" /> Send Project Proposal
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
