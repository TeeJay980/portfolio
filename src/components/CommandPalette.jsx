import React, { useState, useEffect } from 'react';
import { 
  X,
  Search, 
  Code2, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Github, 
  MessageCircle, 
  Mail, 
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/developerData';

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

  const githubUrl = "https://github.com/TeeJay980";
  const whatsappUrl = "https://wa.me/2348091441008?text=Hi%20please%20I%20need%20your%20services";

  // Filter projects by query
  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mctjay80@gmail.com, mcteejay24@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-spex-surface rounded-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden text-slate-100 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-5 h-5 text-white flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command, project name, or technology (e.g. Next.js, 3D, Email)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-spex-muted focus:outline-none font-sans"
          />
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="hidden sm:inline-block px-2 py-1 rounded bg-white/5 text-spex-muted text-[10px] font-mono border border-white/10">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
              aria-label="Close command palette"
              title="Close (ESC)"
            >
              <X className="w-4 h-4 text-white stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          
          {/* Quick Actions Group */}
          <div>
            <div className="px-3 py-1 text-[10px] font-mono text-spex-muted uppercase tracking-wider">
              Quick Actions
            </div>
            
            <div className="space-y-1 mt-1">
              
              {/* Start Project Proposal */}
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-spex-volt/10 text-spex-volt">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors">
                      Start a Project / Proposal
                    </div>
                    <div className="text-xs text-spex-muted">Open interactive project scope estimator</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-spex-muted group-hover:text-spex-volt group-hover:translate-x-1 transition-all" />
              </button>

              {/* Send Email with Account Picker & Prefilled Draft */}
              <button
                onClick={() => {
                  onClose();
                  onOpenEmail();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors">
                      Send Email Inquiry (Choose mctjay80 / mcteejay24)
                    </div>
                    <div className="text-xs text-spex-muted">Opens account picker with pre-filled service inquiry draft</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-spex-muted group-hover:text-spex-volt transition-colors" />
              </button>

              {/* Copy Email to Clipboard */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors">
                      {copiedEmail ? "Emails Copied to Clipboard!" : "Copy Email Addresses"}
                    </div>
                    <div className="text-xs text-spex-muted">mctjay80@gmail.com, mcteejay24@gmail.com</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-spex-muted bg-white/5 px-2 py-0.5 rounded">
                  {copiedEmail ? "COPIED" : "CLICK TO COPY"}
                </span>
              </button>

              {/* Chat on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors">
                      Direct WhatsApp Chat (+234 809 144 1008)
                    </div>
                    <div className="text-xs text-spex-muted">Pre-filled message: "Hi please I need your services"</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-spex-muted group-hover:text-spex-volt transition-colors" />
              </a>

              {/* GitHub TeeJay980 */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-white/10 text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors">
                      GitHub Profile (@TeeJay980)
                    </div>
                    <div className="text-xs text-spex-muted">Repositories, open-source code & inquiries</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-spex-muted group-hover:text-spex-volt transition-colors" />
              </a>

            </div>
          </div>

          {/* Filtered Projects Group */}
          <div>
            <div className="px-3 py-1 text-[10px] font-mono text-spex-muted uppercase tracking-wider">
              Projects ({filteredProjects.length})
            </div>

            <div className="space-y-1 mt-1">
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded-lg bg-spex-bg border border-white/10 text-spex-volt flex-shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-spex-volt transition-colors truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-spex-muted truncate">
                        {p.tagline}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-spex-muted bg-white/5 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                    {p.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info strip */}
        <div className="px-4 py-2.5 bg-[#0A0B0E] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-spex-muted">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↓</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd>
          </div>
          <div className="text-spex-volt font-bold">SPURX // COMMAND PALETTE</div>
        </div>

      </div>
    </div>
  );
};
