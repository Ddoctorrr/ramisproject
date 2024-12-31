import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-primary-light px-4">
        <h1 className="text-5xl font-bold mb-6">Redefining Oil, Empowering Sustainability</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover our cutting-edge technologies that bridge the gap between traditional energy and a sustainable future.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          Discover Our Solutions
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}