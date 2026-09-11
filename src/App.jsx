import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TerminalHero } from './components/TerminalHero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ProjectModal } from './components/ProjectModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { DevServices } from './components/DevServices';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ClientTestimonials } from './components/ClientTestimonials';
import { DevFooter } from './components/DevFooter';
import { ContactModal } from './components/ContactModal';
import { FloatingContactDock } from './components/FloatingContactDock';
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
    <div className="min-h-screen bg-spex-bg text-slate-100 font-sans selection:bg-spex-volt selection:text-black relative">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* Hero with Interactive Terminal & Typewriter */}
      <TerminalHero
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />

      {/* Projects Showcase Bento Grid */}
      <ProjectsGrid
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Skills & Tech Stack Matrix */}
      <SkillsMatrix />

      {/* Development Services & Collaboration Models */}
      <DevServices
        onOpenBooking={() => setIsContactOpen(true)}
      />

      {/* Work Experience Timeline */}
      <ExperienceTimeline />

      {/* Client Testimonials & Engineering Philosophy */}
      <ClientTestimonials />

      {/* Footer */}
      <DevFooter
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* Floating Action Dock (WhatsApp + Email) */}
      <FloatingContactDock onOpenEmail={() => setIsEmailOpen(true)} />

      {/* Project Deep-Dive Modal (Mobile & Desktop) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => setIsContactOpen(true)}
      />

      {/* Contact & Project Estimator Modal (Mobile & Desktop) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenBooking={() => setIsContactOpen(true)}
        onOpenEmail={() => setIsEmailOpen(true)}
      />

      {/* Email Account Picker & Pre-filled Inquiry Modal */}
      <EmailModal
        isOpen={isEmailOpen}
        onClose={() => setIsEmailOpen(false)}
      />

    </div>
  );
}

export default App;
