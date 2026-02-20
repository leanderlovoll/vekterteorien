'use client';

import { useSubscription } from '@/hooks/useSubscription';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    id: 'weekly' as const,
    name: 'Ukepass',
    price: 99,
    period: 'uke',
    description: 'Perfekt for en intensiv øvingsperiode rett før eksamen.',
    features: [
      'Alle 334 spørsmål med forklaring',
      'Simulert eksamen (ubegrenset)',
      'Feilbank med repeteringsmodus',
      'Full statistikk og fremgang',
    ],
  },
  {
    id: 'monthly' as const,
    name: 'Månedspass',
    price: 299,
    period: 'måned',
    popular: true,
    description: 'Mest populær. Nok tid til å gå gjennom alt pensum grundig.',
    features: [
      'Alle 334 spørsmål med forklaring',
      'Simulert eksamen (ubegrenset)',
      'Feilbank med repeteringsmodus',
      'Full statistikk og fremgang',
      'Beste verdi per dag',
    ],
  },
];

export default function BetalingPage() {
  const { isActive, activate, daysRemaining, subscription, isLoaded } = useSubscription();

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-surface-700">Laster...</p>
      </div>
    );
  }

  if (isActive) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-surface-900 mb-2">Du har aktivt abonnement</h1>
          <p className="text-surface-700 mb-1">
            Plan: <span className="font-medium">{subscription.plan === 'weekly' ? 'Ukepass' : 'Månedspass'}</span>
          </p>
          <p className="text-surface-700 mb-6">
            {daysRemaining} {daysRemaining === 1 ? 'dag' : 'dager'} gjenstår
          </p>
          <Link
            href="/ovelse"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Gå til øving
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 mb-3">
          Få tilgang til alt innhold
        </h1>
        <p className="text-lg text-surface-700 max-w-2xl mx-auto">
          Prøv gratis med 3 spørsmål per emne. Oppgrader for full tilgang til
          alle 334 spørsmål, simulert eksamen, feilbank og statistikk.
        </p>
      </div>

      {/* Free tier info */}
      <div className="bg-surface-50 rounded-xl border border-surface-200 p-6 mb-8 text-center">
        <h3 className="font-semibold text-surface-900 mb-2">Gratis smakebit</h3>
        <p className="text-sm text-surface-700">
          Du kan prøve 3 spørsmål per emne helt gratis, samt lese alle teorisammendragene.
          Oppgrader når du er klar for full tilgang.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              'bg-white rounded-xl shadow-sm border-2 p-6 relative',
              plan.popular ? 'border-brand-500' : 'border-surface-200'
            )}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Mest populær
              </span>
            )}
            <h3 className="text-xl font-bold text-surface-900 mb-1">{plan.name}</h3>
            <div className="mb-3">
              <span className="text-4xl font-bold text-surface-900">{plan.price}</span>
              <span className="text-surface-600 ml-1">kr / {plan.period}</span>
            </div>
            <p className="text-sm text-surface-700 mb-5">{plan.description}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-surface-700">
                  <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => activate(plan.id)}
              className={cn(
                'w-full py-3 font-medium rounded-lg transition-colors',
                plan.popular
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-surface-100 text-surface-900 hover:bg-surface-200 border border-surface-300'
              )}
            >
              Velg {plan.name.toLowerCase()}
            </button>
          </div>
        ))}
      </div>

      <p className="text-xs text-center text-surface-500">
        Betalingen aktiverer tilgang umiddelbart. Abonnementet fornyes ikke automatisk.
      </p>
    </div>
  );
}
