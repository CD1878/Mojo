import type { Metadata } from 'next';
import { Archivo, Oswald, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Café Mojo - Amsterdam-Oost',
  description: 'Kom naar Café Mojo, een populaire ontmoetingsplek in Amsterdam-Oost.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${archivo.variable} ${oswald.variable} ${roboto.variable}`}>
      <body className="bg-background text-dark font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
