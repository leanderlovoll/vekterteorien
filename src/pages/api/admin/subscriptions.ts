import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

function checkAdmin(req: NextApiRequest, res: NextApiResponse): boolean {
  const secret = req.headers['x-admin-secret'];
  if (secret !== process.env.ADMIN_SECRET) {
    res.status(401).json({ error: 'Ikke autorisert' });
    return false;
  }
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!checkAdmin(req, res)) return;

  const supabase = getAdminClient();

  if (req.method === 'GET') {
    // List all subscriptions with user emails
    const { data: subs, error: subsError } = await supabase
      .from('subscriptions')
      .select('*')
      .order('expires_at', { ascending: false });

    if (subsError) return res.status(500).json({ error: subsError.message });

    // Fetch emails for each user_id
    const userIds = (subs ?? []).map((s: { user_id: string }) => s.user_id);
    const emails: Record<string, string> = {};

    for (const uid of userIds) {
      const { data: userData } = await supabase.auth.admin.getUserById(uid);
      if (userData?.user?.email) emails[uid] = userData.user.email;
    }

    const result = (subs ?? []).map((s: { user_id: string; plan: string; expires_at: string }) => ({
      ...s,
      email: emails[s.user_id] ?? '(ukjent)',
    }));

    return res.status(200).json({ subscriptions: result });
  }

  if (req.method === 'POST') {
    // Grant access: { email, plan, days }
    const { email, plan, days } = req.body;
    if (!email || !plan || !days) {
      return res.status(400).json({ error: 'Mangler email, plan eller days' });
    }

    // Find user by email
    const { data: listData, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) return res.status(500).json({ error: listError.message });

    const user = listData.users.find((u) => u.email === email);
    if (!user) return res.status(404).json({ error: `Finner ingen bruker med e-post: ${email}` });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + Number(days));

    const { error: upsertError } = await supabase
      .from('subscriptions')
      .upsert({
        user_id: user.id,
        plan,
        expires_at: expiresAt.toISOString(),
      }, { onConflict: 'user_id' });

    if (upsertError) return res.status(500).json({ error: upsertError.message });

    return res.status(200).json({
      ok: true,
      user_id: user.id,
      email: user.email,
      plan,
      expires_at: expiresAt.toISOString(),
    });
  }

  res.status(405).end();
}
