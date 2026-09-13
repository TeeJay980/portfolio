import React from 'react';

export const DevFooter = () => {
  return (
    <footer className="relative bg-[#060709] py-8 sm:py-10 border-t border-white/[0.08] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wide">
          © 2026 SPURX - Abuja.
        </p>
        <p className="text-xs font-mono text-spex-muted mt-1">
          All rights reserved.
        </p>
        <p className="text-xs font-mono text-spex-volt font-semibold mt-2 tracking-wider uppercase">
          Created by TERRENCE J. MARK
        </p>
      </div>
    </footer>
  );
};
