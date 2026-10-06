-- TDidacta Platform — privacy-first early adoption metrics
-- Run from the Supabase SQL editor with an administrative role.
--
-- IMPORTANT:
-- * Auth account counts are account-service data.
-- * Usage counters are anonymous aggregates and are NOT evidence of learning.
-- * Browser-based milestones are approximate: clearing storage or changing device
--   can make one person count more than once.

-- Registered permanent accounts.
select count(*) as registered_accounts
from auth.users
where is_anonymous is not true
  and deleted_at is null;

-- Browsers that voluntarily enabled anonymous statistics.
-- This is approximate because no persistent server-side identifier exists.
select coalesce(sum(total), 0) as anonymous_stats_opt_ins
from public.anonymous_usage_daily
where event = 'analytics_opt_in';

-- Anonymous aggregate feature-use counts.
select
  event,
  coalesce(sum(total), 0) as total_events
from public.anonymous_usage_daily
where event in (
  'lesson_opened',
  'exploration_prepared',
  'exploration_copied'
)
group by event
order by event;

-- Privacy-preserving adoption milestones computed locally in the browser
-- and sent once per local browser state.
select
  event,
  coalesce(sum(total), 0) as approximate_browsers
from public.anonymous_usage_daily
where event in (
  'return_visit',
  'multi_lesson_milestone',
  'three_day_milestone'
)
group by event
order by event;

-- Daily anonymous trend.
select
  usage_date,
  event,
  total
from public.anonymous_usage_daily
order by usage_date desc, event;

-- Pending account-deletion requests that must be processed administratively.
select user_id, requested_at
from public.account_deletion_requests
order by requested_at;
