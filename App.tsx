
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIGenerator from './components/AIGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none bg-gradient-hero -z-10" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Team />
        <AIGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
