'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
          throw new Error("Missing Supabase credentials");
      }

      const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ email: email })
      });

      if (!res.ok) {
         const errorText = await res.text();
         if (errorText.includes('duplicate key value') || errorText.includes('unique constraint')) {
            setStatus('error');
            setMessage('Dit e-mailadres is al bij ons aangemeld!');
            return;
         }
         throw new Error("Failed to subscribe");
      }

      setStatus('success');
      setMessage('Bedankt voor je aanmelding!');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Er ging iets mis. Probeer het later opnieuw.');
    }
  };

  return (
    <form onSubmit={subscribe} className="flex flex-col gap-4 justify-center max-w-2xl mx-auto w-full relative">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mailadres" 
            className="px-6 py-4 border border-background/30 bg-transparent text-background placeholder:text-background/50 w-full focus:outline-none focus:border-accent text-lg disabled:opacity-50"
            required
            disabled={status === 'loading'}
          />
          <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-accent text-white px-10 py-4 font-heading tracking-widest hover:bg-accent/90 transition-colors whitespace-nowrap disabled:opacity-50"
            >
            {status === 'loading' ? 'EVEN GEDULD...' : 'AANMELDEN'}
          </button>
      </div>
      {message && (
          <p className={`text-sm tracking-wide ${status === 'success' ? 'text-accent' : 'text-red-400'}`}>
              {message}
          </p>
      )}
    </form>
  )
}
