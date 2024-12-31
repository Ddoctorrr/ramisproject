import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SpaceBackground } from './SpaceBackground';
import { SplineViewer } from './SplineViewer';

export function Hero() {
  const scrollToTechnologies = () => {
    const technologiesSection = document.getElementById('technologies');
    if (technologiesSection) {
      technologiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <SpaceBackground />
      
      {/* Spline Viewer Container */}
      <div className="absolute inset-0 z-0">
        <SplineViewer />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-primary-light mb-6">
          <span className="block transform hover:scale-105 transition-transform duration-300">
            Redefining
          </span>
          <span className="block transform hover:scale-105 transition-transform duration-300 delay-100">
            The Future of
          </span>
          <span className="block text-accent transform hover:scale-105 transition-transform duration-300 delay-200">
            Sustainable Energy
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-light/80 max-w-3xl mx-auto mb-12 animate-fade-in animation-delay-400">
          Discover revolutionary technologies that bridge the gap between innovation and sustainability
        </p>
        
        <button
          onClick={scrollToTechnologies}
          className="text-accent hover:text-accent-dark transition-colors duration-300 animate-fade-in animation-delay-600"
        >
          <span className="sr-only">Scroll to technologies</span>
          <ChevronDown className="h-12 w-12 animate-bounce" />
        </button>
      </div>
    </section>
  );
}