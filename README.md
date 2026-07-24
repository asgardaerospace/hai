# Hemisphere Aerospace Investments (HAI) — Website

Marketing website for Hemisphere Aerospace Investments, LLC — a global provider of
commercial aircraft and engine trading assets.

Built with **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4** ·
**TypeScript** · **Lexend** + **Fraunces** (next/font) · **Phosphor** icons.
Deployed on **Vercel**. No database or CMS — all content lives in typed modules
under `lib/`.

### Design & motion

The site uses a cinematic aerospace-capital design language: a deep-navy field,
azure interactive accent, and restrained brass (`gold`) for luxe micro-detail.
Headlines are set in the editorial serif **Fraunces** (`.font-display`); body/UI
in **Lexend**.

Motion is purposeful and defined centrally in `app/globals.css` (keyframes +
utilities) and a small set of client primitives:

- `components/reveal.tsx` — scroll-reveal (fade / rise / de-blur, directional variants)
- `components/counter.tsx` — count-up stats on scroll
- `components/marquee.tsx` — seamless infinite strip (trust band)
- `components/spotlight-card.tsx` — cursor-tracked card glow
- `components/magnetic.tsx` — magnetic hover for hero/CTA buttons
- `components/hero-video.tsx` / `components/ambient-video.tsx` — cinematic
  background loops (hero plays eagerly over its poster; ambient loops load only
  when scrolled near). Both fade in over a poster image and are skipped entirely
  under `prefers-reduced-motion`.

All motion respects `prefers-reduced-motion`.

### Media assets

The photography and hero/CTA video loops are bespoke, cinematically color-graded
aerospace imagery generated for HAI (a single deep-navy / warm-amber palette so
the site reads like one commissioned shoot). Stills live in `public/images/`
(optimized WebP, catalogued in `lib/images.ts`); the looping videos live in
`public/videos/` (`hero-loop.mp4` / `.webm`, seamless forward-reverse palindromes).
To swap any asset, drop a replacement in the same folder and update the matching
entry in `lib/images.ts`.

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
| `CONTACT_TO_EMAIL`   | No       | Delivery inbox. Defaults to `info@haiaero.com`.              |
| `CONTACT_FROM_EMAIL` | No       | Verify `haiaero.com` in Resend, then use an address on it.   |

Without `RESEND_API_KEY`, the form validates and shows a friendly "not configured
yet" message instead of sending. The route also includes basic validation and a
honeypot field for spam protection.

### Going live (important)

A new Resend account is in **test mode** until you verify a domain: it will only
deliver to your Resend account's own email address, and only from
`onboarding@resend.dev`. Attempting to send to `info@haiaero.com` before verifying
returns a `403 validation_error`. To enable real delivery:

1. In Resend, go to **Domains → Add Domain** and add `haiaero.com`.
2. Add the DKIM/SPF DNS records Resend shows you at your DNS provider, then click
   **Verify**.
3. Set `CONTACT_FROM_EMAIL` to an address on that domain, e.g.
   `Hemisphere Aerospace <noreply@haiaero.com>` (in `.env.local` locally and in
   Vercel's environment variables for production).

After that, submissions deliver to `CONTACT_TO_EMAIL` (`info@haiaero.com`) with the
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
