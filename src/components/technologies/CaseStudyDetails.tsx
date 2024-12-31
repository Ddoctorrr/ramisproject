import React from 'react';
import { Modal } from '../ui/Modal';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CaseStudyDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    company: string;
    image: string;
    fullCase: {
      challenge: string;
      solution: string;
      implementation: string[];
      outcomes: string[];
      testimonial: {
        quote: string;
        author: string;
        position: string;
        image: string;
      };
    };
  };
}

export function CaseStudyDetails({ isOpen, onClose, caseStudy }: CaseStudyDetailsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        {/* Header Image */}
        <div className="h-64 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary-light mb-2">{caseStudy.title}</h3>
          <p className="text-accent mb-6">{caseStudy.company}</p>
          
          <div className="space-y-6">
            {/* Challenge Section */}
            <div className="bg-primary-dark p-6 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-4">The Challenge</h4>
              <p className="text-primary-light text-lg">{caseStudy.fullCase.challenge}</p>
            </div>

            {/* Solution Section */}
            <div className="bg-primary-dark p-6 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-4">Our Solution</h4>
              <p className="text-primary-light text-lg">{caseStudy.fullCase.solution}</p>
            </div>

            {/* Implementation Section */}
            <div className="bg-primary-dark p-6 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-4">Implementation Process</h4>
              <ul className="space-y-3">
                {caseStudy.fullCase.implementation.map((step) => (
                  <li key={step} className="flex items-center text-primary-light text-lg">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes Section */}
            <div className="bg-primary-dark p-6 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-4">Key Outcomes</h4>
              <ul className="space-y-3">
                {caseStudy.fullCase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center text-primary-light text-lg">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Section */}
            <div className="bg-primary-dark p-6 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-4">Client Testimonial</h4>
              <div className="flex items-start gap-4">
                <img
                  src={caseStudy.fullCase.testimonial.image}
                  alt={caseStudy.fullCase.testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-primary-light text-lg italic mb-3">
                    "{caseStudy.fullCase.testimonial.quote}"
                  </p>
                  <p className="text-primary-light font-semibold">
                    {caseStudy.fullCase.testimonial.author}
                  </p>
                  <p className="text-accent">
                    {caseStudy.fullCase.testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-8 flex justify-end">
            <Button variant="primary" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}