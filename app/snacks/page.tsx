import MenuItem from '@/components/MenuItem';

export default function Snacks() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">SNACKS</h1>
        
        <div className="space-y-12 mb-20">
          <MenuItem title="Bitterballen" description="8 stuks met mosterd" price="8,50" />
          <MenuItem title="Kaastengels (V)" description="8 stuks met chilisaus" price="8,50" />
          <MenuItem title="Vlammetjes" description="8 stuks met chilisaus" price="8,50" />
          <MenuItem title="Gemengd bittergarnituur" description="12 stuks met diverse sauzen" price="12,50" />
          <MenuItem title="Nachos uit de oven (V)" description="Kaas, guacamole, crème fraîche, salsa, jalapeños" price="11,50" />
          <MenuItem title="Oude kaas (V)" description="Met mosterd" price="6,50" />
          <MenuItem title="Ossenworst" description="Met mosterd" price="6,50" />
          <MenuItem title="Broodplankje (V)" description="Met aioli en kruidenboter" price="6,50" />
        </div>

        <div className="text-center text-sm text-dark/70 mb-32 space-y-2">
          <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-accent transition-colors">Bekijk hier onze allergieënkaart.</a></p>
        </div>

        <hr className="border-dark/10 mb-32" />
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
