"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface ServiceItem {
  title: string;
  desc: string;
  tags: string[];
  mockups: string[];
}

const servicesData: ServiceItem[] = [
  {
    title: "Web Development",
    desc: "Transforming design ideas into responsive, interactive, and high-performance websites and web applications using modern HTML5, CSS3, JavaScript, and React.",
    tags: ["HTML5 & CSS3", "JavaScript", "React", "Responsive Web", "+more"],
    mockups: [
      "/images/webdev_1.jpg",
      "/images/webdev_2.jpg",
      "/images/webdev_3.jpg",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 max-w-[1140px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[#E7E7E5] text-[#111111]">
          Services
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-normal text-[#111111] tracking-[-0.03em] max-w-2xl leading-tight">
          I bring ideas to life with strategy and creativity.
        </h2>
      </motion.div>

      {/* Stacked Bento Cards */}
      <div className="flex flex-col gap-6">
        {servicesData.map((svc, index) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group w-full rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* Top Bar: Title & Action Button */}
            <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#111111] tracking-tight">
                {svc.title}
              </h3>
              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7E7E5] bg-[#F8F8F7] text-xs font-medium text-[#111111] transition-all duration-200 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] active:scale-[0.97]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Description & Tag Badges */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-[#666665] text-sm md:text-base max-w-2xl leading-relaxed">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#444443] bg-[#F4F4F3] border border-[#EBEBEA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Full-Width 3-Column Visual Mockup Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {svc.mockups.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative h-[220px] md:h-[240px] w-full rounded-[18px] overflow-hidden bg-[#F4F4F3] border border-[#EBEBEA] group/thumb cursor-pointer"
                >
                  <Image
                    src={imgUrl}
                    alt={`${svc.title} mockup ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/thumb:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/thumb:bg-black/5 pointer-events-none z-10" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Box */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[28px] border border-dashed border-[#D2D2CF] bg-white/60 p-8 md:p-12 text-center flex flex-col items-center justify-center gap-3 transition-colors hover:bg-white"
        >
          <div className="flex items-center gap-2 rounded-full bg-[#F4F4F3] px-3.5 py-1 text-xs font-medium text-[#333333] border border-[#E7E7E5]">
            <Sparkles className="h-3 w-3 text-[#7430F7]" />
            <span>Expanding Toolkit</span>
          </div>
          <p className="text-base sm:text-lg font-medium text-[#666665]">
            Other services coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
