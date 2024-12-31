import { useState } from 'react';
import { subscribeToNewsletter } from '../services/api';

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

export function useNewsletter() {
  const [status, setStatus] = useState<NewsletterStatus>('idle');

  const subscribe = async (email: string) => {
    setStatus('loading');
    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return { subscribe, status };
}