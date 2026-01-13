# Macau Studies Journal Home (Mock)

This project is a **Next.js 14 (App Router)** mock of an academic journal homepage inspired by the information architecture and layout patterns of major academic publishers.

## Getting started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Project structure

- `app/` – App Router pages
- `components/` – UI components
- `data/` – Local data sources for journal, articles, and issues

## Updating content

All journal content is driven by local TypeScript data files:

- `data/journal.ts` – Journal metadata, hero content, cover image
- `data/articles.ts` – Article list used for tabs and search
- `data/issues.ts` – Issue archive list

Update these files to change titles, metrics, and article listings. No database is required.

## Placeholder links and assets

External links are configured with placeholder URLs (e.g. `https://example.com/...`) and can be replaced with real destinations when integrating with production systems.
