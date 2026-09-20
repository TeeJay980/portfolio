"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageSrc: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: "pulma",
    title: "Pulma",
    category: "Framer Website",
    tags: ["Framer Website", "Web Design"],
    imageSrc: "/images/luzia_9.png",
    alt: "Pulma Web Experience",
  },
  {
    id: "lumex",
    title: "LumeX",
    category: "Product & SaaS Design",
    tags: ["SaaS Platform", "UI/UX System"],
    imageSrc: "/images/luzia_8.png",
    alt: "LumeX Interface Design",
  },
  {
    id: "planza",
    title: "Planza",
    category: "Mobile & Web App",
    tags: ["Design System", "Mobile App"],
    imageSrc: "/images/luzia_10.png",
    alt: "Planza Architecture",
  },
  {
    id: "horizon-atlas",
    title: "Horizon Atlas",
    category: "Brand & Digital Direction",
    tags: ["Branding", "Creative Direction"],
    imageSrc: "/images/luzia_11.png",
    alt: "Horizon Atlas Platform",
  },
];

export default function FeaturedWorks() {
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
              Featured Works
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
              Selected client cases &amp; products
            </h2>
          </div>
        </motion.div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer rounded-[24px] border border-[#E7E7E5] bg-white p-4 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Image Frame */}
              <div className="relative h-[340px] md:h-[400px] w-full overflow-hidden rounded-[18px] bg-[#F4F4F3]">
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                  priority={index < 2}
                />
                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5 pointer-events-none z-10" />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-5 pb-1 px-2">
                <div className="space-y-1.5">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.025em] text-[#111111]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3 py-1 text-xs font-medium text-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Badge Reaction */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7E7E5] bg-white text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm active:scale-[0.97]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
