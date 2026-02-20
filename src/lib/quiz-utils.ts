import { Question } from '@/types';
import { Subject } from '@/types';
import { shuffleArray } from './utils';

export function selectExamQuestions(
  allQuestions: Record<string, Question[]>,
  subjects: Subject[],
  totalTarget: number = 80
): Question[] {
  const totalHours = subjects.reduce((sum, s) => sum + s.hours, 0);
  const selected: Question[] = [];

  const distribution: { subjectId: string; count: number }[] = subjects.map((subject) => {
    const proportion = subject.hours / totalHours;
    const count = Math.max(2, Math.round(totalTarget * proportion));
    return { subjectId: subject.id, count };
  });

  // Adjust total to match target
  let currentTotal = distribution.reduce((sum, d) => sum + d.count, 0);
  while (currentTotal > totalTarget) {
    const largest = distribution.reduce((max, d) => (d.count > max.count ? d : max));
    largest.count--;
    currentTotal--;
  }
  while (currentTotal < totalTarget) {
    const largest = distribution.reduce((max, d) => (d.count > max.count ? d : max));
    largest.count++;
    currentTotal++;
  }

  for (const { subjectId, count } of distribution) {
    const subjectQuestions = shuffleArray(allQuestions[subjectId] || []);
    selected.push(...subjectQuestions.slice(0, count));
  }

  return shuffleArray(selected);
}

export function calculateScore(
  questions: { questionId: string; selectedOptionId?: string }[],
  allQuestions: Question[]
): { correct: number; total: number; percentage: number } {
  const questionMap = new Map(allQuestions.map((q) => [q.id, q]));
  let correct = 0;
  const total = questions.length;

  for (const q of questions) {
    const question = questionMap.get(q.questionId);
    if (question && q.selectedOptionId === question.correctOptionId) {
      correct++;
    }
  }

  return {
    correct,
    total,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
  };
}

export function getSubjectBreakdown(
  answers: { questionId: string; selectedOptionId?: string }[],
  allQuestions: Question[]
): Record<string, { correct: number; total: number }> {
  const questionMap = new Map(allQuestions.map((q) => [q.id, q]));
  const breakdown: Record<string, { correct: number; total: number }> = {};

  for (const answer of answers) {
    const question = questionMap.get(answer.questionId);
    if (!question) continue;

    if (!breakdown[question.subjectId]) {
      breakdown[question.subjectId] = { correct: 0, total: 0 };
    }
    breakdown[question.subjectId].total++;
    if (answer.selectedOptionId === question.correctOptionId) {
      breakdown[question.subjectId].correct++;
    }
  }

  return breakdown;
}
