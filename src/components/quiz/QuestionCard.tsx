'use client';

import { Question } from '@/types';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  mode: 'practice' | 'exam';
  questionNumber: number;
  totalQuestions: number;
  selectedOptionId?: string;
  showResult: boolean;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
}

export function QuestionCard({
  question,
  mode,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  showResult,
  onSelectOption,
  onNext,
  onPrevious,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-surface-200 overflow-hidden">
      {/* Progress header */}
      <div className="bg-surface-50 px-6 py-3 border-b border-surface-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-surface-700">
            Spørsmål {questionNumber} av {totalQuestions}
          </span>
          <span className={cn(
            'text-xs font-medium px-2 py-1 rounded-full',
            question.difficulty === 'lett' && 'bg-success-100 text-success-700',
            question.difficulty === 'middels' && 'bg-warning-100 text-warning-600',
            question.difficulty === 'vanskelig' && 'bg-error-100 text-error-700',
          )}>
            {question.difficulty}
          </span>
        </div>
        <div className="mt-2 h-2 bg-surface-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-surface-900 mb-6 leading-relaxed">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.id === question.correctOptionId;
            const showCorrectness = showResult && mode === 'practice';

            return (
              <button
                key={option.id}
                onClick={() => !showResult && onSelectOption(option.id)}
                disabled={showResult && mode === 'practice'}
                className={cn(
                  'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start gap-3',
                  // Default state
                  !isSelected && !showCorrectness &&
                    'border-surface-200 hover:border-brand-400 hover:bg-brand-50',
                  // Selected in exam mode (no feedback)
                  isSelected && !showCorrectness &&
                    'border-brand-500 bg-brand-50',
                  // Practice mode: show correct/incorrect
                  showCorrectness && isCorrect &&
                    'border-success-500 bg-success-50',
                  showCorrectness && isSelected && !isCorrect &&
                    'border-error-500 bg-error-50',
                  showCorrectness && !isSelected && !isCorrect &&
                    'border-surface-200 opacity-60',
                  // Disabled
                  showResult && mode === 'practice' && 'cursor-default',
                )}
              >
                <span className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2',
                  !isSelected && !showCorrectness &&
                    'border-surface-300 text-surface-700',
                  isSelected && !showCorrectness &&
                    'border-brand-500 bg-brand-500 text-white',
                  showCorrectness && isCorrect &&
                    'border-success-500 bg-success-500 text-white',
                  showCorrectness && isSelected && !isCorrect &&
                    'border-error-500 bg-error-500 text-white',
                )}>
                  {option.id.toUpperCase()}
                </span>
                <span className={cn(
                  'pt-1',
                  showCorrectness && isCorrect && 'font-medium text-success-700',
                  showCorrectness && isSelected && !isCorrect && 'text-error-700',
                )}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation (practice mode only) */}
        {showResult && mode === 'practice' && (
          <div className="mt-6 p-4 bg-brand-50 border border-brand-200 rounded-lg animate-[fadeIn_0.3s_ease-out]">
            <h3 className="font-semibold text-brand-800 mb-1">Forklaring</h3>
            <p className="text-brand-700 text-sm leading-relaxed">{question.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          {onPrevious ? (
            <button
              onClick={onPrevious}
              className="px-5 py-2.5 text-sm font-medium text-surface-700 border border-surface-300 rounded-lg hover:bg-surface-100 transition-colors"
            >
              Forrige
            </button>
          ) : (
            <div />
          )}
          {mode === 'practice' ? (
            showResult ? (
              <button
                onClick={onNext}
                className="px-6 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
              >
                {questionNumber === totalQuestions ? 'Se resultat' : 'Neste spørsmål'}
              </button>
            ) : (
              <span className="text-sm text-surface-500">Velg et svar</span>
            )
          ) : (
            <button
              onClick={onNext}
              className="px-6 py-2.5 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
            >
              {questionNumber === totalQuestions ? 'Lever eksamen' : 'Neste'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
