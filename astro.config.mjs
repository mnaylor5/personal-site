import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mnaylor5.github.io',
  base: '/personal-site',
  integrations: [tailwind()],
  output: 'static',
  image: {
    // Use Astro's built-in image optimization
    remotePatterns: [],
  },
});
