// ── Supabase environment ──────────────────────────────────────────────────
//
// Both vars are `NEXT_PUBLIC_` on purpose: the publishable (anon) key is
// designed to be public and is safe to ship, because every table it can reach
// is gated by Row Level Security. A `service_role` key must NEVER be given a
// `NEXT_PUBLIC_` prefix — it bypasses RLS and would leak into the browser
// bundle.
//
// `process.env.NEXT_PUBLIC_*` has to be written out as a literal member
// expression for Next.js to inline it at build time — a computed lookup would
// come back undefined in the browser.

export interface SupabaseEnv {
  url: string;
  key: string;
}

export function supabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  // Guarded here rather than at module scope so a missing value fails on the
  // first request instead of breaking `next build`.
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  return { url, key };
}
