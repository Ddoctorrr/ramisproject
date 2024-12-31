import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-primary p-8 rounded-lg shadow-lg">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-sans font-bold text-primary-light mb-4">Stay Updated</h3>
        <p className="text-primary-light/80 mb-6">
          Subscribe to our newsletter for the latest updates on green energy innovations.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-primary-dark border border-primary-light/20 rounded-md text-primary-light placeholder:text-primary-light/50 focus:ring-2 focus:ring-accent focus:border-transparent"
            required
            disabled={status === 'loading'}
          />
          <Button
            type="submit"
            variant="primary"
            disabled={status === 'loading'}
            className="flex items-center gap-2"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            <Send className="h-4 w-4" />
          </Button>
        </form>
        
        {status === 'success' && (
          <p className="mt-2 text-accent">Successfully subscribed!</p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-red-500">Failed to subscribe. Please try again.</p>
        )}
      </div>
    </div>
  );
}