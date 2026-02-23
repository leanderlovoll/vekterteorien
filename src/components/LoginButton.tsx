'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginButton() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const login = async () => {
    if (!email) {
      alert('Skriv inn e-post først');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setLoading(false);

    if (error) alert(error.message);
    else alert('Sjekk e-posten din for innloggingslenke!');
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return (
      <div className="flex gap-3 items-center">
        <span className="text-sm text-surface-700">{user.email}</span>
        <button
          type="button"
          onClick={logout}
          className="px-4 py-2 text-sm font-medium text-surface-700 border border-surface-300 rounded-lg hover:bg-surface-100 transition-colors"
        >
          Logg ut
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <input
        type="email"
        placeholder="din@epost.no"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-surface-300 rounded-lg text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />
      <button
        type="button"
        onClick={login}
        disabled={loading}
        className="w-full px-4 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Sender...' : 'Logg inn med e-post'}
      </button>
    </div>
  );
}
