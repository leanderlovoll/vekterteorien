export const metadata = {
  title: 'Spørsmål og svar',
  description: 'Vanlige spørsmål om Bestå Vekterprøven, vektereksamen og tjenesten vår.',
};

const faqs = [
  {
    q: 'Hva er Bestå Vekterprøven?',
    a: 'Bestå Vekterprøven er et digitalt øvingsverktøy som hjelper deg med å forberede deg til den nasjonale vektereksamen. Vi tilbyr over 330 pensumbaserte spørsmål, simulert eksamen og feilbank.',
  },
  {
    q: 'Er spørsmålene de samme som på den ekte eksamen?',
    a: 'Nei, spørsmålene er laget for øvingsformål og er ikke hentet fra den faktiske eksamen. De er basert på pensum fra «Vekterfaget» og dekker alle 15 emner i læreplanen.',
  },
  {
    q: 'Hva koster tjenesten?',
    a: 'Vi tilbyr to planer: Ukepass til 99 kr og Månedspass til 299 kr. Du kan prøve et begrenset antall spørsmål gratis før du kjøper tilgang.',
  },
  {
    q: 'Hvordan fungerer den simulerte eksamen?',
    a: 'Den simulerte eksamen har 80 spørsmål, 4 timers tidsbegrensning og krav om 80 % riktige svar — akkurat som den ekte prøven. Spørsmålene trekkes fra alle 15 emner.',
  },
  {
    q: 'Hva er feilbanken?',
    a: 'Feilbanken samler alle spørsmålene du har svart feil på. Du kan øve på dem i repeteringsmodus til du mestrer dem — en effektiv måte å jobbe med svake områder.',
  },
  {
    q: 'Kan jeg bruke tjenesten på mobil?',
    a: 'Ja, nettsiden er mobiloptimalisert og fungerer i alle moderne nettlesere.',
  },
  {
    q: 'Hvor ofte oppdateres spørsmålene?',
    a: 'Vi gjennomgår og oppdaterer spørsmålene jevnlig for å sikre at de er i tråd med gjeldende lovverk og læreplan.',
  },
  {
    q: 'Hva skjer om jeg ikke består eksamen likevel?',
    a: 'Tjenesten er et hjelpemiddel, ikke en garanti. Vi anbefaler å kombinere øving her med undervisningen fra ditt opplæringsforetak og å lese pensum grundig.',
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-surface-900 mb-8">Spørsmål og svar</h1>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h2 className="font-semibold text-surface-900 mb-1">{faq.q}</h2>
            <p className="text-surface-700 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
