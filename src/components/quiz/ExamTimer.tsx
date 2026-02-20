'use client';

import { formatTime, cn } from '@/lib/utils';

interface ExamTimerProps {
  timeRemaining: number;
}

export function ExamTimer({ timeRemaining }: ExamTimerProps) {
  const isWarning = timeRemaining <= 1800 && timeRemaining > 600; // 30 min
  const isCritical = timeRemaining <= 600; // 10 min

  return (
    <div className={cn(
      'fixed top-20 right-4 z-40 px-4 py-2 rounded-lg font-mono text-lg font-bold shadow-lg',
      isCritical && 'bg-error-500 text-white animate-pulse',
      isWarning && !isCritical && 'bg-warning-500 text-white',
      !isWarning && !isCritical && 'bg-brand-800 text-white',
    )}>
      {formatTime(timeRemaining)}
    </div>
  );
}
