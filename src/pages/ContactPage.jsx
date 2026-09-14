import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, Mail, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EMAIL_ADDRESS } from '../config';
import { LuziaFAQ } from '../components/LuziaFAQ';
import { DevFooter } from '../components/DevFooter';

export const ContactPage = ({ onOpenBooking, onOpenEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Framer Website',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch (_) {}
  };

  return (
    <div className="pt-24 sm:pt-32">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LET'S TALK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0c0c0c] tracking-tight leading-[1.1]">
              Let’s build something <br />
              <span className="text-[#8e8e93] font-normal">great together.</span>
            </h1>

            <p className="text-sm text-[#6c7179] mt-4 leading-relaxed font-normal">
              Have a project in mind or want to explore how we can collaborate? Fill out the form or book a quick 15-minute call.
            </p>

            <div className="mt-8 space-y-4">
              <div
                onClick={onOpenBooking}
                className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center justify-between hover:border-black/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-neutral-100 text-neutral-900">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">Schedule a Meeting</span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black">15-Min Intro Call</span>
                  </div>
                </div>
                <div className="p-2 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={onOpenEmail}
                className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center justify-between hover:border-black/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-neutral-100 text-neutral-900">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900">{EMAIL_ADDRESS}</span>
                  </div>
                </div>
                <div className="p-2 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dark Contact Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] text-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.12)] relative overflow-hidden bg-noise">
              
              {/* Subtle ambient aura */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

              <div className="relative z-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-white">Message Received</h3>
                    <p className="mt-2 text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-white">{formData.name}</span>. I have received your inquiry and will reply shortly.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={onOpenBooking}
                        className="px-6 py-3 rounded-full bg-white text-[#0c0c0c] hover:bg-neutral-100 font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                      >
                        <span>Book a 15-Min Call</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-5">
                      <h3 className="text-xl font-display font-extrabold text-white">Send a Message</h3>
                      <p className="text-xs text-neutral-400 mt-1">Fill in the details below to start the conversation.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
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
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Project Scope</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all"
                      >
                        <option value="Framer Website" className="bg-[#141416] text-white">Framer Website Development</option>
                        <option value="Product Design & SaaS" className="bg-[#141416] text-white">Product Design & SaaS UI/UX</option>
                        <option value="Branding & Identity" className="bg-[#141416] text-white">Branding & Visual Identity</option>
                        <option value="Design System & Consulting" className="bg-[#141416] text-white">Design System & Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Project Details</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me about your goals, timeline, and deliverables..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 focus:bg-[#1a1a1e] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-white hover:bg-neutral-100 text-[#0c0c0c] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all mt-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

      <LuziaFAQ />
      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
