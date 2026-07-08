# Hemisphere Aerospace Investments (HAI) — Website

Marketing website for Hemisphere Aerospace Investments, LLC — a global provider of
commercial aircraft and engine trading assets.

Built with **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4** ·
**TypeScript** · **Lexend** (next/font) · **Phosphor** icons. Deployed on **Vercel**.
No database or CMS — all content lives in typed modules under `lib/`.

## Pages

| Route       | Description                                                            |
| ----------- | --------------------------------------------------------------------- |
| `/`         | Home — hero, intro, services, integrated model, specialization, CTA   |
| `/about`    | Company history, mission, signature capabilities, differentiators     |
| `/services` | Six service lines with deep-linkable detail sections (`/services#…`)   |
| `/team`     | Leadership bios                                                        |
| `/contact`  | Contact details + form (emails submissions via Resend)                |

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see below)
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve build),
`npm run lint`.

## Editing content

No code changes are needed to update copy — everything is centralized:

- **`lib/site.ts`** — company details, nav, services, integrated-approach pillars,
  stats, and team bios.
- **`lib/images.ts`** — image manifest (paths, alt text, dimensions) and the
  service → image mapping. Images live in `public/images/`.
- **Logo** — recreated as a themeable vector in `components/logo.tsx`. The original
  raster is kept at `public/hai-logo-original.webp` if you'd prefer to swap it in.

To replace a photo, drop a new file in `public/images/` and update the matching
entry in `lib/images.ts`.

## Contact form (Resend)

The form at `/contact` posts to the `POST /api/contact` route handler, which emails
submissions with [Resend](https://resend.com). Set these environment variables:

| Variable             | Required | Notes                                                        |
| -------------------- | -------- | ------------------------------------------------------------ |
| `RESEND_API_KEY`     | Yes      | From https://resend.com/api-keys                             |
| `CONTACT_TO_EMAIL`   | No       | Delivery inbox. Defaults to `info@hai-aero.com`.             |
| `CONTACT_FROM_EMAIL` | No       | Verify `hai-aero.com` in Resend, then use an address on it.  |

Without `RESEND_API_KEY`, the form validates and shows a friendly "not configured
yet" message instead of sending. The route also includes basic validation and a
honeypot field for spam protection.

### Going live (important)

A new Resend account is in **test mode** until you verify a domain: it will only
deliver to your Resend account's own email address, and only from
`onboarding@resend.dev`. Attempting to send to `info@hai-aero.com` before verifying
returns a `403 validation_error`. To enable real delivery:

1. In Resend, go to **Domains → Add Domain** and add `hai-aero.com`.
2. Add the DKIM/SPF DNS records Resend shows you at your DNS provider, then click
   **Verify**.
3. Set `CONTACT_FROM_EMAIL` to an address on that domain, e.g.
   `Hemisphere Aerospace <noreply@hai-aero.com>` (in `.env.local` locally and in
   Vercel's environment variables for production).

After that, submissions deliver to `CONTACT_TO_EMAIL` (`info@hai-aero.com`) with the
sender's address set as `reply-to`.

## Deploying to Vercel

1. Push this **`hai-website`** folder to a Git repository (it is already its own
   git repo).
2. In Vercel, **Add New → Project** and import the repo. Vercel auto-detects
   Next.js — keep the default build settings. (If the repo root contains this
   folder as a subdirectory, set the project's **Root Directory** to `hai-website`.)
3. Add the environment variables above under **Settings → Environment Variables**.
4. Deploy. To use the production domain, add `hai-aero.com` under
   **Settings → Domains** and point DNS at Vercel.

The site is fully static except for the contact route, so it serves fast globally
with no backend to maintain.
