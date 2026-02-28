# Mitchell Naylor — Personal Site

A modern personal website for Mitchell Naylor, Staff Applied Researcher at GitHub Copilot.

## Stack

- **Framework**: [Astro](https://astro.build/) v5 — zero client-side JavaScript, pure static HTML + CSS
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3 with custom CSS variables for light/dark mode
- **Images**: Astro's built-in `<Image />` component for automatic optimization (WebP conversion, responsive sizes)
- **Deployment**: GitHub Actions → GitHub Pages

## Development

### Prerequisites

- Node.js 20+
- npm

### Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro        # Shared <head>, meta tags, global styles
├── pages/
│   └── index.astro             # Single landing page
├── components/
│   ├── Hero.astro              # Name, title, photo, tagline, social links
│   ├── Experience.astro        # Work history timeline
│   ├── Publications.astro      # Papers, books, open source
│   └── Education.astro         # Degrees
├── styles/
│   └── global.css              # Tailwind directives + custom CSS variables
└── assets/
    └── mitch.jpg               # Profile photo (processed by Astro's image pipeline)
public/
└── favicon.svg
.github/workflows/
└── deploy.yml                  # CI/CD: build + deploy to GitHub Pages on push to master
```

## Deployment

Pushes to the `master` branch automatically trigger a GitHub Actions workflow that:

1. Installs Node.js 20 and project dependencies
2. Runs `astro build` to produce the static `dist/` output
3. Uploads the artifact and deploys it to GitHub Pages

The live site is available at: **https://mnaylor5.github.io/personal-site**

## Features

- **Zero JavaScript** shipped to the browser — pure static HTML + CSS
- **Dark/light mode** respecting `prefers-color-scheme` via CSS variables (no JS toggle needed)
- **Responsive** layout for mobile, tablet, and desktop
- **Accessible** — semantic HTML5, proper heading hierarchy, ARIA labels
- **Optimized images** — the 9.7 MB `mitch.jpg` is converted to WebP and resized at build time
- **Subtle CSS animations** — fade-in effects, no JS animation frameworks
