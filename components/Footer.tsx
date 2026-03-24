import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 text-xl font-heading tracking-widest">
          <Link href="/werken-bij-mojo" className="hover:text-accent transition-colors underline underline-offset-4">Werken bij Mojo</Link>
          <span>•</span>
          <Link href="/lunch" className="hover:text-accent transition-colors underline underline-offset-4">Lunch</Link>
          <span>•</span>
          <Link href="/diner" className="hover:text-accent transition-colors underline underline-offset-4">Diner</Link>
          <span>•</span>
          <Link href="/snacks" className="hover:text-accent transition-colors underline underline-offset-4">Snacks</Link>
          <span>•</span>
          <Link href="/bier" className="hover:text-accent transition-colors underline underline-offset-4">Bier</Link>
          <span>•</span>
          <Link href="/cocktails" className="hover:text-accent transition-colors underline underline-offset-4">Cocktails</Link>
        </div>

        <div className="text-2xl font-heading tracking-widest text-accent underline underline-offset-4">
          <a href="tel:0202331367" className="hover:text-white transition-colors">TEL: 020 233 1367</a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com/mojo_amsterdam" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/mojoamsterdam" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="mailto:info@mojo-amsterdam.nl" className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex justify-center items-center text-sm font-bold space-x-2">
          <Link href="/cookiebeleid" className="hover:text-accent transition-colors underline underline-offset-4">Cookiebeleid</Link>
          <span>-</span>
          <Link href="/privacy-policy" className="hover:text-accent transition-colors underline underline-offset-4">Privacy Policy</Link>
        </div>

        <div className="text-sm font-bold">
          © 2026 Café Mojo. All rights reserverd | Made by <a href="https://www.chefdigital.nl" target="_blank" rel="noreferrer" className="underline hover:text-accent transition-colors">Chef Digital</a>
        </div>
      </div>
    </footer>
  );
}
