import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

export const LuziaNavbar = ({ onOpenBooking, onOpenPalette, onOpenEmail }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Process', href: '#process' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3F4F6]/90 backdrop-blur-xl border-b border-black/[0.05] py-3.5 sm:py-4 shadow-sm'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Developer Name */}
          <a
            href="#"
            className="flex items-center gap-2 group font-display font-bold text-sm sm:text-base tracking-tight text-[#0c0c0c] hover:opacity-80 transition-opacity"
          >
            <span>TERRENCE J. MARK</span>
          </a>

          {/* Center: Clean Nav Links (gap-8 as on Luzia) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#111111] hover:text-neutral-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Search & Black Action Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenPalette}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-neutral-700 hover:text-black border border-black/[0.06] shadow-sm transition-all"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] active:scale-95 flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/80 border border-black/[0.06] text-neutral-900 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-[28px] bg-white/98 backdrop-blur-2xl border border-black/[0.08] shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-semibold text-sm text-neutral-800 hover:bg-neutral-100 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
              <div className="pt-3 border-t border-black/[0.06] flex gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                  className="flex-1 py-3 rounded-2xl bg-[#0c0c0c] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#25D366] text-white flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
