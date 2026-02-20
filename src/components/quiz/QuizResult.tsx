'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface QuizResultProps {
  score: number;
  correct: number;
  total: number;
  subjectName?: string;
  onRetry?: () => void;
}

export function QuizResult({ score, correct, total, subjectName, onRetry }: QuizResultProps) {
  const passed = score >= 80;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-surface-200 overflow-hidden">
      <div className={cn(
        'p-8 text-center',
        passed ? 'bg-success-50' : 'bg-error-50'
      )}>
        <h2 className={cn(
          'text-3xl font-bold mb-2',
          passed ? 'text-success-700' : 'text-error-700'
        )}>
          {passed ? 'Gratulerer!' : 'Ikke bestått'}
        </h2>
        <p className={cn(
          'text-lg',
          passed ? 'text-success-600' : 'text-error-600'
        )}>
          {passed
            ? 'Du bestod denne øvelsen!'
            : 'Du trenger 80 % for å bestå. Fortsett å øve!'}
        </p>
      </div>

      <div className="p-8">
        {/* Score circle */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60" cy="60" r="52" fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-surface-200"
              />
              <circle
                cx="60" cy="60" r="52" fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - score / 100)}`}
                className={cn(
                  'transition-all duration-1000',
                  passed ? 'text-success-500' : 'text-error-500'
                )}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={cn(
                'text-4xl font-bold',
                passed ? 'text-success-700' : 'text-error-700'
              )}>
                {score}%
              </span>
              <span className="text-sm text-surface-700">
                {correct} av {total}
              </span>
            </div>
          </div>
        </div>

        {/* Pass threshold indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-surface-700">Din score</span>
            <span className="text-surface-700">Krav: 80 %</span>
          </div>
          <div className="h-3 bg-surface-200 rounded-full overflow-hidden relative">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-1000',
                passed ? 'bg-success-500' : 'bg-error-500'
              )}
              style={{ width: `${score}%` }}
            />
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-surface-900"
              style={{ left: '80%' }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Prøv igjen
            </button>
          )}
          <Link
            href="/ovelse"
            className="px-6 py-3 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors text-center"
          >
            Velg annet emne
          </Link>
          {subjectName && (
            <Link
              href="/statistikk"
              className="px-6 py-3 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors text-center"
            >
              Se statistikk
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
