import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WHATSAPP_URL, GITHUB_URL } from '../config';
import { LuziaFAQ } from '../components/LuziaFAQ';
import { DevFooter } from '../components/DevFooter';

export const ContactPage = ({ onOpenBooking, onOpenEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App (SaaS)',
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LET'S TALK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-[#0c0c0c] tracking-tight leading-[1.1]">
              Have a project? <br />
              <span className="text-[#8e8e93] font-normal">Let's connect.</span>
            </h1>

            <p className="text-sm text-[#6c7179] mt-4 leading-relaxed font-normal">
              Whether you are looking to build a new SaaS product, scale frontend architecture, or launch a modern storefront, I am available for new initiatives.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3 hover:border-black/20 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">WhatsApp Direct</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#25D366] transition-colors">+234 809 144 1008</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">Direct Inbox</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">mctjay80@gmail.com</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-[#6E2CF4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">Abuja, Nigeria • Remote Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-black/[0.06] shadow-luzia">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-[#0c0c0c]">Message Dispatched</h3>
                  <p className="mt-2 text-[#6c7179] text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#0c0c0c]">{formData.name}</span>. I have received your brief and will reply within 12 hours.
                  </p>
                  <div className="mt-8 flex justify-center gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-[#0c0c0c] mb-4">Send an Inquiry</h3>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Project Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all"
                    >
                      <option value="Full-Stack Web App (SaaS)">Full-Stack Web App (SaaS)</option>
                      <option value="Frontend Architecture & UI/UX">Frontend Architecture & UI/UX</option>
                      <option value="Rapid Startup MVP Builder">Rapid Startup MVP Builder</option>
                      <option value="E-Commerce & Performance Optimization">E-Commerce & Performance Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Project Brief</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about what you want to build, timelines, and requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-[#6E2CF4] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <LuziaFAQ />
      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
