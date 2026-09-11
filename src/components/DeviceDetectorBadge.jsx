import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Cpu, 
  Globe, 
  ShieldCheck,
  Check
} from 'lucide-react';

export const DeviceDetectorBadge = ({ variant = 'navbar' }) => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: 'Desktop',
    os: 'Detecting...',
    browser: 'Browser',
    screenSize: '',
    dpr: 1,
    isTouch: false,
    icon: Monitor
  });

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent || '';
      const platform = navigator.userAgentData?.platform || navigator.platform || '';
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // 1. Detect OS & Platform
      let os = 'Unknown OS';
      const isIOS = /iPhone|iPad|iPod/i.test(ua) || (isTouch && (/Macintosh|Mac OS/i.test(ua) || /Mac/i.test(platform)) && (navigator.maxTouchPoints > 1 || width < 1024));
      
      if (isIOS) {
        if (/iPad/i.test(ua) || (width >= 768 && /Mac/i.test(platform))) {
          os = 'iPadOS';
        } else {
          os = 'iOS';
        }
      } else if (/Win/i.test(platform) || /Windows/i.test(ua)) {
        os = 'Windows';
      } else if (/Mac/i.test(platform) || /Macintosh|Mac OS/i.test(ua)) {
        os = 'macOS';
      } else if (/Android/i.test(ua)) {
        os = 'Android';
      } else if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
        os = 'Linux';
      } else if (/CrOS/i.test(ua)) {
        os = 'ChromeOS';
      }

      // 2. Detect Browser
      let browser = 'Browser';
      if (/CriOS/i.test(ua)) {
        browser = 'Chrome (iOS)';
      } else if (/FxiOS/i.test(ua)) {
        browser = 'Firefox (iOS)';
      } else if (/EdgiOS/i.test(ua) || /Edg/i.test(ua)) {
        browser = 'Edge';
      } else if (/Chrome/i.test(ua) && !/Chromium|Edg/i.test(ua)) {
        browser = 'Chrome';
      } else if (/Safari/i.test(ua) || /AppleWebKit/i.test(ua)) {
        browser = 'Safari';
      } else if (/Firefox/i.test(ua)) {
        browser = 'Firefox';
      } else if (/Opera|OPR/i.test(ua)) {
        browser = 'Opera';
      }

      // 3. Detect Device Form Factor
      let deviceType = 'Desktop';
      let icon = Monitor;

      const isMobileUA = /Mobi|Android|iPhone|iPod/i.test(ua) || (isIOS && os === 'iOS');
      const isTabletUA = /iPad|Tablet|(Android(?!.*Mobile))/i.test(ua) || os === 'iPadOS';

      if (isTabletUA || (isTouch && width >= 768 && width <= 1024)) {
        deviceType = 'Tablet';
        icon = Tablet;
      } else if (isMobileUA || (isTouch && width < 768)) {
        deviceType = 'Mobile';
        icon = Smartphone;
      } else if (width <= 1440) {
        deviceType = 'Laptop';
        icon = Laptop;
      } else {
        deviceType = 'Desktop';
        icon = Monitor;
      }

      setDeviceInfo({
        deviceType,
        os,
        browser,
        screenSize: `${width}×${height}`,
        dpr: Math.round(dpr * 10) / 10,
        isTouch,
        icon
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  const IconComponent = deviceInfo.icon;

  if (variant === 'overlay') {
    return (
      <div className="p-4 rounded-xl bg-spex-surface border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-spex-muted">
          <span className="flex items-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DETECTED CLIENT TELEMETRY</span>
          </span>
          <span className="text-spex-volt">LIVE • 60FPS</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#090A0D] border border-white/5">
            <span className="text-spex-muted text-[10px] block">SYSTEM / OS</span>
            <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
              <IconComponent className="w-3.5 h-3.5 text-spex-volt" />
              {deviceInfo.os} ({deviceInfo.deviceType})
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#090A0D] border border-white/5">
            <span className="text-spex-muted text-[10px] block">VIEWPORT RESOLUTION</span>
            <span className="text-white font-bold mt-0.5 block">
              {deviceInfo.screenSize} <span className="text-spex-muted text-[10px]">@{deviceInfo.dpr}x</span>
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#090A0D] border border-white/5">
            <span className="text-spex-muted text-[10px] block">BROWSER RUNTIME</span>
            <span className="text-slate-200 mt-0.5 block">
              {deviceInfo.browser}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#090A0D] border border-white/5">
            <span className="text-spex-muted text-[10px] block">INPUT INTERFACE</span>
            <span className="text-slate-200 mt-0.5 block">
              {deviceInfo.isTouch ? 'Touch Interface' : 'Precision Pointer'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Navbar pill (visible on mobile, tablet & desktop)
  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button 
        onClick={() => setShowTooltip(prev => !prev)}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 border border-white/10 cursor-pointer transition-all hover:border-white/30 active:scale-95 shadow-sm"
        aria-label="Toggle device telemetry"
        title="Live Client Device Telemetry (Tap to view details)"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        <IconComponent className="w-3.5 h-3.5 text-spex-volt flex-shrink-0" />
        <span className="font-semibold text-[10px] sm:text-[11px] text-white">
          {deviceInfo.os}
        </span>
        <span className="hidden sm:inline-block text-spex-muted text-[10px] border-l border-white/10 pl-2">
          {deviceInfo.deviceType}
        </span>
      </button>

      {/* Interactive Tooltip Dropdown (Desktop hover + Mobile tap) */}
      {showTooltip && (
        <>
          {/* Mobile backdrop to close tooltip */}
          <div 
            className="fixed inset-0 z-40 sm:hidden"
            onClick={() => setShowTooltip(false)}
          />

          <div className="absolute top-full right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto mt-2 w-64 p-3 rounded-xl bg-[#0D0E14] border border-white/20 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 text-left">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-[10px] font-mono text-spex-muted">
              <span className="text-white font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                DEVICE TELEMETRY
              </span>
              <span className="text-spex-volt font-bold">LIVE</span>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-spex-muted">Platform:</span>
                <span className="text-white font-semibold">{deviceInfo.os} ({deviceInfo.deviceType})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-spex-muted">Browser:</span>
                <span className="text-white">{deviceInfo.browser}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-spex-muted">Resolution:</span>
                <span className="text-white">{deviceInfo.screenSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-spex-muted">Pixel Ratio:</span>
                <span className="text-white">{deviceInfo.dpr}x (HiDPI)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-spex-muted">Input:</span>
                <span className="text-white">{deviceInfo.isTouch ? 'Touch Screen' : 'Mouse / Trackpad'}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DeviceDetectorBadge;
