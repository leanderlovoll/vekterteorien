'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { getAllQuestionsFlat } from '@/data/questions';
import { getSubjectById } from '@/data/subjects';
import { shuffleArray } from '@/lib/utils';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { useProgress } from '@/hooks/useProgress';
import { useSubscription } from '@/hooks/useSubscription';
import { Question } from '@/types';

export default function FeilbankPage() {
  const { progress, isLoaded, removeWrongAnswer } = useProgress();
  const { isActive } = useSubscription();
  const allQuestions = useMemo(() => getAllQuestionsFlat(), []);

  const [mode, setMode] = useState<'overview' | 'practice'>('overview');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>();
  const [showResult, setShowResult] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState<Set<string>>(new Set());
  const [practiceKey, setPracticeKey] = useState(0);

  const wrongQuestions: Question[] = useMemo(() => {
    const ids = progress.wrongQuestionIds ?? [];
    if (ids.length === 0) return [];
    const idSet = new Set(ids);
    return shuffleArray(allQuestions.filter((q) => idSet.has(q.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.wrongQuestionIds, allQuestions, practiceKey]);

  // Group wrong questions by subject for the overview
  const subjectGroups = useMemo(() => {
    const groups: Record<string, { name: string; count: number }> = {};
    for (const q of wrongQuestions) {
      if (!groups[q.subjectId]) {
        const subject = getSubjectById(q.subjectId);
        groups[q.subjectId] = { name: subject?.name ?? q.subjectId, count: 0 };
      }
      groups[q.subjectId].count++;
    }
    return Object.entries(groups).sort((a, b) => b[1].count - a[1].count);
  }, [wrongQuestions]);

  const currentQuestion = wrongQuestions[currentIndex];

  const handleSelectOption = useCallback((optionId: string) => {
    if (showResult || !currentQuestion) return;
    setSelectedOptionId(optionId);
    setShowResult(true);

    if (optionId === currentQuestion.correctOptionId) {
      removeWrongAnswer(currentQuestion.id);
      setSessionCorrect((prev) => new Set(prev).add(currentQuestion.id));
    }
  }, [showResult, currentQuestion, removeWrongAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex < wrongQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(undefined);
      setShowResult(false);
    } else {
      // Finished all questions in this round
      setMode('overview');
      setCurrentIndex(0);
      setSelectedOptionId(undefined);
      setShowResult(false);
      setPracticeKey((k) => k + 1);
    }
  }, [currentIndex, wrongQuestions.length]);

  const handleStartPractice = useCallback(() => {
    setMode('practice');
    setCurrentIndex(0);
    setSelectedOptionId(undefined);
    setShowResult(false);
    setSessionCorrect(new Set());
    setPracticeKey((k) => k + 1);
  }, []);

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-surface-700">Laster...</p>
      </div>
    );
  }

  // Practice mode
  if (mode === 'practice' && wrongQuestions.length > 0 && currentQuestion) {
    const subject = getSubjectById(currentQuestion.subjectId);
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => setMode('overview')}
            className="text-sm text-brand-600 hover:text-brand-700"
          >
            ← Tilbake til feilbank
          </button>
          <h1 className="text-2xl font-bold text-surface-900 mt-2">
            Feilbank — Repeteringsmodus
          </h1>
          {subject && (
            <p className="text-sm text-surface-600 mt-1">
              Emne: {subject.name}
            </p>
          )}
        </div>

        {showResult && selectedOptionId === currentQuestion.correctOptionId && (
          <div className="mb-4 p-3 bg-success-50 border border-success-200 rounded-lg text-sm text-success-700">
            Riktig! Spørsmålet er fjernet fra feilbanken.
          </div>
        )}

        <QuestionCard
          question={currentQuestion}
          mode="practice"
          questionNumber={currentIndex + 1}
          totalQuestions={wrongQuestions.length}
          selectedOptionId={selectedOptionId}
          showResult={showResult}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
        />
      </div>
    );
  }

  // Overview mode
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold text-surface-900 mb-2">Feilbank</h1>
      <p className="text-surface-700 mb-8">
        Her samles spørsmålene du har svart feil på. Øv i repeteringsmodus til du
        mestrer dem — spørsmål fjernes automatisk når du svarer riktig.
      </p>

      {sessionCorrect.size > 0 && (
        <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
          <p className="text-success-700 font-medium">
            Du svarte riktig på {sessionCorrect.size} spørsmål i forrige runde!
            {wrongQuestions.length > 0
              ? ` ${wrongQuestions.length} gjenstår.`
              : ' Feilbanken er tom — flott jobbet!'}
          </p>
        </div>
      )}

      {!isActive && wrongQuestions.length > 0 && (
        <div className="mb-6 bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-brand-800 mb-2">
            Feilbanken krever abonnement
          </h3>
          <p className="text-sm text-brand-700 mb-4">
            Du har {wrongQuestions.length} spørsmål i feilbanken. Oppgrader for å øve på dem i repeteringsmodus.
          </p>
          <Link
            href="/betaling"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Se priser og oppgrader
          </Link>
        </div>
      )}

      {wrongQuestions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-8 text-center">
          <h2 className="text-xl font-semibold text-surface-900 mb-2">
            Ingen spørsmål i feilbanken
          </h2>
          <p className="text-surface-700 mb-6">
            Feilbanken fylles automatisk opp når du svarer feil på spørsmål under
            øving. Start med å øve på et emne.
          </p>
          <Link
            href="/ovelse"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            Gå til øving
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-surface-900">
                {wrongQuestions.length} spørsmål å øve på
              </h2>
              {isActive ? (
                <button
                  onClick={handleStartPractice}
                  className="px-5 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Start repeteringsmodus
                </button>
              ) : (
                <Link
                  href="/betaling"
                  className="px-5 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Oppgrader
                </Link>
              )}
            </div>
            <p className="text-sm text-surface-600">
              Svar riktig for å fjerne spørsmålet fra feilbanken. Spørsmål du
              fortsatt svarer feil på blir værende til du mestrer dem.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-surface-900 mb-3">
            Fordelt per emne
          </h3>
          <div className="space-y-2">
            {subjectGroups.map(([subjectId, { name, count }]) => (
              <div
                key={subjectId}
                className="bg-white rounded-lg border border-surface-200 px-4 py-3 flex items-center justify-between"
              >
                <span className="text-surface-900 font-medium">{name}</span>
                <span className="text-sm text-surface-600 bg-surface-100 px-3 py-1 rounded-full">
                  {count} {count === 1 ? 'spørsmål' : 'spørsmål'}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
