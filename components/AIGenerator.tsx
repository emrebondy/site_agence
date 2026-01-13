
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const AIGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateConcept = async () => {
    if (!niche) return;
    setLoading(true);
    setError('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `En tant qu'expert en stratégie web pour l'agence Nexus, suggère un concept de site vitrine innovant pour le secteur : "${niche}". Donne des idées de structure, de palette de couleurs et de fonctionnalités clés.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              siteTitle: { type: Type.STRING },
              colorPalette: { type: Type.ARRAY, items: { type: Type.STRING } },
              heroStrategy: { type: Type.STRING },
              keyFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
              marketingAngle: { type: Type.STRING }
            },
            required: ["siteTitle", "colorPalette", "heroStrategy", "keyFeatures", "marketingAngle"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de la génération. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden border-blue-500/20">
        <div className="absolute top-0 right-0 p-4">
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">✨</span>
            </div>
        </div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 italic">Manque d'inspiration ?</h2>
          <p className="text-slate-400">Utilisez notre IA pour générer un concept de site pour votre activité.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Ex: Architecte d'intérieur, Salle de sport, Artisan chocolatier..." 
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          />
          <button 
            onClick={generateConcept}
            disabled={loading || !niche}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all whitespace-nowrap"
          >
            {loading ? 'Analyse...' : 'Générer mon concept'}
          </button>
        </div>

        {error && <p className="text-red-400 text-center mb-6">{error}</p>}

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Titre Suggéré</h3>
              <p className="text-2xl font-bold">{result.siteTitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-2">Angle Marketing</h3>
                <p className="text-slate-300 italic">"{result.marketingAngle}"</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">Palette Web</h3>
                <div className="flex gap-2 mt-2">
                  {result.colorPalette.map((c: string, i: number) => (
                    <div key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/10">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Fonctionnalités Clés</h3>
                <ul className="grid md:grid-cols-2 gap-2 mt-2">
                    {result.keyFeatures.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400">
                            <span className="text-green-500">✓</span> {f}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIGenerator;
