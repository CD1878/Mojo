import MenuItem from '@/components/MenuItem';

export default function Snacks() {
  return (
    <div className="pt-28 bg-green text-background min-h-screen">
      
      <section className="pt-12 pb-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-32 text-center tracking-wide font-display text-accent uppercase">SNACKS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-32">
            <MenuItem title="OLIJVEN" price="6,50" />
            <MenuItem title="OUDE KAAS" price="7,50" />
            <MenuItem title="ZUURDESEM KRUIDENBOTER" price="6,50" />
            <MenuItem title="NACHO’S UIT DE OVEN" price="12,75" />
            <MenuItem title="NOOTJES" price="4,50" />
            <MenuItem title="FLAMMKUCHEN*" price="10,50" />
            <MenuItem title="KROKANTE BLOEMKOOL*" price="11,25" />
            <MenuItem title="PORTIE FRITES" price="4,95" />
            <MenuItem title="BITTERBALLEN" price="8,00" />
            <MenuItem title="VEGA BITTERBALLEN" price="8,00" />
            <MenuItem title="VLAMMETJES" price="8,00" />
            <MenuItem title="KAASSTENGELS" price="8,00" />
            <MenuItem title="FRIKANDELLETJES" price="7,50" />
            <MenuItem title="BITTERGARNITUUR 12" price="15,00" />
            <MenuItem title="BITTERGARNITUUR 24" price="30,00" />
          </div>

          <div className="text-center text-sm mb-12 space-y-3 opacity-90 max-w-2xl mx-auto border-t border-accent/20 pt-16">
            <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-white transition-colors">Bekijk hier onze allergieënkaart.</a></p>
            <p>If you have any specific dietary requirements or allergies, please let us know. <a href="#" className="underline hover:text-white transition-colors">View our allergy menu here.</a></p>
            <p className="pt-4 font-bold text-accent italic">(Snacks zijn tot 22:00 uur te bestellen)</p>
          </div>

        </div>
      </section>

      {/* RESERVATION BLOCK */}
      <section className="bg-background text-dark py-20 px-4">
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
