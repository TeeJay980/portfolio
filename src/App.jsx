import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LuziaNavbar } from './components/LuziaNavbar';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F3F4F6] text-neutral-900 font-sans selection:bg-[#6E2CF4] selection:text-white relative">
        
        {/* Luzia Floating Navigation Bar */}
        <LuziaNavbar
          onOpenBooking={() => setIsContactOpen(true)}
          onOpenPalette={() => setIsPaletteOpen(true)}
        />

        {/* Multi-Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenBooking={() => setIsContactOpen(true)}
                onOpenEmail={() => setIsEmailOpen(true)}
              />
            }
          />
          <Route
            path="/work"
            element={
              <WorkPage
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenBooking={() => setIsContactOpen(true)}
                onOpenEmail={() => setIsEmailOpen(true)}
              />
            }
          />
          {/* Alias for /works */}
          <Route
            path="/works"
            element={
              <WorkPage
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenBooking={() => setIsContactOpen(true)}
                onOpenEmail={() => setIsEmailOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenBooking={() => setIsContactOpen(true)}
                onOpenEmail={() => setIsEmailOpen(true)}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onOpenBooking={() => setIsContactOpen(true)}
                onOpenEmail={() => setIsEmailOpen(true)}
              />
            }
          />
          {/* Catch-all fallback */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

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
    </BrowserRouter>
  );
}

export default App;
