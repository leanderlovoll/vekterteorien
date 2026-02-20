import Link from 'next/link';
import { subjects } from '@/data/subjects';

export const metadata = {
  title: 'Teorisammendrag',
  description: 'Les korte oppsummeringer av alle 15 emner i vekterutdanningen.',
};

export default function TeoriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 mb-3">
          Teorisammendrag
        </h1>
        <p className="text-lg text-surface-700 max-w-2xl mx-auto">
          Korte oppsummeringer av hvert fagområde i vekterutdanningen.
          Perfekt for repetisjon og forberedelse til eksamen.
        </p>
      </div>

      <div className="space-y-3">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/teori/${subject.id}`}
            className="flex items-center gap-4 bg-white rounded-xl shadow-sm border border-surface-200 p-5 hover:shadow-md hover:border-brand-300 transition-all group"
          >
            <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
              {subject.number}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-surface-700 font-medium">
                Emne {subject.number} · {subject.hours} timer
              </div>
              <h2 className="font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                {subject.name}
              </h2>
            </div>
            <svg className="w-5 h-5 text-surface-400 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
