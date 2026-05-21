# MY Travels & Holidays

A boutique brochure site for bespoke Maldivian escapes — hand-picked resorts and
guest houses, presented as a cinematic single-page-app.

[Live preview](https://dev9690.dm7hanrwrosk1.amplifyapp.com/) (AWS Amplify)

---

## What's in here

- **React 18 SPA** bootstrapped with Create React App, routed with `react-router-dom`.
- **Design system** in `src/index.css` — typography, palette (deep ocean teal,
  warm sand, cream), spacing scale, motion tokens. Cormorant Garamond paired
  with Inter.
- **Pages**
  - `Home` — full-bleed cinematic hero, brand story, value props, featured
    resorts, contact section, footer.
  - `Resorts` / `GuestHouses` — branded page hero with breadcrumbs +
    responsive card grid.
  - `ResortSummary` — cinematic fade carousel with overlaid resort name and
    slogan, "About" block, three-up "Explore" cards (accomodation, dining,
    recreation).
  - `GridPage` — zig-zag image / text grid used for accomodation, dining and
    recreation detail pages.
- **Reusable components** under `src/components/` — `Header` (scroll-aware,
  transparent over heroes), `Footer`, `PageHero`, `ImageCard`, `ResortCard`,
  `ContactForm`.

## Getting started

```bash
nvm use         # picks up the version pinned in .nvmrc
npm install
npm start       # dev server at http://localhost:3000
```

## Scripts

| Command         | What it does                                    |
| --------------- | ----------------------------------------------- |
| `npm start`     | Run the dev server with hot reload.             |
| `npm run build` | Produce a minified production build in `build/`.|
| `npm test`      | Run the Jest test runner.                       |

## Conventions

- **CSS Modules** per component (`Component.module.css`). One global
  stylesheet — `src/index.css` — holds the design tokens, base typography and
  a few overrides for `react-responsive-carousel`.
- **Imagery** — hero / card images are colocated with the components that use
  them. Resort carousel slides are sourced from public Google Drive thumbnails
  via `imgUrls.js` (capped per resort to keep request volume polite).
- **Contact form** uses `emailjs` directly from the browser; the public
  template ID is in source intentionally.

## Stack

`React 18` · `react-router-dom 6` · `react-icons` · `react-responsive-carousel` ·
`react-hook-form` · `@emailjs/browser`.
