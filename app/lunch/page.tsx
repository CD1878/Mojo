import MenuItem from '@/components/MenuItem';

export default function Lunch() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">ZUURDESEMBROOD</h1>
        
        <div className="space-y-12 mb-20">
          <MenuItem 
            title="Smashed avocado (V)" 
            description="Geitenkaas, cherry tomaat" 
            price="13,00" 
          />
          <MenuItem 
            title="BLTC" 
            description="Bacon, sla, tomaat, kip & chili-mayonaise" 
            price="13,50" 
          />
          <MenuItem 
            title="Huisgemaakte gehaktbal" 
            description="coleslaw, zuur, jus" 
            price="13,50" 
          />
        </div>

        <div className="text-center text-sm text-gray-400 mb-32 space-y-2">
          <p>Heeft u bepaalde dieetwensen of een allergie laat het ons weten. <a href="#" className="underline hover:text-white transition-colors">Bekijk hier onze allergieënkaart.</a></p>
          <p>If you have any specific dietary requirements or allergies, please let us know. <a href="#" className="underline hover:text-white transition-colors">View our allergy menu here.</a></p>
        </div>

        <hr className="border-white/10 mb-32" />

        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">TOAST</h1>
        
        <div className="space-y-12 mb-32">
          <MenuItem 
            title="Kaas" 
            price="6,50" 
          />
          <MenuItem 
            title="Ham & kaas (V)" 
            price="7,50" 
          />
          <MenuItem 
            title="CROQUE MONSIEUR" 
            description="Ham, Gruyère & bechamelsaus" 
            price="9,95" 
          />
        </div>

        <hr className="border-white/10 mb-32" />
      </div>

      <div className="bg-white text-black py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-10 tracking-wide">Wil je zeker zijn van een tafel?</h2>
          <a
            href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-heading tracking-widest hover:bg-gray-800 transition-colors"
          >
            DIRECT RESERVEREN
          </a>
        </div>
      </div>
    </div>
  );
}
