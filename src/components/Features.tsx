import React from 'react';
import { Settings, Leaf, BarChart } from 'lucide-react';

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

export default function Features() {
  return (
    <div className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-sans font-bold text-primary-light mb-12">Our Technologies</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-primary-light/20 rounded-lg hover:shadow-lg transition-shadow bg-primary-dark">
              <feature.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-sans font-semibold mb-2 text-primary-light">{feature.title}</h3>
              <p className="text-primary-light/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}