import Link from 'next/link';

export default function MojoAfhuren() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-10 tracking-wide">MOJO AFHUREN</h1>
        
        <div className="space-y-8 text-lg text-dark/80 leading-relaxed mb-20 text-center">
          <p>
            Heb je iets te vieren? Een verjaardag, bedrijfsborrel, afstudeerfeest of gewoon een gezellige avond met een grote groep vrienden? Bij Café Mojo ben je aan het juiste adres!
          </p>
          <p>
            Wij bieden diverse mogelijkheden voor groepen, van een gereserveerd gedeelte in het café tot het volledig afhuren van de locatie. Neem contact met ons op om de mogelijkheden te bespreken.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-heading tracking-widest mb-2">NAAM</label>
                <input type="text" id="name" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-heading tracking-widest mb-2">E-MAILADRES</label>
                <input type="email" id="email" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-heading tracking-widest mb-2">TELEFOONNUMMER</label>
                <input type="tel" id="phone" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-heading tracking-widest mb-2">GEWENSTE DATUM</label>
                <input type="date" id="date" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guests" className="block text-sm font-heading tracking-widest mb-2">AANTAL PERSONEN</label>
                <input type="number" id="guests" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-heading tracking-widest mb-2">SOORT EVENEMENT</label>
                <select id="type" className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent" required>
                  <option value="">Selecteer...</option>
                  <option value="verjaardag">Verjaardag</option>
                  <option value="bedrijfsborrel">Bedrijfsborrel</option>
                  <option value="afstudeerfeest">Afstudeerfeest</option>
                  <option value="anders">Anders</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-heading tracking-widest mb-2">AANVULLENDE WENSEN / OPMERKINGEN</label>
              <textarea id="message" rows={5} className="w-full border border-dark/20 px-4 py-3 focus:outline-none focus:border-accent"></textarea>
            </div>
            <button type="submit" className="bg-dark text-background px-10 py-4 font-heading tracking-widest hover:bg-accent hover:text-white transition-colors w-full">
              AANVRAAG VERSTUREN
            </button>
          </form>
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
