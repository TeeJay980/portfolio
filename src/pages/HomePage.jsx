import React from 'react';
import { LuziaHero } from '../components/LuziaHero';
import { LuziaClientStrip } from '../components/LuziaClientStrip';
import { LuziaProjects } from '../components/LuziaProjects';
import { LuziaBentoProof } from '../components/LuziaBentoProof';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LuziaWorkflow } from '../components/LuziaWorkflow';
import { LuziaFAQ } from '../components/LuziaFAQ';
import { DevFooter } from '../components/DevFooter';

export const HomePage = ({ onSelectProject, onOpenBooking, onOpenEmail }) => {
  return (
    <>
      <LuziaHero
        onOpenBooking={onOpenBooking}
        onOpenEmail={onOpenEmail}
      />
      <LuziaClientStrip />
      <LuziaProjects onSelectProject={onSelectProject} />
      <LuziaBentoProof />
      <ExperienceTimeline />
      <LuziaWorkflow />
      <LuziaFAQ />
      <DevFooter
        onOpenBooking={onOpenBooking}
        onOpenEmail={onOpenEmail}
      />
    </>
  );
};
