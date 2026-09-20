"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
        src: "/images/luzia_13.png",
        alt: "Brand identity assets",
      },
      {
        src: "/images/luzia_14.png",
        alt: "Typography guide",
      },
      {
        src: "/images/luzia_15.png",
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
        src: "/images/luzia_16.png",
        alt: "Web interaction design",
      },
      {
        src: "/images/luzia_17.png",
        alt: "Responsive layout system",
      },
      {
        src: "/images/luzia_18.png",
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
        src: "/images/luzia_19.png",
        alt: "SaaS dashboard UI",
      },
      {
        src: "/images/luzia_20.png",
        alt: "Mobile app flow",
      },
      {
        src: "/images/luzia_22.webp",
        alt: "Component library",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3.5 py-1.5 text-xs font-medium text-[#333333]">
            Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
            Services built for scale and craft
          </h2>
        </motion.div>

        {/* Stacked White Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group w-full rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-[#D2D2CF]"
            >
              {/* Top Bar: Title + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.025em] text-[#111111]">
                  {service.title}
                </h3>

                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-2 self-start sm:self-center rounded-full border border-[#E7E7E5] bg-white px-4 py-2 text-xs font-medium text-[#111111] transition-all duration-200 hover:bg-[#111111] hover:text-white hover:border-[#111111] shadow-sm active:scale-[0.97]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
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
                      className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3 py-1 text-xs font-medium text-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: 3-column responsive thumbnail showcase filling card width cleanly */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
                {service.thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    className="group/thumb relative h-[220px] w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-[#F4F4F3] border border-[#E7E7E5]"
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/thumb:scale-108"
                    />
                    {/* Soft overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover/thumb:bg-black/5 pointer-events-none z-10" />
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
