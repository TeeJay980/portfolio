import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

export const EmailModal = ({ isOpen, onClose }) => {
  const [selectedAccount, setSelectedAccount] = useState('both');
  const [copied, setCopied] = useState(false);

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

  if (!isOpen) return null;

  const accounts = [
    {
      id: 'mctjay80',
      email: 'mctjay80@gmail.com',
      label: 'Primary Direct',
      desc: 'Direct engineering & technical consultations'
    },
    {
      id: 'mcteejay24',
      email: 'mcteejay24@gmail.com',
      label: 'Secondary Studio',
      desc: 'Project management & client scheduling'
    },
    {
      id: 'both',
      email: 'mctjay80@gmail.com,mcteejay24@gmail.com',
      displayEmail: 'mctjay80@gmail.com & mcteejay24@gmail.com',
      label: 'Both Inboxes (Recommended)',
      desc: 'Dispatches to both inboxes for fastest response time'
    }
  ];

  const standardSubject = "Project Inquiry // Full-Stack Engineering Services";
  const standardBody = `Hi TeeJay,

I came across your portfolio (SPURX) and would like to learn more about your services and what you can build for my project.

Project Overview:
- Project Type (SaaS, Web App, Frontend, MVP, etc.):
- Target Timeline:
- Estimated Budget:

Looking forward to your reply!`;

  const getActiveEmail = () => {
    const found = accounts.find(a => a.id === selectedAccount);
    return found ? found.email : 'mctjay80@gmail.com,mcteejay24@gmail.com';
  };

  const activeTarget = getActiveEmail();
  const mailtoUrl = `mailto:${activeTarget}?subject=${encodeURIComponent(standardSubject)}&body=${encodeURIComponent(standardBody)}`;
  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(activeTarget)}&su=${encodeURIComponent(standardSubject)}&body=${encodeURIComponent(standardBody)}`;

  const handleCopy = () => {
    const textToCopy = `To: ${activeTarget}\nSubject: ${standardSubject}\n\n${standardBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto my-auto bg-spex-surface p-6 sm:p-8 rounded-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Prominent High-Contrast Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 sm:-mt-3 sm:-mr-3 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 shadow-lg backdrop-blur-md"
          aria-label="Close modal"
          title="Close (ESC)"
        >
          <X className="w-5 h-5 text-white stroke-[2.2]" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 text-spex-volt text-xs font-mono font-bold mb-2">
            <Mail className="w-3.5 h-3.5" />
            DIRECT INBOX DISPATCH
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
            Send Email Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-spex-muted mt-1">
            Choose your preferred inbox to launch an email with a pre-filled service inquiry.
          </p>
        </div>

        {/* Account Selection Cards */}
        <div className="space-y-2.5 my-6">
          <div className="text-xs font-mono text-spex-muted uppercase tracking-wider">
            Select Destination Address:
          </div>

          {accounts.map((acc) => {
            const isSelected = selectedAccount === acc.id;
            return (
              <div
                key={acc.id}
                onClick={() => setSelectedAccount(acc.id)}
                className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                  isSelected
                    ? 'border-spex-volt bg-white/[0.04] shadow-[0_0_20px_rgba(231,254,0,0.12)]'
                    : 'border-white/[0.08] bg-[#0A0B0E] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? 'border-spex-volt' : 'border-white/30'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-spex-volt" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-mono font-bold text-white">
                        {acc.displayEmail || acc.email}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                        isSelected ? 'bg-spex-volt text-black' : 'bg-white/10 text-spex-muted'
                      }`}>
                        {acc.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-spex-muted mt-0.5">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Message Preview Box */}
        <div className="p-4 rounded-xl bg-[#090A0D] border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-spex-muted">
            <span>PRE-FILLED INQUIRY DRAFT:</span>
            <span className="text-spex-volt">AUTO-INSERTED</span>
          </div>

          <div className="text-xs font-mono text-slate-300 bg-[#050608] p-3 rounded-lg border border-white/[0.04] whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
            {standardBody}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          
          {/* Default Mail Client / Mobile Trigger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={mailtoUrl}
              onClick={() => onClose()}
              className="py-3 px-4 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white"
            >
              <Send className="w-4 h-4 text-black stroke-[2.2]" />
              <span>Open in Mail Client</span>
            </a>

            <a
              href={webGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-white" />
              <span>Open in Gmail Web</span>
            </a>
          </div>

          {/* Copy Message Button */}
          <button
            onClick={handleCopy}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied Email & Message to Clipboard!" : "Copy Email & Pre-filled Message to Clipboard"}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
