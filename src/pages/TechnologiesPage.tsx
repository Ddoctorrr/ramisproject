import React from 'react';
import { TechnologiesHero } from '../components/technologies/TechnologiesHero';
import { TechnologiesGrid } from '../components/technologies/TechnologiesGrid';
import { CaseStudies } from '../components/technologies/CaseStudies';
import { Testimonials } from '../components/technologies/Testimonials';

export function TechnologiesPage() {
  return (
    <div>
      <TechnologiesHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TechnologiesGrid />
        <CaseStudies />
        <Testimonials />
      </div>
    </div>
  );
}