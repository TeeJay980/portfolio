"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category?: string;
  tags: string[];
  imageSrc: string;
  onClick?: () => void;
}

export function ProjectCard({
  title = "Pulma",
  category = "Framer Website",
  tags = ["Framer Website", "Web Design"],
  imageSrc = "/images/luzia_img_4.webp",
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full cursor-pointer rounded-[24px] border border-[#EBEBEA] bg-white p-4 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* 1. IMAGE CONTAINER (Fixed frame + overflow hidden) */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-[18px] bg-[#F4F4F3]">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
        />
        {/* Subtle dark tint on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>

      {/* 2. CARD FOOTER */}
      <div className="mt-4 flex items-center justify-between px-2 pb-1">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[#111111]">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F4F4F3] px-3 py-1 text-xs font-medium text-[#666665] transition-colors duration-200 group-hover:bg-[#EAEAE8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. ARROW BUTTON (Slides up-right on card hover) */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBEBEA] bg-white text-[#111111] transition-all duration-300 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white flex-shrink-0">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
