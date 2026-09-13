import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

export const DevFooter = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <footer className="relative pt-12 sm:pt-16 pb-12 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing CTA Banner (Deep Matte Black #0a0a0a with Noise Texture & Blue Ambient Aura) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] text-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.14)] relative overflow-hidden mb-12 text-center bg-noise"
        >
          {/* Ambient Blue Edge Aura */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-blue-500/12 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 border border-white/10 uppercase tracking-wider">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-[1.15]">
              Have a product in mind? <br />
              <span className="text-[#8e8e93] font-normal">Let's build something extraordinary.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-3 max-w-md mx-auto leading-relaxed">
              Available for full-stack engineering, web applications, frontend architecture, and technical consultation.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-white text-[#0c0c0c] hover:bg-neutral-100 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEmail}
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Minimal Copyright requested by user */}
        <div className="pt-6 border-t border-black/[0.06] text-center">
          <p className="text-xs sm:text-sm font-mono text-neutral-800 tracking-wide">
            © 2026 SPURX - Abuja.
          </p>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            All rights reserved.
          </p>
          <p className="text-xs font-mono text-[#0c0c0c] font-semibold mt-2 tracking-wider uppercase">
            Created by TERRENCE J. MARK
          </p>
        </div>

      </div>
    </footer>
  );
};
