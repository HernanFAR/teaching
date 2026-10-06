-- TDidacta Platform — privacy-first account + anonymous aggregate analytics
-- Run in a dedicated Supabase project before enabling the public account UI.
--
-- Design invariant:
--   no per-user learning activity is persisted server-side.
--   anonymous usage is aggregated immediately by calendar date + event type.

-- Remove the previous design if this script is applied over an early test database.
drop table if exists public.learning_activity cascade;

create table if not exists public.anonymous_usage_daily (
  usage_date date not null default current_date,
  event text not null check (
    event in (
      'analytics_opt_in',
      'lesson_opened',
      'exploration_prepared',
      'exploration_copied',
      'return_visit',
      'multi_lesson_milestone',
      'three_day_milestone'
    )
  ),
  total bigint not null default 0 check (total >= 0),
  primary key (usage_date, event)
);

alter table public.anonymous_usage_daily enable row level security;

-- No public SELECT/INSERT/UPDATE/DELETE policies are intentionally defined.
-- Clients can only call the narrow increment function below.
revoke all on table public.anonymous_usage_daily from anon, authenticated;

create or replace function public.record_anonymous_usage(p_event text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_event not in (
    'analytics_opt_in',
    'lesson_opened',
    'exploration_prepared',
    'exploration_copied',
    'return_visit',
    'multi_lesson_milestone',
    'three_day_milestone'
  ) then
    raise exception 'unsupported anonymous usage event';
  end if;

  insert into public.anonymous_usage_daily (usage_date, event, total)
  values (current_date, p_event, 1)
  on conflict (usage_date, event)
  do update set total = public.anonymous_usage_daily.total + 1;
end;
$$;

revoke all on function public.record_anonymous_usage(text) from public;
grant execute on function public.record_anonymous_usage(text) to anon, authenticated;

create table if not exists public.account_deletion_requests (
  user_id uuid primary key references auth.users(id) on delete cascade,
  requested_at timestamptz not null default now()
);

alter table public.account_deletion_requests enable row level security;

drop policy if exists "Users can read own deletion request" on public.account_deletion_requests;
create policy "Users can read own deletion request"
  on public.account_deletion_requests
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create own deletion request" on public.account_deletion_requests;
create policy "Users can create own deletion request"
  on public.account_deletion_requests
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update own deletion request" on public.account_deletion_requests;
create policy "Users can update own deletion request"
  on public.account_deletion_requests
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can cancel own deletion request" on public.account_deletion_requests;
create policy "Users can cancel own deletion request"
  on public.account_deletion_requests
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);
