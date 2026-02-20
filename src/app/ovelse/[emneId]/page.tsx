import { subjects } from '@/data/subjects';
import PracticeQuizClient from './PracticeQuizClient';

export function generateStaticParams() {
  return subjects.map((s) => ({ emneId: s.id }));
}

export default function PracticeQuizPage() {
  return <PracticeQuizClient />;
}
