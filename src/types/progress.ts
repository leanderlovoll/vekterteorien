export interface ProgressData {
  version: number;
  quizHistory: QuizHistoryEntry[];
  examHistory: ExamHistoryEntry[];
  subjectStats: Record<string, SubjectStat>;
  wrongQuestionIds: string[];
  lastUpdated: string;
}

export interface QuizHistoryEntry {
  id: string;
  subjectId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: string;
}

export interface ExamHistoryEntry {
  id: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: string;
  timeUsed: number;
  subjectBreakdown: Record<string, { correct: number; total: number }>;
}

export interface SubjectStat {
  subjectId: string;
  totalAttempted: number;
  totalCorrect: number;
  accuracy: number;
  lastAttempted: string;
}
