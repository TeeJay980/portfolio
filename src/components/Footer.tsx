"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Twitter / X", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "GitHub", href: "https://github.com/TeeJay980" },
  ];

  return (
    <footer id="contact" className="pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-[1140px] mx-auto px-6 space-y-12">
        {/* Contact Banner Card with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] border border-[#E7E7E5] bg-[#111111] text-white p-8 md:p-14 shadow-xl"
        >
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#00C047] animate-pulse" />
              <span>Let&apos;s build something exceptional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] text-white leading-tight">
              Have a project in mind? Let&apos;s talk about it.
            </h2>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              Whether you need a ground-up SaaS product redesign, a high-converting marketing site, or a scalable design system, I&apos;m here to help.
            </p>

            <div className="pt-2">
              <a
                href="mailto:mctjay80@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#111111] transition-all duration-200 hover:bg-[#F2F2F0] shadow-md active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" />
                <span>mctjay80@gmail.com</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E7E7E5] text-sm text-[#666665]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#111111]">TJ</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#111111] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
