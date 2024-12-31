import React from 'react';
import { Settings, Leaf, BarChart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Settings,
    title: 'Innovative Machines',
    description: 'State-of-the-art machinery that optimizes oil use while significantly reducing emissions.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    description: 'Bridging the gap between traditional oil usage and renewable energy sources.',
  },
  {
    icon: BarChart,
    title: 'Eco-Friendly Impact',
    description: 'Measurable reduction in carbon footprints through our advanced technologies.',
  },
];

export function Features() {
  return (
    <div className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-sans font-bold text-primary-light mb-12">
            Our Technologies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}