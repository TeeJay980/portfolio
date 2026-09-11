import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  ShoppingCart, 
  Tag, 
  Download, 
  Sliders, 
  Zap, 
  FileAudio, 
  Sparkles,
  Check
} from 'lucide-react';
import { TRACKS_DATA } from '../data/tracks';

export const BeatStore = ({ currentTrack, isPlaying, onTogglePlay, onOpenBooking }) => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [activeBeat, setActiveBeat] = useState(null);

  const licenseTiers = [
    {
      name: 'MP3 Lease',
      price: '$49',
      rights: ['High Quality MP3 (320kbps)', '100,000 Audio Streams', '1 Music Video', 'Non-Exclusive']
    },
    {
      name: 'WAV + Trackouts (Stems)',
      price: '$199',
      popular: true,
      rights: ['24-Bit WAV + Full Stems / Trackouts', '500,000 Audio Streams', 'Radio Airplay Rights', 'Profit Performances']
    },
    {
      name: 'Exclusive Master Rights',
      price: '$950',
      rights: ['Full Ownership & Copyright Transfer', 'Unlimited Streams & Monetization', 'Custom Mix Tweaks by SPURX', 'Removed from Beat Vault']
    }
  ];

  const handleOpenLicense = (track) => {
    setActiveBeat(track);
    setSelectedLicense(licenseTiers[1]); // default to WAV + stems
  };

  return (
    <section id="beats" className="py-24 relative bg-obsidian-900/50 border-y border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-sonic-cyan" />
              ROYALTY-READY BEAT VAULT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              LICENSE PREMIUM <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sonic-cyan via-purple-300 to-sonic-purple">
                PRODUCTIONS & STEMS
              </span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Need an instant industry-grade bounce for your next single or album? Instant stem downloads with commercial broadcast licenses.
          </p>
        </div>

        {/* Beats Table / Cards List */}
        <div className="space-y-4">
          {TRACKS_DATA.map((beat, index) => {
            const isThisPlaying = isPlaying && currentTrack?.id === beat.id;

            return (
              <div
                key={beat.id}
                className={`glass-panel p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-4 group ${
                  isThisPlaying 
                    ? 'border-sonic-cyan/50 bg-obsidian-850 shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                    : 'border-white/5 hover:border-white/15 bg-obsidian-950/60'
                }`}
              >
                {/* Left: Play button, Cover, Title */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <button
                    onClick={() => onTogglePlay(beat)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                      isThisPlaying
                        ? 'bg-sonic-cyan text-black shadow-lg scale-105'
                        : 'bg-obsidian-900 border border-white/10 text-white hover:bg-sonic-purple group-hover:border-sonic-purple'
                    }`}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-5 h-5 fill-black" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <img
                    src={beat.coverImage}
                    alt={beat.title}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-display font-bold text-white group-hover:text-sonic-cyan transition-colors truncate">
                        {beat.title}
                      </span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-sonic-purple/20 text-purple-300 border border-sonic-purple/30">
                        {beat.genre}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">
                      {beat.bpm} BPM • Key: {beat.key}
                    </p>
                  </div>
                </div>

                {/* Center: Waveform representation */}
                <div className="hidden lg:flex items-center gap-1 w-64 h-8 px-3 rounded-lg bg-obsidian-950/60 border border-white/5">
                  {[...Array(32)].map((_, i) => {
                    const height = isThisPlaying
                      ? Math.sin(i * 0.4 + (index * 2)) * 50 + 50
                      : (Math.sin(i * 0.3) * 30 + 40);
                    return (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          isThisPlaying ? 'bg-sonic-cyan' : 'bg-slate-700'
                        }`}
                        style={{ height: `${Math.max(15, height)}%` }}
                      />
                    );
                  })}
                </div>

                {/* Right: Tag, Price & License Button */}
                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-mono block">Starting from</span>
                    <span className="text-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                      {beat.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenLicense(beat)}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white hover:opacity-95 shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    License Beat
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Beat Production Banner */}
        <div className="mt-12 p-8 rounded-3xl glass-card border border-sonic-purple/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-display font-extrabold text-white">
              Looking for an Exclusive Custom Beat Tailored to Your Voice?
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              SPURX composes tailored record arrangements from scratch with live guitars, analog synthesizers, and proprietary drum sound design.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="relative z-10 px-6 py-3 rounded-full font-bold text-sm bg-white text-obsidian-950 hover:bg-slate-200 shadow-xl transition-all whitespace-nowrap flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-sonic-purple" />
            Request Custom Production
          </button>
        </div>

      </div>

      {/* Licensing Modal */}
      {selectedLicense && activeBeat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-2xl w-full border border-white/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-sonic-cyan">LICENSING AGREEMENT</span>
                <h3 className="text-xl font-display font-bold text-white mt-0.5">
                  {activeBeat.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLicense(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Tier Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {licenseTiers.map((tier) => (
                <div
                  key={tier.name}
                  onClick={() => setSelectedLicense(tier)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedLicense.name === tier.name
                      ? 'border-sonic-cyan bg-sonic-cyan/10 glow-box-cyan'
                      : 'border-white/10 bg-obsidian-900/60 hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-mono text-slate-400">{tier.name}</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">{tier.price}</div>
                </div>
              ))}
            </div>

            {/* Selected Rights List */}
            <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/5 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Included with this license:</div>
              {selectedLicense.rights.map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedLicense(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedLicense(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white shadow-lg flex items-center gap-2"
              >
                Proceed to Checkout ({selectedLicense.price})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
