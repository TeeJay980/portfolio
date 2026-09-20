"use client";

import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  tags: string[];
  mockupImages: string[];
}

const servicesData: ServiceItem[] = [
  {
    title: "Branding Design",
    desc: "A strong brand is more than just a logo—it's the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints.",
    tags: ["Logo design", "Brand guideline", "Brand strategy", "+more"],
    mockupImages: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    ],
  },
  {
    title: "Framer Development",
    desc: "Transforming designs into fully responsive, interactive websites with Framer. Whether it's a landing page or a full-scale web experience, I build fast, modern sites optimized for seamless performance.",
    tags: ["Landing page", "Multipages", "Web migration", "+more"],
    mockupImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Designing user-centered experiences that are both functional and visually engaging. From concept to final prototype, I focus on intuitive interfaces that enhance experiences and usability.",
    tags: ["Web & app design", "Design system", "Prototyping", "+more"],
    mockupImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-[1140px] mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-[#FFFFFF] border border-[#E7E7E5] text-[#111111]">
          Services
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-normal text-[#111111] tracking-[-0.03em] max-w-2xl leading-tight">
          Design solutions that elevate brands and create seamless user experiences.
        </h2>
      </div>

      {/* Stacked Bento Cards */}
      <div className="flex flex-col gap-6">
        {servicesData.map((svc) => (
          <div
            key={svc.title}
            className="group rounded-[28px] border border-[#E7E7E5] bg-[#FFFFFF] p-8 md:p-10 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details & CTA */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#111111] tracking-tight">
                      {svc.title}
                    </h3>
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E7E7E5] text-xs font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
                    >
                      <span>Start a Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                  <p className="mt-4 text-[#666665] text-sm md:text-base leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs text-[#444443] bg-[#F4F4F3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-[240px]">
                {svc.mockupImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#F4F4F3] border border-[#EBEBEA]"
                  >
                    <img
                      src={imgUrl}
                      alt={svc.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-106"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
