"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES_DATA = [
  {
    id: "branding",
    title: "Branding Design",
    description:
      "A strong brand is more than just a logo—it's the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints",
    tags: ["Logo design", "Brand guideline", "Brand strategy", "+more"],
    thumbnails: [
      "/images/luzia_img_13.png",
      "/images/luzia_img_14.png",
      "/images/luzia_img_15.png",
    ],
  },
  {
    id: "framer",
    title: "Framer Development",
    description:
      "Transforming designs into fully responsive, interactive websites with Framer. Whether it's a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance",
    tags: ["Landing page", "Multipages", "Web migration", "+more"],
    thumbnails: [
      "/images/luzia_img_8.png",
      "/images/luzia_img_4.webp",
      "/images/luzia_img_9.png",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability",
    tags: ["Web & app design", "Design system", "Prototyping", "+more"],
    thumbnails: [
      "/images/luzia_img_10.png",
      "/images/luzia_img_11.png",
      "/images/luzia_img_12.png",
    ],
  },
];

export function Services({ onOpenBooking }) {
  return (
    <section id="services" className="max-w-[1140px] mx-auto px-6 py-24">
      {/* ── Section Header ── */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E5] text-xs font-medium text-[#111111] shadow-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span>Services</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-normal text-[#111111] tracking-[-0.02em] max-w-3xl leading-[1.25]">
          Design solutions that elevate brands and create seamless user
          experiences. I help bring ideas to life with strategy and creativity
        </h2>
      </div>

      {/* ── Service Cards Stack ── */}
      <div className="flex flex-col">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="group relative w-full rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 mb-6 overflow-hidden transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* 1. TOP BAR */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#111111] tracking-tight">
                {service.title}
              </h3>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 border border-[#E7E7E5] px-4 py-2 rounded-full text-xs font-medium bg-white text-[#111111] transition-all duration-200 hover:bg-[#111111] hover:text-white hover:border-[#111111] shadow-sm flex-shrink-0"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* 2. CONTENT & DESCRIPTION */}
            <p className="text-[#666665] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
              {service.description}
            </p>

            {/* 3. TAG PILLS */}
            <div className="flex flex-wrap gap-2 mt-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F4F4F3] text-[#444443] text-xs px-3.5 py-1.5 rounded-full font-medium select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 4. PREVIEW THUMBNAILS (3-column responsive grid spanning full width) */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {service.thumbnails.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative h-[220px] md:h-[260px] w-full rounded-[18px] overflow-hidden bg-[#F4F4F3] border border-[#EBEBEA] group/thumb cursor-pointer"
                >
                  <img
                    src={imgSrc}
                    alt={`${service.title} example preview ${idx + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/thumb:scale-[1.08]"
                  />
                  {/* Subtle dark tint on hover */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/thumb:bg-black/5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
