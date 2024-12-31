import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { LucideIcon, ArrowRight, X } from 'lucide-react';

interface TechnologyDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  technology: {
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
  };
}

export function TechnologyDetails({ isOpen, onClose, technology }: TechnologyDetailsProps) {
  const Icon = technology.icon;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <div className="relative bg-primary-dark rounded-xl overflow-hidden">
        {/* Header Image Section */}
        <div className="relative h-72">
          <img
            src={technology.image}
            alt={technology.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-primary-dark/50 hover:bg-primary-dark/75 transition-colors"
          >
            <X className="h-6 w-6 text-primary-light" />
          </button>

          {/* Technology Icon */}
          <div className="absolute bottom-0 right-0 transform translate-y-1/2 -translate-x-8">
            <div className="bg-accent p-4 rounded-xl shadow-lg">
              <Icon className="h-8 w-8 text-primary-dark" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-12">
          <h2 className="text-3xl font-bold text-primary-light mb-6">{technology.name}</h2>
          
          <div className="space-y-8">
            {/* Overview Section */}
            <div className="bg-primary p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-4">Overview</h3>
              <p className="text-primary-light/90 text-lg leading-relaxed">{technology.description}</p>
            </div>

            {/* Benefits Section */}
            <div className="bg-primary p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-4">Key Benefits</h3>
              <div className="grid gap-4">
                {technology.benefits.map((benefit) => (
                  <div 
                    key={benefit}
                    className="flex items-center gap-3 bg-primary-dark p-4 rounded-lg"
                  >
                    <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-light/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {technology.details && (
              <>
                {/* Specifications Section */}
                <div className="bg-primary p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                  <h3 className="text-xl font-semibold text-accent mb-4">Technical Specifications</h3>
                  <div className="grid gap-4">
                    {technology.details.specifications.map((spec) => (
                      <div 
                        key={spec}
                        className="flex items-center gap-3 bg-primary-dark p-4 rounded-lg"
                      >
                        <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-primary-light/90">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Section */}
                <div className="bg-primary p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                  <h3 className="text-xl font-semibold text-accent mb-4">Applications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {technology.details.applications.map((app) => (
                      <div 
                        key={app}
                        className="flex items-center gap-3 bg-primary-dark p-4 rounded-lg"
                      >
                        <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-primary-light/90">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maintenance Section */}
                <div className="bg-primary p-6 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                  <h3 className="text-xl font-semibold text-accent mb-4">Maintenance</h3>
                  <div className="grid gap-4">
                    {technology.details.maintenance.map((item) => (
                      <div 
                        key={item}
                        className="flex items-center gap-3 bg-primary-dark p-4 rounded-lg"
                      >
                        <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-primary-light/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={onClose}
              className="px-6"
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="px-6"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}