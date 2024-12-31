import React from 'react';
import { Leaf } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <FooterSection>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="ml-2 text-xl font-sans font-bold">EcoTech Solutions</span>
            </div>
            <p className="text-primary-light/80">
              Pioneering sustainable energy solutions for a better tomorrow.
            </p>
          </FooterSection>
          
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/technologies">Technologies</FooterLink></li>
              <li><FooterLink href="/news">News</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </FooterSection>
          
          <FooterSection title="Contact Us">
            <p className="text-primary-light/80">Email: info@ecotechsolutions.com</p>
            <p className="text-primary-light/80">Phone: (555) 123-4567</p>
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light/10 text-center">
          <p className="text-primary-light/60">
            &copy; {currentYear} EcoTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}