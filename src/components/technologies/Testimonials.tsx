import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "EcoTech's Eco-Optimizer 3000 has revolutionized our refinery operations. The reduction in emissions while maintaining efficiency is remarkable.",
    author: "Maria Rodriguez",
    position: "Chief Operations Officer",
    company: "PetroGreen Industries",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The implementation of GreenFlow System has not only improved our environmental impact but also significantly reduced our operational costs.",
    author: "James Chen",
    position: "Sustainability Director",
    company: "Global Energy Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "PowerSync Pro's AI-driven optimization has exceeded our expectations. The energy savings and predictive maintenance features are game-changers.",
    author: "Sarah Thompson",
    position: "Technical Director",
    company: "EnergyTech Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">
        What Our Clients Say
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="bg-primary rounded-lg p-6 shadow-lg relative"
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-accent opacity-20" />
            
            <p className="text-primary-light/80 mb-6 italic">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-primary-light font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-accent text-sm">
                  {testimonial.position}
                </p>
                <p className="text-primary-light/60 text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}