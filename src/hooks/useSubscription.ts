'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

export interface SubscriptionData {
  plan: 'free' | 'weekly' | 'monthly';
  expiresAt: string | null;
  cancelled: boolean;
}

const defaultSubscription: SubscriptionData = {
  plan: 'free',
  expiresAt: null,
  cancelled: false,
};

const FREE_QUESTIONS_PER_SUBJECT = 3;

function cancelKey(userId: string) {
  return `sub_cancelled_${userId}`;
}

export function useSubscription() {
  const [subscription, setSubscription] = useState<SubscriptionData>(defaultSubscription);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('subscriptions')
          .select('plan, expires_at')
          .eq('user_id', user.id)
          .single();

        if (data) {
          const expiresAt = data.expires_at;
          // Clean up cancelled flag if subscription has already expired
          const isExpired = !expiresAt || new Date(expiresAt) <= new Date();
          if (isExpired) localStorage.removeItem(cancelKey(user.id));

          const cancelled = !isExpired && localStorage.getItem(cancelKey(user.id)) === 'true';

          setSubscription({
            plan: data.plan as 'weekly' | 'monthly',
            expiresAt,
            cancelled,
          });
        }
      }
      setIsLoaded(true);
    }
    load();
  }, []);

  const isActive = (() => {
    if (subscription.plan === 'free') return false;
    if (!subscription.expiresAt) return false;
    return new Date(subscription.expiresAt) > new Date();
  })();

  const activate = useCallback(async (plan: 'weekly' | 'monthly') => {
    const now = new Date();
    const expires = new Date(now);
    if (plan === 'weekly') {
      expires.setDate(expires.getDate() + 7);
    } else {
      expires.setMonth(expires.getMonth() + 1);
    }
    const expiresAt = expires.toISOString();

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      localStorage.removeItem(cancelKey(user.id));
      await supabase
        .from('subscriptions')
        .upsert({
          user_id: user.id,
          plan,
          expires_at: expiresAt,
        }, { onConflict: 'user_id' });
    }

    setSubscription({ plan, expiresAt, cancelled: false });
  }, []);

  const cancel = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // Keep Supabase row intact so access lasts until expires_at
      localStorage.setItem(cancelKey(user.id), 'true');
    }
    setSubscription((prev) => ({ ...prev, cancelled: true }));
  }, []);

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
    cancel,
    daysRemaining,
    freeLimit: FREE_QUESTIONS_PER_SUBJECT,
  };
}
