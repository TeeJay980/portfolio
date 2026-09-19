"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-4 md:gap-6 rounded-full border border-[#E7E7E5] bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md"
      >
        {/* Monogram Logo */}
        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white tracking-wider transition-all hover:opacity-85 active:scale-[0.95]"
        >
          MC
        </Link>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-[#E7E7E5] hidden sm:block" />

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-[#666665]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-1 text-[#666665] transition-all duration-200 hover:text-[#111111] hover:bg-[#F4F4F3] active:scale-[0.97]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-[#E7E7E5] hidden md:block" />

        {/* Availability Badge */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3 py-1 text-xs font-medium text-[#333333]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
          </span>
          <span>Available for work</span>
        </div>
      </motion.nav>
    </header>
  );
}
