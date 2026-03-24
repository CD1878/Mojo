'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      clientId: 'cafe_mojo',
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://swqskhtyddpyjfrohich.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-10 tracking-wide">CONTACT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8 text-lg text-dark/80">
            <p>
              Heb je een vraag, opmerking of wil je een reservering maken voor een grote groep? Neem dan contact met ons op via onderstaande gegevens of vul het contactformulier in.
            </p>
            <div>
              <h3 className="text-2xl font-heading mb-2 text-dark">ADRES</h3>
              <p>Ringdijk 3<br />1097 AA Amsterdam</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading mb-2 text-dark">TELEFOON</h3>
              <a href="tel:0202331367" className="text-accent hover:text-dark transition-colors">020 233 1367</a>
            </div>
            <div>
              <h3 className="text-2xl font-heading mb-2 text-dark">E-MAIL</h3>
              <a href="mailto:info@mojo-amsterdam.nl" className="text-accent hover:text-dark transition-colors">info@mojo-amsterdam.nl</a>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="bg-green/10 border-l-4 border-green text-green p-6 mb-6">
                <h3 className="font-heading text-xl mb-2">Bedankt voor je bericht!</h3>
                <p>We hebben je aanvraag in goede orde ontvangen en nemen zo snel mogelijk contact met je op.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors"
                >
                  Nieuw bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading tracking-widest mb-2">NAAM</label>
                  <input type="text" id="name" name="name" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-heading tracking-widest mb-2">E-MAILADRES</label>
                  <input type="email" id="email" name="email" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-heading tracking-widest mb-2">ONDERWERP</label>
                  <input type="text" id="subject" name="subject" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-heading tracking-widest mb-2">BERICHT</label>
                  <textarea id="message" name="message" rows={5} className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required disabled={status === 'loading'}></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Er is helaas iets misgegaan. Probeer het later opnieuw of mail ons direct.</p>
                )}
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-dark text-background px-10 py-4 font-heading tracking-widest hover:bg-accent hover:text-white transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'BEZIG...' : 'VERSTUREN'}
                </button>
              </form>
            )}
          </div>
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
