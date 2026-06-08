# DN Realty — Dream Neighborhood showcase site

A fast, modern demo real-estate website ("DN Realty") rebuilt from scratch to
replace the previous Webflow site. Its purpose is to **show realtors what the
[Dream Neighborhood](https://www.dreamneighborhood.com) technology looks like on
their own site** — the one-line **popup** on every listing and the full
**embedded explorer**.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
output as a fully static site, ready to host on **Netlify**.

## Tech stack

- **Astro 5** — static site generator, ships almost zero JS
- **Tailwind CSS v4** — via the official Vite plugin (`@tailwindcss/vite`)
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`
- No backend required — pure static output in `dist/`

## Project structure

```
src/
  components/      Header, Footer, PropertyCard, Icon
  data/            site.js (config/content) · properties.js (listings + agents)
  layouts/         Base.astro (head/SEO, structured data, Dream Neighborhood popup)
  pages/
    index.astro                 Home
    listings/index.astro        Listings grid (search + filter + sort)
    listings/[slug].astro       Listing detail
    neighborhood-explorer.astro Embedded explorer (inline.js)
    about.astro · contact.astro · 404.astro
  styles/global.css             Design tokens + components
public/            favicon.svg, robots.txt
```

## Dream Neighborhood integration

Use **only** the official snippets (no partner IDs or extra attributes in this repo).

### Popup (entire site)

One script at the bottom of `src/layouts/Base.astro` (skipped on pages that pass
`disablePopup`, e.g. 404 and the Neighborhood Explorer page):

```html
<script src='https://app.dreamneighborhood.com/explorer/sdk.js' async></script>
```

Listing pages still emit JSON-LD, Open Graph address tags, and microdata in
`Base.astro` so the popup can resolve the property address.

### Embedded explorer

Only on `neighborhood-explorer.astro`:

```html
<div id="dn-explorer"></div>
<script src="https://app.dreamneighborhood.com/explorer/inline.js" async></script>
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321 (live reload)
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

## Deploying to Netlify

`netlify.toml` is preconfigured (build command `npm run build`, publish `dist`).

1. Push this repo to GitHub (`motormouthvis/dream-neighborhood-realty`).
2. In Netlify: **Add new site → Import an existing project → GitHub** and pick the repo.
3. Netlify reads `netlify.toml` automatically — no manual settings needed.
4. Attach the custom domain `www.dreamneighborhoodrealty.com` when you are ready.

> After the domain is finalized, update `site` in `astro.config.mjs` if it changes.
