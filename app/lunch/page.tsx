import MenuItem from '@/components/MenuItem';

export default function Lunch() {
  return (
    <div className="pt-28 bg-background text-green min-h-screen">
      
      <section className="pt-4 pb-24 lg:pt-8 lg:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-center mb-8 lg:mb-16 opacity-80">LUNCH</p>
          
          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">ZUURDESEMBROOD</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
            <MenuItem title="SMASHED AVOCADO (V)" description="Geitenkaas, cherry tomaat" price="13,00" />
            <MenuItem title="BLTC" description="Bacon, sla, tomaat, kip & chili-mayonaise" price="13,50" />
            <MenuItem title="HUISGEMAAKTE GEHAKTBAL" description="Coleslaw, zuur, jus" price="13,50" />
          </div>

          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">TOAST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
            <MenuItem title="KAAS" price="6,50" />
            <MenuItem title="HAM & KAAS (V)" price="7,50" />
            <MenuItem title="CROQUE MONSIEUR" description="Ham, Gruyère & bechamelsaus" price="9,95" />
          </div>

          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">LUNCH CLASSICS & BITES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
            <MenuItem title="SOEP VAN DE DAG" price="7,50" />
            <MenuItem title="UITSMIJTER" description="+ €1,00 per topping: Ham, kaas, bacon, tomaat" price="9,50" />
            <MenuItem title="EGGS BENEDICT" description="Brioche, gepocheerd ei, ham & hollandaisesaus" price="13,95" />
            <MenuItem title="RUNDVLEESKROKETTEN OP BROOD" price="one €7,95 | two €12,95" />
            <MenuItem title="GARNALENKROKET OP BROOD" price="one €8,95 | two €13,95" />
            <MenuItem title="MOJO BEEF BURGER" description="Met Cheddar, bacon, tomaat, augurk, Mojo-saus & frites" price="19,95" />
            <MenuItem title="VEGABURGER (V)" description="Beyond meat burger, Cheddar, tomaat, augurk, Mojo-saus & frites" price="19,50" />
          </div>

          <div className="text-center text-sm mb-12 space-y-3 opacity-90 max-w-2xl mx-auto border-t border-accent/20 pt-10 lg:pt-16">
            <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-accent transition-colors">Bekijk hier onze allergieënkaart.</a></p>
            <p>If you have any specific dietary requirements or allergies, please let us know. <a href="#" className="underline hover:text-accent transition-colors">View our allergy menu here.</a></p>
            <p className="pt-4 font-bold tracking-wider">V = Vegetarian · VE = Vegan</p>
          </div>

        </div>
      </section>

      {/* RESERVATION BLOCK */}
      <section className="bg-dark text-background py-20 px-4">
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
