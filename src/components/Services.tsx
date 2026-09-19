"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { springPreset, cardImageVariants } from "@/lib/motion";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnails: {
    src: string;
    alt: string;
  }[];
}

const services: ServiceCardData[] = [
  {
    id: "branding-design",
    title: "Branding Design",
    description:
      "Crafting memorable identity systems, logo marks, typography guidelines, and comprehensive design manuals that differentiate your brand in crowded markets.",
    tags: ["Visual Identity", "Brand Strategy", "Design Guidelines", "Typography"],
    thumbnails: [
      {
        src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        alt: "Brand identity assets",
      },
      {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        alt: "Typography guide",
      },
      {
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        alt: "Brand applications",
      },
    ],
  },
  {
    id: "framer-development",
    title: "Framer Development",
    description:
      "Transforming high-fidelity prototypes into blazing-fast, responsive, SEO-optimized, and fluidly animated web experiences using Framer and Next.js.",
    tags: ["Custom Components", "Fluid Interactions", "CMS Integration", "SEO Tuning"],
    thumbnails: [
      {
        src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
        alt: "Web interaction design",
      },
      {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        alt: "Responsive layout system",
      },
      {
        src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        alt: "Animation engineering",
      },
    ],
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description:
      "End-to-end product design from user research and wireframing to high-impact UI design systems and interactive prototypes for SaaS platforms and consumer mobile apps.",
    tags: ["User Research", "Wireframing", "Design System", "Interactive Prototyping"],
    thumbnails: [
      {
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        alt: "SaaS dashboard UI",
      },
      {
        src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
        alt: "Mobile app flow",
      },
      {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        alt: "Component library",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header */}
        <div>
          <span className="rounded-full bg-[#F2F2F0] px-3.5 py-1.5 text-xs font-medium text-[#333333]">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
            Services built for scale and craft
          </h2>
        </div>

        {/* Stacked White Cards */}
        <div className="space-y-6">
          {services.map((service) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-[#D2D2CF]"
            >
              {/* Top Bar: Title + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.025em] text-[#111111]">
                  {service.title}
                </h3>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springPreset}
                  className="inline-flex items-center gap-2 self-start sm:self-center rounded-full border border-[#E7E7E5] bg-white px-4 py-2 text-xs font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </motion.a>
              </div>

              {/* Middle: Description & Tags */}
              <div className="mt-4 space-y-4 max-w-3xl">
                <p className="text-base text-[#666665] leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F2F2F0] px-3 py-1 text-xs font-medium text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: 3-column responsive thumbnail showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
                {service.thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    className="group relative h-[220px] w-full overflow-hidden rounded-[18px] bg-[#F4F4F3] border border-[#E7E7E5]"
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
