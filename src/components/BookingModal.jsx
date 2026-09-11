import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  Calendar, 
  DollarSign, 
  Mail, 
  Phone,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    artistName: '',
    email: '',
    phone: '',
    service: 'Mixing & Mastering',
    budget: '$600 - $1,500',
    deadline: '',
    referenceLink: '',
    stemLink: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory sound/confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              SESSION REQUEST RECEIVED!
            </h3>
            <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-sonic-cyan font-bold">{formData.name || formData.artistName}</span>. SPURX & management will review your session files and get back to you within 12 hours with an invoice and timeline.
            </p>

            {/* Direct Quick WhatsApp / Email Links */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/?text=Hi%20SPURX,%20I%20just%20submitted%20a%20booking%20inquiry%20for%20${encodeURIComponent(formData.service)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Direct WhatsApp Chat
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-sonic-purple/20 text-sonic-purple text-xs font-mono font-bold mb-2 border border-sonic-purple/30">
                <Sparkles className="w-3 h-3 text-sonic-cyan" />
                STUDIO SESSION & STEM INQUIRY
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Book SPURX for Your Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill in your project specs below. We reply within 12-24 hours with custom stem breakdowns & stems portal.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Artist Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Artist / Label Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Starboy / UMG"
                    value={formData.artistName}
                    onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@artist.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  />
                </div>
              </div>

              {/* Row 3: Service & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Requested Service *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  >
                    <option value="Mixing & Mastering">Stereo Mixing & Mastering ($450+)</option>
                    <option value="Custom Production">Full Track Custom Production ($800+)</option>
                    <option value="Dolby Atmos Spatial">Dolby Atmos Spatial Audio 7.1.4 ($650+)</option>
                    <option value="Vocal Tuning">Vocal Tuning & Pitch Polish ($250+)</option>
                    <option value="Beat Licensing">Exclusive Beat Vault Purchase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  >
                    <option value="$300 - $600">$300 - $600 (Single Mix/Master)</option>
                    <option value="$600 - $1,500">$600 - $1,500 (Full Production)</option>
                    <option value="$1,500 - $3,500">$1,500 - $3,500 (EP Project 3-5 Songs)</option>
                    <option value="$3,500+">$3,500+ (Full Album Package)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: File Links (Dropbox / WeTransfer) */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Demo Audio / Stems Link (Dropbox, WeTransfer, Drive)
                </label>
                <div className="relative">
                  <input
                    type="url"
                    placeholder="https://wetransfer.com/downloads/..."
                    value={formData.stemLink}
                    onChange={(e) => setFormData({ ...formData, stemLink: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple"
                  />
                  <UploadCloud className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Vision & Reference Tracks</label>
                <textarea
                  rows="3"
                  placeholder="Describe your desired sound, reference artists, key notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-sonic-purple resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sonic-purple via-purple-600 to-sonic-cyan text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  Submit Session Request
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
