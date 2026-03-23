import MenuItem from '@/components/MenuItem';

export default function Wijn() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">WIJN</h1>
        
        <h2 className="text-4xl font-heading mb-16 tracking-wide">WITTE WIJN</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Sauvignon Blanc" description="Fris, fruitig, citrus" price="5,50 / 27,50" />
          <MenuItem title="Chardonnay" description="Vol, romig, perzik" price="6,00 / 30,00" />
          <MenuItem title="Pinot Grigio" description="Licht, bloemig, appel" price="6,50 / 32,50" />
          <MenuItem title="Verdejo" description="Droog, kruidig, tropisch fruit" price="7,00 / 35,00" />
        </div>

        <hr className="border-dark/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">RODE WIJN</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Merlot" description="Zacht, rood fruit, soepel" price="5,50 / 27,50" />
          <MenuItem title="Cabernet Sauvignon" description="Stevig, donker fruit, hout" price="6,00 / 30,00" />
          <MenuItem title="Pinot Noir" description="Licht, kersen, elegant" price="6,50 / 32,50" />
          <MenuItem title="Malbec" description="Kruidig, bramen, robuust" price="7,50 / 37,50" />
        </div>

        <hr className="border-dark/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">ROSÉ & BUBBELS</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Grenache Rosé" description="Licht, aardbei, fris" price="5,50 / 27,50" />
          <MenuItem title="Provence Rosé" description="Droog, perzik, mineraal" price="7,50 / 37,50" />
          <MenuItem title="Prosecco Spumante" description="Feestelijk, appel, bloemig" price="6,50 / 32,50" />
          <MenuItem title="Champagne" description="Brut, elegant, brioche" price="65,00" />
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
