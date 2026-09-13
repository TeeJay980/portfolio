import React, { useState, useEffect } from 'react';
import { LuziaNavbar } from './components/LuziaNavbar';
import { LuziaHero } from './components/LuziaHero';
import { LuziaClientStrip } from './components/LuziaClientStrip';
import { LuziaProjects } from './components/LuziaProjects';
import { LuziaBentoProof } from './components/LuziaBentoProof';
import { LuziaServices } from './components/LuziaServices';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LuziaWorkflow } from './components/LuziaWorkflow';
import { LuziaFAQ } from './components/LuziaFAQ';
import { DevFooter } from './components/DevFooter';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { CommandPalette } from './components/CommandPalette';
import { EmailModal } from './components/EmailModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-neutral-900 font-sans selection:bg-[#6E2CF4] selection:text-white relative">
      
      {/* Luzia Floating Navigation Bar */}
      <LuziaNavbar
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* 3-Column Split Luzia Hero */}
      <LuziaHero
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* Monochromatic Client & Partner Strip */}
      <LuziaClientStrip />

      {/* 2-Column Rounded Project Showcase with Filters */}
      <LuziaProjects
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 3-Card Bento Proof & Metrics */}
      <LuziaBentoProof />

      {/* 3-Card Services Grid with Electric Purple Highlight */}
      <LuziaServices
        onOpenBooking={() => setIsContactOpen(true)}
      />

      {/* Work Experience Section (Preserved) */}
      <ExperienceTimeline />

      {/* How It Works (Tactile Dark Texture Container) */}
      <LuziaWorkflow />

      {/* Interactive FAQ Accordion */}
      <LuziaFAQ />

      {/* Closing CTA & Minimal Footer */}
      <DevFooter
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* Modals & Command Palette */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      <EmailModal
        isOpen={isEmailOpen}
        onClose={() => setIsEmailOpen(false)}
      />

    </div>
  );
}

export default App;
