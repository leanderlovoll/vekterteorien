import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Use service role key for server-side writes (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// Anon client only for verifying the user's auth token
const supabaseAnon = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Ikke innlogget' });

  const { data: authData, error: authError } = await supabaseAnon.auth.getUser(token);
  if (authError || !authData?.user) return res.status(401).json({ error: 'Ugyldig token' });

  const { session_id } = req.body;
  if (!session_id) return res.status(400).json({ error: 'Mangler session_id' });

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Betaling ikke fullført' });
    }

    if (session.metadata?.userId !== authData.user.id) {
      return res.status(403).json({ error: 'Ugyldig sesjon' });
    }

    const plan = session.metadata?.plan as 'weekly' | 'monthly';
    if (!plan || !['weekly', 'monthly'].includes(plan)) {
      return res.status(400).json({ error: 'Ugyldig plan' });
    }

    const now = new Date();
    const expiresAt = new Date(now);
    if (plan === 'weekly') {
      expiresAt.setDate(expiresAt.getDate() + 7);
    } else {
      expiresAt.setMonth(expiresAt.getMonth() + 1);
    }

    // Server-side upsert with service role key — reliable, bypasses RLS
    const { error: upsertError } = await supabaseAdmin
      .from('subscriptions')
      .upsert({
        user_id: authData.user.id,
        plan,
        expires_at: expiresAt.toISOString(),
      }, { onConflict: 'user_id' });

    if (upsertError) {
      return res.status(500).json({ error: 'Kunne ikke aktivere abonnement' });
    }

    return res.status(200).json({
      verified: true,
      plan,
      expiresAt: expiresAt.toISOString(),
    });
  } catch {
    return res.status(400).json({ error: 'Kunne ikke verifisere betaling' });
  }
}
