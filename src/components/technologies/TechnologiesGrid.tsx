import React from 'react';
import { TechnologyCard } from './TechnologyCard';
import { Gauge, Leaf, Zap, Droplet, Wind, Sun, BarChart, Shield } from 'lucide-react';

const technologies = [
  {
    icon: Gauge,
    name: 'Eco-Optimizer 3000',
    description: 'Advanced oil processing system that reduces emissions by 40% while maintaining peak efficiency.',
    benefits: ['40% emission reduction', 'Enhanced processing speed', 'Real-time monitoring'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Processing capacity: 10,000 barrels per day',
        'Energy consumption: 30% less than traditional systems',
        'Emission control: Advanced catalytic converter',
        'Monitoring: AI-powered sensors with 24/7 data analysis'
      ],
      applications: [
        'Oil refineries',
        'Petrochemical plants',
        'Industrial processing facilities',
        'Large-scale manufacturing'
      ],
      maintenance: [
        'Automated self-diagnostic system',
        'Quarterly professional inspection',
        'Annual parts replacement',
        'Remote monitoring capabilities'
      ]
    }
  },
  {
    icon: Leaf,
    name: 'GreenFlow System',
    description: 'Revolutionary filtration technology that removes 99.9% of harmful particles from industrial processes.',
    benefits: ['99.9% particle removal', 'Low maintenance', 'Energy efficient'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Filtration rate: 1000 m³/hour',
        'Particle size range: 0.1-100 microns',
        'Power consumption: 5kW/hour',
        'Filter lifespan: 12 months'
      ],
      applications: [
        'Industrial wastewater treatment',
        'Air purification systems',
        'Chemical processing',
        'Food and beverage industry'
      ],
      maintenance: [
        'Monthly filter inspection',
        'Quarterly system cleaning',
        'Bi-annual performance audit',
        'Continuous monitoring system'
      ]
    }
  },
  {
    icon: Zap,
    name: 'PowerSync Pro',
    description: 'AI-driven power optimization system that reduces energy waste and maximizes efficiency.',
    benefits: ['35% energy savings', 'Predictive maintenance', 'Smart grid integration'],
    image: 'https://images.unsplash.com/photo-1581093804475-577d72e31202?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'AI processing power: 10 TFLOPS',
        'Response time: <10ms',
        'Integration capacity: 100+ devices',
        'Data analysis: Real-time + Historical'
      ],
      applications: [
        'Smart factories',
        'Energy distribution centers',
        'Commercial buildings',
        'Data centers'
      ],
      maintenance: [
        'Weekly AI model updates',
        'Monthly system optimization',
        'Continuous data backup',
        'Annual hardware inspection'
      ]
    }
  },
  {
    icon: Droplet,
    name: 'AquaPure X1',
    description: 'Advanced water treatment system using nano-filtration and UV purification.',
    benefits: ['95% water recycling', 'Zero chemical additives', 'Minimal waste'],
    image: 'https://images.unsplash.com/photo-1581093458791-9d58946cc6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Treatment capacity: 5000L/hour',
        'Filtration levels: 5-stage system',
        'UV intensity: 40mJ/cm²',
        'Energy efficiency: 90%'
      ],
      applications: [
        'Industrial processes',
        'Municipal water treatment',
        'Agricultural irrigation',
        'Commercial facilities'
      ],
      maintenance: [
        'Daily water quality monitoring',
        'Weekly filter cleaning',
        'Monthly UV lamp inspection',
        'Quarterly system overhaul'
      ]
    }
  },
  {
    icon: Wind,
    name: 'AeroClean Pro',
    description: 'Industrial-grade air purification system with multi-stage filtration technology.',
    benefits: ['99.99% particle removal', 'Odor elimination', 'Pathogen destruction'],
    image: 'https://images.unsplash.com/photo-1581093456472-b38641861f5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Air flow rate: 2000 CFM',
        'HEPA filtration: H13 grade',
        'UV-C sterilization: 254nm',
        'Coverage area: 2000 sq ft'
      ],
      applications: [
        'Manufacturing facilities',
        'Healthcare institutions',
        'Clean rooms',
        'Public spaces'
      ],
      maintenance: [
        'Monthly filter replacement',
        'Quarterly UV lamp check',
        'Semi-annual deep cleaning',
        'Annual certification'
      ]
    }
  },
  {
    icon: Shield,
    name: 'SafeGuard IoT',
    description: 'Comprehensive monitoring and safety system for industrial operations.',
    benefits: ['24/7 monitoring', 'Predictive alerts', 'Remote management'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Sensor network: 1000+ nodes',
        'Data processing: Edge + Cloud',
        'Alert response time: <1s',
        'Battery life: 5 years'
      ],
      applications: [
        'Oil & gas facilities',
        'Chemical plants',
        'Power stations',
        'Mining operations'
      ],
      maintenance: [
        'Real-time system health checks',
        'Monthly sensor calibration',
        'Quarterly battery assessment',
        'Annual hardware upgrade'
      ]
    }
  }
];

export function TechnologiesGrid() {
  return (
    <section id="technologies" className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">
        Our Technologies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  );
}