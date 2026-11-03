# Xuecheng Bai — Academic Website

A minimal, responsive academic personal website built with **Astro** and deployed to **GitHub Pages**.

## 1. Before you start

You need:

- A GitHub account
- Node.js 22 or later (Node.js 24 is used by the deployment workflow)
- Git
- Cursor or another code editor

## 2. Personalize the website

### A. Set your GitHub username

Open `astro.config.mjs` and replace:

```js
site: 'https://YOUR_GITHUB_USERNAME.github.io',
```

with your real GitHub Pages address, for example:

```js
site: 'https://Bai-Xuecheng.github.io',
```

This starter assumes that your repository is named exactly `YOUR_GITHUB_USERNAME.github.io`, so the site is served from the domain root and `base` remains `/`.

### B. Update your profile and links

Edit `src/data/site.js`. Update at least:

- `profile.email`
- `profile.links.googleScholar`
- `profile.links.github`
- `profile.links.orcid`
- Education dates and any publication metadata that has changed

The profile, research interests, news, publications, and project cards are all managed in this one file.

**Important:** Check every author list, equal-contribution note, publication status, and link before making the site public. The current content is an editable starting point, not a substitute for your final bibliographic verification.

## 3. Run locally in Cursor

Open this folder in Cursor. In the integrated terminal, run:

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

To test the production build:

```bash
npm run build
npm run preview
```

## 4. Create the GitHub repository

1. Create a **public** repository named exactly `YOUR_GITHUB_USERNAME.github.io`.
2. Do not initialize it with a README if you are pushing this local project as the first commit.
3. In this project folder, run:

```bash
git init
git add .
git commit -m "Create academic website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` in the remote URL with your actual username.

## 5. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for `Deploy academic website to GitHub Pages` to complete.
5. Your website will be available at `https://YOUR_GITHUB_USERNAME.github.io`.

Every push to the `main` branch will trigger a new deployment.

## 6. Add a custom domain (optional)

If you later want to use a custom domain, configure the domain's DNS records with your provider, add a `public/CNAME` file containing the domain, and update the `site` value in `astro.config.mjs`. For a custom domain, remove the GitHub Pages `base` path configuration if you add one.

## 7. Project structure

```text
.
├── .github/workflows/deploy.yml   # Automatic GitHub Pages deployment
├── public/favicon.svg             # Site icon
├── src/
│   ├── components/
│   │   ├── ProjectCard.astro
│   │   ├── PublicationList.astro
│   │   └── SectionHeading.astro
│   ├── data/site.js               # All editable personal and academic content
│   ├── layouts/BaseLayout.astro   # Shared header, navigation, and footer
│   ├── pages/
│   │   ├── index.astro             # Home
│   │   ├── research.astro
│   │   ├── publications.astro
│   │   ├── projects.astro
│   │   ├── experience.astro
│   │   └── contact.astro
│   └── styles/global.css           # Global visual system and responsive styles
├── astro.config.mjs
└── package.json
```

## Design principles

- Minimal academic visual language: white background, restrained blue links, neutral typography, fine dividers.
- Content-first layout with no stock imagery or decorative animation.
- Responsive navigation and publication/project layouts.
- Centralized content in `src/data/site.js` so academic updates do not require editing page templates.
