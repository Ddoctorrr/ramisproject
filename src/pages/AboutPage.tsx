import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Timeline } from '../components/about/Timeline';
import { Team } from '../components/about/Team';
import { Mission } from '../components/about/Mission';
import { Achievements } from '../components/about/Achievements';

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Mission />
        <Timeline />
        <Team />
        <Achievements />
      </div>
    </div>
  );
}