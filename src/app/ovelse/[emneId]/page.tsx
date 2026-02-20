'use client';

import { useState, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getQuestionsBySubject } from '@/data/questions';
import { getSubjectById } from '@/data/subjects';
import { shuffleArray } from '@/lib/utils';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { QuizResult } from '@/components/quiz/QuizResult';
import { useProgress } from '@/hooks/useProgress';
import { useSubscription } from '@/hooks/useSubscription';
import { Question } from '@/types';

export default function PracticeQuizPage() {
  const params = useParams<{ emneId: string }>();
  const emneId = params?.emneId ?? '';
  const subject = getSubjectById(emneId);
  const { addQuizResult, addWrongAnswer } = useProgress();
  const { isActive, freeLimit } = useSubscription();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>();
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, { selected: string; correct: boolean }>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  const allQuestions: Question[] = useMemo(
    () => shuffleArray(getQuestionsBySubject(emneId)),
    [emneId, quizKey]
  );

  // Free users only get freeLimit questions per subject
  const questions = useMemo(
    () => isActive ? allQuestions : allQuestions.slice(0, freeLimit),
    [allQuestions, isActive, freeLimit]
  );

  const isLimited = !isActive && allQuestions.length > freeLimit;
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = useCallback((optionId: string) => {
    if (showResult) return;
    setSelectedOptionId(optionId);
    setShowResult(true);

    const isCorrect = optionId === currentQuestion.correctOptionId;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { selected: optionId, correct: isCorrect },
    }));

    if (!isCorrect) {
      addWrongAnswer(currentQuestion.id);
    }
  }, [showResult, currentQuestion, addWrongAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(undefined);
      setShowResult(false);
    } else {
      // Quiz complete
      const correctCount = Object.values({
        ...answers,
        [currentQuestion.id]: {
          selected: selectedOptionId!,
          correct: selectedOptionId === currentQuestion.correctOptionId,
        },
      }).filter((a) => a.correct).length;

      addQuizResult(emneId, correctCount, questions.length);
      setIsCompleted(true);
    }
  }, [currentIndex, questions.length, answers, currentQuestion, selectedOptionId, addQuizResult, emneId]);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOptionId(undefined);
    setShowResult(false);
    setAnswers({});
    setIsCompleted(false);
    setQuizKey((k) => k + 1);
  }, []);

  if (!subject) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-surface-900 mb-4">Emne ikke funnet</h1>
        <Link href="/ovelse" className="text-brand-600 hover:text-brand-700">
          Tilbake til emneoversikten
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-surface-900 mb-4">Ingen spørsmål tilgjengelig</h1>
        <p className="text-surface-700 mb-4">Det er dessverre ingen spørsmål for dette emnet ennå.</p>
        <Link href="/ovelse" className="text-brand-600 hover:text-brand-700">
          Tilbake til emneoversikten
        </Link>
      </div>
    );
  }

  if (isCompleted) {
    const correctCount = Object.values(answers).filter((a) => a.correct).length;
    const score = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <QuizResult
          score={score}
          correct={correctCount}
          total={questions.length}
          subjectName={subject.name}
          onRetry={handleRetry}
        />
        {isLimited && (
          <div className="mt-6 bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-brand-800 mb-2">
              Du prøvde {freeLimit} av {allQuestions.length} spørsmål
            </h3>
            <p className="text-sm text-brand-700 mb-4">
              Oppgrader for å få tilgang til alle spørsmål i dette emnet og resten av nettsiden.
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
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <Link href="/ovelse" className="text-sm text-brand-600 hover:text-brand-700">
          ← Tilbake til emner
        </Link>
        <h1 className="text-2xl font-bold text-surface-900 mt-2">
          {subject.name}
        </h1>
        {isLimited && (
          <p className="text-sm text-surface-600 mt-1">
            Gratis smakebit — {freeLimit} av {allQuestions.length} spørsmål.{' '}
            <Link href="/betaling" className="text-brand-600 hover:text-brand-700 font-medium">
              Oppgrader for alle
            </Link>
          </p>
        )}
      </div>

      <QuestionCard
        question={currentQuestion}
        mode="practice"
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        selectedOptionId={selectedOptionId}
        showResult={showResult}
        onSelectOption={handleSelectOption}
        onNext={handleNext}
      />
    </div>
  );
}
