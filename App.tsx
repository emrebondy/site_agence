
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none bg-gradient-hero -z-10" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OurStory />
        <Process />
        <Pricing />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
