# Ridhi Jolly 

Personal portfolio for an AI / platform PM search. Built as a live WCAG 2.1 AA proof point: skip link, landmarks, keyboard navigation, visible focus, 4.5:1 contrast, labeled forms, and `prefers-reduced-motion`.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- `next/image` and `next/font`
- Deployable to Vercel with zero extra config

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit content

All copy, links, metrics, and project metadata live in a single file:

```
data/content.ts
```

You should not need to touch JSX to update a title, bullet, or URL.

The downloadable resume is `public/resume.pdf`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. Leave build settings at defaults (`next build`, output `.next`).
4. Add a production domain if you have one, then set `site.url` in `data/content.ts` to match.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## SEO

- Title: `Ridhi Jolly — AI Product Manager`
- Meta description, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`
- JSON-LD `Person` schema
- Generated OG image at `/opengraph-image` (and a static placeholder at `public/og-image.png`)

## Accessibility

This site is intended to meet WCAG 2.1 AA. Before you send it to a recruiter, run:

- Keyboard-only pass (Tab, Enter, Escape on the mobile menu)
- [axe DevTools](https://www.deque.com/axe/devtools/) or Lighthouse accessibility
- Contrast check on both light and dark themes
- Screen reader spot-check of the skip link, hero, experience metrics, and contact form

## Project structure

```
app/           Pages, metadata, OG image, sitemap
components/    UI sections
data/          Editable content
public/        Resume PDF, brand mark, OG placeholder
```
