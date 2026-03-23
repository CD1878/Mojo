import MenuItem from '@/components/MenuItem';

export default function Cocktails() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">COCKTAILS</h1>
        
        <h2 className="text-4xl font-heading mb-16 tracking-wide">MOJO CLASSICS</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Mojito" description="Witte rum, limoen, munt, rietsuiker, bruiswater" price="10,50" />
          <MenuItem title="Pornstar Martini" description="Vodka, passievrucht, vanille, eiwit, shotje prosecco" price="12,50" />
          <MenuItem title="Espresso Martini" description="Vodka, Kahlua, verse espresso" price="12,50" />
          <MenuItem title="Aperol Spritz" description="Aperol, prosecco, bruiswater, sinaasappel" price="9,50" />
          <MenuItem title="Limoncello Spritz" description="Huisgemaakte limoncello, prosecco, bruiswater, citroen" price="11,50" />
          <MenuItem title="Moscow Mule" description="Vodka, ginger beer, limoen, Angostura bitters" price="11,00" />
          <MenuItem title="Dark & Stormy" description="Bruine rum, ginger beer, limoen" price="11,00" />
          <MenuItem title="Amaretto Sour" description="Amaretto, citroensap, suikersiroop, eiwit" price="11,50" />
          <MenuItem title="Negroni" description="Gin, Campari, zoete vermouth" price="11,50" />
          <MenuItem title="Margarita" description="Tequila, Cointreau, limoensap, zoutrandje" price="11,50" />
        </div>

        <hr className="border-dark/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">GIN & TONIC</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Bombay Sapphire" description="Fever-Tree Indian Tonic, limoen" price="10,50" />
          <MenuItem title="Hendrick's" description="Fever-Tree Elderflower Tonic, komkommer" price="12,50" />
          <MenuItem title="Bobby's" description="Fever-Tree Indian Tonic, sinaasappel, kruidnagel" price="12,50" />
          <MenuItem title="Gin Mare" description="Fever-Tree Mediterranean Tonic, rozemarijn, olijf" price="13,50" />
        </div>

        <hr className="border-dark/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">MOCKTAILS</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Virgin Mojito" description="Limoen, munt, rietsuiker, ginger ale" price="7,50" />
          <MenuItem title="Shirley Temple" description="Ginger ale, grenadine, kers" price="7,00" />
          <MenuItem title="Passionfruit No-Martini" description="Passievrucht, vanille, limoen, bruiswater" price="8,50" />
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
