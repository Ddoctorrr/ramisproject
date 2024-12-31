import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await api.post('/api/newsletter/subscribe', { email });
    return response.data;
  } catch (error) {
    throw new Error('Failed to subscribe to newsletter');
  }
};