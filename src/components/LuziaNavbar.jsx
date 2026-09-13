import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';

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
            ? 'bg-[#F3F4F6]/90 backdrop-blur-xl border-b border-black/[0.05] py-4 shadow-sm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Brand Name (Title Case: Michael Carter) */}
          <Link
            to="/"
            className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
          >
            Michael Carter
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
                      ? 'text-[#111111] font-semibold'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </Link>

                {/* About Link Hover Card Preview */}
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
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-2">
                          <img
                            src="/images/hero_carter.webp"
                            onError={(e) => {
                              e.currentTarget.src = 'https://framerusercontent.com/images/yHECzzvtCQT7X8sGipPGW5sEc.webp?width=2400&height=1904';
                            }}
                            alt="Michael Carter"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <p className="text-[12px] font-bold text-neutral-900 leading-tight">
                          Michael Carter
                        </p>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          Digital Product Designer
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search & Use For Free Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPalette}
              className="p-2.5 rounded-full bg-white/80 hover:bg-white text-neutral-700 hover:text-black border border-black/[0.06] shadow-sm transition-all hidden sm:flex items-center justify-center"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-medium text-sm shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-95"
            >
              Use For Free
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/80 border border-black/[0.06] text-neutral-900 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                </Link>
              ))}
              <div className="pt-3 border-t border-black/[0.06]">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                  className="w-full py-3 rounded-full bg-[#111111] text-white font-bold text-sm shadow-md"
                >
                  Use For Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
