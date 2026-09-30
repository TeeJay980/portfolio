"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layers,
  Sparkles,
  ExternalLink,
  Lock,
  X,
  Eye,
} from "lucide-react";

interface Project {
  title: string;
  url: string;
  domain: string;
  previewImage: string;
  category: string;
  badge: string;
  summary: string;
  techStack: string[];
}

export default function FeaturedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "EduPortal | School Management System",
      url: "https://school-portal-two-mu.vercel.app/",
      domain: "school-portal-two-mu.vercel.app",
      previewImage: "/images/eduportal_admin.png",
      category: "School ERP & Management",
      badge: "Full-Stack Web App",
      summary:
        "A comprehensive cloud-enabled school administration platform. Features real-time student and faculty teacher directory management, automated Nigerian secondary class promotions (JSS 1 through SSS 3), tuition fee tracking with debt audits, school supplies & inventory store, and cloud database sync with Supabase.",
      techStack: [
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Supabase DB & Auth",
        "Cloudflare",
        "Vercel",
      ],
    },
    {
      title: "EduPortal | Student Self-Service Portal",
      url: "https://school-portal-ecxr.vercel.app/",
      domain: "school-portal-ecxr.vercel.app",
      previewImage: "/images/eduportal_student.png",
      category: "Student Portal",
      badge: "Academic Portal",
      summary:
        "A dedicated, security-hardened student portal protected with Cloudflare Turnstile. Provides students with instant access to term GPA reports, subject grade breakdowns with printable report cards, weekly lecture timetables, homework & assignment trackers, tuition statements, and digital student ID cards.",
      techStack: [
        "JavaScript (ES6+)",
        "Custom CSS Design System",
        "Cloudflare Turnstile",
        "HTML5",
        "Vercel",
      ],
    },
    {
      title: "Oriflame Central Store Abuja",
      url: "https://www.oriflamestore.com.ng/",
      domain: "www.oriflamestore.com.ng",
      previewImage: "/images/oriflame_featured.jpg",
      category: "Featured Client Project",
      badge: "Spex Built",
      summary:
        "A bespoke, interactive digital storefront and product catalogue engineered for Oriflame Central Store Abuja. Features an automated hero fragrance showcase, interactive slide-out product drawer with live quantity steppers, a personalized body & wellness routine quiz, and direct WhatsApp commerce integration.",
      techStack: [
        "HTML5",
        "CSS3 / Custom Design System",
        "JavaScript (ES6+)",
        "Vercel",
      ],
    },
  ];

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="work" className="py-8 md:py-14">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 space-y-6 md:space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3"
        >
          <div>
            <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3.5 py-1.5 text-xs font-medium text-[#333333]">
              Featured Works
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-2.5">
              Selected client cases &amp; live products
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666665]">
            Click on any project to view details &amp; tools
          </p>
        </motion.div>

        {/* Simplified & Compact Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.domain}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-[24px] border border-[#E7E7E5] bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Browser-style Preview Thumbnail */}
                <div className="relative w-full rounded-[18px] overflow-hidden border border-[#E7E7E5] bg-[#F8F8F7]">
                  {/* Top Browser Bar with Gunmetal Gray / Platinum Silver hover */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#EFEFEF] group-hover:bg-[#E5E5E3] border-b border-[#E7E7E5] transition-colors duration-300">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F56] inline-block" />
                      <span className="h-2 w-2 rounded-full bg-[#FFBD2E] inline-block" />
                      <span className="h-2 w-2 rounded-full bg-[#27C93F] inline-block" />
                    </div>
                    {/* Website Link Bar */}
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[11px] text-[#666665] border border-[#E0E0DE] max-w-[170px] truncate transition-all duration-300 group-hover:bg-[#20242C] group-hover:text-white group-hover:border-[#374151] group-hover:shadow-sm">
                      <Lock className="h-2.5 w-2.5 text-[#00C047] group-hover:text-[#00FF87] shrink-0 transition-colors" />
                      <span className="font-mono truncate group-hover:text-[#FFFFFF]">{project.domain}</span>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00C047]" />
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative h-44 sm:h-48 w-full bg-[#F4F4F3] overflow-hidden">
                    <Image
                      src={project.previewImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-1.5 rounded-full bg-[#20242C]/95 text-[#FFFFFF] border border-[#374151] backdrop-blur-md px-4 py-1.5 text-xs font-medium shadow-xl">
                        <Eye className="h-3.5 w-3.5 text-[#E5E7EB]" />
                        <span className="text-[#FFFFFF]">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#F4F4F3] px-2.5 py-0.5 text-[11px] font-medium text-[#555555]">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-[#7430F7] font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {project.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold tracking-[-0.015em] text-[#111111] group-hover:text-black leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Button with Gunmetal Gray / Platinum Silver hover */}
              <div className="mt-4 pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs text-[#666665]">
                <span className="font-medium group-hover:text-[#111111] transition-colors">
                  Explore Work
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F4F3] group-hover:bg-[#20242C] group-hover:text-[#FFFFFF] border border-transparent group-hover:border-[#374151] transition-all duration-300 group-hover:rotate-45 shadow-sm">
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#666665] group-hover:text-[#E5E7EB]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[88vh] overflow-y-auto rounded-[28px] border border-[#E7E7E5] bg-white p-5 sm:p-7 md:p-8 shadow-2xl z-10 space-y-6"
            >
              {/* Top Header with Close Button */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#F4F4F3] border border-[#E7E7E5] px-3 py-1 text-xs font-medium text-[#333333]">
                      {selectedProject.category}
                    </span>
                    <span className="rounded-full bg-[#F4F4F3] px-2.5 py-0.5 text-xs text-[#7430F7] font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {selectedProject.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Top Desktop/Tablet Close 'X' Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F4F3] text-[#111111] hover:bg-[#20242C] hover:text-[#FFFFFF] hover:border hover:border-[#374151] active:scale-95 transition-all shadow-sm"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Full Browser Mockup View */}
              <div className="group/mockup relative w-full rounded-[20px] overflow-hidden border border-[#E7E7E5] bg-[#F8F8F7] shadow-sm">
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#EFEFEF] border-b border-[#E7E7E5] transition-colors duration-300 group-hover/mockup:bg-[#E5E5E3]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  {/* Modal Address Bar with Gunmetal Gray / Platinum Silver hover */}
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs text-[#666665] border border-[#E0E0DE] max-w-[240px] sm:max-w-[320px] truncate transition-all duration-300 hover:bg-[#20242C] hover:text-[#FFFFFF] hover:border-[#374151] shadow-sm group/address"
                  >
                    <Lock className="h-3 w-3 text-[#00C047] group-hover/address:text-[#00FF87] shrink-0 transition-colors" />
                    <span className="truncate font-mono group-hover/address:text-[#FFFFFF]">{selectedProject.domain}</span>
                    <ExternalLink className="h-2.5 w-2.5 shrink-0 text-[#888888] group-hover/address:text-[#E5E7EB] opacity-75" />
                  </a>
                  <div className="w-8 text-right">
                    <span className="h-2 w-2 rounded-full bg-[#00C047] animate-pulse inline-block" />
                  </div>
                </div>

                <div className="relative h-[220px] sm:h-[300px] md:h-[340px] w-full bg-[#F4F4F3] overflow-hidden">
                  <Image
                    src={selectedProject.previewImage}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* About the Project / Description */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-[#888888] uppercase tracking-wider">
                  About the Project
                </h4>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
                  {selectedProject.summary}
                </p>
              </div>

              {/* What I Used to Create It (Tech Stack) */}
              <div className="space-y-3 pt-4 border-t border-[#F0F0EE]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  <Layers className="h-4 w-4 text-[#666665]" />
                  <span>What I Used to Create It:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#F4F4F3] border border-[#E7E7E5] px-3.5 py-1.5 text-xs font-medium text-[#222222] shadow-sm hover:border-[#D2D2CF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Visit Live Site Bar with Dark Gunmetal Gray & Platinum Silver Hover */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/visit inline-flex items-center justify-center w-full gap-2.5 rounded-full bg-[#111111] border border-[#111111] px-6 py-3.5 text-sm font-medium text-[#FFFFFF] shadow-sm transition-all duration-300 hover:bg-[#20242C] hover:border-[#374151] hover:shadow-[0_8px_25px_rgba(32,36,44,0.35)] active:scale-[0.98]"
                >
                  <Globe className="h-4 w-4 text-[#E5E7EB] group-hover/visit:text-[#FFFFFF] transition-colors" />
                  <span className="text-[#FFFFFF]">Visit <span className="font-semibold text-[#F3F4F6] group-hover/visit:text-[#FFFFFF]">{selectedProject.domain}</span></span>
                  <ArrowUpRight className="h-4 w-4 text-[#E5E7EB] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5 group-hover/visit:text-[#FFFFFF]" />
                </a>
              </div>
            </motion.div>

            {/* Mobile Bottom-Center "X" Floating Button to dismiss */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] sm:hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-2xl border border-white/20 active:scale-95 transition-transform"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 text-white" />
                <span>Close</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

