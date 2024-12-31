import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';
import { Button } from '../ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-accent" />
            <span className="ml-2 text-xl font-sans font-bold">EcoTech Solutions</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <MobileNavLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}