import MenuItem from '@/components/MenuItem';

export default function Wijn() {
  return (
    <div className="pt-28 bg-green text-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 pt-4 pb-24 lg:pt-8 lg:pb-32">
        <h1 className="text-center mb-16 lg:mb-32 tracking-wide font-display text-accent uppercase">WIJNEN</h1>
        
        <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">WIT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
          <MenuItem title="PINOT GRIGIO 'L'EFFO' (ITA)" description="Krachtig en sappig, aangenaam wit fruit, een vleugje exotisch" price="6,00 / 30,00" />
          <MenuItem title="CHARDONNAY RÉSERVE 'DUMANET' (FRA)" description="Volle maar frisse wijn, zacht en gemakkelijk" price="7,00 / 35,00" />
          <MenuItem title="VERDEJO EL CONVERTIDO (ESP)" description="Rijp wit fruit en frisse zuren" price="7,00 / 35,00" />
          <MenuItem title="WEISSER BURGUNDER KABINETT AKA 'KÖBELIN' (DE)" description="Aroma's van citrus, appel en peer met een hint van tropisch fruit op de achtergrond" price="8,00 / 40,00" />
        </div>

        <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">ROOD</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
          <MenuItem title="TEMPRANILLO 'VALDELOMERA' (ESP)" description="Rond mondgevoel, gebalanceerde smaak van kruiden, blauwe bessen en bramen" price="6,00 / 30,00" />
          <MenuItem title="TINTO VINHO VERDE DOC 'PARDUSCO' GEKOELD (PRT)" description="Sappig en lichtvoetig rood, zacht, fris en opwekkend, fijne zuren, mooi fruit" price="7,00 / 35,00" />
          <MenuItem title="PRIMITIVO SALENTO (ITA)" description="Bessen en zwarte kersen, stevige en rijpe tannine" price="8,00 / 40,00" />
        </div>

        <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">ROSE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
          <MenuItem title="PINOT GRIGIO BLUSH 'SACCHETTO' (ESP)" description="Fris, droog en fruitig rosé met subtiele 'grigio' kruidigheid" price="6,00 / 30,00" />
          <MenuItem title="CHAPELLE DU SEUIL D'AIX-EN-PROVENCE ORGANIC (FRA)" description="Meer delicate afdronk dan je gewend bent. Een licht pittige, frisse afdronk" price="8,00 / 40,00" />
        </div>

        <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">ORANJE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
          <MenuItem title="ORANGE 'TAOBA' (GEORGIË)" description="Fijne bitters, terwijl de houtlagering voor een zachte, rijke afdronk zorgt" price="8,00 / 40,00" />
        </div>

        <h2 className="mb-8 lg:mb-20 tracking-wide font-display text-accent text-center uppercase">BUBBELS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-16 lg:mb-32">
          <MenuItem title="CAVA 'TORRE DEL GALL' (ESP)" description="Fris en levendig, peer, limoen en een vleugje honing" price="7,25 / 36,25" />
        </div>

      </div>
    </div>
  );
}
