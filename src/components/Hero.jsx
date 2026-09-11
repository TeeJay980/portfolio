import React from 'react';
import { 
  Play, 
  Pause, 
  Disc, 
  Volume2, 
  Radio, 
  Sliders, 
  Sparkles, 
  ArrowUpRight,
  Headphones,
  Award,
  Flame,
  Zap
} from 'lucide-react';
import { VisualizerCanvas } from './VisualizerCanvas';
import { STATS } from '../data/tracks';

export const Hero = ({ heroTrack, isPlaying, onTogglePlay, onOpenBooking }) => {
  const isHeroPlaying = isPlaying && heroTrack;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sonic-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sonic-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-sonic-purple/40 text-xs font-mono mb-6 backdrop-blur-md glow-box-purple">
            <span className="flex h-2 w-2 rounded-full bg-sonic-cyan animate-ping" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-white font-semibold">
              MULTI-PLATINUM SOUND ARCHITECT & PRODUCER
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-sonic-violet font-mono font-bold">SPURX</span>
          </div>

          {/* Main Giant Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] max-w-5xl text-white">
            CRAFTING SOUNDS THAT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sonic-cyan to-white drop-shadow-[0_0_35px_rgba(139,92,246,0.4)]">
              MOVE CULTURES.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Pioneering the next era of <span className="text-white font-medium">Afrobeats</span>, <span className="text-white font-medium">Trap</span>, and <span className="text-white font-medium">Dolby Atmos Spatial Audio</span>. Defining global chart-topping sonic identities for elite artists worldwide.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#discography"
              className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <Headphones className="w-4 h-4" />
              Listen to Discography
            </a>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/15 text-slate-200 hover:text-white transition-all transform hover:-translate-y-0.5 flex items-center gap-2 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-sonic-cyan" />
              Book Production / Mixing
            </button>
          </div>
        </div>

        {/* Featured Hero Interactive Record Deck Showcase */}
        {heroTrack && (
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden group">
              
              {/* Radial gradient background in card */}
              <div className="absolute inset-0 bg-gradient-to-br from-sonic-purple/10 via-transparent to-sonic-cyan/10 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Vinyl Record Visualizer Disc */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                    
                    {/* Glowing outer aura */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-sonic-purple to-sonic-cyan blur-md opacity-40 transition-opacity duration-500 ${isHeroPlaying ? 'opacity-80 scale-105' : ''}`} />

                    {/* Vinyl Body */}
                    <div 
                      className={`relative w-full h-full rounded-full bg-neutral-950 border-4 border-neutral-900 shadow-2xl flex items-center justify-center transition-all duration-700 ${
                        isHeroPlaying ? 'animate-spin-slow shadow-[0_0_30px_rgba(139,92,246,0.6)]' : ''
                      }`}
                      style={{
                        backgroundImage: `radial-gradient(circle, #171717 2px, transparent 3px), radial-gradient(circle, #262626 1px, transparent 1px)`,
                        backgroundSize: '12px 12px, 6px 6px'
                      }}
                    >
                      {/* Vinyl Grooves Rings */}
                      <div className="absolute inset-3 rounded-full border border-white/5" />
                      <div className="absolute inset-7 rounded-full border border-white/5" />
                      <div className="absolute inset-11 rounded-full border border-white/5" />

                      {/* Center Record Label */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-sonic-purple via-indigo-600 to-sonic-cyan p-0.5 shadow-inner flex flex-col items-center justify-center text-center">
                        <div className="w-full h-full rounded-full bg-obsidian-950 flex flex-col items-center justify-center p-1">
                          <span className="text-[7px] font-mono tracking-widest text-cyan-400 font-bold">SPURX</span>
                          <span className="text-[6px] text-slate-400 font-mono uppercase truncate max-w-[50px]">{heroTrack.genre}</span>
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/20 mt-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Play/Pause Floating Overlay */}
                    <button
                      onClick={() => onTogglePlay(heroTrack)}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-sonic-purple/90 hover:bg-sonic-purple text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 z-20 backdrop-blur-sm"
                      aria-label="Play Featured Track"
                    >
                      {isHeroPlaying ? (
                        <Pause className="w-6 h-6 fill-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white ml-1" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Track Details & Live Audio Visualizer */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sonic-purple/20 text-purple-300 border border-sonic-purple/30">
                        {heroTrack.tag}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                        {heroTrack.bpm} BPM • {heroTrack.key}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-sonic-cyan font-mono">
                      <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{heroTrack.streams} STREAMS</span>
                    </div>
                  </div>

                  {/* Title & Artist */}
                  <div className="mt-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                      {heroTrack.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium mt-0.5">
                      {heroTrack.artist}
                    </p>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      {heroTrack.producerCredit}
                    </p>
                  </div>

                  {/* Reactive Soundwave Visualizer Canvas */}
                  <div className="mt-4 p-3 rounded-2xl bg-obsidian-950/70 border border-white/5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 px-1">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Radio className="w-3 h-3 animate-pulse" />
                        {isHeroPlaying ? 'LIVE FREQUENCY SPECTRUM' : 'CLICK PLAY FOR PROCEDURAL AUDIO PREVIEW'}
                      </span>
                      <span>44.1kHz • 24-BIT</span>
                    </div>
                    
                    <VisualizerCanvas isPlaying={isHeroPlaying} height={42} barCount={44} />
                  </div>

                  {/* Interactive Trigger Row */}
                  <div className="mt-4 flex items-center justify-between pt-2 border-t border-white/5">
                    <button
                      onClick={() => onTogglePlay(heroTrack)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-sonic-cyan hover:text-white transition-colors"
                    >
                      {isHeroPlaying ? 'Pause Audio Preview' : 'Listen with Procedural Synthesizer'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="text-[11px] text-slate-400 font-mono">
                      Stems & Licensing Available
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* Live Metrics / Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-sonic-purple/30 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 group-hover:from-sonic-cyan group-hover:to-sonic-purple transition-all">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
