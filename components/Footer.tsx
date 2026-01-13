
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-black flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">N</span>
            </div>
            <span className="text-gradient">NEXUS</span>
          </a>
          <p className="text-slate-500 text-sm max-w-xs">
            Conception web de haute précision pour marques ambitieuses.
          </p>
        </div>
        
        <div className="flex gap-12 text-sm text-slate-400">
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h5>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#team" className="hover:text-white transition-colors">L'Équipe</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold uppercase tracking-widest text-xs">Légal</h5>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
        <p>© {new Date().getFullYear()} Nexus Dev Studio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
