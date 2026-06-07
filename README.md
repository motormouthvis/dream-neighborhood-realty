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
  components/      Header, Footer, PropertyCard, Icon, NeighborhoodSDK
  data/            site.js (config/content) · properties.js (listings + agents)
  layouts/         Base.astro (head/SEO, structured data, popup SDK)
  pages/
    index.astro                 Home
    listings/index.astro        Listings grid (search + filter + sort)
    listings/[slug].astro       Listing detail (popup auto-detects address)
    neighborhood-explorer.astro Embedded explorer demo (iframe)
    about.astro · contact.astro · 404.astro
  styles/global.css             Design tokens + components
public/            favicon.svg, robots.txt
```

## Dream Neighborhood integration

All configuration lives in `src/data/site.js` under `dreamNeighborhood`.
**Partner ID `64868`** (resolved from the live site's domain).

### Popup (flagship — one line of code)

`src/components/NeighborhoodSDK.astro` renders the single snippet, included on
every page via the layout:

```html
<script src="https://app.dreamneighborhood.com/explorer/sdk.js"
        data-partner-id="64868"
        data-accent-color="#3B5550"
        data-position="right" async></script>
```

The SDK auto-detects the listing address. On listing pages we emit three
redundant signals so detection is rock-solid (`src/layouts/Base.astro`):

1. JSON-LD `SingleFamilyResidence` with a `PostalAddress`
2. OpenGraph tags (`og:street-address`, `og:locality`, `og:region`, `og:postal-code`)
3. Schema.org microdata (`itemprop="streetAddress"`, etc.) on the visible address

### Embedded explorer

`neighborhood-explorer.astro` embeds the full panel directly as an iframe:

```html
<iframe class="dn-exp-inline-iframe"
        src="https://app.dreamneighborhood.com/explorer/widget/?partner=64868&widget_number=1&embed=inline"></iframe>
```

The `dn-exp-inline-iframe` class is detected by the SDK, which then suppresses
the floating popup on that page so the two demos don't overlap.

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
4. Attach the custom domain `www.dreamneighborhoodrealty.com`. Because the
   Dream Neighborhood popup is configured by **partner ID** (not just domain),
   the widget works on the Netlify preview URL too.

> After the domain is finalized, update `site` in `astro.config.mjs` if it changes.
