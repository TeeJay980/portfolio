import React from 'react';

export const SpurxLogo = ({ size = 'md', showWordmark = true, className = '' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-7',
    lg: 'h-9',
    xl: 'h-12'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Precision Geometric Monogram */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className={`${sizeClasses[size] || 'h-7'} w-auto transition-transform duration-300 group-hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Frame */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="9"
            fill="#0E0F14"
            stroke="rgba(255, 255, 255, 0.14)"
            strokeWidth="1.2"
            className="transition-colors duration-300 group-hover:stroke-spex-volt"
          />

          {/* Left Bracket < */}
          <path
            d="M14.5 13.5 L8.5 20 L14.5 26.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />

          {/* Center Slash / in Spex Volt */}
          <path
            d="M22 11 L18 29"
            stroke="#E7FE00"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Right Bracket > */}
          <path
            d="M25.5 13.5 L31.5 20 L25.5 26.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </svg>
      </div>

      {/* Wordmark Typography */}
      {showWordmark && (
        <div className="flex items-baseline gap-1.5">
          <div className="font-display font-black text-white text-lg sm:text-xl tracking-tight leading-none">
            <span>SPUR</span>
            <span className="text-spex-volt ml-0.5">X</span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-spex-muted font-semibold uppercase opacity-70">
            / DEV
          </span>
        </div>
      )}
    </div>
  );
};
