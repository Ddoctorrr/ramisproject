import React from 'react';
import { ChevronDown } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center mb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block">
          <span className="text-accent text-lg font-medium tracking-wider uppercase mb-4 block animate-fade-in">
            Our Story
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-primary-light mb-6 animate-fade-in animation-delay-200">
            Innovating for a
            <span className="block mt-2">Sustainable Future</span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-accent" />
      </div>

      {/* Creative Title with Negative Space */}
      <div className="absolute -bottom-24 left-0 right-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary py-12 px-8 rounded-lg shadow-xl relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-x-20 translate-y-20"></div>
            
            {/* Title Content */}
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <span className="text-accent text-4xl font-bold">15+</span>
                <p className="text-primary-light/80 mt-2">Countries Worldwide</p>
              </div>
              <div className="text-center">
                <span className="text-accent text-4xl font-bold">40%</span>
                <p className="text-primary-light/80 mt-2">Emission Reduction</p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-accent text-4xl font-bold">100+</span>
                <p className="text-primary-light/80 mt-2">Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}