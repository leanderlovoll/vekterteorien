'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-error-600 mb-4">Feil</h1>
        <h2 className="text-2xl font-semibold text-surface-700 mb-4">Noe gikk galt</h2>
        <p className="text-surface-700 mb-8">En uventet feil oppstod. Prøv igjen.</p>
        <button
          onClick={reset}
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Prøv igjen
        </button>
      </div>
    </div>
  );
}
