"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cardArrowVariants, cardImageVariants } from "@/lib/motion";

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
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    alt: "Pulma Web Experience",
  },
  {
    id: "lumex",
    title: "LumeX",
    category: "Product & SaaS Design",
    tags: ["SaaS Platform", "UI/UX System"],
    imageSrc: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=85",
    alt: "LumeX Interface Design",
  },
  {
    id: "planza",
    title: "Planza",
    category: "Mobile & Web App",
    tags: ["Design System", "Mobile App"],
    imageSrc: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85",
    alt: "Planza Architecture",
  },
  {
    id: "horizon-atlas",
    title: "Horizon Atlas",
    category: "Brand & Digital Direction",
    tags: ["Branding", "Creative Direction"],
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    alt: "Horizon Atlas Platform",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="work" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="rounded-full bg-[#F2F2F0] px-3.5 py-1.5 text-xs font-medium text-[#333333]">
              Featured Works
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
              Selected client cases & products
            </h2>
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative cursor-pointer rounded-[24px] border border-[#E7E7E5] bg-white p-4 transition-colors duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              {/* Image Frame with Framer Motion nested zoom */}
              <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden rounded-[20px] bg-[#F4F4F3]">
                <motion.div
                  variants={cardImageVariants}
                  className="w-full h-full relative"
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
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
                        className="rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-medium text-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Round Circular Arrow Button */}
                <motion.div
                  variants={cardArrowVariants}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E7E7E5] bg-white text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-colors duration-200 shadow-sm"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
