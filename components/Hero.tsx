
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
            Agence Web de Nouvelle Génération
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Propulsez votre <span className="text-gradient">Présence Digitale</span> vers l'Infini.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Nous concevons des sites vitrines d'exception qui allient performance technique et esthétique minimaliste pour transformer vos visiteurs en clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Lancer votre projet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#services" className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-colors border border-white/10">
              Découvrir nos services
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech Stack Icons Placeholder */}
             <div className="text-sm font-mono tracking-tighter uppercase">React</div>
             <div className="text-sm font-mono tracking-tighter uppercase">Tailwind</div>
             <div className="text-sm font-mono tracking-tighter uppercase">Gemini AI</div>
             <div className="text-sm font-mono tracking-tighter uppercase">TypeScript</div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-3xl rounded-full animate-pulse" />
          <div className="relative glass border border-white/10 rounded-2xl p-4 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/agency/1200/800" 
              alt="Dashboard Preview" 
              className="rounded-lg w-full h-auto grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
