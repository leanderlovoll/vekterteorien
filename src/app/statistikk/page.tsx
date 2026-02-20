'use client';

import { useProgress } from '@/hooks/useProgress';
import { subjects } from '@/data/subjects';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function StatistikkPage() {
  const { progress, isLoaded, clearProgress } = useProgress();

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <div className="text-surface-500">Laster statistikk...</div>
      </div>
    );
  }

  const totalQuizzes = progress.quizHistory.length;
  const totalExams = progress.examHistory.length;
  const passedExams = progress.examHistory.filter((e) => e.passed).length;
  const wrongCount = (progress.wrongQuestionIds ?? []).length;

  const averageQuizScore =
    totalQuizzes > 0
      ? Math.round(progress.quizHistory.reduce((sum, q) => sum + q.score, 0) / totalQuizzes)
      : 0;

  const averageExamScore =
    totalExams > 0
      ? Math.round(progress.examHistory.reduce((sum, e) => sum + e.score, 0) / totalExams)
      : 0;

  const hasData = totalQuizzes > 0 || totalExams > 0 || wrongCount > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 mb-3">Statistikk</h1>
        <p className="text-lg text-surface-700">
          Følg fremgangen din og finn områder du bør øve mer på.
        </p>
      </div>

      {!hasData ? (
        <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-12 text-center">
          <h2 className="text-xl font-semibold text-surface-900 mb-2">Ingen data ennå</h2>
          <p className="text-surface-700 mb-6">
            Fullfør noen øvelser eller en eksamen for å se statistikk her.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ovelse"
              className="px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Start øving
            </Link>
            <Link
              href="/eksamen"
              className="px-6 py-3 border border-surface-300 text-surface-700 font-medium rounded-lg hover:bg-surface-100 transition-colors"
            >
              Ta eksamen
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Overview stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-5 text-center">
              <div className="text-3xl font-bold text-brand-600">{totalQuizzes}</div>
              <div className="text-sm text-surface-700 mt-1">Øvelser fullført</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-5 text-center">
              <div className="text-3xl font-bold text-brand-600">{averageQuizScore}%</div>
              <div className="text-sm text-surface-700 mt-1">Snitt øvelse</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-5 text-center">
              <div className="text-3xl font-bold text-brand-600">{totalExams}</div>
              <div className="text-sm text-surface-700 mt-1">Eksamener tatt</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-5 text-center">
              <div className={cn(
                'text-3xl font-bold',
                passedExams > 0 ? 'text-success-600' : 'text-surface-400'
              )}>
                {passedExams}
              </div>
              <div className="text-sm text-surface-700 mt-1">Eksamener bestått</div>
            </div>
            <Link href="/feilbank" className="bg-white rounded-xl shadow-sm border border-surface-200 p-5 text-center hover:shadow-md transition-shadow">
              <div className={cn(
                'text-3xl font-bold',
                wrongCount > 0 ? 'text-error-600' : 'text-success-600'
              )}>
                {wrongCount}
              </div>
              <div className="text-sm text-surface-700 mt-1">I feilbanken</div>
            </Link>
          </div>

          {/* Subject breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-surface-900 mb-6">Resultat per emne</h2>
            <div className="space-y-3">
              {subjects.map((subject) => {
                const stat = progress.subjectStats[subject.id];
                const accuracy = stat ? stat.accuracy : 0;
                const attempted = stat ? stat.totalAttempted : 0;

                return (
                  <div key={subject.id} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs">
                      {subject.number}
                    </span>
                    <span className="text-sm text-surface-700 w-36 truncate" title={subject.name}>
                      {subject.shortName}
                    </span>
                    <div className="flex-1 h-4 bg-surface-200 rounded-full overflow-hidden">
                      {attempted > 0 ? (
                        <div
                          className={cn(
                            'h-full rounded-full transition-all duration-500',
                            accuracy >= 80 ? 'bg-success-500' : accuracy >= 60 ? 'bg-warning-500' : 'bg-error-500'
                          )}
                          style={{ width: `${accuracy}%` }}
                        />
                      ) : (
                        <div className="h-full w-0" />
                      )}
                    </div>
                    <span className={cn(
                      'text-sm font-medium w-12 text-right',
                      attempted === 0 && 'text-surface-400',
                      attempted > 0 && accuracy >= 80 && 'text-success-700',
                      attempted > 0 && accuracy >= 60 && accuracy < 80 && 'text-warning-600',
                      attempted > 0 && accuracy < 60 && 'text-error-700'
                    )}>
                      {attempted > 0 ? `${accuracy}%` : '—'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Exam history */}
          {totalExams > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 mb-8">
              <h2 className="text-xl font-semibold text-surface-900 mb-4">Eksamenshistorikk</h2>
              <div className="space-y-3">
                {[...progress.examHistory].reverse().map((exam) => (
                  <div key={exam.id} className="flex items-center gap-4 p-3 bg-surface-50 rounded-lg">
                    <span className={cn(
                      'text-sm font-bold px-2 py-1 rounded',
                      exam.passed ? 'bg-success-100 text-success-700' : 'bg-error-100 text-error-700'
                    )}>
                      {exam.passed ? 'Bestått' : 'Stryk'}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-surface-900">
                        {exam.score}% — {exam.passed ? 'Bestått' : 'Ikke bestått'}
                      </div>
                      <div className="text-sm text-surface-700">
                        {exam.correctAnswers}/{exam.totalQuestions} riktige · {new Date(exam.completedAt).toLocaleDateString('nb-NO')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weak areas */}
          {Object.keys(progress.subjectStats).length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 mb-8">
              <h2 className="text-xl font-semibold text-surface-900 mb-4">Svake områder</h2>
              <p className="text-sm text-surface-700 mb-4">
                Emner der du scorer under 80 %. Fokuser på disse for å forbedre sjansene dine.
              </p>
              <div className="space-y-2">
                {subjects
                  .filter((s) => {
                    const stat = progress.subjectStats[s.id];
                    return stat && stat.accuracy < 80 && stat.totalAttempted > 0;
                  })
                  .sort((a, b) => {
                    const statA = progress.subjectStats[a.id];
                    const statB = progress.subjectStats[b.id];
                    return (statA?.accuracy || 0) - (statB?.accuracy || 0);
                  })
                  .map((subject) => {
                    const stat = progress.subjectStats[subject.id]!;
                    return (
                      <Link
                        key={subject.id}
                        href={`/ovelse/${subject.id}`}
                        className="flex items-center justify-between p-3 bg-error-50 rounded-lg hover:bg-error-100 transition-colors"
                      >
                        <span className="font-medium text-surface-900">
                          {subject.shortName}
                        </span>
                        <span className="text-sm text-error-700 font-medium">
                          {stat.accuracy}% · Øv mer →
                        </span>
                      </Link>
                    );
                  })}
                {subjects.filter((s) => {
                  const stat = progress.subjectStats[s.id];
                  return stat && stat.accuracy < 80 && stat.totalAttempted > 0;
                }).length === 0 && (
                  <p className="text-success-700 text-sm">
                    Ingen svake områder! Du scorer over 80 % på alle emner du har prøvd.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Clear data */}
          <div className="text-center">
            <button
              onClick={() => {
                if (confirm('Er du sikker på at du vil slette all statistikk? Dette kan ikke angres.')) {
                  clearProgress();
                }
              }}
              className="text-sm text-surface-500 hover:text-error-600 transition-colors"
            >
              Slett all statistikk
            </button>
          </div>
        </>
      )}
    </div>
  );
}
