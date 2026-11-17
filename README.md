# JazzHQ Buyer’s Guides

One Next.js App Router site for the JazzHQ software buyer’s guides.

## Routes

| Route | Page |
|---|---|
| `/` | Redirects to `/buyers-guide` |
| `/buyers-guide` | Gallery of guides |
| `/buyers-guide/ai-coaching-platforms` | 10 Best AI Coaching Platforms for Sales Teams in 2026 |
| `/buyers-guide/best-prm-software` | 10 Best Partner Relationship Management Software in 2026 |
| `/buyers-guide/channel-management-software` | Channel Management Software: The Best 8 Platforms Compared |

Every page shares one Header and one Footer (`src/app/layout.tsx`).

## Development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project layout

- `src/components/layout`: Header, Footer (+ AI shortcuts, tooltips, wordmark), grid background.
- `src/components/shared`: guide building blocks (hero, sections, comparison table, product card, lists, CTA, back link) and the shared `guide.module.css`.
- `src/components/buyers-guide`: gallery card and styles.
- `src/data`: guide content (`ai-coaching-guide.ts`, `channel-guide.ts`, `prm-guide.ts`, `prm-evaluation.ts`), gallery entries (`buyer-guides.ts`) and navigation.
- `src/lib`: SEO helpers, reading time, AI-provider shortcuts.

## SEO

- Every page is `noindex, nofollow` (`NOINDEX_ROBOTS` in `src/lib/seo.ts`). There is no sitemap and no robots.txt.
- Canonical URLs resolve against `NEXT_PUBLIC_SITE_URL`. If it is unset, they fall back to `http://localhost:3000`. Set it to the production origin when deploying.
