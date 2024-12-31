import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { CaseStudyDetails } from './CaseStudyDetails';

const caseStudies = [
  {
    id: 1,
    title: 'Global Oil Refinery Transformation',
    company: 'PetroGreen Industries',
    description: 'Implementation of Eco-Optimizer 3000 resulted in 40% emission reduction and 25% cost savings.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80',
    results: ['40% emission reduction', '25% cost savings', 'Improved efficiency by 30%'],
    fullCase: {
      challenge: 'PetroGreen Industries faced increasing pressure to reduce emissions while maintaining production efficiency at their largest refinery.',
      solution: 'Implementation of the Eco-Optimizer 3000 with custom modifications for their specific needs.',
      implementation: [
        'Initial assessment and planning phase',
        'Gradual integration with existing systems',
        'Staff training and optimization period',
        'Full deployment across all processing units'
      ],
      outcomes: [
        'Reduced CO2 emissions by 40%',
        'Decreased operational costs by 25%',
        'Improved overall efficiency by 30%',
        'ROI achieved within 18 months'
      ],
      testimonial: {
        quote: "The Eco-Optimizer 3000 has exceeded our expectations in both environmental impact and cost savings.",
        author: "Maria Rodriguez",
        position: "Chief Operations Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    }
  },
  {
    id: 2,
    title: 'Sustainable Water Management',
    company: 'AquaTech Solutions',
    description: 'AquaPure X1 system enabled 95% water recycling in industrial processes.',
    image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80',
    results: ['95% water recycling', 'Zero chemical waste', '60% cost reduction'],
    fullCase: {
      challenge: 'AquaTech Solutions needed to drastically reduce water consumption and eliminate chemical waste in their manufacturing process.',
      solution: 'Integration of the AquaPure X1 system with custom filtration modules.',
      implementation: [
        'Water usage audit and system design',
        'Installation of primary filtration units',
        'Integration of UV purification system',
        'Implementation of water recycling loop'
      ],
      outcomes: [
        'Achieved 95% water recycling rate',
        'Eliminated chemical waste completely',
        'Reduced water-related costs by 60%',
        'Improved product quality'
      ],
      testimonial: {
        quote: "The AquaPure X1 transformed our water management approach and significantly reduced our environmental impact.",
        author: "James Chen",
        position: "Sustainability Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    }
  },
  {
    id: 3,
    title: 'Smart Factory Energy Optimization',
    company: 'TechManufacturing Corp',
    description: 'PowerSync Pro implementation led to 35% energy reduction and improved production efficiency.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80',
    results: ['35% energy reduction', 'Smart grid integration', '45% lower maintenance costs'],
    fullCase: {
      challenge: 'TechManufacturing Corp struggled with high energy costs and inefficient power distribution across their facilities.',
      solution: 'Deployment of PowerSync Pro with AI-driven optimization algorithms.',
      implementation: [
        'Energy consumption analysis',
        'Smart meter installation',
        'AI system training and calibration',
        'Phased rollout across production lines'
      ],
      outcomes: [
        'Reduced energy consumption by 35%',
        'Successfully integrated with smart grid',
        'Decreased maintenance costs by 45%',
        'Improved production uptime by 25%'
      ],
      testimonial: {
        quote: "PowerSync Pro's AI capabilities have revolutionized our energy management approach.",
        author: "Sarah Thompson",
        position: "Technical Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    }
  }
];

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">
        Success Stories
      </h2>
      
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-primary-light mb-2">
                {study.title}
              </h3>
              <p className="text-accent mb-4">{study.company}</p>
              <p className="text-primary-light/80 mb-6 text-lg">{study.description}</p>
              
              <ul className="space-y-3 mb-6">
                {study.results.map((result) => (
                  <li key={result} className="flex items-center text-primary-light">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-lg">{result}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant="primary"
                size="lg"
                onClick={() => setSelectedCase(study)}
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedCase && (
        <CaseStudyDetails
          caseStudy={selectedCase}
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
}