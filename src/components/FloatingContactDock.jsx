import React, { useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

export const FloatingContactDock = ({ onOpenEmail }) => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pb-[env(safe-area-inset-bottom)]">

      {/* WhatsApp */}
      <div className="flex items-center gap-3">
        <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111218]/95 border border-white/10 text-xs font-mono text-slate-200 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${hoveredBtn === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp</span>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('whatsapp')} onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white relative z-10" />
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3">
        <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111218]/95 border border-white/20 text-xs font-mono text-slate-200 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${hoveredBtn === 'email' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Send Email Inquiry</span>
        </div>
        <button onClick={onOpenEmail}
          onMouseEnter={() => setHoveredBtn('email')} onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-slate-100 text-black shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.45)] transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white"
          aria-label="Send Email Inquiry"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black relative z-10 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
};
