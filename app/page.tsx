import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/621fa6ef30bab64af4b8a58e/1733314932540-Q10S5UUAUYL3A37HNZRF/image-asset.jpeg"
              alt="Mojo Moment"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-dark/70">
              Het ultieme MOJO-moment: goed gezelschap, een glimlach, en een heerlijk speciaalbiertje in de hand. Reserveer jouw tafel via mojo-amsterdam.nl
            </p>
          </div>
          <div className="space-y-10">
            <h1 className="font-heading leading-[0.9] tracking-tight">
              CAFE MOJO <br />
              <span className="text-accent">AMSTERDAM</span>
            </h1>
            <div className="space-y-6 text-xl text-dark/80 font-light leading-relaxed">
              <p>
                Bij Café Mojo in Amsterdam Oost kun je van &apos;s ochtends tot &apos;s avonds laat binnen lopen. Op ons terras zit je de hele dag in de zon en binnen in ons restaurant of aan de bar zit je altijd lekker warm.
              </p>
              <p>
                Het is de perfecte plek in Oost voor je dagelijkse kop koffie met een krantje of gewoon een lekkere <Link href="/lunch" className="text-dark font-medium underline decoration-accent underline-offset-4 hover:text-accent transition-colors">lunch</Link>. Na je koffie wordt het vanzelf tijd voor een goede <Link href="/snacks" className="text-dark font-medium underline decoration-accent underline-offset-4 hover:text-accent transition-colors">borrel</Link> of <Link href="/diner" className="text-dark font-medium underline decoration-accent underline-offset-4 hover:text-accent transition-colors">diner</Link>. Ons assortiment speciaal bier is zo groot dat je een week nodig hebt voor een rondje kaart! Onze dinerkaart wisselt met de seizoenen mee. Een aantal klassiekers, zoals onze beroemde spareribs en de enige echte Mojo burger, verdwijnen natuurlijk nooit!
              </p>
              <p>Tot vanavond?</p>
            </div>
            <div className="pt-4">
              <a
                href="https://guestplan.io/?i=cd98435eaadc38d4cc8a382b9a4545ef881b2ac3"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-dark text-background px-10 py-5 text-sm font-heading tracking-widest hover:bg-accent hover:text-white transition-colors"
              >
                RESERVEER DIRECT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wist Je Dat Section */}
      <section className="bg-green text-background py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-20 text-center tracking-wide">WIST JE DAT...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 max-w-5xl mx-auto">
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-heading text-accent mb-4 tracking-wide">AJAX</h3>
                <p className="text-background/90 text-lg">Alle wedstrijden van Ajax kijk je bij MOJO op <span className="text-accent">GROOT</span> scherm.</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading text-accent mb-4 tracking-wide">FEESTJE VIEREN?</h3>
                <p className="text-background/90 text-lg">Dat is mogelijk! <Link href="/mojo-afhuren" className="text-white underline hover:text-accent transition-colors">Klik hier</Link> om naar het aanvraagformulier te gaan.</p>
              </div>
            </div>
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-heading text-accent mb-4 tracking-wide">EVENTS</h3>
                <p className="text-background/90 text-lg">Volg al onze activiteiten op onze socials via <a href="https://instagram.com/mojo_amsterdam" className="text-white underline hover:text-accent transition-colors">Instagram</a> &amp; <a href="https://facebook.com/mojoamsterdam" className="text-white underline hover:text-accent transition-colors">Facebook</a></p>
              </div>
              <div>
                <h3 className="text-3xl font-heading text-accent mb-4 tracking-wide">SPECIAAL BIER</h3>
                <p className="text-background/90 text-lg">Je bij ons geniet van heel veel <Link href="/bier" className="text-white underline hover:text-accent transition-colors">soorten speciaalbieren</Link> op fles en van de tap.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="text-left space-y-10">
              <h2 className="font-heading tracking-wide uppercase">LOCATIE &<br/>OPENINGSTIJDEN</h2>
              
              <div className="text-dark/90 text-lg font-bold">
                <p>Ringdijk 3</p>
                <p>1097 AA Amsterdam</p>
              </div>
              
              <div className="space-y-6 text-dark text-lg font-bold">
                <p className="text-accent mb-2">Openingstijden</p>
                <div>
                  <p>Maandag – Woensdag</p>
                  <p className="text-dark">12:00 - 00:00</p>
                </div>
                <div>
                  <p>Donderdag</p>
                  <p className="text-dark">12:00 - 01:00</p>
                </div>
                <div>
                  <p>Vrijdag</p>
                  <p className="text-dark">12:00 - 03:00</p>
                </div>
                <div>
                  <p>Zaterdag</p>
                  <p className="text-dark">11:00 - 02:00</p>
                </div>
                <div>
                  <p>Zondag</p>
                  <p className="text-dark">11:00 - 23:00</p>
                </div>
              </div>

              <div>
                <p className="text-accent mb-2 text-lg">Telefoonnummer</p>
                <a href="tel:0202331367" className="text-accent underline underline-offset-4 text-xl font-bold hover:text-dark transition-colors">020 233 1367</a>
              </div>
            </div>

            <div className="w-full h-full min-h-[600px] bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.852924155106!2d4.925916915802661!3d52.35481947978393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6a5af562ec877%3A0x6bba30f2fddab7f6!2sCaf%C3%A9%20Mojo!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Mojo Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-dark text-background py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading mb-6 tracking-wide">MOJO NIEUWSBRIEF</h2>
          <p className="text-background/80 mb-12 text-lg">Meld je aan voor onze nieuwsbrief.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="px-6 py-4 border border-background/30 bg-transparent text-background placeholder:text-background/50 w-full focus:outline-none focus:border-accent text-lg"
              required
            />
            <button type="submit" className="bg-accent text-white px-10 py-4 font-heading tracking-widest hover:bg-accent/90 transition-colors whitespace-nowrap">
              AANMELDEN
            </button>
          </form>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-32 bg-accent text-white">
        <div className="text-center">
          <Link href="/werken-bij-mojo" className="font-heading hover:text-dark transition-colors tracking-wide" style={{ fontSize: '39.84px' }}>
            Werken bij Café MOJO?
          </Link>
        </div>
      </section>
    </div>
  );
}
