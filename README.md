# Thapelo Moletsane — CV

A React 19 + Vite CV site. All content is static and rendered client-side; there is no backend,
router, or data fetching.

## Requirements

- Node.js 20 or newer
- npm (bundled with Node.js)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173> and reloads on change (Vite HMR).

## Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Start the dev server with hot module replacement |
| `npm run build` | Produce an optimised production build in `dist/` |
| `npm run preview` | Serve the built `dist/` locally to check the production output |
| `npm run lint` | Run ESLint over the repository |

## Deployment

Build with `npm run build`, then publish the contents of `dist/` to any static host: Vercel,
Netlify, GitHub Pages, or traditional web hosting. No server-side configuration or SPA rewrite
rules are needed.

Vite's `base` is set to `'./'` in `vite.config.js`, so every asset URL in the build is relative.
That keeps the same `dist/` usable both on a root domain and on a GitHub Pages **project** site
(`https://<user>.github.io/<repo>/`), where an absolute `/assets/...` path would 404. If you later
serve from a fixed sub-path and prefer absolute URLs, change `base` to that path (for example
`base: '/CV/'`).

## Customization

- **Content** lives in the component data arrays under `src/components/`:
  `Experience.jsx`, `Skills.jsx`, `Education.jsx`, and the header/contact copy in `Header.jsx`
  and `Contact.jsx`.
- **Design tokens** — colours, radii, shadows, and section/heading spacing — live in `:root` in
  `src/index.css`. Change them there rather than hardcoding values in component styles.
- **Shared layout classes** — `.section`, `.section-title`, `.card`, `.container`, and `.sr-only`
  — are also defined in `src/index.css`.
- **Per-section styles** live next to each component (`src/components/*.css`); they share the
  global cascade, so there is no CSS-in-JS or CSS Modules.
- **Metadata and structured data** (title, description, Open Graph, Twitter card, `Person`
  JSON-LD) are in `index.html`. Add `og:url` and a 1200×630 `og:image` once a public deployment
  URL and image asset exist.
