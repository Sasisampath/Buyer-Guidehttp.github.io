# JazzHQ Buyer’s Guides

A single Next.js App Router site for the JazzHQ software buyer’s guides.

## Routes

- `/` redirects to `/buyers-guide`
- `/buyers-guide` lists the PRM and Channel Management guides
- `/buyers-guide/best-prm-software` contains the 10-platform PRM guide
- `/buyers-guide/channel-management-software` contains the 8-platform Channel Management guide

All pages are configured as `noindex` for this standalone project.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```
