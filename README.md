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

## GitHub Pages

The included `.github/workflows/pages.yml` builds and deploys pushes to `main`. In the repository's Settings → Pages, select **GitHub Actions** as the build source. The workflow uses `/Anjnalocks-hardware/` as its base path, including local product images and PDF links.

To validate the same build locally:

```sh
npm run build -- --base /Anjnalocks-hardware/
npm run preview
```

Open the preview server at `/Anjnalocks-hardware/` (including the trailing slash).

## Included

- Home, Our Story, Products, Catalogue and Contact pages.
- A single door swings open from its left hinge on the first visit of each browser session. Skip button, Escape support, reduced-motion preference and footer replay control are included.
- Search and category filters across 20 catalogue entries, product details dialogs and model-specific enquiry links.
- Original downloadable 24-page catalogue and original catalogue product photos.
- Interactive finish selector and separate Ellin bathroom collection.
- Responsive navigation and keyboard-accessible controls.

## Content and contact limitations

Product codes, documented sizes, categories and company location come from the supplied catalogue. Descriptive product titles are editorial labels. Some entries represent a complete catalogue collection rather than a single SKU. Finishes are a catalogue-wide list, not a claim that every model supports every finish. Current prices are intentionally omitted; the downloadable historical PDF still contains its original 2024 prices.

Verified business phone, WhatsApp, email, full street address, team portraits and customer testimonials have not been supplied. The catalogue's designer credit is **not** used as a business contact. The contact form validates and copies an enquiry or downloads it as text; it does not send or store the message. Add a confirmed contact destination or backend before enabling direct submission.

Google Fonts are optional; local system serif and sans-serif fallbacks work without external requests. Product assets and the catalogue are served locally.

## Editing

Product data, page content and interactions: `src/main.js`. Styling and door animation: `src/style.css`. Local product assets: `public/images/`. Original PDF: `public/Anjna-Ellin-Catalogue-2024.pdf`.
