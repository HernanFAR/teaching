# Teaching custom domain

Target public domain:

```text
https://teaching.alive-lab.dev/
```

This branch prepares the repository for the custom domain without requiring the domain to exist yet.

## Repository changes

- `mkdocs.yml` uses `https://teaching.alive-lab.dev/` as the canonical `site_url`.
- `docs/CNAME` publishes `teaching.alive-lab.dev` at the site root.
- The existing GitHub Pages workflow remains unchanged.

## Activation

Do these steps only after `alive-lab.dev` has been registered.

1. In the DNS provider for `alive-lab.dev`, create:

   ```text
   Type:  CNAME
   Name:  teaching
   Target: hernanfar.github.io
   ```

2. In GitHub, open `HernanFAR/teaching` → **Settings** → **Pages**.
3. Set **Custom domain** to:

   ```text
   teaching.alive-lab.dev
   ```

4. Wait for GitHub's DNS check to succeed.
5. Enable **Enforce HTTPS** when GitHub makes the option available.
6. Merge this branch into `main` and let the `Documentation` workflow deploy.
7. Verify:
   - `https://teaching.alive-lab.dev/`
   - a nested page such as `/evaluations/pir-stu-001-phase-0c/`
   - canonical links and navigation
   - HTTPS

## Domain verification

GitHub recommends verifying the apex domain before relying on custom-domain Pages. In GitHub account settings, add `alive-lab.dev` under **Pages / Verified domains** and create the TXT record GitHub provides.

Use the exact TXT name and value GitHub shows; do not copy an example value from documentation.

## Rollback

If the custom domain needs to be abandoned before or after activation:

1. restore `site_url` to `https://hernanfar.github.io/teaching/`;
2. remove `docs/CNAME`;
3. remove the custom domain from GitHub Pages settings;
4. remove the `teaching` CNAME from DNS if it is no longer needed.

The hosting and deployment mechanism do not otherwise change.
