import React from 'react';
import { CLIENT_LOGOS } from '../data/developerData';

// Duplicate the logos for a seamless infinite marquee loop
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export const LuziaClientStrip = () => {
  return (
    <section className="py-7 border-y border-black/[0.05] bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-10 sm:gap-16">
        {/* Fixed left label */}
        <div className="flex-shrink-0 pl-6 sm:pl-10 lg:pl-16 hidden sm:block">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#8e8e93] whitespace-nowrap">
            Trusted by teams &amp; products
          </p>
        </div>

        {/* Scrolling marquee track */}
        <div className="flex-1 relative overflow-hidden min-w-0">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F3F4F6] to-transparent z-10 pointer-events-none" />
          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F3F4F6] to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center gap-10 sm:gap-16 w-max"
            style={{
              animation: 'marqueeScroll 30s linear infinite',
            }}
          >
            {MARQUEE_LOGOS.map((client, idx) => (
              <span
                key={idx}
                className="font-display font-extrabold text-xs sm:text-sm tracking-wider text-neutral-400 hover:text-neutral-900 transition-colors select-none cursor-default whitespace-nowrap"
              >
                {client.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe for the marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
