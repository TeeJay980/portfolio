import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { TWITTER_URL, THREADS_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../config';

export const DevFooter = ({ onOpenBooking, onOpenEmail }) => {
  const footerNav = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'X', url: TWITTER_URL },
    { name: 'Threads', url: THREADS_URL },
    { name: 'Instagram', url: INSTAGRAM_URL },
    { name: 'YouTube', url: YOUTUBE_URL }
  ];

  return (
    <footer className="relative pt-12 sm:pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing CTA Banner (Deep Matte Black #0a0a0a with Noise Texture & Blue Ambient Aura) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] text-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.14)] relative overflow-hidden mb-12 text-center bg-noise"
        >
          {/* Ambient Blue Edge Aura */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-blue-500/12 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 border border-white/10 uppercase tracking-wider">
              LET'S TALK
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-[1.15]">
              Book a call, and I'll <br />
              <span className="text-[#8e8e93] font-normal">take care of the rest.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-3 max-w-md mx-auto leading-relaxed font-normal">
              Ready to turn your vision into a stunning digital reality? Let’s schedule a time to talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-white text-[#0c0c0c] hover:bg-neutral-100 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEmail}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation & Social Links */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {footerNav.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs sm:text-sm font-medium text-neutral-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-neutral-500 hover:text-black transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500 font-sans">
          <p>©Irise Studio 2026. All rights reserved.</p>
          <p>Made in Framer • Created by Rosyid Qoim</p>
        </div>

      </div>
    </footer>
  );
};
