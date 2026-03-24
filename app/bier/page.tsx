import MenuItem from '@/components/MenuItem';

export default function Bier() {
  return (
    <div className="pt-28 bg-background text-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-24 md:py-32">
        <h1 className="text-center mb-32 tracking-wide font-display text-accent uppercase">BIER</h1>

        <div className="mb-20 text-center border-b border-accent/20 pb-12">
          <h2 className="tracking-wide font-display text-accent uppercase mb-4">BIER OP TAP</h2>
          <p className="text-sm tracking-widest uppercase opacity-80">Fluit €3,75 – Vaasje €4,00 – Pint €8,00</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="AMSTEL 5.0%" price="Prijs op tap" />
          <MenuItem title="Mooie Jongen 5.0%" description="MOJO x De Eeuwige Jeugd (Huisbier)" price="6,00" />
          <MenuItem title="Wisseltap" price="Variabel" />
          <MenuItem title="Affligem blond 6.8%" price="6,00" />
          <MenuItem title="La Chouffe 8.0%" price="6,00" />
          <MenuItem title="Lellebel 5.7%" description="De Eeuwige Jeugd" price="6,00" />
          <MenuItem title="IJwit 6.5%" description="Brouwerij ’t IJ" price="6,00" />
          <MenuItem title="Zatte 8.0%" description="Brouwerij ’t IJ" price="6,00" />
          <MenuItem title="Gaia 7.0%" description="Oedipus" price="6,00" />
          <MenuItem title="Heineken 0.0%" price="4,00" />
        </div>

        <h2 className="mb-20 text-center tracking-wide font-display text-accent uppercase border-b border-accent/20 pb-12 pt-16">BIER OP FLES</h2>

        <h3 className="mb-12 tracking-wide font-display text-accent text-center uppercase">BLOND</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-24">
          <MenuItem title="Duvel 8.0%" price="6,00" />
          <MenuItem title="Duvel 666 6.66%" price="6,00" />
          <MenuItem title="Gouden Carolus Tripel 8.6%" description="Brouwerij ’t IJ" price="6,00" />
        </div>

        <h3 className="mb-12 tracking-wide font-display text-accent text-center uppercase">DUBBEL & TRIPEL</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-24">
          <MenuItem title="Natte 6.5%" description="Brouwerij 't IJ. Roodbruin, zacht geroosterd" price="6,00" />
          <MenuItem title="Affligem Dubbel 6.8%" description="Donkere mout, licht kruidig" price="6,00" />
          <MenuItem title="Affligem Tripel 9.0%" price="6,00" />
          <MenuItem title="Thai Thai 8.0%" description="Oedipus" price="6,00" />
          <MenuItem title="Tripel D’Anvers 8.0%" description="De Koninck" price="6,00" />
        </div>

        <h3 className="mb-12 tracking-wide font-display text-accent text-center uppercase">WEIZEN · WIT · IPA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-24">
          <MenuItem title="Gin Wit 6.0%" description="Gebrouwen door Vrouwen" price="6,00" />
          <MenuItem title="Gladjanus 5.2%" description="De Eeuwige Jeugd" price="6,00" />
          <MenuItem title="Paulaner 5.5%" price="6,00" />
          <MenuItem title="Lagunitas IPA 6.2%" price="6,00" />
          <MenuItem title="Green Bullet 5.7%" description="Two Chefs" price="6,00" />
          <MenuItem title="IPA ’t IJ 7.0%" description="Brouwerij ’t IJ" price="6,00" />
          <MenuItem title="Bon Chef (Neipa) 5.0%" description="Two Chefs" price="6,00" />
          <MenuItem title="Houblon Chouffe 9.0%" price="6,00" />
          <MenuItem title="Hop zij met ons 6.0%" description="Jopen" price="6,00" />
        </div>

        <h3 className="mb-12 tracking-wide font-display text-accent text-center uppercase">PALE ALE · PILSENER · AMBER · SOUR & MORE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-24">
          <MenuItem title="Funky Falcon 5.2%" description="Two Chefs / Pale Ale" price="6,00" />
          <MenuItem title="Sol 4.5%" description="Pilsener" price="6,00" />
          <MenuItem title="De Koninck 5.2%" description="Amber" price="6,00" />
          <MenuItem title="Liefmans 3.8%" description="Rosé bier" price="6,00" />
          <MenuItem title="Apple Bandit 4.5%" description="Cider" price="6,00" />
          <MenuItem title="Guinness 5%" description="Stout" price="6,00" />
          <MenuItem title="Polyamorie 5.0%" description="Oedipus / Sour" price="6,00" />
          <MenuItem title="Swingers 4.0%" description="Oedipus / Sour" price="6,00" />
        </div>

        <h3 className="mb-12 tracking-wide font-display text-accent text-center uppercase">ALCOHOLVRIJ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="Heineken 0.0%" description="Op tap" price="4,00" />
          <MenuItem title="Amstel Radler 0.0%" price="5,25" />
          <MenuItem title="Brand Weizen 0.0%" price="5,25" />
          <MenuItem title="Affligem Blond 0.0%" price="5,25" />
          <MenuItem title="Amstel Rosé 0.0%" price="5,25" />
          <MenuItem title="Vrijer 0.4%" description="De Eeuwige Jeugd" price="5,25" />
          <MenuItem title="Vrijwit <0.5%" description="Brouwerij ’t IJ" price="5,25" />
        </div>

      </div>

      {/* RESERVATION BLOCK */}
      <section className="bg-dark text-background py-20 px-4 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-6 md:mb-0">Wil je zeker zijn van een tafel?</h2>
          <a
            href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            DIRECT RESERVEREN
          </a>
        </div>
      </section>

    </div>
  );
}
