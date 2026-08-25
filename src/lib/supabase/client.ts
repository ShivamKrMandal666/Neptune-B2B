import { createBrowserClient } from "@supabase/ssr";
import { supabaseEnv } from "@/lib/supabase/env";

// Browser client for client components.
//
// Nothing imports this yet — the consultation insert runs server-side in
// `app/api/contact/route.ts`. It exists for future client-side reads.
export function createClient() {
  const { url, key } = supabaseEnv();
  return createBrowserClient(url, key);
}
