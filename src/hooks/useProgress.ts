'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ProgressData, QuizHistoryEntry, ExamHistoryEntry } from '@/types';
import { generateId } from '@/lib/utils';

const defaultProgress: ProgressData = {
  version: 1,
  quizHistory: [],
  examHistory: [],
  subjectStats: {},
  wrongQuestionIds: [],
  lastUpdated: new Date().toISOString(),
};

export function useProgress() {
  const [progress, setProgress, isLoaded] = useLocalStorage<ProgressData>(
    'besta-vekterpreven-progress',
    defaultProgress
  );

  const addQuizResult = useCallback(
    (subjectId: string, correct: number, total: number) => {
      setProgress((prev) => {
        const entry: QuizHistoryEntry = {
          id: generateId(),
          subjectId,
          score: Math.round((correct / total) * 100),
          totalQuestions: total,
          correctAnswers: correct,
          completedAt: new Date().toISOString(),
        };

        const stats = { ...prev.subjectStats };
        const existing = stats[subjectId] || {
          subjectId,
          totalAttempted: 0,
          totalCorrect: 0,
          accuracy: 0,
          lastAttempted: '',
        };

        stats[subjectId] = {
          ...existing,
          totalAttempted: existing.totalAttempted + total,
          totalCorrect: existing.totalCorrect + correct,
          accuracy: Math.round(
            ((existing.totalCorrect + correct) / (existing.totalAttempted + total)) * 100
          ),
          lastAttempted: new Date().toISOString(),
        };

        return {
          ...prev,
          quizHistory: [...prev.quizHistory, entry],
          subjectStats: stats,
          lastUpdated: new Date().toISOString(),
        };
      });
    },
    [setProgress]
  );

  const addExamResult = useCallback(
    (
      correct: number,
      total: number,
      timeUsed: number,
      subjectBreakdown: Record<string, { correct: number; total: number }>
    ) => {
      setProgress((prev) => {
        const entry: ExamHistoryEntry = {
          id: generateId(),
          score: Math.round((correct / total) * 100),
          passed: correct / total >= 0.8,
          totalQuestions: total,
          correctAnswers: correct,
          completedAt: new Date().toISOString(),
          timeUsed,
          subjectBreakdown,
        };

        const stats = { ...prev.subjectStats };
        for (const [subjectId, data] of Object.entries(subjectBreakdown)) {
          const existing = stats[subjectId] || {
            subjectId,
            totalAttempted: 0,
            totalCorrect: 0,
            accuracy: 0,
            lastAttempted: '',
          };

          stats[subjectId] = {
            ...existing,
            totalAttempted: existing.totalAttempted + data.total,
            totalCorrect: existing.totalCorrect + data.correct,
            accuracy: Math.round(
              ((existing.totalCorrect + data.correct) /
                (existing.totalAttempted + data.total)) *
                100
            ),
            lastAttempted: new Date().toISOString(),
          };
        }

        return {
          ...prev,
          examHistory: [...prev.examHistory, entry],
          subjectStats: stats,
          lastUpdated: new Date().toISOString(),
        };
      });
    },
    [setProgress]
  );

  const addWrongAnswer = useCallback(
    (questionId: string) => {
      setProgress((prev) => {
        const ids = prev.wrongQuestionIds ?? [];
        if (ids.includes(questionId)) return prev;
        return {
          ...prev,
          wrongQuestionIds: [...ids, questionId],
          lastUpdated: new Date().toISOString(),
        };
      });
    },
    [setProgress]
  );

  const removeWrongAnswer = useCallback(
    (questionId: string) => {
      setProgress((prev) => ({
        ...prev,
        wrongQuestionIds: (prev.wrongQuestionIds ?? []).filter((id) => id !== questionId),
        lastUpdated: new Date().toISOString(),
      }));
    },
    [setProgress]
  );

  const clearProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, [setProgress]);

  return { progress, isLoaded, addQuizResult, addExamResult, addWrongAnswer, removeWrongAnswer, clearProgress };
}
