'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { allQuestions, getAllQuestionsFlat } from '@/data/questions';
import { subjects } from '@/data/subjects';
import { selectExamQuestions, getSubjectBreakdown } from '@/lib/quiz-utils';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { ExamTimer } from '@/components/quiz/ExamTimer';
import { ExamResult } from '@/components/quiz/ExamResult';
import { useTimer } from '@/hooks/useTimer';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';
import { Question } from '@/types';

const EXAM_DURATION = 4 * 60 * 60; // 4 hours in seconds

export default function ExamPage() {
  const { addExamResult, addWrongAnswer } = useProgress();
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const questions: Question[] = useMemo(
    () => selectExamQuestions(allQuestions, subjects, 80),
    []
  );

  const handleTimeUp = useCallback(() => {
    submitExam();
  }, []);

  const { timeRemaining, start } = useTimer(EXAM_DURATION, handleTimeUp);

  const submitExam = useCallback(() => {
    const timeUsed = Math.round((Date.now() - startTime) / 1000);
    const allQuestionsFlat = getAllQuestionsFlat();

    const answersArray = questions.map((q, idx) => ({
      questionId: q.id,
      selectedOptionId: selections[idx],
    }));

    const breakdown = getSubjectBreakdown(answersArray, allQuestionsFlat);

    let correct = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selections[i] === questions[i].correctOptionId) {
        correct++;
      }
    }

    addExamResult(correct, questions.length, timeUsed, breakdown);

    // Track wrong answers in feilbank
    for (let i = 0; i < questions.length; i++) {
      if (selections[i] !== questions[i].correctOptionId) {
        addWrongAnswer(questions[i].id);
      }
    }

    setIsCompleted(true);
  }, [questions, selections, startTime, addExamResult, addWrongAnswer]);

  const handleStartExam = useCallback(() => {
    setIsStarted(true);
    start();
  }, [start]);

  // Warn before leaving
  useEffect(() => {
    if (isStarted && !isCompleted) {
      const handler = (e: BeforeUnloadEvent) => {
        e.preventDefault();
      };
      window.addEventListener('beforeunload', handler);
      return () => window.removeEventListener('beforeunload', handler);
    }
  }, [isStarted, isCompleted]);

  if (!isStarted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-surface-900 mb-4">Klar for eksamen?</h1>
        <p className="text-surface-700 mb-2">
          Du vil få {questions.length} spørsmål og {EXAM_DURATION / 3600} timer.
        </p>
        <p className="text-surface-700 mb-8">
          Timeren starter når du trykker knappen under.
        </p>
        <button
          onClick={handleStartExam}
          className="px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-lg"
        >
          Start eksamen nå
        </button>
      </div>
    );
  }

  if (isCompleted) {
    let correct = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selections[i] === questions[i].correctOptionId) correct++;
    }
    const score = Math.round((correct / questions.length) * 100);
    const timeUsed = Math.round((Date.now() - startTime) / 1000);

    const answersArray = questions.map((q, idx) => ({
      questionId: q.id,
      selectedOptionId: selections[idx],
    }));
    const breakdown = getSubjectBreakdown(answersArray, getAllQuestionsFlat());

    return (
      <div className="px-4 py-8">
        <ExamResult
          score={score}
          correct={correct}
          total={questions.length}
          timeUsed={timeUsed}
          subjectBreakdown={breakdown}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(selections).length;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <ExamTimer timeRemaining={timeRemaining} />

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-surface-700">
          Besvart: {answeredCount} av {questions.length}
        </span>
        <button
          onClick={submitExam}
          className="px-4 py-2 text-sm font-medium bg-error-500 text-white rounded-lg hover:bg-error-600 transition-colors"
        >
          Lever eksamen
        </button>
      </div>

      {/* Question navigator */}
      <div className="mb-6 bg-white rounded-xl shadow-sm border border-surface-200 p-4">
        <div className="flex flex-wrap gap-1.5">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                'w-9 h-9 rounded-lg text-xs font-medium transition-colors',
                idx === currentIndex && 'ring-2 ring-brand-500',
                selections[idx] !== undefined
                  ? 'bg-brand-500 text-white'
                  : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
              )}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        mode="exam"
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        selectedOptionId={selections[currentIndex]}
        showResult={false}
        onSelectOption={(optionId) => {
          setSelections((prev) => ({ ...prev, [currentIndex]: optionId }));
        }}
        onNext={() => {
          if (currentIndex < questions.length - 1) {
            setCurrentIndex((i) => i + 1);
          } else {
            submitExam();
          }
        }}
        onPrevious={
          currentIndex > 0
            ? () => setCurrentIndex((i) => i - 1)
            : undefined
        }
      />
    </div>
  );
}
