import React from 'react';
import { SpurxLogo } from './SpurxLogo';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  Code2,
  Mail,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const DevFooter = ({ onOpenBooking, onOpenEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const githubUrl = "https://github.com/TeeJay980";
  const whatsappUrl = "https://wa.me/2348091441008?text=Hi%20please%20I%20need%20your%20services";

  return (
    <footer className="relative bg-spex-bg pt-12 sm:pt-16 pb-10 sm:pb-14 border-t border-white/[0.08]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Spex Newsletter / Contact Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-spex-surface border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 sm:mb-12 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-spex-volt mb-1">
              DIRECT DISPATCH & INQUIRIES
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white">
              Have a Product in Mind? Let's Talk.
            </h3>
            <p className="text-xs text-spex-muted mt-0.5">
              Reach TeeJay via email (<span className="text-white">mctjay80 & mcteejay24@gmail.com</span>) with a pre-filled inquiry draft, or WhatsApp.
            </p>
          </div>

          <div className="flex items-center w-full lg:w-auto gap-2.5">
            <button
              onClick={onOpenEmail}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-slate-100 whitespace-nowrap flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white"
            >
              <Mail className="w-3.5 h-3.5 text-black stroke-[2.2]" />
              <span>Email TeeJay</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] whitespace-nowrap flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/[0.08]">
          
          {/* Col 1 */}
          <div className="md:col-span-1">
            <SpurxLogo size="lg" />
            <p className="text-xs text-spex-muted mt-4 leading-relaxed font-normal">
              Full-Stack Web Developer & Creative Technologist engineering high-performance web applications and design systems.
            </p>
            <div className="mt-4 text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Based in Abuja, Nigeria • Remote Worldwide
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#projects" className="hover:text-spex-volt transition-colors">Works & Projects</a></li>
              <li><a href="#skills" className="hover:text-spex-volt transition-colors">Engineering Stack</a></li>
              <li><a href="#services" className="hover:text-spex-volt transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-spex-volt transition-colors">Experience</a></li>
              <li><a href="#about" className="hover:text-spex-volt transition-colors">About & Testimonials</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Email Inboxes */}
          <div>
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Direct Inboxes
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li>
                <button 
                  onClick={onOpenEmail}
                  className="hover:text-spex-volt transition-colors flex items-center gap-2 text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-spex-volt" />
                  <span>mctjay80@gmail.com</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenEmail}
                  className="hover:text-spex-volt transition-colors flex items-center gap-2 text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-spex-volt" />
                  <span>mcteejay24@gmail.com</span>
                </button>
              </li>
              <li className="pt-2 border-t border-white/[0.06]">
                <span className="text-[10px] text-spex-muted block">WhatsApp Direct:</span>
                <span className="text-slate-200">+234 809 144 1008</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div>
            <h4 className="text-xs font-mono text-spex-muted uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: <Github className="w-4 h-4" />, name: 'GitHub (@TeeJay980)', href: githubUrl },
                { icon: <MessageCircle className="w-4 h-4 text-emerald-400" />, name: 'WhatsApp', href: whatsappUrl },
                { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <Twitter className="w-4 h-4" />, name: 'X / Twitter', href: 'https://twitter.com' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-spex-surface border border-white/10 text-spex-muted hover:text-white hover:border-spex-volt/50 transition-all"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              Start Project Proposal
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-spex-muted">
          <div>
            © {new Date().getFullYear()} SPURX (TeeJay). CLEAN ARCHITECTURE & MAXIMUM PERFORMANCE.
          </div>

          <div className="flex items-center gap-6">
            <span>100/100 LIGHTHOUSE READY</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-spex-surface border border-white/10 text-spex-muted hover:text-white transition-colors"
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
