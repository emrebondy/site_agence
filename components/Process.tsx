
import React from 'react';

const steps = [
  { num: '01', title: 'Consultation', desc: 'Analyse de vos besoins et définition de la stratégie.' },
  { num: '02', title: 'Conception', desc: 'Design UI haute fidélité et prototypage interactif.' },
  { num: '03', title: 'Développement', desc: 'Codage propre et optimisation des performances.' },
  { num: '04', title: 'Lancement', desc: 'Déploiement, SEO et suivi post-mise en ligne.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Comment nous <span className="text-gradient">travaillons</span></h2>
            <p className="text-slate-400 mb-12 text-lg">
              Une méthodologie agile et transparente pour garantir le succès de votre projet dans les meilleurs délais.
            </p>
            <div className="grid gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <span className="text-4xl font-black text-white/10">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square glass rounded-3xl p-8 flex items-center justify-center">
                <div className="w-full h-full border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center flex-col text-center">
                   <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Vitesse & Précision</h3>
                   <p className="text-slate-400 max-w-xs">Nos sites sont livrés en moyenne sous 2 à 4 semaines.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
