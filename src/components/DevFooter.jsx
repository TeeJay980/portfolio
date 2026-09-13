import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

export const DevFooter = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <footer className="relative pt-12 sm:pt-16 pb-10 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-950 text-white rounded-[32px] p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden mb-12 text-center"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-[#6E2CF4] border border-white/10 uppercase tracking-wider">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-4 tracking-tight">
              Have a product in mind? <br />
              <span className="text-[#6E2CF4]">Let's build something extraordinary.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-3 max-w-lg mx-auto leading-relaxed">
              Available for full-stack engineering, web applications, frontend architecture, and technical consultation.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#25D366] text-white hover:bg-[#20ba59] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onOpenEmail}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 flex items-center gap-2 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Minimal Copyright requested by user */}
        <div className="pt-6 border-t border-black/[0.06] text-center">
          <p className="text-xs sm:text-sm font-mono text-neutral-700 tracking-wide">
            © 2026 SPURX - Abuja.
          </p>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            All rights reserved.
          </p>
          <p className="text-xs font-mono text-[#6E2CF4] font-semibold mt-2 tracking-wider uppercase">
            Created by TERRENCE J. MARK
          </p>
        </div>

      </div>
    </footer>
  );
};
