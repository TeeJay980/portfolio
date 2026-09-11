import React, { useEffect, useRef } from 'react';
import { audioEngine } from '../utils/audioEngine';

export const VisualizerCanvas = ({ isPlaying = false, height = 90, barCount = 48, className = '' }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      const width = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, width, h);

      const freqData = audioEngine.getByteFrequencyData();
      const hasAudio = isPlaying && freqData.some(v => v > 0);

      const totalBars = barCount;
      const barWidth = (width / totalBars) * 0.65;
      const gap = (width / totalBars) * 0.35;

      for (let i = 0; i < totalBars; i++) {
        let value = 0;
        if (hasAudio) {
          const sampleIdx = Math.floor((i / totalBars) * freqData.length);
          value = (freqData[sampleIdx] / 255);
        } else {
          // Ambient idle breathing wave
          const time = Date.now() * 0.002;
          value = Math.sin(time + i * 0.2) * 0.15 + 0.18;
        }

        const barHeight = Math.max(4, value * (h - 8));
        const x = i * (barWidth + gap);
        const y = (h - barHeight) / 2;

        // Gradient for each bar
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (isPlaying) {
          gradient.addColorStop(0, '#22D3EE');
          gradient.addColorStop(0.5, '#A855F7');
          gradient.addColorStop(1, '#8B5CF6');
        } else {
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
          gradient.addColorStop(1, 'rgba(6, 182, 212, 0.2)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [2, 2, 2, 2]);
        ctx.fill();

        // Top glow cap for active bars
        if (isPlaying && value > 0.4) {
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(x + barWidth / 2, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying, barCount]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        width={480}
        height={height}
        className="w-full h-full block"
      />
    </div>
  );
};
