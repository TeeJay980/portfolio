"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Sparkles, ExternalLink, Lock } from "lucide-react";

export default function FeaturedWorks() {
  const project = {
    title: "Oriflame Central Store Abuja",
    url: "https://saved-cancel.vercel.app/",
    domain: "saved-cancel.vercel.app",
    category: "Featured Client Project",
    summary:
      "A bespoke, interactive digital storefront and product catalogue engineered for Oriflame Central Store Abuja. Features an automated hero fragrance showcase, interactive slide-out product drawer with live quantity steppers, a personalized body & wellness routine quiz, and direct WhatsApp commerce integration.",
    techStack: ["HTML5", "CSS3 / Custom Design System", "JavaScript (ES6+)", "Vercel"],
  };

  return (
    <section id="work" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3.5 py-1.5 text-xs font-medium text-[#333333]">
              Featured Work
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
              Selected client case &amp; live product
            </h2>
          </div>
        </motion.div>

        {/* Featured Showcase Bento Card */}
        <motion.article
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[28px] border border-[#E7E7E5] bg-white p-6 md:p-8 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Live Browser Mockup (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full rounded-[20px] overflow-hidden border border-[#E7E7E5] bg-[#F8F8F7] shadow-sm">
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#EFEFEF] border-b border-[#E7E7E5]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>

                  {/* Address Bar */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs text-[#666665] border border-[#E0E0DE] hover:text-[#111111] transition-colors max-w-[240px] sm:max-w-[320px] truncate"
                  >
                    <Lock className="h-3 w-3 text-[#00C047] shrink-0" />
                    <span className="truncate">{project.domain}</span>
                    <ExternalLink className="h-2.5 w-2.5 shrink-0 opacity-60" />
                  </a>

                  <div className="w-10 sm:w-12 text-right">
                    <span className="h-2 w-2 rounded-full bg-[#00C047] animate-pulse inline-block" />
                  </div>
                </div>

                {/* Live Preview Iframe Container */}
                <div className="relative h-[360px] sm:h-[420px] w-full bg-white overflow-hidden">
                  <iframe
                    src={project.url}
                    title="Oriflame Abuja Website Preview"
                    className="w-full h-full border-0 pointer-events-auto"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />

                  {/* Floating click to open badge */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-[#111111]/90 backdrop-blur-md text-white px-3.5 py-1.5 text-xs font-medium hover:bg-[#111111] transition-all shadow-md active:scale-95"
                  >
                    <span>Open Live Site</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content & Details Panel (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#F4F4F3] px-3 py-1 text-xs font-medium text-[#333333]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#666665] flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-[#7430F7]" /> Spex Built
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#111111] leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[#666665] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Technologies Used Block */}
              <div className="space-y-3 pt-2 border-t border-[#F0F0EE]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  <Layers className="h-3.5 w-3.5 text-[#666665]" />
                  <span>Technologies Used:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#F4F4F3] border border-[#E7E7E5] px-3 py-1 text-xs font-medium text-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Link with Arrow */}
              <div className="pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-between w-full sm:w-auto gap-4 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#222222] active:scale-[0.97] shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Visit {project.domain}</span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
