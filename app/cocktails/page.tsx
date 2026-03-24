import MenuItem from '@/components/MenuItem';

export default function Cocktails() {
  return (
    <div className="pt-28 bg-background text-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-24 md:py-32">
        
        <h1 className="mb-32 tracking-wide text-accent font-display text-center uppercase">COCKTAILS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="MIMOSA" price="9,50" />
          <MenuItem title="APEROL SPRITZ" price="11,00" />
          <MenuItem title="LIMONCELLO SPRITZ" price="11,50" />
          <MenuItem title="HUGO SPRITZ" price="12,50" />
          <MenuItem title="ESPRESSO MARTINI" price="12,75" />
          <MenuItem title="PORNSTAR MARTINI" price="12,75" />
          <MenuItem title="0.0 PORNSTAR MARTINI" price="12,75" />
          <MenuItem title="LONG ISLAND ICED TEA" price="12,50" />
          <MenuItem title="SPICY MEZCAL MARGARITA" price="12,50" />
          <MenuItem title="NEGRONI" price="12,75" />
          <MenuItem title="AMARETTO SOUR" price="12,50" />
          <MenuItem title="CRODINO SPRITZ 0.0%" price="8,95" />
        </div>

        <h2 className="mb-20 tracking-wide text-accent font-display uppercase">GIN & TONIC'S</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="BOMBAY SAPPHIRE" price="11,00" />
          <MenuItem title="BOBBY'S GIN" price="12,25" />
          <MenuItem title="HENDRICK'S GIN" price="12,50" />
        </div>

        <h2 className="mb-20 tracking-wide text-accent font-display uppercase">LONGDRINKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="LIMONCELLO SPRITZ" price="11,50" />
          <MenuItem title="SHOT" price="4,50" />
        </div>

        <h2 className="mb-20 tracking-wide text-accent font-display uppercase">HARD SELTZER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="GIG PASSIONFRUIT 5%" price="6,00" />
        </div>

        <h2 className="mb-20 tracking-wide text-accent font-display uppercase">HUISGEMAAKTE LIMONCELLO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mb-32">
          <MenuItem title="LIMONCELLO SPRITZ" price="11,50" description="Extra shot €4,50" />
        </div>

      </div>
    </div>
  );
}
