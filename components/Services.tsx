
import React from 'react';

const services = [
  {
    title: 'Développement Sur Mesure',
    desc: 'Des sites vitrines ultra-rapides conçus avec les dernières technologies (React, TypeScript) pour une expérience utilisateur sans compromis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Design UI/UX Premium',
    desc: 'Une interface épurée et moderne qui reflète l\'identité de votre marque tout en optimisant le taux de conversion.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'SEO & Visibilité',
    desc: 'Optimisation technique avancée pour garantir un positionnement de choix sur les moteurs de recherche dès le lancement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Stratégie & Growth',
    desc: 'Accompagnement dans votre recherche de clients et stratégie de communication digitale pour scaler votre activité.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos <span className="text-gradient">Expertises</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Nous maîtrisons l'ensemble de la chaîne de valeur digitale pour vous offrir une solution clé en main.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-2xl glass border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
