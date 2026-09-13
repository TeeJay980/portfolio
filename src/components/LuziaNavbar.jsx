import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Menu, X } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/developerData';

export const LuziaNavbar = ({ onOpenBooking, onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about', hasPreview: true },
    { name: 'Contact', path: '/contact' },
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
          
          {/* Left: Brand / Designer Name */}
          <Link
            to="/"
            className="flex items-center gap-2 group font-display font-bold text-sm sm:text-base tracking-tight text-[#0c0c0c] hover:opacity-80 transition-opacity"
          >
            <span>{DEVELOPER_INFO.name.toUpperCase()}</span>
          </Link>

          {/* Center: Exact Nav Links (Work, About, Contact) */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasPreview && setAboutHovered(true)}
                onMouseLeave={() => link.hasPreview && setAboutHovered(false)}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#0c0c0c] font-bold'
                      : 'text-[#111111] hover:text-neutral-500'
                  }`}
                >
                  {link.name}
                </Link>

                {/* About Link Hover Card Preview (Luzia signature interaction) */}
                {link.hasPreview && (
                  <AnimatePresence>
                    {aboutHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-2xl z-50 pointer-events-none"
                      >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 mb-2">
                          <img
                            src={DEVELOPER_INFO.portrait}
                            alt={DEVELOPER_INFO.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[11px] font-semibold text-neutral-900 leading-tight">
                          {DEVELOPER_INFO.name.toUpperCase()}
                        </p>
                        <p className="text-[10px] text-neutral-500 mt-0.5">
                          {DEVELOPER_INFO.role}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-semibold text-sm text-neutral-800 hover:bg-neutral-100 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
              <div className="pt-3 border-t border-black/[0.06]">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                  className="w-full py-3 rounded-2xl bg-[#0c0c0c] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
