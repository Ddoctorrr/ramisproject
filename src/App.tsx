import React from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TechnologiesPage } from './pages/TechnologiesPage';

export default function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/' && <HomePage />}
      {path === '/about' && <AboutPage />}
      {path === '/technologies' && <TechnologiesPage />}
    </Layout>
  );
}