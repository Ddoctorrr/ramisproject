import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 border border-primary-light/20 rounded-lg hover:shadow-lg transition-shadow bg-primary-dark">
      <Icon className="h-12 w-12 text-accent mb-4" />
      <h3 className="text-xl font-sans font-semibold mb-2 text-primary-light">{title}</h3>
      <p className="text-primary-light/80">{description}</p>
    </div>
  );
}