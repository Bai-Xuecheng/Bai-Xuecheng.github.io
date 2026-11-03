# Cursor implementation prompt

You are editing a minimal academic personal website built with Astro. Preserve the existing information architecture and visual direction unless I explicitly ask for a redesign.

## Design direction
- Minimal academic website, not a startup landing page or commercial portfolio.
- White background, charcoal text, muted grey secondary text, restrained academic blue links.
- Strong typography, generous whitespace, thin dividers, no gradients, no stock photos, no unnecessary animation.
- Responsive on desktop, tablet, and mobile.
- Keep the site accessible: semantic headings, keyboard-visible focus states, descriptive link labels, and sufficient contrast.

## Content rules
- All personal details, publications, research areas, news, and project descriptions should live in `src/data/site.js`.
- Do not invent publication titles, authors, venues, acceptance status, contribution statements, dates, metrics, or external links.
- Preserve the exact author order supplied in the data. Keep the author's own name bold in publication lists.
- Do not turn unpublished work into a publication. Label work in progress clearly.
- Keep all public-facing content in English.

## Technical rules
- Use Astro components and static rendering; do not add a backend or database.
- Keep GitHub Pages deployment working through `.github/workflows/deploy.yml`.
- The repository is intended to be named `USERNAME.github.io`, so the site is hosted at the domain root.
- Before finishing, run `npm run build` and fix all build errors.
- Avoid adding dependencies unless there is a clear benefit.

## Current task
[Describe the requested change here.]
