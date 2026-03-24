'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('mojo_cookie_consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('mojo_cookie_consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm w-[calc(100%-2rem)] bg-[#2f2f2f] text-white p-6 shadow-xl border border-white/10 rounded-sm font-sans">
      <p className="text-sm leading-relaxed mb-6 font-medium">
        Deze website maakt gebruik van cookies en vergelijkbare technologieën om uw browse-ervaring te verbeteren en ons te helpen de website te optimaliseren. Door op &quot;Accepteren&quot; te klikken, stemt u in met het gebruik van alle cookies zoals beschreven in ons <Link href="/cookiebeleid" className="text-accent underline font-bold hover:text-white transition-colors">Cookiebeleid</Link>.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-accent text-white px-6 py-3 text-sm font-bold tracking-widest hover:bg-accent/90 transition-colors rounded-sm"
      >
        Accepteren
      </button>
    </div>
  );
}
