import React, { useState, useEffect } from 'react';
import { 
  X,
  Search, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Mail, 
  ExternalLink,
  Calendar
} from 'lucide-react';
import { PROJECTS, DEVELOPER_INFO } from '../data/developerData';
import { EMAIL_ADDRESS, CAL_URL } from '../config';

export const CommandPalette = ({ isOpen, onClose, onSelectProject, onOpenBooking, onOpenEmail }) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter projects by query
  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    (p.secondaryCategory && p.secondaryCategory.toLowerCase().includes(query.toLowerCase())) ||
    (p.deliverables && p.deliverables.some(d => d.toLowerCase().includes(query.toLowerCase())))
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#141416] rounded-3xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden text-neutral-200 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Header Input */}
        <div className="flex items-center px-5 py-4 border-b border-white/[0.08] gap-3">
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a project, service, or keyword (e.g. Pulma, Framer, SaaS)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none font-sans"
          />
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="hidden sm:inline-block px-2 py-1 rounded-lg bg-white/5 text-neutral-400 text-[10px] font-mono border border-white/10">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
              aria-label="Close command palette"
              title="Close (ESC)"
            >
              <X className="w-4 h-4 text-white stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Quick Actions Group */}
          <div>
            <div className="px-3 py-1 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Quick Navigation
            </div>
            
            <div className="space-y-1.5 mt-1.5">
              
              {/* Start Project Proposal */}
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Book an Intro Call (15 Mins)
                    </div>
                    <div className="text-xs text-neutral-400">Schedule a 1-on-1 strategy call with Carter</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Send Email */}
              <button
                onClick={() => {
                  onClose();
                  onOpenEmail();
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Send Email Inquiry
                    </div>
                    <div className="text-xs text-neutral-400">{EMAIL_ADDRESS}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
              </button>

              {/* Copy Email to Clipboard */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {copiedEmail ? "Email Copied to Clipboard!" : "Copy Email Address"}
                    </div>
                    <div className="text-xs text-neutral-400">{EMAIL_ADDRESS}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                  {copiedEmail ? "COPIED" : "CLICK TO COPY"}
                </span>
              </button>

            </div>
          </div>

          {/* Filtered Projects Group */}
          <div>
            <div className="px-3 py-1 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Works & Projects ({filteredProjects.length})
            </div>

            <div className="space-y-1.5 mt-1.5">
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-white/10 text-white flex-shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-neutral-400 truncate">
                        {p.tagline}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full flex-shrink-0 ml-2">
                    {p.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info strip */}
        <div className="px-5 py-3 bg-[#0c0c0c] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↓</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd>
          </div>
          <div className="text-white font-semibold">MICHAEL CARTER PORTFOLIO</div>
        </div>

      </div>
    </div>
  );
};
