export const metadata = {
  title: 'Om oss',
  description: 'Les om teamet bak Bestå Vekterprøven og hvorfor vi laget tjenesten.',
};

export default function OmOssPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-surface-900 mb-6">Om oss</h1>

      <div className="space-y-4 text-surface-700 leading-relaxed">
        <p>
          Bestå Vekterprøven ble startet av et team med bakgrunn fra sikkerhetsbransjen og
          utdanningsteknologi. Vi opplevde selv at det manglet gode digitale hjelpemidler for
          vekterstudenter — og bestemte oss for å lage det vi savnet.
        </p>
        <p>
          Alle spørsmålene er basert på pensum fra «Vekterfaget — lovpålagt nasjonal
          vekteropplæring», og vi oppdaterer innholdet jevnlig for å holde tritt med endringer
          i lovverket og læreplanen.
        </p>
        <p>
          Målet vårt er enkelt: å gi deg den beste forberedelsen til vektereksamen, slik at du
          kan stille trygg og godt forberedt på prøvedagen.
        </p>
      </div>
    </div>
  );
}
