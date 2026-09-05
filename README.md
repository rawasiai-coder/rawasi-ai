# Rawasi AI — marketing site

Single-page marketing site for Rawasi (رواسي), a Saudi AI automation agency.
Arabic-first, with a full English locale.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- TypeScript
- Self-hosted Thmanyah Sans (`public/fonts`)

No database and no backend. Booking is handled by an embedded Calendly widget.

## Locales

Two statically generated routes, both prerendered:

| Route | `lang` | `dir` |
| ----- | ------ | ----- |
| `/ar` | `ar`   | `rtl` |
| `/en` | `en`   | `ltr` |

`proxy.ts` redirects a bare path to the visitor's `Accept-Language`, falling
back to Arabic. Direction is derived from the URL segment in
`app/[locale]/layout.tsx` — it is never hardcoded in a component.

All copy lives in `app/i18n/ar.ts` and `app/i18n/en.ts` behind the shared
`Dict` type in `app/i18n/types.ts`, so a missing key fails the build.

## Commands

```bash
npm install
npm run dev     # development server on :3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| -------- | -------- | ------- |
| `NEXT_PUBLIC_CALENDLY_URL` | no | Calendly event URL for the booking section. Without it the section renders a placeholder instead of the calendar. |

## Structure

```
app/
  [locale]/        layout (lang/dir, metadata) + page
  components/      sections; styles.ts holds shared heading classes
  i18n/            config, types, ar.ts, en.ts, dictionaries
  globals.css      theme tokens, fonts, animations, RTL rules
  site.ts          real contact details (WhatsApp, email)
proxy.ts           locale redirect (Next 16 renamed middleware -> proxy)
public/brand       logo mark   public/fonts   public/steps  process images
```

## Notes for contributors

`globals.css` and several components contain deliberate-looking oddities that
are load-bearing — negative margins that compensate for letter-spacing,
`left-1/2` used instead of `start-1/2` because centring is not directional, and
a reveal system with fallbacks because `IntersectionObserver` can miss its first
callback. Read the `ponytail:` comments before removing anything that looks
redundant.
