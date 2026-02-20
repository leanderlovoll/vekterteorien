'use client';

import { useLocalStorage } from './useLocalStorage';

export interface SubscriptionData {
  plan: 'free' | 'weekly' | 'monthly';
  expiresAt: string | null;
}

const defaultSubscription: SubscriptionData = {
  plan: 'free',
  expiresAt: null,
};

const FREE_QUESTIONS_PER_SUBJECT = 3;

export function useSubscription() {
  const [subscription, setSubscription, isLoaded] = useLocalStorage<SubscriptionData>(
    'besta-vekterpreven-subscription',
    defaultSubscription
  );

  const isActive = (() => {
    if (subscription.plan === 'free') return false;
    if (!subscription.expiresAt) return false;
    return new Date(subscription.expiresAt) > new Date();
  })();

  const activate = (plan: 'weekly' | 'monthly') => {
    const now = new Date();
    const expires = new Date(now);
    if (plan === 'weekly') {
      expires.setDate(expires.getDate() + 7);
    } else {
      expires.setMonth(expires.getMonth() + 1);
    }
    setSubscription({ plan, expiresAt: expires.toISOString() });
  };

  const daysRemaining = (() => {
    if (!isActive || !subscription.expiresAt) return 0;
    const diff = new Date(subscription.expiresAt).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  })();

  return {
    subscription,
    isLoaded,
    isActive,
    activate,
    daysRemaining,
    freeLimit: FREE_QUESTIONS_PER_SUBJECT,
  };
}
