'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  useEffect(() => {
    supabase.auth.getSession().finally(() => {
      window.location.href = '/';
    });
  }, []);

  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <p className="text-lg text-surface-700">Logger inn...</p>
    </div>
  );
}
