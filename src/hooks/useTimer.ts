'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useTimer(
  totalSeconds: number,
  onTimeUp: () => void
): {
  timeRemaining: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
} {
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onTimeUpRef.current();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeRemaining]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeRemaining(totalSeconds);
  }, [totalSeconds]);

  return { timeRemaining, isRunning, start, pause, reset };
}
