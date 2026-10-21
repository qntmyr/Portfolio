# mayerquentin.com

Personal portfolio of Quentin Mayer, full-stack developer in Prague.

Built with Next.js (App Router) and deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `src/content/` holds every text on the site: journey, projects, experience, life. Edit these files to change copy; texts in `[brackets]` are placeholders still to write. The case-study texts (`projects.ts`) and `life.ts` are kept for the detail pages planned later.
- `src/assets/photos/` holds the photos. Each one is declared once in `src/content/photos.ts` with its alt text and crop (`focus`).
- `src/assets/screens/` holds the project screenshots (names blurred before they go in). They are declared on each project in `src/content/projects.ts`.
- `src/app/` holds the pages. For now the site is a single page (`/`); the Work and Life detail pages will come later.
- `public/Quentin_Mayer_CV.pdf` is the CV behind the "Download CV" button.

## Branches

Work happens on `pre-prod`. `prod` is the production branch deployed by Vercel and is only updated by merging `pre-prod`.
