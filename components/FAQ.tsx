
import React, { useState } from 'react';

const faqs = [
  {
    question: "Combien de temps prend la création d'un site ?",
    answer: "Pour un site vitrine standard, comptez entre 2 et 4 semaines de la conception au lancement. Les projets plus complexes (e-commerce ou fonctionnalités spécifiques) peuvent prendre jusqu'à 8 semaines."
  },
  {
    question: "Proposez-vous un service de maintenance après le lancement ?",
    answer: "Absolument. Nous offrons 30 jours de maintenance gratuite après chaque projet. Par la suite, nous proposons des forfaits de maintenance annuelle pour garantir la sécurité et la mise à jour de votre site."
  },
  {
    question: "Mon site sera-t-il optimisé pour Google (SEO) ?",
    answer: "Oui, tous nos sites sont livrés avec une structure technique optimisée pour le SEO : balises sémantiques, vitesse de chargement élevée et conformité mobile. Nous pouvons également vous accompagner sur une stratégie de contenu plus poussée."
  },
  {
    question: "Comment se déroule le paiement ?",
    answer: "Nous fonctionnons généralement par étapes : un acompte de 30% au démarrage, 40% après la validation du design, et les 30% restants à la livraison finale."
  },
  {
    question: "Utilisez-vous WordPress ou du code sur mesure ?",
    answer: "Nous privilégions le code sur mesure (React, Tailwind) pour garantir une performance et une sécurité maximale. Cependant, si votre projet nécessite une gestion de contenu simplifiée, nous pouvons intégrer des CMS modernes comme Strapi ou Sanity."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#0c0c0c]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Questions <span className="text-gradient">Fréquentes</span></h2>
          <p className="text-slate-400">Tout ce que vous devez savoir pour démarrer votre projet avec nous.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-blue-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
