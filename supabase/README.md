# TDidacta account backend

TDidacta Platform remains a static Zensical site. Accounts are an optional persistence layer backed by Supabase.

## Scope of this MVP

The account layer stores only:

- authentication identity handled by Supabase Auth;
- `lesson_opened`;
- `exploration_prepared`;
- `exploration_copied`;
- lesson identifier;
- exploration mode;
- timestamp.

It does **not** store learner prompts, generated prompts, LLM conversations or learning outcomes.

## One-time setup

1. Create a Supabase project.
2. Run [schema.sql](schema.sql) in the SQL editor.
3. In Supabase Auth URL Configuration set:
   - Site URL: `https://hernanfar.github.io/teaching/`
   - Redirect URL: `https://hernanfar.github.io/teaching/account/`
4. In GitHub repository **Actions variables**, create:
   - `TDIDACTA_SUPABASE_URL`
   - `TDIDACTA_SUPABASE_PUBLISHABLE_KEY`
5. Re-run the Documentation workflow or push a new commit.

The publishable key is intentionally a browser credential. Do **not** place a Supabase secret/service-role key in GitHub Pages, repository variables consumed by the frontend, or any browser JavaScript.

Without those two variables the site still builds and all educational content remains available; **Mi aprendizaje** reports that accounts are not activated.

## Authentication

The current UI uses passwordless email through `signInWithOtp`. Supabase Auth decides whether the email template behaves as a magic link/OTP according to project configuration.

## RLS

`schema.sql` enables Row Level Security.

Authenticated users may only:

- read their own activity;
- insert their own activity;
- delete their own activity;
- read/create/cancel their own deletion request.

No aggregate adoption metric is exposed through the public client.

## Deletion requests

The public UI does not receive administrative credentials.

A user can create a row in `account_deletion_requests`. An administrator must periodically process pending rows from the Supabase Dashboard/Auth admin surface and delete the corresponding Auth user. The foreign keys use `on delete cascade`, so product activity and the request disappear with the account.

## Funding/adoption metrics

[metrics.sql](metrics.sql) contains conservative administrative queries for:

- registered accounts;
- users who opened a lesson;
- users who prepared an exploration;
- multi-lesson users;
- users active on 2+ dates;
- users active on 3+ dates.

These metrics are intentionally labelled as **use/adoption**, never learning.
