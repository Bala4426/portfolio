# Balamurugan V — Developer Portfolio

A single-page developer portfolio built with React, Vite and TypeScript.
All content is sourced from `Balamurugan-V-Resume.pdf` — nothing is invented.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Checks

```bash
npm run lint       # oxlint
npx tsc -b         # type check
npm run build      # type check + production build into dist/
npm run preview    # serve the production build
```

## Where to edit content

All editable content lives in `src/data/` — no component changes needed.

| File | Contains |
| --- | --- |
| `profile.ts` | Name, headline, summary, About paragraphs, contact details, resume path |
| `skills.ts` | Skill categories and entries |
| `experience.ts` | Work history and education |
| `projects.ts` | Project cards (**currently drafts — needs your input**) |
| `capabilities.ts` | "What I Build" items |
| `nav.ts` | Navigation links |

### Showing your phone number

Phone is hidden by default. In `src/data/profile.ts`:

```ts
showPhone: true,
```

### Adding LinkedIn / GitHub

Set `linkedin` / `github` in `src/data/profile.ts`. Empty strings hide the links.

### Publishing a project

Open `src/data/projects.ts`, fill in `problem`, `solution`, `contribution`,
`tech`, `features`, set a `status`, then set `draft: false`. Add `github` /
`demo` only if a real public URL exists. Do not paste employer-confidential
code, customer names or internal URLs.

## Replacing the resume PDF

Drop the new file at `public/Balamurugan-V-Resume.pdf` (same name), or change
`resumeFile` / `resumeDownloadName` in `src/data/profile.ts`.

## Deploy

### Vercel
```bash
npm i -g vercel && vercel
```
Framework: Vite · Build: `npm run build` · Output: `dist`

### Netlify
Build command `npm run build`, publish directory `dist`.
Optional `public/_redirects` for the 404 page:
```
/*  /index.html  200
```

### GitHub Pages
Set the repo base in `vite.config.ts`:
```ts
export default defineConfig({ plugins: [react()], base: '/<repo-name>/' })
```
Then build and publish `dist/` (e.g. via `gh-pages` or a Pages Action).
Note: with a non-root `base`, update `resumeFile` in `profile.ts` to match.

## Notes

- The 404 view renders for any path other than `/` — no router dependency.
- Open Graph has no image yet; add `public/og.png` and an `og:image` tag
  in `index.html` if you want a link preview card.
