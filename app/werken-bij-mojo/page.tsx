import Link from 'next/link';

export default function WerkenBijMojo() {
  return (
    <div className="pt-28">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-heading text-center mb-10 tracking-wide">WERKEN BIJ MOJO</h1>
        
        <div className="space-y-8 text-lg text-dark/80 leading-relaxed mb-20">
          <p>
            Ben jij op zoek naar een leuke baan in de horeca? Café Mojo is altijd op zoek naar enthousiaste en gemotiveerde collega&apos;s om ons team te versterken!
          </p>
          <p>
            Of je nu ervaring hebt in de bediening, achter de bar, of in de keuken, bij ons ben je aan het juiste adres. We bieden een gezellige werkomgeving, flexibele werktijden en een goed salaris.
          </p>
          <p>
            Stuur een e-mail naar <a href="mailto:info@mojo-amsterdam.nl" className="text-accent underline hover:text-dark transition-colors">info@mojo-amsterdam.nl</a> met je CV en een korte motivatie, of kom gewoon even langs in het café om kennis te maken.
          </p>
        </div>

        <h2 className="text-3xl font-heading mb-10 tracking-wide">OPENSTAANDE VACATURES</h2>
        <div className="space-y-12 mb-32">
          <div className="border border-dark/10 p-8">
            <h3 className="text-2xl font-heading mb-4">MEDEWERKER BEDIENING (M/V)</h3>
            <p className="text-dark/70 mb-6">Parttime / Fulltime</p>
            <p className="text-dark/80 mb-6">
              Als medewerker bediening zorg jij ervoor dat onze gasten een onvergetelijke avond hebben. Je neemt bestellingen op, serveert drankjes en gerechten, en zorgt voor een gastvrije sfeer.
            </p>
            <a href="mailto:info@mojo-amsterdam.nl?subject=Sollicitatie%20Medewerker%20Bediening" className="inline-block bg-dark text-background px-8 py-4 text-sm font-heading tracking-widest hover:bg-accent hover:text-white transition-colors">
              SOLLICITEER DIRECT
            </a>
          </div>

          <div className="border border-dark/10 p-8">
            <h3 className="text-2xl font-heading mb-4">ZELFSTANDIG WERKEND KOK (M/V)</h3>
            <p className="text-dark/70 mb-6">Fulltime</p>
            <p className="text-dark/80 mb-6">
              In onze keuken bereid je de lekkerste gerechten, van onze beroemde spareribs tot wisselende specials. Je werkt zelfstandig en zorgt voor een hoge kwaliteit van de gerechten.
            </p>
            <a href="mailto:info@mojo-amsterdam.nl?subject=Sollicitatie%20Zelfstandig%20Werkend%20Kok" className="inline-block bg-dark text-background px-8 py-4 text-sm font-heading tracking-widest hover:bg-accent hover:text-white transition-colors">
              SOLLICITEER DIRECT
            </a>
          </div>
        </div>
      </div>

      <div className="bg-dark text-background py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-10 tracking-wide">Meer weten?</h2>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-5 text-sm font-heading tracking-widest hover:bg-accent/90 transition-colors"
          >
            NEEM CONTACT OP
          </Link>
        </div>
      </div>
    </div>
  );
}
