import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="relative z-10 text-center text-primary-light px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 animate-fade-in">
        Redefining Oil, Empowering Sustainability
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
        Discover our cutting-edge technologies that bridge the gap between traditional energy and a sustainable future.
      </p>
      <Button
        variant="primary"
        size="lg"
        className="inline-flex items-center gap-2 animate-fade-in animation-delay-400"
      >
        Discover Our Solutions
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
}