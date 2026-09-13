import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, Mail, MapPin, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EMAIL_ADDRESS, CAL_URL } from '../config';
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
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

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">Direct Email</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{EMAIL_ADDRESS}</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-neutral-100 text-neutral-900">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">San Francisco, CA • Remote Worldwide</span>
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
                  <h3 className="text-2xl font-display font-extrabold text-[#0c0c0c]">Message Received</h3>
                  <p className="mt-2 text-[#6c7179] text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#0c0c0c]">{formData.name}</span>. I have received your inquiry and will reply shortly.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={onOpenBooking}
                      className="px-6 py-3 rounded-full bg-[#0c0c0c] text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                    >
                      <span>Book a 15-Min Call</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-[#0c0c0c] mb-4">Send a Message</h3>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-black focus:bg-white transition-all"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Project Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-black focus:bg-white transition-all"
                    >
                      <option value="Framer Website">Framer Website Development</option>
                      <option value="Product Design & SaaS">Product Design & SaaS UI/UX</option>
                      <option value="Branding & Identity">Branding & Visual Identity</option>
                      <option value="Design System & Consulting">Design System & Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your goals, timeline, and deliverables..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
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

      <LuziaFAQ />
      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
