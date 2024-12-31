import React, { useState } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { TechnologyDetails } from './TechnologyDetails';

interface TechnologyCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  details?: {
    specifications: string[];
    applications: string[];
    maintenance: string[];
  };
}

export function TechnologyCard(props: TechnologyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { icon: Icon, name, description, benefits, image } = props;

  return (
    <>
      <div className="group relative bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/95"></div>
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 bg-accent p-3 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 bg-primary">
          {/* Title with Accent Line */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-primary-light mb-2">{name}</h3>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg text-primary-light mb-6 leading-relaxed">
            {description}
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center text-primary-light bg-primary-dark p-3 rounded-lg"
              >
                <ChevronRight className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <span className="text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-center hover:bg-accent hover:text-primary transition-all duration-300 text-base font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="flex items-center">
              Learn More
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>

      <TechnologyDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        technology={props}
      />
    </>
  );
}