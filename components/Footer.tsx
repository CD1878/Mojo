import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 text-sm font-heading tracking-widest uppercase">
          <Link href="/werken-bij-mojo" className="hover:text-accent transition-colors">Werken bij Mojo</Link>
          <span className="text-gray-600">•</span>
          <Link href="/lunch" className="hover:text-accent transition-colors">Lunch</Link>
          <span className="text-gray-600">•</span>
          <Link href="/diner" className="hover:text-accent transition-colors">Diner</Link>
          <span className="text-gray-600">•</span>
          <Link href="/snacks" className="hover:text-accent transition-colors">Snacks</Link>
          <span className="text-gray-600">•</span>
          <Link href="/bier" className="hover:text-accent transition-colors">Bier</Link>
          <span className="text-gray-600">•</span>
          <Link href="/cocktails" className="hover:text-accent transition-colors">Cocktails</Link>
        </div>

        <div className="text-2xl font-heading tracking-widest text-accent">
          <a href="tel:0202331367" className="hover:text-white transition-colors">TEL: 020 233 1367</a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com/mojo_amsterdam" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/mojoamsterdam" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="mailto:info@mojo-amsterdam.nl" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-gray-400 space-x-2">
          <Link href="/cookiebeleid" className="hover:text-white transition-colors">Cookiebeleid</Link>
          <span>-</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        <div className="text-sm text-gray-500">
          © 2026 Café Mojo. All rights reserved | <span className="text-gray-400">Made by</span> <a href="https://www.chefdigital.nl" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">Chef Digital</a>
        </div>
      </div>
    </footer>
  );
}
