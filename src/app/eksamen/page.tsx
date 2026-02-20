'use client';

import Link from 'next/link';
import { useSubscription } from '@/hooks/useSubscription';

export default function ExamIntroPage() {
  const { isActive, isLoaded } = useSubscription();

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <p className="text-surface-700">Laster...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 mb-3">
          Simulert eksamen
        </h1>
        <p className="text-lg text-surface-700">
          Test deg selv med en fullstendig simulering av vektereksamen.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 md:p-8 mb-8">
        <h2 className="text-xl font-semibold text-surface-900 mb-6">Slik fungerer det</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-medium text-surface-900">80 flervalgsoppgaver</h3>
              <p className="text-sm text-surface-700">
                Spørsmålene er fordelt på alle 15 emner, vektet etter antall timer i læreplanen.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-medium text-surface-900">4 timer til disposisjon</h3>
              <p className="text-sm text-surface-700">
                Nedtelling starter når du trykker &laquo;Start eksamen&raquo;. Timeren vises øverst til høyre.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-medium text-surface-900">Ingen tilbakemelding underveis</h3>
              <p className="text-sm text-surface-700">
                Akkurat som den ekte eksamen får du ikke vite om svaret er riktig før du leverer.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="font-medium text-surface-900">Krav: 80 % riktige</h3>
              <p className="text-sm text-surface-700">
                Du trenger minimum 64 av 80 riktige svar for å bestå.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warning-50 border border-warning-500 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-warning-600 mb-2">Tips før du starter</h3>
        <ul className="text-sm text-surface-700 space-y-1">
          <li>Sett av nok tid — du trenger ikke bruke alle 4 timene, men ha god tid.</li>
          <li>Les spørsmålet nøye — det finnes ofte nyanser i svaralternativene.</li>
          <li>Du kan navigere mellom spørsmål og endre svar.</li>
          <li>Lever når du er klar — ubesvarte spørsmål teller som feil.</li>
        </ul>
      </div>

      <div className="text-center">
        {isActive ? (
          <Link
            href="/eksamen/gjennomfor"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-lg"
          >
            Start eksamen
          </Link>
        ) : (
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
            <h3 className="font-semibold text-brand-800 mb-2">
              Simulert eksamen krever abonnement
            </h3>
            <p className="text-sm text-brand-700 mb-4">
              Oppgrader for å ta ubegrenset antall simulerte eksamener med alle 334 spørsmål.
            </p>
            <Link
              href="/betaling"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Se priser og oppgrader
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
