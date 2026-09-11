import React from 'react';
import { 
  Code2, 
  Layers, 
  Rocket, 
  Gauge, 
  Check, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES } from '../data/developerData';

export const DevServices = ({ onOpenBooking }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'fullstack': return <Code2 className="w-5 h-5 text-spex-volt" />;
      case 'frontend': return <Layers className="w-5 h-5 text-white" />;
      case 'mvp': return <Rocket className="w-5 h-5 text-spex-volt" />;
      case 'optimization': return <Gauge className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-spex-volt" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 relative bg-spex-bg">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spex-surface border border-white/10 text-xs font-mono text-spex-muted mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
            SERVICES & COLLABORATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
            ENGINEERING & <br />
            <span className="text-spex-volt">
              SOFTWARE OFFERINGS
            </span>
          </h2>
          <p className="mt-3 text-spex-muted text-xs sm:text-sm leading-relaxed">
            From early-stage product MVPs to enterprise frontend architectures, I ship high-converting software with zero technical debt.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`spex-card p-5 sm:p-6 rounded-2xl border flex flex-col justify-between group relative shadow-sm ${
                service.popular
                  ? 'border-spex-volt/50 bg-spex-surface shadow-[0_0_25px_rgba(231,254,0,0.08)]'
                  : 'border-white/[0.08] hover:border-white/20'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-spex-volt text-[10px] font-mono font-bold text-black uppercase tracking-wider">
                  Popular Request
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-[#090A0D] border border-white/10">
                    {getIcon(service.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-spex-muted font-mono block uppercase">Starting from</span>
                    <span className="text-lg font-mono font-black text-white">{service.priceStarting}</span>
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-spex-volt transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-spex-muted mt-2 leading-relaxed">
                  {service.tagline}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-slate-300">
                  <Clock className="w-3 h-3 text-spex-volt" />
                  <span>{service.timeline}</span>
                </div>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-spex-volt mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    service.popular
                      ? 'bg-white text-black hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  <span>Book Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
