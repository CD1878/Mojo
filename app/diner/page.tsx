import MenuItem from '@/components/MenuItem';

export default function Diner() {
  return (
    <div className="pt-28 min-h-screen">
      
      {/* STARTERS & BITES */}
      <section className="bg-green text-background pt-12 pb-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-center mb-8 lg:mb-12 opacity-80">DINNER</p>
          <h2 className="mb-8 lg:mb-20 text-center tracking-wide font-display text-accent uppercase">STARTERS & BITES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8 lg:mb-16">
            <MenuItem title="ZUURDESEMBROOD (V)" description="Met huisgemaakte kruidenboter" price="6,50" />
            <MenuItem title="KROKANTE BLOEMKOOL (VE)" description="Met frisse peterselie dressing" price="11,25" />
            <MenuItem title="GAMBA PIRI PIRI" description="Gamba’s met kop, pittige olie & knoflook" price="13,75" />
            <MenuItem title="SOEP VAN DE DAG" price="7,50" />
            <MenuItem title="GEPOFTE AUBERGINE (VE)" description="Miso, furikake" price="12,50" />
            <MenuItem title="FLAMMKUCHEN" description="Crème fraîche, bacon, rode ui & Gruyère" price="10,50" />
            <MenuItem title="HANDGESNEDEN STEAK TARTAAR" description="Piccalilly, kappertjes, augurk" price="14,50" />
            <MenuItem title="CAMEMBERT UIT DE OVEN" description="Fondue, brood, groenten" price="13,95" />
            <MenuItem title="GYOZA" description="Kip, wasabi, sesam" price="12,50" />
            <MenuItem title="ARTISJOK MET CITROEN & DRAGON DRESSING (VE)" price="10,95" />
          </div>
        </div>
      </section>

      {/* MAIN COURSES */}
      <section className="bg-background text-green py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">MAIN COURSES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8 lg:mb-16">
            <MenuItem title="WISSELENDE STAMPPOT" description="Vraag de bediening naar welke stamppot" price="18,50" />
            <MenuItem title="VEGABURGER (V)" description="Beyond meat burger, Cheddar, tomaat, augurk, Mojo-saus & frites" price="20,95" />
            <MenuItem title="BIEFSTUK" description="Jus de veau, frites en sla" price="25,50" />
            <MenuItem title="KIPSATÉ" description="Kippendijen, satésaus, atjar & frites" price="20,95" />
            <MenuItem title="STICKY RIBS" description="Spareribs met aioli, bbq-saus & frites" price="24,50" />
            <MenuItem title="VIS VAN DE DAG" description="Vraag de bediening naar de verse vis" price="Prijs wisselt" />
            <MenuItem title="MOJO BEEF BURGER" description="Met Cheddar, bacon, tomaat, augurk, Mojo-saus & frites" price="20,95" />
            <MenuItem title="RAVIOLI POMPOEN AMARETTO (V)" description="Salie boter, amandel" price="20,95" />
            <MenuItem title="MOJO SPECIAL" description="Wisselende specialiteit van de chef" price="Prijs wisselt" />
          </div>
        </div>
      </section>

      {/* SIDES & KIDS */}
      <section className="bg-green text-background py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">SIDES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
            <MenuItem title="GROENE SALADE" price="5,50" />
            <MenuItem title="FRITES" price="4,95" />
          </div>

          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">FOR THE KIDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8 lg:mb-16">
            <MenuItem title="KROKET OF 4 MINI FRIKANDELLEN MET FRITES" price="10,50" />
          </div>
        </div>
      </section>

      {/* DESSERTS */}
      <section className="bg-accent text-background py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-background text-center uppercase">DESSERTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-12 lg:mb-24">
            <MenuItem title="AFFOGATO" description="Bolletje vanille-ijs met espresso; homemade Limoncello (+€3,50)" price="6,50" />
            <MenuItem title="TARTE TATIN VAN PEER" description="karamel, vanille ijs" price="9,95" />
            <MenuItem title="ESPRESSO MARTINI" description="Koffie, Kahlua en Eristoff vodka" price="12,75" />
            <MenuItem title="NEW YORK CHEESECAKE" price="7,20" />
            <MenuItem title="KAASPLANKJE" description="Diverse kazen met notenbrood & appelstroop" price="14,50" />
          </div>

          <div className="text-center bg-[#ca6b00] p-8 lg:p-12 mb-10 lg:mb-20 max-w-2xl mx-auto rounded-lg shadow-inner">
             <p className="text-sm uppercase tracking-widest font-bold mb-4 opacity-90">SHOT €4,50 • LIMONCELLO SPRITZ €11,50</p>
             <h3 className="text-4xl font-display uppercase tracking-wide">HUISGEMAAKTE LIMONCELLO</h3>
          </div>

          <div className="text-center text-sm mb-16 space-y-3 opacity-90 max-w-2xl mx-auto">
            <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-white transition-colors">Bekijk hier onze allergieënkaart.</a></p>
            <p>If you have any specific dietary requirements or allergies, please let us know. <a href="#" className="underline hover:text-white transition-colors">View our allergy menu here.</a></p>
            <p className="pt-6 font-bold tracking-wider">V = Vegetarian · VE = Vegan</p>
          </div>

          <div className="text-center">
            <a href="#" className="inline-block bg-background text-accent px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors rounded">
              DINNER MENU (EN)
            </a>
          </div>
        </div>
      </section>

      {/* RESERVATION BLOCK */}
      <section className="bg-background text-dark py-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-8 md:mb-0 text-accent">Wil je zeker zijn van een tafel?</h2>
          <a
            href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors rounded shadow-sm"
          >
            DIRECT RESERVEREN
          </a>
        </div>
      </section>

    </div>
  );
}
