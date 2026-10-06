-- TDidacta Platform — conservative early adoption metrics
-- Run from the Supabase SQL editor with an administrative role.
-- These are product-use metrics, not evidence of learning.

-- Permanent accounts.
select count(*) as registered_accounts
from auth.users
where is_anonymous is not true
  and deleted_at is null;

-- Accounts that opened at least one lesson while signed in.
select count(distinct user_id) as users_who_opened_a_lesson
from public.learning_activity
where event = 'lesson_opened';

-- Accounts that prepared at least one exploration.
select count(distinct user_id) as users_who_prepared_an_exploration
from public.learning_activity
where event = 'exploration_prepared';

-- Accounts that used at least two distinct lessons.
select count(*) as multi_lesson_users
from (
  select user_id
  from public.learning_activity
  where lesson_id is not null
  group by user_id
  having count(distinct lesson_id) >= 2
) users;

-- Accounts active on at least two distinct calendar dates.
select count(*) as returning_users
from (
  select user_id
  from public.learning_activity
  group by user_id
  having count(distinct occurred_at::date) >= 2
) users;

-- Accounts active on at least three distinct calendar dates.
select count(*) as users_active_three_days
from (
  select user_id
  from public.learning_activity
  group by user_id
  having count(distinct occurred_at::date) >= 3
) users;

-- Pending account-deletion requests that must be processed administratively.
select user_id, requested_at
from public.account_deletion_requests
order by requested_at;
