# Mitchell Naylor — Personal Site

This GitHub repo is built to serve my personal website. It's built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/). 

## Development

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

