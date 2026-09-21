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
  // Custom designed stylized "J" with emerald curve & glowing terminal
  const StylizedJ = ({ sizeClass = "w-4 h-4" }: { sizeClass?: string }) => (
    <span className={`inline-flex items-center justify-center relative ${sizeClass} -ml-0.5`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
      >
        {/* Stylized J stem and sweeping hook */}
        <path
          d="M15 3.5V13.5C15 17.2 12.2 19.8 8.5 19.8C5.5 19.8 4 17.8 3.5 16"
          stroke="url(#tj-j-grad)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent dot above the J hook */}
        <circle cx="15" cy="3.5" r="1.8" fill="#00FF87" />

        <defs>
          <linearGradient
            id="tj-j-grad"
            x1="15"
            y1="3.5"
            x2="3.5"
            y2="19.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#00FF87" />
            <stop offset="100%" stopColor="#00C047" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );

  // Stylized "J" for light background / dark text
  const StylizedJDark = ({ sizeClass = "w-4 h-4" }: { sizeClass?: string }) => (
    <span className={`inline-flex items-center justify-center relative ${sizeClass} -ml-0.5`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
      >
        {/* Stylized J stem and sweeping hook */}
        <path
          d="M15 3.5V13.5C15 17.2 12.2 19.8 8.5 19.8C5.5 19.8 4 17.8 3.5 16"
          stroke="url(#tj-j-grad-dark)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent dot above the J */}
        <circle cx="15" cy="3.5" r="1.8" fill="#00C047" />

        <defs>
          <linearGradient
            id="tj-j-grad-dark"
            x1="15"
            y1="3.5"
            x2="3.5"
            y2="19.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#111111" />
            <stop offset="50%" stopColor="#00C047" />
            <stop offset="100%" stopColor="#00A83E" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );

  if (variant === "pill") {
    return (
      <div
        className={`group flex items-center justify-center rounded-full bg-[#111111] text-white px-3 h-8 gap-0.5 tracking-wider font-extrabold text-[14px] shadow-sm transition-all duration-200 hover:bg-[#1f1f1f] active:scale-95 ${className}`}
      >
        <span className="font-extrabold tracking-tight">T</span>
        <StylizedJ sizeClass="w-3.5 h-3.5" />
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div
        className={`group inline-flex items-center gap-0.5 text-white font-extrabold tracking-wider ${className}`}
      >
        <span className="font-extrabold tracking-tight">T</span>
        <StylizedJ sizeClass={size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </div>
    );
  }

  // Text variant (dark text on light background)
  return (
    <div
      className={`group inline-flex items-center gap-0.5 text-[#111111] font-extrabold tracking-wider ${className}`}
    >
      <span className="font-extrabold tracking-tight">T</span>
      <StylizedJDark sizeClass={size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
    </div>
  );
}
