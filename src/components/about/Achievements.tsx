import React from 'react';
import { Shield, Users, Award, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Shield,
    title: 'ISO 14001 Certified',
    description: 'Internationally recognized environmental management system certification.',
  },
  {
    icon: Users,
    title: 'Industry Partnerships',
    description: 'Strategic alliances with leading energy and environmental organizations.',
  },
  {
    icon: Award,
    title: 'Green Innovation Award',
    description: '2023 recipient of the Global Green Technology Innovation Award.',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Achieved 40% reduction in energy consumption across client operations.',
  },
];

export function Achievements() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">
        Certifications & Achievements
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-primary p-6 rounded-lg shadow-lg text-center"
          >
            <achievement.icon className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary-light mb-2">{achievement.title}</h3>
            <p className="text-primary-light/80">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}