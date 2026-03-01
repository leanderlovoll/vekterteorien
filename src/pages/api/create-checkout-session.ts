import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const PRICES: Record<string, string | undefined> = {
  weekly: process.env.STRIPE_PRICE_WEEKLY,
  monthly: process.env.STRIPE_PRICE_MONTHLY,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Ikke innlogget' });

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: 'Ugyldig token' });

  const { plan } = req.body;
  const priceId = PRICES[plan];
  if (!priceId) return res.status(400).json({ error: 'Ugyldig plan' });

  const origin = req.headers.origin || process.env.NEXT_PUBLIC_APP_URL || '';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: data.user.email ?? undefined,
    success_url: `${origin}/betaling?success=true&plan=${plan}`,
    cancel_url: `${origin}/betaling`,
    metadata: { userId: data.user.id, plan },
  });

  return res.status(200).json({ url: session.url });
}
