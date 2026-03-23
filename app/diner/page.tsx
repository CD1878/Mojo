import MenuItem from '@/components/MenuItem';

export default function Diner() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">DINNER</h1>
        
        <h2 className="text-4xl font-heading mb-16 tracking-wide">STARTERS & BITES</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Zuurdesembrood (V)" description="Met huisgemaakte kruidenboter" price="6,50" />
          <MenuItem title="Soep van de dag" price="7,50" />
          <MenuItem title="Handgesneden steak tartaar" description="Piccalilly, kappertjes, augurk" price="14,50" />
          <MenuItem title="Artisjok met citroen & dragon dressing (VE)" price="10,95" />
          <MenuItem title="Krokante bloemkool (VE)" description="Met frisse peterselie dressing" price="11,25" />
          <MenuItem title="Gepofte aubergine (VE)" description="Miso, furikake" price="12,50" />
          <MenuItem title="Camembert uit de oven" description="Fondue, brood, groenten" price="13,95" />
          <MenuItem title="Gamba piri piri" description="Gamba’s met kop, pittige olie & knoflook" price="13,75" />
          <MenuItem title="Flammkuchen" description="Crème fraîche, bacon, rode ui & Gruyère" price="10,50" />
          <MenuItem title="Gyoza" description="Kip, wasabi, sesam" price="12,50" />
        </div>

        <div className="text-center text-accent font-heading tracking-widest mb-32 text-lg">
          V = Vegetarian · VE = Vegan
        </div>

        <hr className="border-white/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">MAIN COURSES</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Wisselende stamppot" description="Vraag de bediening naar welke stamppot" price="18,50" />
          <MenuItem title="Kipsaté" description="Kippendijen, satésaus, atjar & frites" price="20,95" />
          <MenuItem title="Mojo beef burger" description="Met Cheddar, bacon, tomaat, augurk, Mojo-saus & frites" price="20,95" />
          <MenuItem title="Vegaburger (V)" description="Beyond meat burger, Cheddar, tomaat, augurk, Mojo-saus & frites" price="20,95" />
          <MenuItem title="Sticky ribs" description="Spareribs met aioli, bbq-saus & frites" price="24,50" />
          <MenuItem title="Ravioli pompoen amaretto (V)" description="Salie boter, amandel" price="20,95" />
          <MenuItem title="Biefstuk" description="Jus de veau, frites en sla" price="25,50" />
          <MenuItem title="Vis van de dag" description="Vraag de bediening naar de verse vis" price="Prijs wisselt" />
          <MenuItem title="Mojo special" description="Wisselende specialiteit van de chef" price="Prijs wisselt" />
        </div>

        <hr className="border-white/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">SIDES</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Groene salade" price="5,50" />
          <MenuItem title="Frites" price="4,95" />
        </div>

        <h2 className="text-4xl font-heading mb-16 tracking-wide">FOR THE KIDS</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Kroket of 4 mini frikandellen met frites" price="10,50" />
        </div>

        <hr className="border-white/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">DESSERTS</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Affogato" description="Bolletje vanille-ijs met espresso" price="6,50" options={["homemade Limoncello (+€3,50)"]} />
          <MenuItem title="New York Cheesecake" price="7,20" />
          <MenuItem title="tarte tatin van peer" description="karamel, vanille ijs" price="9,95" />
          <MenuItem title="Kaasplankje" description="Diverse kazen met notenbrood & appelstroop" price="14,50" />
          <MenuItem title="Espresso Martini" description="Koffie, Kahlua en Eristoff vodka" price="12,75" />
        </div>

        <div className="mb-20 text-center">
          <h3 className="text-2xl font-heading mb-4 text-accent tracking-wide">HUISGEMAAKTE LIMONCELLO</h3>
          <p className="text-lg">SHOT €4,50 • LIMONCELLO SPRITZ €11,50</p>
        </div>

        <div className="text-center text-sm text-gray-400 mb-20 space-y-2">
          <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-white transition-colors">Bekijk hier onze allergieënkaart.</a></p>
          <p>If you have any specific dietary requirements or allergies, please let us know. <a href="#" className="underline hover:text-white transition-colors">View our allergy menu here.</a></p>
        </div>

        <div className="text-center mb-32">
          <a href="#" className="inline-block bg-white text-black px-10 py-5 text-sm font-heading tracking-widest hover:bg-gray-200 transition-colors">
            DINNER MENU (EN)
          </a>
        </div>

      </div>
    </div>
  );
}
