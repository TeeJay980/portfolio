"use client";

import React from "react";

interface LogoProps {
  className?: string;
  variant?: "pill" | "text" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "pill",
  size = "md",
}: LogoProps) {
  // Custom designed stylized "X"
  const DesignedX = ({ sizeClass = "w-3.5 h-3.5" }: { sizeClass?: string }) => (
    <span className={`inline-flex items-center justify-center relative ${sizeClass} mx-[1px]`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110"
      >
        {/* First diagonal bar (Primary) */}
        <path
          d="M4.5 4.5L19.5 19.5"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Second diagonal bar (Accent with gradient & glowing precision) */}
        <path
          d="M19.5 4.5L4.5 19.5"
          stroke="url(#spurx-x-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Glowing center accent dot */}
        <circle cx="12" cy="12" r="1.5" fill="#00FF87" />
        <defs>
          <linearGradient
            id="spurx-x-grad"
            x1="19.5"
            y1="4.5"
            x2="4.5"
            y2="19.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FF87" />
            <stop offset="50%" stopColor="#00C047" />
            <stop offset="100%" stopColor="#38EF7D" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );

  if (variant === "pill") {
    return (
      <div
        className={`group flex items-center justify-center rounded-full bg-[#111111] text-white px-3.5 h-8 gap-0.5 tracking-wider font-extrabold text-[13px] shadow-sm transition-all duration-200 hover:bg-[#1a1a1a] active:scale-95 ${className}`}
      >
        <span className="font-bold tracking-tight">SPUR</span>
        <DesignedX sizeClass="w-3.5 h-3.5" />
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div
        className={`group inline-flex items-center gap-0.5 text-white font-extrabold tracking-wider ${className}`}
      >
        <span className="font-bold tracking-tight">SPUR</span>
        <DesignedX sizeClass={size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
      </div>
    );
  }

  // Text variant (dark text on light background)
  return (
    <div
      className={`group inline-flex items-center gap-0.5 text-[#111111] font-extrabold tracking-wider ${className}`}
    >
      <span className="font-bold tracking-tight">SPUR</span>
      <DesignedX sizeClass={size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
    </div>
  );
}
