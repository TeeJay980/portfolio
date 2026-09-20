"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center justify-between md:justify-start gap-4 md:gap-6 rounded-full border border-[#E7E7E5] bg-white/85 px-4 py-2 md:px-5 md:py-2.5 shadow-sm backdrop-blur-md w-full max-w-[92vw] sm:max-w-md md:w-auto"
        >
          {/* Monogram Logo "TJ" */}
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white tracking-wider transition-all hover:opacity-85 active:scale-[0.95]"
          >
            TJ
          </Link>

          {/* Divider on Desktop */}
          <div className="h-4 w-[1px] bg-[#E7E7E5] hidden md:block" />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-medium text-[#666665]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3 py-1 transition-all duration-200 active:scale-[0.97] ${
                    isActive
                      ? "bg-[#111111] text-white font-medium"
                      : "text-[#666665] hover:text-[#111111] hover:bg-[#F4F4F3]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Divider on Desktop */}
          <div className="h-4 w-[1px] bg-[#E7E7E5] hidden md:block" />

          {/* Availability Badge on Desktop */}
          <div className="hidden md:flex items-center gap-2 rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3 py-1 text-xs font-medium text-[#333333]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
            </span>
            <span>Available for work</span>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-[#F4F4F3] text-[#111111] hover:bg-[#EAEAE8] active:scale-95 transition-colors"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer Modal & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />

            {/* Slide-down Drawer Card */}
            <motion.div
              initial={{ y: -40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 inset-x-4 max-w-lg mx-auto rounded-[28px] border border-[#E7E7E5] bg-white p-6 shadow-2xl space-y-6"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F0EE]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
                  </span>
                  <span className="text-xs font-medium text-[#333333]">Available for projects</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F4F3] text-[#666665] hover:text-[#111111]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-[16px] text-base font-medium transition-colors ${
                    pathname === "/"
                      ? "bg-[#111111] text-white"
                      : "text-[#111111] hover:bg-[#F4F4F3]"
                  }`}
                >
                  <span>Home</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>

                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-[16px] text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#111111] text-white"
                          : "text-[#111111] hover:bg-[#F4F4F3]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Contact CTA */}
              <div className="pt-2 border-t border-[#F0F0EE]">
                <a
                  href="mailto:mctjay80@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-[#222222] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>mctjay80@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
