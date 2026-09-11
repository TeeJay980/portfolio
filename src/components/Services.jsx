import React from 'react';
import { 
  Music2, 
  Sliders, 
  Radio, 
  Mic, 
  Check, 
  Clock, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/tracks';

export const Services = ({ onOpenBooking }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Music2': return <Music2 className="w-6 h-6 text-sonic-purple" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-sonic-cyan" />;
      case 'Radio': return <Radio className="w-6 h-6 text-fuchsia-400" />;
      case 'Mic': return <Mic className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-sonic-purple" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sonic-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sonic-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sonic-purple/15 border border-sonic-purple/30 text-xs font-mono text-purple-300 mb-4">
            <Sliders className="w-3.5 h-3.5 text-sonic-cyan" />
            ENGINEERING & PRODUCTION SUITE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            INDUSTRY-STANDARD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sonic-cyan to-white">
              AUDIO SERVICES
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Elevate your raw music into international, platinum-grade masters using world-class analog equipment and bespoke hybrid processing chains.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative ${
                service.popular
                  ? 'border-sonic-purple/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-obsidian-900/80'
                  : 'border-white/10 hover:border-sonic-cyan/40 bg-obsidian-950/60'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-sonic-purple to-sonic-cyan text-[10px] font-mono font-bold text-white shadow-md uppercase tracking-wider">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon & Starting Price */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-obsidian-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Starting from</span>
                    <span className="text-xl font-mono font-extrabold text-white">{service.priceStarting}</span>
                  </div>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="text-lg font-display font-bold text-white group-hover:text-sonic-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Turnaround Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-cyan-300 border border-white/5">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{service.turnaround}</span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    service.popular
                      ? 'bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white shadow-md hover:opacity-95'
                      : 'bg-obsidian-900 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
