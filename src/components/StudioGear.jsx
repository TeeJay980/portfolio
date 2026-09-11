import React, { useState } from 'react';
import { Sliders, Cpu, Radio, Mic, Headphones, Disc, CheckCircle } from 'lucide-react';
import { GEAR_LIST } from '../data/tracks';

export const StudioGear = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="gear" className="py-24 relative bg-obsidian-950 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              ANALOG & DIGITAL RACK
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              WORLD-CLASS <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sonic-purple">
                STUDIO SIGNAL CHAIN
              </span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Every record is processed through high-voltage analog tubes, custom Neve discrete transformers, and ultra-linear mastering converters.
          </p>
        </div>

        {/* Gear Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GEAR_LIST.map((gearGroup, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                    0{idx + 1} // RACK
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {gearGroup.category}
                </h3>

                <ul className="mt-5 space-y-3">
                  {gearGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>CALIBRATED TO 0.1dB</span>
                <span className="text-emerald-400/80">ANALOG WARMTH</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Specs Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">7.1.4</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Dolby Atmos Calibrated Array</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">192 kHz</div>
            <div className="text-xs text-slate-400 font-mono mt-1">32-Bit Floating Point Processing</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">-14 LUFS</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Apple Digital Masters Certified</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">Zero Noise</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Floating Studio Acoustic Isolation</div>
          </div>
        </div>

      </div>
    </section>
  );
};
