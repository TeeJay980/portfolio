import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Mail, MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

export const LuziaNavbar = ({ onOpenBooking, onOpenPalette, onOpenEmail }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('works');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Logo / Developer Name */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/[0.07] shadow-sm hover:shadow transition-all group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#6E2CF4] animate-pulse" />
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight text-neutral-900 group-hover:text-[#6E2CF4] transition-colors">
              TERRENCE J. MARK
            </span>
          </motion.a>

          {/* Desktop Floating Pill Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1.5 rounded-full border border-black/[0.07] shadow-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Right Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={onOpenPalette}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.07] text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 shadow-sm transition-all"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.07] text-neutral-900 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-3xl bg-white/98 backdrop-blur-2xl border border-black/[0.08] shadow-2xl md:hidden"
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
                  className="flex-1 py-3 rounded-2xl bg-neutral-950 text-white font-bold text-xs flex items-center justify-center gap-2"
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
