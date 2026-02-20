import Link from 'next/link';
import { subjects } from '@/data/subjects';

export const metadata = {
  title: 'Øvelse per emne',
  description: 'Velg et emne og øv deg med flervalgsoppgaver fra vekterutdanningens 15 fagområder.',
};

const totalQuestions = subjects.reduce((sum, s) => sum + s.questionCount, 0);

export default function OvelsePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 mb-3">
          Øvelse per emne
        </h1>
        <p className="text-surface-700 max-w-xl mx-auto">
          {subjects.length} emner · {totalQuestions} spørsmål totalt
        </p>
      </div>

      <div className="space-y-2">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/ovelse/${subject.id}`}
            className="flex items-center gap-4 bg-white rounded-xl px-4 py-4 border border-surface-200 hover:border-brand-300 hover:shadow-sm transition-all group"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
              {subject.number}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-surface-900 group-hover:text-brand-600 transition-colors leading-tight text-[15px]">
                {subject.name}
              </h2>
              <p className="text-xs text-surface-500 mt-0.5">
                {subject.questionCount} spørsmål · {subject.hours} {subject.hours === 1 ? 'time' : 'timer'} i læreplanen
              </p>
            </div>
            <svg className="w-5 h-5 text-surface-400 group-hover:text-brand-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
