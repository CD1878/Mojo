import type { Metadata } from 'next';
import { Archivo, Oswald, Roboto } from 'next/font/google';
import Script from 'next/script';
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
        
        <Script
          id="guestplan-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
             __html: `
            (function(g,s,t,p,l,n){
            g["_gstpln"]={};
            (l=s.createElement(t)),(n=s.getElementsByTagName(t)[0]);
            l.async=1;l.src=p;n.parentNode.insertBefore(l,n);
            })(window,document,"script","https://cdn.guestplan.com/widget.js");
            _gstpln.accessKey = "cd98435eaadc38d4cc8a382b9a4545ef881b2ac3";
            _gstpln.locale = "nl";
            `
          }}
        />

        <Script
          id="reserveer-widget-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
             __html: `
            const SESSION_KEY = 'reserveer_widget_tracked';
            let tebiArmedUntil = 0;
            let tebiObserverAttached = false;

            function alreadyTracked() {
              return sessionStorage.getItem(SESSION_KEY) === '1';
            }

            function fire(label) {
              if (alreadyTracked()) return;
              sessionStorage.setItem(SESSION_KEY, '1');

              if (typeof gtag === 'function') {
                gtag('event', 'click_reserveer_widget', {
                  event_category: 'reserveren',
                  event_label: label,
                  transport_type: 'beacon'
                });
              }
            }

            document.addEventListener('click', function (e) {
              if (alreadyTracked()) return;

              /* ===== GUESTPLAN (shadow DOM) ===== */
              const gpHost = document.querySelector('[id^="gstpln-widget"]');
              if (gpHost && e.composedPath && e.composedPath().includes(gpHost)) {
                return fire('guestplan_widget');
              }

              /* ===== TEBI ===== */
              const tebiIframe = document.querySelector('iframe[src*="tebi.co/api/widget"]');
              if (!tebiIframe) return;

              // arm detectie alleen na echte klik
              tebiArmedUntil = Date.now() + 1200;

              if (tebiObserverAttached) return;
              tebiObserverAttached = true;

              const startW = tebiIframe.offsetWidth;
              const startH = tebiIframe.offsetHeight;
              const startArea = startW * startH;

              const ro = new ResizeObserver(entries => {
                if (alreadyTracked()) return;
                if (Date.now() > tebiArmedUntil) return;

                for (const entry of entries) {
                  const w = entry.contentRect.width;
                  const h = entry.contentRect.height;
                  const areaGrowth = (w * h) / startArea;

                  if (areaGrowth > 1.7 || w - startW > 150 || h - startH > 150) {
                    fire('tebi_widget');
                    ro.disconnect();
                  }
                }
              });

              ro.observe(tebiIframe);
            });
            `
          }}
        />
      </body>
    </html>
  );
}
