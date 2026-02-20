import Link from 'next/link';

const features = [
  {
    title: 'Øv per emne',
    description: 'Over 330 spørsmål fordelt på 15 emner. Øv på det du synes er vanskeligst.',
    href: '/ovelse',
    cta: 'Start øving',
  },
  {
    title: 'Simulert eksamen',
    description: '80 spørsmål, 4 timer, 80 % krav — akkurat som den ekte prøven.',
    href: '/eksamen',
    cta: 'Ta eksamen',
  },
  {
    title: 'Feilbank',
    description: 'Øv på spørsmålene du bommet på. Repeteringsmodus til du får dem riktig.',
    href: '/feilbank',
    cta: 'Se feilbank',
  },
  {
    title: 'Teorisammendrag',
    description: 'Korte oppsummeringer av hvert fagområde. Perfekt for repetisjon.',
    href: '/teori',
    cta: 'Les teori',
  },
  {
    title: 'Følg fremgangen',
    description: 'Se statistikk, finn svake områder, og følg forbedringen din over tid.',
    href: '/statistikk',
    cta: 'Se statistikk',
  },
];

const steps = [
  {
    number: '1',
    title: 'Les teori',
    description: 'Start med teorisammendragene for hvert emne. Få oversikt over pensum.',
  },
  {
    number: '2',
    title: 'Øv per emne',
    description: 'Test kunnskapen din med flervalgsoppgaver. Få umiddelbar tilbakemelding og forklaring.',
  },
  {
    number: '3',
    title: 'Jobb med feilbanken',
    description: 'Spørsmål du svarer feil på havner i feilbanken. Øv til du mestrer dem.',
  },
  {
    number: '4',
    title: 'Simuler eksamen',
    description: 'Når du føler deg klar: ta en full simulert eksamen under realistiske betingelser.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-800 text-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bestå Vekterprøven
          </h1>
          <p className="text-xl text-brand-200 mb-8 max-w-2xl mx-auto">
            Din digitale forberedelse til nasjonal grunnutdanning for vektere.
            Øv med realistiske spørsmål og simuler den ekte eksamen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ovelse"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-800 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-lg"
            >
              Start øving nå
            </Link>
            <Link
              href="/eksamen"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-300 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-lg"
            >
              Prøv simulert eksamen
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / why section */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="flex justify-center items-end gap-4 md:gap-5 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-8 h-8 md:w-10 md:h-10 ${i === 0 ? 'text-red-400' : 'text-brand-600'}`} viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
              </svg>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-3">
            1 av 5 stryker vekterprøven
          </h2>
          <p className="text-surface-600 mb-8">
            Riktig forberedelse er forskjellen. Vi hjelper deg med pensumbaserte spørsmål, feilbank og realistisk eksamen-simulering.
          </p>
          <Link
            href="/betaling"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20"
          >
            Kjøp tilgang nå
          </Link>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-surface-900 mb-12">
            Slik fungerer det
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-surface-900 mb-1">{step.title}</h3>
                  <p className="text-surface-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-surface-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-surface-900 mb-12">
            Alt du trenger for å bestå
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-surface-200 group"
              >
                <h3 className="text-xl font-semibold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-surface-700 mb-4">{feature.description}</p>
                <span className="text-brand-600 font-medium group-hover:text-brand-700">
                  {feature.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exam info */}
      <section className="bg-white py-16 border-t border-surface-200">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-surface-900 mb-8">
            Om vektereksamen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-600 mb-2">80</div>
              <div className="text-surface-700">flervalgsoppgaver</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-600 mb-2">4 t</div>
              <div className="text-surface-700">til disposisjon</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-600 mb-2">80 %</div>
              <div className="text-surface-700">krav for å bestå</div>
            </div>
          </div>
          <p className="text-center text-surface-700 mt-6 max-w-2xl mx-auto">
            Kunnskapsprøven er en elektronisk flervalgseksamen som gjennomføres hos godkjent
            opplæringsforetak. Du må ha minimum 80 % riktige svar for å bestå.
            Flervalgseksamen må bestås før du kan ta muntlig eksamen.
          </p>
        </div>
      </section>
    </div>
  );
}
