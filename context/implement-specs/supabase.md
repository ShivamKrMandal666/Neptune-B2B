I'm integrating Supabase as the backend for my Next.js agency website. Right now, 
the "Book a Consultation" modal form just shows a fake success message on submit 
with no real backend. I need you to wire it up to Supabase for real, end to end.

The form (see screenshot logic below) has exactly these fields:
- Name (text, required)
- Email (text, required)
- Phone (text, optional — placeholder shows +91 format but don't hard-restrict 
  to India, just store as free text)
- Project details (textarea, required — "What are you building, and what should 
  it achieve?")
- Submit button labeled "Send Message"

Setup already done (or to be done first):
- Run: npm install @supabase/supabase-js @supabase/ssr
- .env.local already has (or will have):
  NEXT_PUBLIC_SUPABASE_URL=<my supabase project url>
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<my supabase anon/publishable key>

Please do the following:

1. PROJECT AUDIT
   - Find the existing "Book a Consultation" modal/form component and see how 
     it currently fakes success (setTimeout, mock state, etc.).
   - Check if @supabase/supabase-js and @supabase/ssr are installed; install 
     if missing.
   - Confirm .env.local has the Supabase URL and publishable key; if not, 
     tell me exactly what's missing.

2. SUPABASE CLIENT SETUP (following @supabase/ssr patterns for Next.js App Router)
   - Create lib/supabase/client.ts — browser client for client components.
   - Create lib/supabase/server.ts — server client for server components/actions, 
     using cookies from next/headers.
   - Pull URL/key from process.env.NEXT_PUBLIC_SUPABASE_URL and 
     process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY — never hardcode them.

3. DATABASE SCHEMA
   Write the SQL (as a migration file or a script I can paste into the Supabase 
   SQL editor) to create a `consultations` table matching the actual form fields:
     id            uuid, primary key, default gen_random_uuid()
     name          text, not null
     email         text, not null
     phone         text, nullable
     project_details text, not null
     status        text, default 'new'  (new / contacted / scheduled / closed)
     created_at    timestamptz, default now()

   - Enable Row Level Security on the table.
   - Add an RLS policy allowing anonymous/public INSERT only.
   - Do NOT allow public SELECT, UPDATE, or DELETE. Explain how I'd view 
     submissions later (Supabase dashboard, or an authenticated admin route).

4. WIRE UP THE FORM
   - Replace the fake success logic in the "Book a Consultation" modal with a 
     real submission: a Next.js Server Action or API route (match existing 
     code style) that inserts a validated row into `consultations`.
   - Validate required fields (name, email, project_details) client-side AND 
     server-side. Basic email format check too.
   - Handle real states: loading (disable "Send Message" button + show spinner/
     text change while submitting), success (show the actual confirmation, 
     then close modal or reset form), and error (show an inline error message — 
     do not silently pretend it succeeded).
   - Keep the existing modal UI/design exactly as is — rounded card, close (×) 
     button, blue "Send Message" pill button with arrow icon — just replace 
     the fake logic with the real integration.

5. VERIFY
   - Tell me how to test end-to-end: submit the form, confirm the row appears 
     in Supabase Table Editor with correct values.
   - Point out any env vars I still need to set in production (e.g. Vercel 
     project settings) since .env.local won't ship with the deployed app.

6. SECURITY CHECK
   - Confirm no service_role key or secret ever ends up in a NEXT_PUBLIC_ 
     variable or the client bundle.
   - Confirm the RLS policy genuinely restricts to insert-only for anon users, 
     not an overly permissive "enabled but allow-all" policy.

Walk through this step by step, show me the code changes, and ask me before 
guessing on anything ambiguous (e.g. whether to use Server Action vs API route, 
exact close-modal behavior after success).