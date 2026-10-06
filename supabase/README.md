# TDidacta account backend

TDidacta Platform remains a static Zensical site. Accounts are optional and the first backend is prepared for Supabase.

## Privacy invariant

This MVP deliberately does **not** keep server-side learning histories.

```text
account identity
!=
learning behavior

anonymous product signal
!=
per-user analytics
```

### Personal data kept for the account

Supabase Auth may keep:

- email;
- internal authentication identifier;
- account creation metadata;
- minimal consent metadata stored in `user_metadata`.

The account is optional.

### Learning summary

Lesson counts, distinct lesson identifiers, active dates and exploration counters are kept only in the user's browser through `localStorage`.

They are not synchronized to the account.

### Anonymous statistics

Anonymous statistics are OFF by default.

When enabled, the browser sends only one allowed event name through a separate Supabase client that does not carry the TDidacta authentication session.

The database persists only:

```text
calendar date
+ event type
+ aggregate count
```

There is no `user_id`, email, device id, session id, lesson id, exploration mode, exact timestamp or learner text in the analytics table.

Milestones such as returning on another day or using multiple lessons are calculated locally. Only the milestone counter is sent.

## One-time setup

1. Create a Supabase project.
2. Prefer the specific **South America (São Paulo / AWS sa-east-1)** region unless a later legal review selects another region.
3. Run [schema.sql](schema.sql) in the SQL editor.
4. In Supabase Auth URL Configuration set:
   - Site URL: `https://hernanfar.github.io/teaching/`
   - Redirect URL: `https://hernanfar.github.io/teaching/account/`
5. Review and retain the current Supabase DPA and subprocessor list.
6. Review Supabase operational log retention before enabling the feature.
7. In GitHub repository **Actions variables**, create:
   - `TDIDACTA_SUPABASE_URL`
   - `TDIDACTA_SUPABASE_PUBLISHABLE_KEY`
8. Re-run the Documentation workflow or push a new commit.

The publishable key is intentionally a browser credential. Never place a Supabase secret/service-role key in GitHub Pages, repository variables consumed by the frontend, or browser JavaScript.

Without the two public variables the site still builds and all educational content remains available.

## Authentication

The UI uses passwordless email through `signInWithOtp`.

Before sending an access link, the user must:

- confirm they are at least 14 years old;
- consent to processing their email for creating and maintaining the account.

The privacy-policy version and consent timestamp are sent as user metadata for account creation. A pending local marker also lets the UI complete that metadata after a successful login when needed.

This account consent does not opt the user into anonymous statistics or Research.

## Anonymous analytics client

The frontend creates a separate Supabase client with:

- `persistSession: false`;
- `autoRefreshToken: false`;
- `detectSessionInUrl: false`.

That client calls only `record_anonymous_usage(event)`.

The function is `security definer`, validates the event against a fixed allowlist, and increments an aggregate row. Direct public access to `anonymous_usage_daily` is revoked.

Network/hosting providers can still process connection metadata such as IP addresses to deliver and secure requests. TDidacta does not persist that metadata in its analytics schema.

## Account deletion

The public client never receives administrative credentials.

A signed-in user can create an `account_deletion_requests` row protected by RLS. An administrator must process pending requests from a trusted administrative surface and delete the corresponding Auth user.

Once the Auth user is deleted, `on delete cascade` removes the deletion-request row.

A future server-side self-deletion function may replace the manual step, but it must validate the caller and must never expose `service_role` credentials.

## Data rights

The public account UI supports:

- access to the principal account data;
- JSON export for portability;
- email-change flow for rectification;
- local-summary deletion;
- account-deletion request;
- opt-in/opt-out for anonymous statistics;
- and a formal privacy contact link.

Formal contact:

`h.f.alvarez.rubio@gmail.com`

## Funding/adoption metrics

[metrics.sql](metrics.sql) contains conservative queries for:

- registered accounts;
- anonymous statistics opt-ins;
- aggregate lesson/exploration events;
- approximate returning-browser milestones;
- approximate multi-lesson browser milestones;
- approximate three-day browser milestones.

Do not rename approximate browser milestones as exact unique users.

These are product-use/adoption signals, never learning outcomes.
