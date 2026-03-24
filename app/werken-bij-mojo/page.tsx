'use client';

import { useState } from 'react';

export default function WerkenBijMojo() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const voornaam = formData.get('voornaam');
    const achternaam = formData.get('achternaam');
    const leeftijd = formData.get('leeftijd');
    const telefoonnummer = formData.get('telefoonnummer');
    const email = formData.get('email');
    const motivatie = formData.get('motivatie');

    const combinedMessage = `
Nieuwe Sollicitatie:

Naam: ${voornaam} ${achternaam}
Leeftijd: ${leeftijd}
Telefoonnummer: ${telefoonnummer}
Email: ${email}

Motivatie / Opmerkingen:
${motivatie || 'Geen extra motivatie opgegeven.'}
    `.trim();

    const data = {
      clientId: 'cafe_mojo',
      name: `${voornaam} ${achternaam}`,
      email: email,
      subject: `Sollicitatie Café Mojo - ${voornaam} ${achternaam}`,
      message: combinedMessage,
    };

    try {
      const response = await fetch('https://swqskhtyddpyjfrohich.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send request');
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending request:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24 lg:pt-8 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Tekst Gedeelte */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-heading text-accent tracking-wide">
              Werken bij café MOJO?
            </h1>
            <div className="text-lg text-dark/90 leading-relaxed font-bold space-y-6">
              <p>
                Zin in een leuke baan in de horeca? Wij zijn bij MOJO altijd op zoek naar enthousiaste en klantgerichte mensen om ons team te komen versterken. Vul het <span className="text-accent">sollicitatieformulier</span> in en schrijf even een korte motivatie. Dan nemen wij zo snel mogelijk contact met je op.
              </p>
            </div>
          </div>

          {/* Formulier Gedeelte */}
          <div>
            <h2 className="text-3xl font-heading text-accent mb-10 tracking-wide">Sollicitatieformulier</h2>
            
            {status === 'success' ? (
              <div className="bg-green/10 border-l-4 border-green text-green p-6">
                <h3 className="font-heading text-2xl mb-4">Sollicitatie succesvol verstuurd!</h3>
                <p className="mb-6">Bedankt voor je interesse om bij Café Mojo te werken. We hebben je gegevens in goede orde ontvangen en nemen zo snel mogelijk contact met je op.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors underline underline-offset-4"
                >
                  Nieuwe sollicitatie
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xl font-bold mb-4">Naam</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="voornaam" className="block text-sm font-bold mb-2">Voornaam (vereist)</label>
                      <input type="text" id="voornaam" name="voornaam" className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                    </div>
                    <div>
                      <label htmlFor="achternaam" className="block text-sm font-bold mb-2">Achternaam (vereist)</label>
                      <input type="text" id="achternaam" name="achternaam" className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="leeftijd" className="block text-sm font-bold mb-2 text-xl">Leeftijd (vereist)</label>
                  <input type="number" id="leeftijd" name="leeftijd" className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>

                <div>
                  <label htmlFor="telefoonnummer" className="block text-sm font-bold mb-2 text-xl">Telefoonnummer (vereist)</label>
                  <input type="tel" id="telefoonnummer" name="telefoonnummer" className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-xl">Email (vereist)</label>
                  <input type="email" id="email" name="email" className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>

                <div>
                  <label htmlFor="motivatie" className="block text-sm font-bold mb-2 text-xl">Korte Motivatie (optioneel)</label>
                  <textarea id="motivatie" name="motivatie" rows={4} className="w-full border border-dark/20 px-4 py-3 bg-white focus:outline-none focus:border-accent" disabled={status === 'loading'}></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Er is helaas iets misgegaan. Probeer het later opnieuw of bel ons direct.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-accent text-white px-10 py-5 font-heading tracking-widest text-sm hover:bg-accent/90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'BEZIG...' : 'VERSTUREN'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
