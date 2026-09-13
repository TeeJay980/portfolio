import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Send 
} from 'lucide-react';
import { EMAIL_ADDRESS, EMAIL_ADDRESSES } from '../config';

export const EmailModal = ({ isOpen, onClose }) => {
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

  const standardSubject = "Project Inquiry // Digital Product Design & Framer";
  const standardBody = `Hi Carter,

I came across your portfolio and would like to collaborate on an upcoming project.

Project Details:
- Project Type (Framer Website, SaaS UI/UX, Branding, etc.):
- Estimated Timeline:
- Scope & Deliverables:

Looking forward to connecting!`;

  const activeTarget = EMAIL_ADDRESS;
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto my-auto bg-white p-6 sm:p-8 rounded-[32px] border border-black/[0.08] shadow-2xl text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-all active:scale-95 z-20"
          aria-label="Close modal"
          title="Close (ESC)"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono font-bold mb-2">
            <Mail className="w-3.5 h-3.5" />
            DIRECT INBOX DISPATCH
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0c0c0c]">
            Email Carter
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Send an email directly with a pre-filled service inquiry draft.
          </p>
        </div>

        {/* Target Email Box */}
        <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-400 block uppercase">Destination Inbox</span>
              <span className="text-sm font-bold text-neutral-900">{EMAIL_ADDRESS}</span>
            </div>
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>PRE-FILLED INQUIRY DRAFT:</span>
            <span className="text-neutral-900 font-bold">READY</span>
          </div>

          <div className="text-xs font-mono text-neutral-700 bg-white p-3.5 rounded-xl border border-neutral-200 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
            {standardBody}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={mailtoUrl}
              onClick={() => onClose()}
              className="py-3 px-4 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in Mail Client</span>
            </a>

            <a
              href={webGmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="py-3 px-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-black/[0.08] shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Gmail Web</span>
            </a>
          </div>

          {/* Copy Message Button */}
          <button
            onClick={handleCopy}
            className="w-full py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied Email & Draft to Clipboard!" : "Copy Email & Draft to Clipboard"}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
