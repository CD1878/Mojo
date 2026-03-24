'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MojoAfhuren() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const date = formData.get('date');
    const type = formData.get('type');
    
    const combinedMessage = `
Telefoonnummer: ${formData.get('phone')}
Gewenste Datum: ${date}
Aantal Personen: ${formData.get('guests')}
Soort Evenement: ${type}

Aanvullende wensen / opmerkingen:
${formData.get('message') || 'Geen'}
    `.trim();

    const data = {
      clientId: 'cafe_mojo',
      name: formData.get('name'),
      email: formData.get('email'),
      subject: `Aanvraag Mojo Afhuren: ${type} op ${date}`,
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
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-10 tracking-wide">MOJO AFHUREN</h1>
        
        <div className="space-y-8 text-lg text-dark/80 leading-relaxed mb-20 text-center">
          <p>
            Heb je iets te vieren? Een verjaardag, bedrijfsborrel, afstudeerfeest of gewoon een gezellige avond met een grote groep vrienden? Bij Café Mojo ben je aan het juiste adres!
          </p>
          <p>
            Wij bieden diverse mogelijkheden voor groepen, van een gereserveerd gedeelte in het café tot het volledig afhuren van de locatie. Neem contact met ons op om de mogelijkheden te bespreken.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="bg-green/10 border-l-4 border-green text-green p-6 text-center">
              <h3 className="font-heading text-2xl mb-4">Aanvraag succesvol verstuurd!</h3>
              <p className="mb-6">Bedankt voor je aanvraag voor het afhuren van Café Mojo. We nemen zo snel mogelijk contact met je op om de mogelijkheden te bespreken.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors underline underline-offset-4"
              >
                Nieuwe aanvraag doen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading tracking-widest mb-2">NAAM</label>
                  <input type="text" id="name" name="name" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-heading tracking-widest mb-2">E-MAILADRES</label>
                  <input type="email" id="email" name="email" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-heading tracking-widest mb-2">TELEFOONNUMMER</label>
                  <input type="tel" id="phone" name="phone" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-heading tracking-widest mb-2">GEWENSTE DATUM</label>
                  <input type="date" id="date" name="date" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-heading tracking-widest mb-2">AANTAL PERSONEN</label>
                  <input type="number" id="guests" name="guests" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-heading tracking-widest mb-2">SOORT EVENEMENT</label>
                  <select id="type" name="type" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'}>
                    <option value="">Selecteer...</option>
                    <option value="verjaardag">Verjaardag</option>
                    <option value="bedrijfsborrel">Bedrijfsborrel</option>
                    <option value="afstudeerfeest">Afstudeerfeest</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-heading tracking-widest mb-2">AANVULLENDE WENSEN / OPMERKINGEN</label>
                <textarea id="message" name="message" rows={5} className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" disabled={status === 'loading'}></textarea>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Er is helaas iets misgegaan. Probeer het later opnieuw of bel ons direct.</p>
              )}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-dark text-background px-10 py-4 font-heading tracking-widest hover:bg-accent hover:text-white transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'BEZIG...' : 'AANVRAAG VERSTUREN'}
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="bg-dark text-background py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-10 tracking-wide">Wil je zeker zijn van een tafel?</h2>
          <a
            href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-white px-10 py-5 text-sm font-heading tracking-widest hover:bg-accent/90 transition-colors"
          >
            DIRECT RESERVEREN
          </a>
        </div>
      </div>
    </div>
  );
}
