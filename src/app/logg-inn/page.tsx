'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) router.push('/');
    });
  }, [router]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Fyll inn e-post og passord');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setError(error.message === 'Invalid login credentials'
        ? 'Feil e-post eller passord'
        : error.message);
    } else {
      router.push('/');
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError('Fyll inn e-post og passord');
      return;
    }
    if (password.length < 6) {
      setError('Passordet må være minst 6 tegn');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/auth/callback` },
    });
    setLoading(false);
    console.log('signUp result:', { data, error });

    if (error) {
      setError(error.message);
    } else if (data.user?.identities?.length === 0) {
      setError('Denne e-posten er allerede registrert. Prøv å logge inn i stedet.');
    } else {
      setMessage('Konto opprettet! Sjekk e-posten din for å bekrefte.');
    }
  };

  const isLogin = mode === 'login';

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="bg-white rounded-xl shadow-sm border border-surface-200 p-8">
        <h1 className="text-2xl font-bold text-surface-900 mb-6 text-center">
          {isLogin ? 'Logg inn' : 'Opprett konto'}
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-surface-300 rounded-lg text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-surface-300 rounded-lg text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />

          {error && (
            <p className="text-sm text-error-600 text-center">{error}</p>
          )}
          {message && (
            <p className="text-sm text-success-600 text-center">{message}</p>
          )}

          <button
            type="button"
            onClick={isLogin ? handleLogin : handleRegister}
            disabled={loading}
            className="w-full px-4 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading
              ? 'Vennligst vent...'
              : isLogin
                ? 'Logg inn'
                : 'Opprett konto'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => { setMode(isLogin ? 'register' : 'login'); setError(''); setMessage(''); }}
            className="text-sm text-brand-600 hover:text-brand-700 font-medium"
          >
            {isLogin
              ? 'Har du ikke konto? Opprett konto'
              : 'Har du allerede konto? Logg inn'}
          </button>
        </div>
      </div>
    </div>
  );
}
