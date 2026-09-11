import React from 'react';
import { Quote, Award, Sparkles, Star } from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/tracks';

export const Testimonials = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Label Client Marquee */}
        <div className="pb-16 border-b border-white/10">
          <p className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">
            TRUSTED BY GLOBAL RECORD LABELS & CHARTING ARTISTS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="font-display font-black text-lg sm:text-2xl tracking-widest text-slate-400 hover:text-white transition-colors select-none"
              >
                {client.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bio & Philosophy Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Producer Portrait Artwork & Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-3 group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-950">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80"
                  alt="SPURX in Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Floating Bio Tag */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">THE SOUND ARCHITECT</div>
                  <h3 className="text-2xl font-display font-extrabold text-white mt-1">SPURX</h3>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    Lagos • London • Los Angeles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sound Philosophy & Accolades */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sonic-purple/15 border border-sonic-purple/30 text-xs font-mono text-purple-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sonic-cyan" />
              THE PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              MUSIC IS FREQUENCY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sonic-purple via-sonic-cyan to-white">
                WE ENGINEER EMOTION.
              </span>
            </h2>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              With over a decade behind SSL and Neve analog consoles, <strong className="text-white font-semibold">SPURX</strong> has shaped the sonic signature of contemporary Afro-fusion, Drill, and ambient R&B. By blending analog tube warmth with surgical digital precision and Dolby Atmos 3D spatial positioning, every track hits with unmatched impact on Spotify, Apple Music, and festival mainstages.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/5">
                <div className="text-xl font-display font-bold text-white">Hybrid Master Chain</div>
                <p className="text-xs text-slate-400 mt-1">Tube-Tech optical compression meets 64-bit digital limiting.</p>
              </div>
              <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/5">
                <div className="text-xl font-display font-bold text-white">Spatial Immersion</div>
                <p className="text-xs text-slate-400 mt-1">Calibrated 7.1.4 Dolby Atmos mixing environment.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Testimonial Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-sonic-purple/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-sonic-cyan transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
