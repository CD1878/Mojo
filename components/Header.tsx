'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'LUNCH', href: '/lunch' },
    { name: 'DINER', href: '/diner' },
    { name: 'SNACKS', href: '/snacks' },
    { name: 'BIER', href: '/bier' },
    { name: 'WIJN', href: '/wijn' },
    { name: 'COCKTAILS', href: '/cocktails' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-dark text-white text-center py-2 text-sm font-sans">
        <Link href="/werken-bij-mojo" className="hover:text-accent transition-colors">
          Werken bij Café Mojo? Klik hier
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-dark/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-heading tracking-widest hover:text-accent transition-colors ${
                    pathname === link.href ? 'text-accent' : 'text-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center lg:flex-1">
              <Link href="/">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/621fa6ef30bab64af4b8a58e/e84725a5-dc78-4d36-a1ec-fcbffaa7a72f/logo+cafe+mojo+amsterdam.png"
                  alt="Café Mojo"
                  width={120}
                  height={120}
                  className="h-20 w-auto object-contain"
                  priority
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center justify-end space-x-6 flex-1">
              <div className="flex space-x-4">
                <a href="https://instagram.com/mojo_amsterdam" target="_blank" rel="noreferrer" className="text-dark hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/mojoamsterdam" target="_blank" rel="noreferrer" className="text-dark hover:text-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:info@mojo-amsterdam.nl" className="text-dark hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <a
                href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
                target="_blank"
                rel="noreferrer"
                className="bg-accent text-white px-6 py-3 text-sm font-heading tracking-widest hover:bg-accent/90 transition-colors rounded-sm"
              >
                DIRECT RESERVEREN
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-dark p-2">
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background h-screen fixed inset-0 top-[136px] pt-8 px-4 flex flex-col z-40 overflow-y-auto pb-32">
            <nav className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-heading tracking-widest ${
                    pathname === link.href ? 'text-accent' : 'text-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-8 pt-8">
                <a href="https://instagram.com/mojo_amsterdam" target="_blank" rel="noreferrer" className="text-dark hover:text-accent">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="https://facebook.com/mojoamsterdam" target="_blank" rel="noreferrer" className="text-dark hover:text-accent">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="mailto:info@mojo-amsterdam.nl" className="text-dark hover:text-accent">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
              <a
                href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
                target="_blank"
                rel="noreferrer"
                className="mt-8 bg-accent text-white px-8 py-4 text-lg font-heading tracking-widest hover:bg-accent/90 transition-colors rounded-sm"
              >
                DIRECT RESERVEREN
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
