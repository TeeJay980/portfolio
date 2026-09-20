"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FeaturedWorks() {
  const project = {
    title: "Oriflame Central Store Abuja",
    url: "https://saved-cancel.vercel.app/",
    domain: "saved-cancel.vercel.app",
    category: "Featured Client Project",
    summary:
      "A bespoke, interactive digital storefront and product catalogue engineered for Oriflame Central Store Abuja. Features an automated hero fragrance showcase, interactive slide-out product drawer with live quantity steppers, a personalized body & wellness routine quiz, and direct WhatsApp commerce integration.",
    techStack: ["HTML5", "CSS3 / Custom Design System", "JavaScript (ES6+)", "Vercel"],
    imageSrc: "/images/luzia_9.png",
    alt: "Oriflame Abuja Digital Platform Preview",
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
            {/* Visual Image / Interactive Preview Frame (7 Cols) */}
            <div className="lg:col-span-7">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-[320px] sm:h-[400px] md:h-[440px] w-full overflow-hidden rounded-[20px] bg-[#F4F4F3] border border-[#E7E7E5]"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  priority
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium text-[#111111] shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C047] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C047]" />
                  </span>
                  <span>Live Production Site</span>
                </div>

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5 pointer-events-none" />
              </a>
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
