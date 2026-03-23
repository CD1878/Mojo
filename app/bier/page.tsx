import MenuItem from '@/components/MenuItem';

export default function Bier() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-20 tracking-wide">BIER</h1>
        
        <h2 className="text-4xl font-heading mb-16 tracking-wide">VAN DE TAP</h2>
        <div className="space-y-12 mb-20">
          <MenuItem title="Heineken" description="Pilsener, 5.0%" price="3,50" />
          <MenuItem title="Affligem Blond" description="Blond, 6.8%" price="5,50" />
          <MenuItem title="Oedipus Mannenliefde" description="Saison, 6.0%" price="6,00" />
          <MenuItem title="Texels Skuumkoppe" description="Dunkelweizen, 6.0%" price="5,50" />
          <MenuItem title="Brouwerij 't IJ Zatte" description="Tripel, 8.0%" price="6,00" />
          <MenuItem title="Wisselende Tap" description="Vraag de bediening" price="Prijs wisselt" />
        </div>

        <hr className="border-dark/10 mb-32" />

        <h2 className="text-4xl font-heading mb-16 tracking-wide">OP FLES</h2>
        <div className="space-y-12 mb-32">
          <MenuItem title="Duvel" description="Zwaar Blond, 8.5%" price="6,00" />
          <MenuItem title="La Chouffe" description="Zwaar Blond, 8.0%" price="6,00" />
          <MenuItem title="Karmeliet Tripel" description="Tripel, 8.4%" price="6,50" />
          <MenuItem title="Brouwerij 't IJ IJwit" description="Witbier, 6.5%" price="6,00" />
          <MenuItem title="Desperados" description="Tequila bier, 5.9%" price="5,50" />
          <MenuItem title="Corona" description="Lager, 4.5%" price="5,50" />
          <MenuItem title="Heineken 0.0" description="Alcoholvrij, 0.0%" price="3,50" />
          <MenuItem title="Affligem Blond 0.0" description="Alcoholvrij, 0.0%" price="4,50" />
          <MenuItem title="Vrijwit 0.5" description="Alcoholarm, 0.5%" price="5,00" />
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
