'use client';

import { useState, useEffect, useCallback } from 'react';

interface Subscription {
  user_id: string;
  email: string;
  plan: string;
  expires_at: string;
}

export default function AdminPage() {
  const [secret, setSecret] = useState('');
  const [authed, setAuthed] = useState(false);
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Grant form
  const [grantEmail, setGrantEmail] = useState('');
  const [grantPlan, setGrantPlan] = useState<'weekly' | 'monthly'>('weekly');
  const [grantDays, setGrantDays] = useState(7);
  const [grantMsg, setGrantMsg] = useState('');
  const [granting, setGranting] = useState(false);

  const fetchSubs = useCallback(async (adminSecret: string) => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/subscriptions', {
      headers: { 'x-admin-secret': adminSecret },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? 'Feil');
    } else {
      setSubs(data.subscriptions);
      setAuthed(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSubs(secret);
  };

  const handleGrant = async (e: React.FormEvent) => {
    e.preventDefault();
    setGranting(true);
    setGrantMsg('');
    const res = await fetch('/api/admin/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': secret,
      },
      body: JSON.stringify({ email: grantEmail, plan: grantPlan, days: grantDays }),
    });
    const data = await res.json();
    if (!res.ok) {
      setGrantMsg(`Feil: ${data.error}`);
    } else {
      setGrantMsg(`Tilgang gitt til ${data.email} — utløper ${new Date(data.expires_at).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })}`);
      fetchSubs(secret);
      setGrantEmail('');
    }
    setGranting(false);
  };

  if (!authed) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20">
        <h1 className="text-2xl font-bold text-surface-900 mb-6 text-center">Admin</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Admin-passord"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full border border-surface-300 rounded-lg px-4 py-3 text-surface-900"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-600 text-white font-medium py-3 rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Logger inn...' : 'Logg inn'}
          </button>
        </form>
      </div>
    );
  }

  const now = new Date();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-surface-900 mb-8">Admin — abonnementer</h1>

      {/* Grant access form */}
      <div className="bg-white rounded-xl border border-surface-200 p-6 mb-8">
        <h2 className="font-semibold text-surface-900 mb-4">Gi tilgang manuelt</h2>
        <form onSubmit={handleGrant} className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-48">
            <label className="block text-xs text-surface-600 mb-1">E-post</label>
            <input
              type="email"
              value={grantEmail}
              onChange={(e) => setGrantEmail(e.target.value)}
              required
              placeholder="bruker@example.com"
              className="w-full border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900"
            />
          </div>
          <div>
            <label className="block text-xs text-surface-600 mb-1">Plan</label>
            <select
              value={grantPlan}
              onChange={(e) => setGrantPlan(e.target.value as 'weekly' | 'monthly')}
              className="border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900"
            >
              <option value="weekly">Ukepass (7 dager)</option>
              <option value="monthly">Månedspass (30 dager)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-surface-600 mb-1">Dager</label>
            <input
              type="number"
              value={grantDays}
              onChange={(e) => setGrantDays(Number(e.target.value))}
              min={1}
              max={365}
              className="w-24 border border-surface-300 rounded-lg px-3 py-2 text-sm text-surface-900"
            />
          </div>
          <button
            type="submit"
            disabled={granting}
            className="bg-brand-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-50 text-sm"
          >
            {granting ? 'Gir tilgang...' : 'Gi tilgang'}
          </button>
        </form>
        {grantMsg && (
          <p className={`mt-3 text-sm ${grantMsg.startsWith('Feil') ? 'text-red-600' : 'text-green-600'}`}>
            {grantMsg}
          </p>
        )}
      </div>

      {/* Subscriptions list */}
      <div className="bg-white rounded-xl border border-surface-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-200 flex items-center justify-between">
          <h2 className="font-semibold text-surface-900">Alle abonnementer ({subs.length})</h2>
          <button
            onClick={() => fetchSubs(secret)}
            className="text-sm text-brand-600 hover:text-brand-700"
          >
            Oppdater
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-50 text-left text-xs text-surface-600 uppercase tracking-wide">
                <th className="px-6 py-3">E-post</th>
                <th className="px-6 py-3">Plan</th>
                <th className="px-6 py-3">Utløper</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {subs.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-surface-500">
                    Ingen abonnementer funnet
                  </td>
                </tr>
              )}
              {subs.map((s) => {
                const expires = new Date(s.expires_at);
                const active = expires > now;
                return (
                  <tr key={s.user_id} className="hover:bg-surface-50">
                    <td className="px-6 py-3 font-medium text-surface-900">{s.email}</td>
                    <td className="px-6 py-3 text-surface-700">
                      {s.plan === 'weekly' ? 'Ukepass' : s.plan === 'monthly' ? 'Månedspass' : s.plan}
                    </td>
                    <td className="px-6 py-3 text-surface-700">
                      {expires.toLocaleDateString('nb-NO', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {active ? 'Aktiv' : 'Utløpt'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
