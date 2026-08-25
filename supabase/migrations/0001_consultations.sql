-- Consultation submissions from the "Book a Consultation" form.
-- Paste into the Supabase dashboard → SQL Editor → Run.

create table public.consultations (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null,
  phone           text,
  project_details text not null,
  status          text not null default 'new'
                  check (status in ('new', 'contacted', 'scheduled', 'closed')),
  created_at      timestamptz not null default now()
);

create index consultations_created_at_idx
  on public.consultations (created_at desc);

alter table public.consultations enable row level security;

-- Insert-only for the public. There is deliberately NO select, update, or
-- delete policy — with RLS enabled, anything without a matching policy is
-- denied by default. This is not an "enabled but allow-all" setup.
create policy "public can submit a consultation"
  on public.consultations
  for insert
  to anon, authenticated
  with check (true);

-- Defence in depth. The policy's WITH CHECK (true) alone would let a caller
-- stamp their own status/id/created_at on arrival, so strip Supabase's default
-- grants and hand back INSERT on the four user-supplied columns only.
revoke all on public.consultations from anon, authenticated;
grant insert (name, email, phone, project_details)
  on public.consultations to anon, authenticated;

-- Reading submissions: Supabase dashboard → Table Editor → consultations.
-- The dashboard connects as service_role, which bypasses RLS, so rows are
-- visible there despite no select policy existing. An in-app admin list would
-- need Supabase Auth plus a select policy scoped to an admin role.
