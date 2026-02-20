export const metadata = {
  title: 'Vilkår',
  description: 'Brukervilkår for Bestå Vekterprøven.',
};

export default function VilkarPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-surface-900 mb-6">Vilkår for bruk</h1>

      <div className="space-y-6 text-surface-700 text-sm leading-relaxed">
        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">1. Generelt</h2>
          <p>
            Ved å bruke Bestå Vekterprøven godtar du disse vilkårene. Tjenesten tilbys av
            Bestå Vekterprøven og er tilgjengelig via nettsiden. Vi forbeholder oss retten til å
            endre vilkårene med rimelig varsel.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">2. Tjenesten</h2>
          <p>
            Bestå Vekterprøven er et digitalt øvingsverktøy for forberedelse til nasjonal
            vektereksamen. Tjenesten er et supplement til ordinær undervisning og erstatter ikke
            opplæring hos godkjent opplæringsforetak.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">3. Betaling og tilgang</h2>
          <p>
            Deler av tjenesten krever betalt abonnement. Priser og abonnementsperioder fremgår
            av betalingssiden. Tilgang aktiveres umiddelbart etter betaling og gjelder for
            den valgte perioden.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">4. Ansvarsfraskrivelse</h2>
          <p>
            Spørsmålene er laget for øvingsformål og er ikke hentet fra den faktiske eksamen.
            Vi garanterer ikke at bruk av tjenesten fører til bestått eksamen. Innholdet er ikke
            juridisk rådgivning.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">5. Personvern</h2>
          <p>
            Vi lagrer ingen personopplysninger. All fremgangsdata lagres lokalt i nettleseren din
            (localStorage) og forlater aldri enheten din.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">6. Opphavsrett</h2>
          <p>
            Alt innhold på nettsiden, inkludert spørsmål, forklaringer og teorisammendrag, er
            beskyttet av opphavsrett. Innholdet kan ikke kopieres, distribueres eller brukes
            kommersielt uten skriftlig samtykke.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-surface-900 text-base mb-2">7. Kontakt</h2>
          <p>
            Spørsmål om vilkårene kan rettes til{' '}
            <a href="mailto:vekterteorien@outlook.com" className="text-brand-600 hover:underline">
              vekterteorien@outlook.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
