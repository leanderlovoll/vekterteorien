export interface Question {
  id: string;
  subjectId: string;
  text: string;
  options: AnswerOption[];
  correctOptionId: string;
  explanation: string;
  difficulty: 'lett' | 'middels' | 'vanskelig';
}

export interface AnswerOption {
  id: string;
  text: string;
}
