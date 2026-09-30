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
  // Dimension classes based on size prop
  const sizeMap = {
    sm: "h-4 w-7",
    md: "h-5 w-8",
    lg: "h-6 w-10",
  };

  const svgClass = sizeMap[size] || sizeMap.md;

  // Stylized Monogram (Both T and J custom-engineered vector paths)
  const StylizedMonogram = ({
    isLightBg = false,
    extraClass = "",
  }: {
    isLightBg?: boolean;
    extraClass?: string;
  }) => {
    const gradId = isLightBg ? "tj-grad-dark" : "tj-grad-light";
    const dotGradId = isLightBg ? "tj-dot-grad-dark" : "tj-dot-grad-light";

    return (
      <span className={`inline-flex items-center justify-center relative ${extraClass}`}>
        <svg
          viewBox="0 0 34 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-all duration-500 ease-out group-hover:scale-105"
        >
          <defs>
            {/* Light variant gradient with slow color cycle on hover */}
            <linearGradient id="tj-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF">
                <animate
                  attributeName="stop-color"
                  values="#FFFFFF;#00FF87;#00C047;#38BDF8;#E5E7EB;#FFFFFF"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="45%" stopColor="#00FF87">
                <animate
                  attributeName="stop-color"
                  values="#00FF87;#00C047;#38BDF8;#E5E7EB;#FFFFFF;#00FF87"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#00C047">
                <animate
                  attributeName="stop-color"
                  values="#00C047;#38BDF8;#E5E7EB;#FFFFFF;#00FF87;#00C047"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Dark variant gradient for white background */}
            <linearGradient id="tj-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111111">
                <animate
                  attributeName="stop-color"
                  values="#111111;#00C047;#7430F7;#008F35;#111111"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#00C047">
                <animate
                  attributeName="stop-color"
                  values="#00C047;#7430F7;#008F35;#111111;#00C047"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#111111">
                <animate
                  attributeName="stop-color"
                  values="#111111;#008F35;#7430F7;#00C047;#111111"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Glowing Accent Node Gradient */}
            <linearGradient id={dotGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF87">
                <animate
                  attributeName="stop-color"
                  values="#00FF87;#38BDF8;#00C047;#00FF87"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#00C047">
                <animate
                  attributeName="stop-color"
                  values="#00C047;#00FF87;#38BDF8;#00C047"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* STYLIZED "T" */}
          {/* T Top Horizontal Crossbar */}
          <path
            d="M3 4.5H15"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* T Vertical Stem */}
          <path
            d="M9 4.5V18.5"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* T Left Accent Dot */}
          <circle cx="3" cy="4.5" r="1.6" fill={`url(#${dotGradId})`} />

          {/* STYLIZED "J" */}
          {/* J Stem & Smooth Hook */}
          <path
            d="M23 4.5V13.5C23 16.8 20.6 19 17.2 19C14.4 19 12.8 17.2 12.2 15.6"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />
          {/* J Top Accent Dot */}
          <circle cx="23" cy="4.5" r="1.6" fill={`url(#${dotGradId})`} />
        </svg>
      </span>
    );
  };

  // 1. Pill Variant (Floating Navbar style)
  if (variant === "pill") {
    return (
      <div
        className={`group flex items-center justify-center rounded-full bg-[#111111] text-white px-3 h-8 shadow-sm transition-all duration-300 hover:bg-[#1f242d] hover:shadow-[0_0_15px_rgba(0,192,71,0.2)] active:scale-95 border border-white/10 ${className}`}
      >
        <StylizedMonogram isLightBg={false} extraClass="w-7 h-4" />
      </div>
    );
  }

  // 2. Light Variant (White text on dark cards)
  if (variant === "light") {
    return (
      <div
        className={`group inline-flex items-center transition-all duration-300 active:scale-95 ${className}`}
      >
        <StylizedMonogram isLightBg={false} extraClass={svgClass} />
      </div>
    );
  }

  // 3. Text Variant (Dark text on light background)
  return (
    <div
      className={`group inline-flex items-center transition-all duration-300 active:scale-95 ${className}`}
    >
      <StylizedMonogram isLightBg={true} extraClass={svgClass} />
    </div>
  );
}

