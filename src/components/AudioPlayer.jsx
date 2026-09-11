import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Radio, 
  Maximize2, 
  Minimize2, 
  Sparkles,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { TRACKS_DATA } from '../data/tracks';

export const AudioPlayer = ({ currentTrack, isPlaying, onTogglePlay, onSelectTrack }) => {
  const [playbackState, setPlaybackState] = useState({
    currentTime: 0,
    duration: 45,
    volume: 0.8
  });
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setPlaybackState({
        currentTime: state.currentTime,
        duration: state.duration,
        volume: state.volume
      });
    });
    return unsubscribe;
  }, []);

  if (!currentTrack) return null;

  const currentIdx = TRACKS_DATA.findIndex(t => t.id === currentTrack.id);

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % TRACKS_DATA.length;
    onSelectTrack(TRACKS_DATA[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIdx - 1 + TRACKS_DATA.length) % TRACKS_DATA.length;
    onSelectTrack(TRACKS_DATA[prevIdx]);
  };

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    audioEngine.seek(val);
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    audioEngine.setVolume(val);
    if (val > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioEngine.setVolume(0.8);
      setIsMuted(false);
    } else {
      audioEngine.setVolume(0);
      setIsMuted(true);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <aside 
      aria-label="Audio Player"
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isCollapsed ? 'translate-y-[calc(100%-24px)]' : 'translate-y-0'
      }`}
    >
      {/* Collapse Toggle Handle */}
      <div className="max-w-7xl mx-auto px-4 flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="px-3 py-1 bg-obsidian-900/90 border border-b-0 border-white/10 rounded-t-xl text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-1 shadow-lg"
        >
          {isCollapsed ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {isCollapsed ? 'SHOW AUDIO DOCK' : 'MINIMIZE'}
        </button>
      </div>

      {/* Main Glass Player Container */}
      <div className="bg-obsidian-950/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] px-4 py-3 sm:py-4">
        
        {/* Progress Scrubber Line */}
        <div className="max-w-7xl mx-auto mb-2 relative group flex items-center">
          <input
            type="range"
            min="0"
            max={playbackState.duration}
            step="0.1"
            value={playbackState.currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sonic-cyan hover:h-2 transition-all"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Left: Track Details */}
          <div className="flex items-center gap-3.5 w-full sm:w-1/3 min-w-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-obsidian-900 flex-shrink-0 border border-white/10">
              <img
                src={currentTrack.coverImage}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center gap-0.5">
                  <span className="w-1 h-3 bg-sonic-cyan animate-eq-1 rounded-full" />
                  <span className="w-1 h-4 bg-sonic-purple animate-eq-3 rounded-full" />
                  <span className="w-1 h-2 bg-sonic-cyan animate-eq-2 rounded-full" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-display font-bold text-white truncate">
                  {currentTrack.title}
                </h4>
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-sonic-purple/20 text-purple-300 border border-sonic-purple/30">
                  {currentTrack.genre}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex flex-col items-center justify-center w-full sm:w-1/3">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Previous Track"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => onTogglePlay(currentTrack)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-sonic-purple to-sonic-cyan text-white flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Next Track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400 mt-1">
              <span>{formatTime(playbackState.currentTime)}</span>
              <span>/</span>
              <span>{formatTime(playbackState.duration)} (PREVIEW LOOP)</span>
            </div>
          </div>

          {/* Right: Sound Engine Status & Volume */}
          <div className="hidden sm:flex items-center justify-end gap-4 w-1/3">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isMuted || playbackState.volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : playbackState.volume}
                onChange={handleVolume}
                className="w-20 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sonic-cyan"
              />
            </div>

            <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>WEB AUDIO SYNTH</span>
            </div>
          </div>

        </div>

      </div>
    </aside>
  );
};
