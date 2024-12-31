import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'With 15+ years in sustainable energy, Sarah leads our mission to transform the oil industry.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'David Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'David brings 20 years of experience in green tech innovation and environmental engineering.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Emily Watson',
    role: 'Head of Sustainability',
    bio: 'Environmental scientist passionate about creating sustainable solutions for the energy sector.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

export function Team() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">Our Team</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-primary rounded-lg overflow-hidden shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-light mb-1">{member.name}</h3>
              <p className="text-accent mb-3">{member.role}</p>
              <p className="text-primary-light/80 mb-4">{member.bio}</p>
              
              <div className="flex space-x-4">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light/60 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light/60 hover:text-accent transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}