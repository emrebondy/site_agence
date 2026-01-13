
import React from 'react';

const plans = [
  {
    name: 'Essentiel',
    price: 'À partir de 1 200€',
    desc: 'Idéal pour les entrepreneurs et artisans souhaitant une présence pro.',
    features: [
      'Design Responsive Unique',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement & Domaine (1 an)',
      'Support par email',
    ],
    cta: 'Choisir Essentiel',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'À partir de 2 500€',
    desc: 'Le choix favori pour les entreprises en pleine croissance.',
    features: [
      'Tout le pack Essentiel',
      'Animations avancées (GSAP)',
      'Interface d\'administration (CMS)',
      'Stratégie de mots-clés SEO',
      'Intégration Réseaux Sociaux',
      'Performance Ultra-Rapide',
    ],
    cta: 'Démarrer Premium',
    highlighted: true,
  },
  {
    name: 'Sur Mesure',
    price: 'Sur Devis',
    desc: 'Solutions complexes avec fonctionnalités spécifiques.',
    features: [
      'Tout le pack Premium',
      'Design UI/UX Haute Fidélité',
      'E-commerce ou App Web',
      'Accompagnement Growth Marketing',
      'Maintenance Prioritaire 24/7',
      'Consultation Stratégique',
    ],
    cta: 'Nous Contacter',
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Investissement <span className="text-gradient">Transparent</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Pas de frais cachés. Des tarifs adaptés à l'ambition de votre projet et à la complexité de vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                plan.highlighted 
                ? 'bg-blue-600/10 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                : 'glass border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Plus Populaire
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-white mb-4">{plan.price}</div>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${plan.highlighted ? 'text-blue-400' : 'text-slate-500'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.highlighted 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>Tous nos projets incluent une phase de maintenance gratuite de 30 jours après le lancement.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
