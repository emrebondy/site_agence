
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-24 mt-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 blur rounded-2xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Notre équipe au travail" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 p-6 glass border-white/10 rounded-2xl hidden md:block">
                <div className="text-3xl font-black text-blue-500 mb-1">3</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60">Esprits, Une vision</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Une alliance entre <span className="text-gradient">Code</span> et <span className="text-gradient">Communication</span>.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Nexus n'est pas née dans un bureau corporatif, mais de la synergie de trois amis passionnés par le monde numérique. Nous avons constaté que beaucoup de sites vitrines manquaient soit de puissance technique, soit de pertinence commerciale.
              </p>
              <p>
                Notre équipe est construite sur cet équilibre : deux développeurs obsédés par la performance et un expert en communication dédié à la croissance de nos clients. Nous ne créons pas juste des sites ; nous bâtissons des outils de vente.
              </p>
              <p>
                Aujourd'hui, nous mettons cette double expertise au service des entrepreneurs qui refusent la médiocrité et exigent un impact digital immédiat.
              </p>
            </div>
            
            <div className="mt-10 flex gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">2</div>
                <div className="text-xs uppercase tracking-widest font-bold text-blue-400">Développeurs</div>
              </div>
              <div className="border-r border-white/10" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">1</div>
                <div className="text-xs uppercase tracking-widest font-bold text-purple-400">Expert Comm</div>
              </div>
              <div className="border-r border-white/10" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-cyan-400">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
