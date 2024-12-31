import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { NewsletterSignup } from '../components/home/NewsletterSignup';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </div>
    </>
  );
}