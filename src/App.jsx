import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollToTop } from './components/ScrollToTop';
import { LuziaNavbar } from './components/LuziaNavbar';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { CommandPalette } from './components/CommandPalette';
import { EmailModal } from './components/EmailModal';

function AnimatedRoutes({
  onSelectProject,
  onOpenBooking,
  onOpenEmail
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage
                onSelectProject={onSelectProject}
                onOpenBooking={onOpenBooking}
                onOpenEmail={onOpenEmail}
              />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkPage
                onSelectProject={onSelectProject}
                onOpenBooking={onOpenBooking}
                onOpenEmail={onOpenEmail}
              />
            </PageTransition>
          }
        />
        <Route
          path="/works"
          element={
            <PageTransition>
              <WorkPage
                onSelectProject={onSelectProject}
                onOpenBooking={onOpenBooking}
                onOpenEmail={onOpenEmail}
              />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage
                onOpenBooking={onOpenBooking}
                onOpenEmail={onOpenEmail}
              />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage
                onOpenBooking={onOpenBooking}
                onOpenEmail={onOpenEmail}
              />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </AnimatePresence>
  );
}

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

        {/* Multi-Page Routes with AnimatePresence */}
        <AnimatedRoutes
          onSelectProject={(project) => setSelectedProject(project)}
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
    </BrowserRouter>
  );
}

export default App;
