import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function TechnologiesHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Green Technology"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-light mb-6 animate-fade-in">
          Revolutionary Green Technologies
        </h1>
        <p className="text-xl text-primary-light/90 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Discover our cutting-edge machines and innovations that are reshaping the future of sustainable energy.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="animate-fade-in animation-delay-400"
          onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Solutions
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}