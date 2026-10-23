# Anjna Locks & Hardware

A responsive product catalogue website for Agrawal Industries, Aligarh. Built with vanilla JavaScript and Vite, using product photographs extracted from the supplied **Anjana Ellin catalogue 2024.pdf**.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

The production output is `dist/`, suitable for a static web host. All pages use hash routes, so the host needs no special rewrite rules.

## Deployment on Tencent EdgeOne Pages

The site is deployed from this GitHub repository to EdgeOne Pages. Use:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Use the default root base path for EdgeOne. Product images, fonts, the wooden-door material and the original PDF are served locally. The obsolete GitHub Pages workflow has been removed so pushes use the selected EdgeOne deployment instead of triggering a second, unconfigured publisher.

## Included

- Home, Our Story, Products, Catalogue and Contact pages.
- A framed walnut-look wooden door with brass accents, a turning handle and a warm light reveal swings open from its left edge on the first visit of each browser session. Skip button, Escape support, reduced-motion preference and footer replay control are included.
- Search and category filters across 20 catalogue entries, product details dialogs and model-specific enquiry links.
- Original downloadable 24-page catalogue and original catalogue product photos.
- Interactive finish selector and separate Ellin bathroom collection.
- Responsive navigation and keyboard-accessible controls.

## Content and contact limitations

Product codes, documented sizes, categories and company location come from the supplied catalogue. Descriptive product titles are editorial labels. Some entries represent a complete catalogue collection rather than a single SKU. Finishes are a catalogue-wide list, not a claim that every model supports every finish. Current prices are intentionally omitted; the downloadable historical PDF still contains its original 2024 prices.

Verified business phone, WhatsApp, email, full street address, team portraits and customer testimonials have not been supplied. The catalogue's designer credit is **not** used as a business contact. The contact form validates and copies an enquiry or downloads it as text; it does not send or store the message. Add a confirmed contact destination or backend before enabling direct submission.

Manrope is self-hosted through the pinned `@fontsource-variable/manrope` package; the website does not request Google Fonts at runtime. Product assets and the catalogue are also served locally. Larger body text, visible product actions, six homepage category cards and featured category tabs make the collection easier to browse.

## Editing

Product data, page content and interactions: `src/main.js`. Shared component styles: `src/style.css`. Updated layout, typography and framed entrance animation: `src/redesign.css`. Local product assets: `public/images/`. Original PDF: `public/Anjna-Ellin-Catalogue-2024.pdf`.

## Brand palette

Primary green: `#9bc53d`. Main surfaces: `#fffdf7`, `#f5f1e6`, `#c9c4b4`. Text and contrast: `#1c1c19`, `#5c5a52`. Decorative gold: `#b8923a`. Product photographs and finish swatches retain their original colours. The timber grain is a local SVG material; no external texture requests are needed.

## Motion and interaction

The architectural homepage includes an interactive wooden door that reveals a working collection link, three hardware stories with native-scroll chapter highlighting, one-time staggered reveals, a large live finish specimen, product hover depth, route and filter transitions, sticky navigation and a reading progress line. `src/motion.js` scopes observers and listeners to each route and cleans them up when navigating. Animations use CSS transforms/opacity and native browser APIs; scrolling stays native. Touch devices omit pointer parallax, and reduced-motion preferences keep content immediately visible and the door controls functional.

The display typeface is self-hosted DM Serif Display, paired with Manrope for navigation, labels and body text. Both are pinned dependencies, so the site makes no font requests to external services.
