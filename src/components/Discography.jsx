import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Disc3, 
  ExternalLink, 
  Flame, 
  Music, 
  Layers, 
  Share2, 
  Radio,
  CheckCircle2
} from 'lucide-react';
import { TRACKS_DATA } from '../data/tracks';

export const Discography = ({ currentTrack, isPlaying, onTogglePlay, onSelectTrack }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const genres = ['All', 'Afrobeats', 'Trap', 'R&B', 'Drill', 'Electronic'];

  const filteredTracks = activeFilter === 'All'
    ? TRACKS_DATA
    : TRACKS_DATA.filter(t => t.genre === activeFilter);

  return (
    <section id="discography" className="py-24 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sonic-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-sonic-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sonic-purple/15 border border-sonic-purple/30 text-xs font-mono text-purple-300 mb-3">
              <Disc3 className="w-3.5 h-3.5 text-sonic-cyan animate-spin-slow" />
              CURATED DISCOGRAPHY
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              PRODUCTIONS & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sonic-purple via-purple-300 to-sonic-cyan">
                CHART RELEASES
              </span>
            </h2>
          </div>

          {/* Genre Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveFilter(genre)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === genre
                    ? 'bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'bg-obsidian-900/80 text-slate-400 hover:text-white hover:bg-obsidian-850 border border-white/5'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Releases */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTracks.map((track) => {
            const isThisPlaying = isPlaying && currentTrack?.id === track.id;

            return (
              <div
                key={track.id}
                className="group glass-card rounded-3xl p-5 border border-white/10 hover:border-sonic-purple/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Ambient Glow on Active/Hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-sonic-purple/20 via-transparent to-sonic-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none ${isThisPlaying ? 'opacity-100' : ''}`} />

                {/* Top Section: Album Art with Vinyl Pullout Animation */}
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-obsidian-950 flex items-center justify-center">
                    
                    {/* Vinyl Record that slides out on hover */}
                    <div 
                      className={`absolute right-4 w-4/5 h-4/5 rounded-full bg-neutral-950 border-4 border-neutral-900 shadow-2xl flex items-center justify-center transition-all duration-500 transform group-hover:translate-x-12 ${
                        isThisPlaying ? 'translate-x-14 animate-spin-slow' : 'translate-x-2'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sonic-purple to-sonic-cyan p-0.5 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-[6px] font-mono text-cyan-400 font-bold">SPURX</span>
                        </div>
                      </div>
                    </div>

                    {/* Album Cover Art */}
                    <img
                      src={track.coverImage}
                      alt={track.title}
                      className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-obsidian-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                        {track.genre}
                      </span>
                      
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-sonic-purple/80 backdrop-blur-md text-white shadow-md">
                        {track.tag}
                      </span>
                    </div>

                    {/* Center Play Button Action */}
                    <button
                      onClick={() => onTogglePlay(track)}
                      className={`absolute z-20 m-auto w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 ${
                        isThisPlaying
                          ? 'bg-sonic-cyan text-black scale-105 shadow-[0_0_25px_rgba(6,182,212,0.8)]'
                          : 'bg-white/90 hover:bg-white text-black backdrop-blur-md opacity-90 group-hover:opacity-100'
                      }`}
                      aria-label={`Play ${track.title}`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-6 h-6 fill-black" />
                      ) : (
                        <Play className="w-6 h-6 fill-black ml-1" />
                      )}
                    </button>

                    {/* Bottom stats inside cover */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {track.streams}
                      </span>
                      <span>{track.bpm} BPM • {track.key}</span>
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-sonic-cyan transition-colors truncate">
                        {track.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">{track.year}</span>
                    </div>

                    <p className="text-sm font-medium text-slate-300 mt-1 truncate">
                      {track.artist}
                    </p>

                    <p className="text-xs text-slate-400 font-mono mt-1">
                      {track.producerCredit}
                    </p>

                    <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Actions & Links */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-obsidian-900 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 border border-white/5 transition-colors"
                      title="Listen on Spotify"
                    >
                      <Music className="w-4 h-4" />
                    </a>
                    <a
                      href={track.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-obsidian-900 hover:bg-pink-500/20 text-slate-400 hover:text-pink-400 border border-white/5 transition-colors"
                      title="Listen on Apple Music"
                    >
                      <Radio className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => onTogglePlay(track)}
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300 group-hover:text-sonic-cyan transition-colors"
                  >
                    {isThisPlaying ? (
                      <span className="flex items-center gap-1 text-cyan-400">
                        <span className="w-1 h-3 bg-sonic-cyan animate-eq-1" />
                        <span className="w-1 h-3 bg-sonic-purple animate-eq-2" />
                        <span className="w-1 h-3 bg-sonic-cyan animate-eq-3" />
                        PLAYING
                      </span>
                    ) : (
                      <>
                        <span>PLAY DEMO</span>
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
