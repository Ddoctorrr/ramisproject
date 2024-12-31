import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8" />
            <span className="ml-2 text-xl font-sans font-bold">EcoTech Solutions</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-forest-600">Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-forest-600">About</a>
              <a href="/technologies" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-forest-600">Technologies</a>
              <a href="/news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-forest-600">News</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-forest-600">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-600">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-600">About</a>
            <a href="/technologies" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-600">Technologies</a>
            <a href="/news" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-600">News</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}