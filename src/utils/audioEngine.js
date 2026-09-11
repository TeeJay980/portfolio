// SPURX Web Audio Synthesizer & Audio Player Engine
// Generates real procedural sonic loops per track genre and provides frequency analysis for visualizers

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.gainNode = null;
    this.isPlaying = false;
    this.currentTrackId = null;
    this.intervalId = null;
    this.listeners = new Set();
    this.currentTime = 0;
    this.duration = 45; // 45-second preview loops
    this.volume = 0.8;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = this.volume;
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb({
      isPlaying: this.isPlaying,
      currentTrackId: this.currentTrackId,
      currentTime: this.currentTime,
      duration: this.duration,
      volume: this.volume
    }));
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    this.notify();
  }

  seek(time) {
    this.currentTime = Math.max(0, Math.min(this.duration, time));
    this.notify();
  }

  playTrack(track) {
    this.init();
    if (this.currentTrackId === track.id && this.isPlaying) {
      this.pause();
      return;
    }

    this.stopAudioNodes();
    this.currentTrackId = track.id;
    this.isPlaying = true;
    this.currentTime = 0;

    this.startProceduralBeat(track.genre, track.bpm || 120);

    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.currentTime += 0.5;
        if (this.currentTime >= this.duration) {
          this.currentTime = 0;
        }
        this.notify();
      }
    }, 500);

    this.notify();
  }

  pause() {
    this.isPlaying = false;
    this.stopAudioNodes();
    clearInterval(this.intervalId);
    this.notify();
  }

  resume(track) {
    if (!this.currentTrackId && track) {
      this.playTrack(track);
      return;
    }
    this.init();
    this.isPlaying = true;
    if (track) {
      this.startProceduralBeat(track.genre, track.bpm || 120);
    }
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.currentTime += 0.5;
        if (this.currentTime >= this.duration) {
          this.currentTime = 0;
        }
        this.notify();
      }
    }, 500);
    this.notify();
  }

  togglePlay(track) {
    if (this.isPlaying && this.currentTrackId === track.id) {
      this.pause();
    } else {
      this.playTrack(track);
    }
  }

  stopAudioNodes() {
    if (this.beatInterval) {
      clearInterval(this.beatInterval);
      this.beatInterval = null;
    }
  }

  // Generates real musical loops tailored to the music genre
  startProceduralBeat(genre, bpm = 120) {
    this.stopAudioNodes();
    if (!this.ctx) return;

    const beatDuration = (60 / bpm) * 1000;
    let step = 0;

    // Scales for genres
    const chords = {
      Afrobeats: [
        [220, 277.18, 329.63], // A minor
        [174.61, 220, 261.63], // F major
        [196, 246.94, 293.66], // G major
        [164.81, 207.65, 246.94] // E minor
      ],
      Trap: [
        [130.81, 155.56, 196], // C minor
        [116.54, 138.59, 174.61], // Bb minor
        [123.47, 146.83, 185], // B minor
        [110, 130.81, 164.81] // A minor
      ],
      'R&B': [
        [261.63, 329.63, 392, 493.88], // Cmaj7
        [220, 261.63, 329.63, 392],    // Am7
        [174.61, 220, 261.63, 329.63], // Fmaj7
        [196, 246.94, 293.66, 349.23]  // G7
      ],
      Drill: [
        [146.83, 174.61, 220], // Dm
        [130.81, 164.81, 196], // C
        [116.54, 146.83, 174.61] // Bb
      ],
      Electronic: [
        [130.81, 261.63, 392, 523.25],
        [174.61, 349.23, 523.25, 698.46],
        [196, 392, 587.33, 783.99]
      ]
    };

    const playSound = () => {
      if (!this.isPlaying || !this.ctx) return;
      const t = this.ctx.currentTime;

      // 1. Kick / 808
      if (step % 4 === 0 || (genre === 'Afrobeats' && (step % 8 === 0 || step % 8 === 3 || step % 8 === 6))) {
        this.playKick(t, genre === 'Trap' || genre === 'Drill');
      }

      // 2. Snare / Rimshot
      if (step % 8 === 4 || (genre === 'Afrobeats' && (step % 8 === 4 || step % 8 === 7))) {
        this.playSnare(t);
      }

      // 3. Hi-Hats / Shakers
      this.playHiHat(t, step % 2 === 0);

      // 4. Melodic Synth / Rhodes Chords
      const genreChords = chords[genre] || chords['Afrobeats'];
      const chordIdx = Math.floor((step / 8) % genreChords.length);
      const chord = genreChords[chordIdx];

      if (step % 4 === 0) {
        this.playSynthChord(t, chord, genre);
      }

      step = (step + 1) % 32;
    };

    // Immediate first beat
    playSound();
    this.beatInterval = setInterval(playSound, beatDuration / 2);
  }

  playKick(time, is808 = false) {
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const startFreq = is808 ? 140 : 160;
      const endFreq = is808 ? 36 : 45;
      const decay = is808 ? 0.6 : 0.28;

      osc.frequency.setValueAtTime(startFreq, time);
      osc.frequency.exponentialRampToValueAtTime(endFreq, time + 0.12);

      gain.gain.setValueAtTime(0.7, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

      osc.connect(gain);
      gain.connect(this.analyser);
      this.analyser.connect(this.gainNode);

      osc.start(time);
      osc.stop(time + decay + 0.05);
    } catch (e) {
      // AudioContext safe guard
    }
  }

  playSnare(time) {
    try {
      // Noise buffer for snap
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1000;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.analyser);
      this.analyser.connect(this.gainNode);

      whiteNoise.start(time);
      whiteNoise.stop(time + 0.12);
    } catch (e) {}
  }

  playHiHat(time, accent = false) {
    try {
      const bufferSize = this.ctx.sampleRate * 0.04;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 6500;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(accent ? 0.15 : 0.07, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.analyser);
      this.analyser.connect(this.gainNode);

      noise.start(time);
      noise.stop(time + 0.04);
    } catch (e) {}
  }

  playSynthChord(time, frequencies, genre) {
    try {
      frequencies.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = genre === 'R&B' ? 'triangle' : genre === 'Trap' ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(freq, time);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(genre === 'Trap' ? 1200 : 2400, time);
        filter.frequency.exponentialRampToValueAtTime(600, time + 0.4);

        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.55);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.analyser);
        this.analyser.connect(this.gainNode);

        osc.start(time);
        osc.stop(time + 0.6);
      });
    } catch (e) {}
  }

  getByteFrequencyData() {
    if (!this.analyser) {
      return new Uint8Array(64).fill(0);
    }
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }
}

export const audioEngine = new AudioEngine();
