import React from 'react';
import { SpurxLogo } from './SpurxLogo';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Music, 
  Radio, 
  ArrowUp, 
  Mail, 
  Sparkles,
  Disc3
} from 'lucide-react';

export const Footer = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 pt-20 pb-32 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sonic-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Drum Kit Drop Box */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              EXCLUSIVE SAMPLE VAULT & PRESETS
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Get Notified on New Drum Kits & Sample Packs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Receive free monthly 808s, Afrobeats percussion loops, and vocal chops used in SPURX charting records.
            </p>
          </div>

          <div className="flex items-center w-full lg:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="producer@studio.com"
              className="px-4 py-3 rounded-full bg-obsidian-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sonic-purple flex-1"
            />
            <button
              onClick={() => alert('Subscribed to SPURX Producer Vault!')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 whitespace-nowrap"
            >
              Join Vault
            </button>
          </div>
        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <SpurxLogo size="lg" />
            <p className="text-xs text-slate-400 mt-4 leading-relaxed font-light">
              Multi-Platinum record producer, audio mixing & mastering engineer, and spatial audio architect crafting culture-defining sounds.
            </p>
            <div className="mt-4 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Worldwide Studio Availability
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#discography" className="hover:text-sonic-cyan transition-colors">Discography & Credits</a></li>
              <li><a href="#beats" className="hover:text-sonic-cyan transition-colors">Beat Vault & Licenses</a></li>
              <li><a href="#services" className="hover:text-sonic-cyan transition-colors">Mixing & Production Services</a></li>
              <li><a href="#gear" className="hover:text-sonic-cyan transition-colors">Studio Gear & Hardware</a></li>
              <li><a href="#about" className="hover:text-sonic-cyan transition-colors">About & Philosophy</a></li>
            </ul>
          </div>

          {/* Col 3: Studios & Locations */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Studio Locations
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sonic-purple" />
                <span>Lagos, Nigeria (HQ Studio)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sonic-cyan" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                <span>Los Angeles, California</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/5">
              <span className="text-[11px] text-slate-500 font-mono block">Inquiries:</span>
              <a href="mailto:contact@spurxsound.com" className="text-xs text-sonic-cyan font-mono hover:underline">
                management@spurxsound.com
              </a>
            </div>
          </div>

          {/* Col 4: Socials */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: <Instagram className="w-4 h-4" />, name: 'Instagram', href: 'https://instagram.com' },
                { icon: <Twitter className="w-4 h-4" />, name: 'X / Twitter', href: 'https://twitter.com' },
                { icon: <Youtube className="w-4 h-4" />, name: 'YouTube', href: 'https://youtube.com' },
                { icon: <Music className="w-4 h-4" />, name: 'Spotify', href: 'https://spotify.com' },
                { icon: <Radio className="w-4 h-4" />, name: 'Apple Music', href: 'https://music.apple.com' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-obsidian-900 border border-white/10 text-slate-300 hover:text-sonic-cyan hover:border-sonic-cyan/40 transition-all"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              Direct Studio Booking
            </button>
          </div>

        </div>

        {/* Giant Watermark & Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} SPURX SOUND ARCHITECT. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">ENGINEERED FOR SUPREME FIDELITY</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-obsidian-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
