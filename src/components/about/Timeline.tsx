import React from 'react';

const milestones = [
  {
    date: '2020',
    title: 'Foundation',
    description: 'EcoTech Solutions was founded with a vision to revolutionize the oil industry through sustainable practices.',
  },
  {
    date: '2021',
    title: 'First Innovation',
    description: 'Launched our flagship Eco-Optimizer 3000, reducing emissions by 40% in oil processing.',
  },
  {
    date: '2022',
    title: 'Global Expansion',
    description: 'Expanded operations to 15 countries and formed key partnerships with industry leaders.',
  },
  {
    date: '2023',
    title: 'Green Achievement',
    description: 'Received ISO 14001 certification for environmental management systems.',
  },
  {
    date: '2024',
    title: 'Future Forward',
    description: 'Launched new R&D center focused on next-generation sustainable technologies.',
  },
];

export function Timeline() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold text-primary-light text-center mb-12">Our Journey</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30" />
        
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.date}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Date bubble */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center z-10">
                <span className="text-primary-dark font-bold">{milestone.date}</span>
              </div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className="bg-primary p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary-light mb-2">{milestone.title}</h3>
                  <p className="text-primary-light/80">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}