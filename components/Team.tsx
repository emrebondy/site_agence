
import React from 'react';

const team = [
  {
    name: 'Thomas R.',
    role: 'Lead Frontend Developer',
    desc: 'Expert React & UI/UX Design. Obsédé par les interfaces fluides et les micro-animations.',
    img: 'https://picsum.photos/seed/thomas/300/300',
  },
  {
    name: 'Marc L.',
    role: 'Full-Stack Developer',
    desc: 'Architecte Cloud & Performance. Spécialiste de l\'optimisation et de la sécurité des données.',
    img: 'https://picsum.photos/seed/marc/300/300',
  },
  {
    name: 'Sacha V.',
    role: 'Chef de Projet & Growth',
    desc: 'Communication & Business Dev. Garant de la relation client et de votre visibilité commerciale.',
    img: 'https://picsum.photos/seed/sacha/300/300',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">L'Équipe <span className="text-gradient">Nexus</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          Trois talents complémentaires unis par une vision commune : créer le meilleur du web.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-end p-6 flex-col justify-end">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 font-medium text-sm mb-4 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-400 leading-relaxed text-sm">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
