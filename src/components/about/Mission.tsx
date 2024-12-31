import React from 'react';
import { Leaf, Globe, Award } from 'lucide-react';

export function Mission() {
  return (
    <section className="mb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary-light mb-6">Our Mission</h2>
          <p className="text-primary-light/80 mb-8 text-lg">
            At EcoTech Solutions, we're committed to revolutionizing the oil industry through sustainable practices and innovative technologies. Our mission is to bridge the gap between traditional energy needs and environmental responsibility.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Leaf className="h-6 w-6 text-accent mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-light mb-2">Environmental Impact</h3>
                <p className="text-primary-light/80">
                  Our technologies reduce emissions by up to 40% while maintaining optimal performance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Globe className="h-6 w-6 text-accent mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-light mb-2">Global Reach</h3>
                <p className="text-primary-light/80">
                  Operating in 15+ countries, making sustainable solutions accessible worldwide.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="h-6 w-6 text-accent mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-light mb-2">Industry Leadership</h3>
                <p className="text-primary-light/80">
                  Setting new standards in eco-friendly oil processing and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Sustainable Technology"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-primary-dark/30 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}