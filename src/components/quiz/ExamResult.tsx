'use client';

import Link from 'next/link';
import { cn, formatTime } from '@/lib/utils';
import { subjects } from '@/data/subjects';

interface ExamResultProps {
  score: number;
  correct: number;
  total: number;
  timeUsed: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
  onRetry: () => void;
}

export function ExamResult({
  score,
  correct,
  total,
  timeUsed,
  subjectBreakdown,
  onRetry,
}: ExamResultProps) {
  const passed = score >= 80;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="bg-white rounded-xl shadow-sm border border-surface-200 overflow-hidden">
        {/* Header */}
        <div className={cn(
          'p-8 text-center',
          passed ? 'bg-success-50' : 'bg-error-50'
        )}>
          <h1 className={cn(
            'text-4xl font-bold mb-2',
            passed ? 'text-success-700' : 'text-error-700'
          )}>
            {passed ? 'Du bestod!' : 'Ikke bestått'}
          </h1>
          <p className={cn(
            'text-lg',
            passed ? 'text-success-600' : 'text-error-600'
          )}>
            {passed
              ? 'Flott innsats! Du har nådd kravet på 80 %.'
              : 'Du trenger minst 80 % for å bestå. Fortsett øvingen!'}
          </p>
        </div>

        <div className="p-8">
          {/* Score + Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-surface-50 rounded-lg">
              <div className={cn(
                'text-3xl font-bold',
                passed ? 'text-success-600' : 'text-error-600'
              )}>
                {score}%
              </div>
              <div className="text-sm text-surface-700">Score</div>
            </div>
            <div className="text-center p-4 bg-surface-50 rounded-lg">
              <div className="text-3xl font-bold text-surface-900">
                {correct}/{total}
              </div>
              <div className="text-sm text-surface-700">Riktige svar</div>
            </div>
            <div className="text-center p-4 bg-surface-50 rounded-lg">
              <div className="text-3xl font-bold text-surface-900">
                {formatTime(timeUsed)}
              </div>
              <div className="text-sm text-surface-700">Tid brukt</div>
            </div>
          </div>

          {/* Subject breakdown */}
          <h3 className="font-semibold text-surface-900 mb-4">Resultat per emne</h3>
          <div className="space-y-2 mb-8">
            {subjects.map((subject) => {
              const data = subjectBreakdown[subject.id];
              if (!data) return null;
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={subject.id} className="flex items-center gap-3">
                  <span className="text-sm text-surface-700 w-48 truncate" title={subject.name}>
                    {subject.shortName}
                  </span>
                  <div className="flex-1 h-4 bg-surface-200 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        pct >= 80 ? 'bg-success-500' : pct >= 60 ? 'bg-warning-500' : 'bg-error-500'
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className={cn(
                    'text-sm font-medium w-16 text-right',
                    pct >= 80 ? 'text-success-700' : pct >= 60 ? 'text-warning-600' : 'text-error-700'
                  )}>
                    {data.correct}/{data.total}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Ta eksamen på nytt
            </button>
            <Link
              href="/ovelse"
              className="px-6 py-3 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors text-center"
            >
              Øv per emne
            </Link>
            <Link
              href="/statistikk"
              className="px-6 py-3 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors text-center"
            >
              Se statistikk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
