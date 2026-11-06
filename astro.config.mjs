import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Actions usa '/Landing-mirador-del-cielo', en local siempre usa '/'
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlospacheco0.github.io',
  base: isGitHubActions ? '/Landing-mirador-del-cielo' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});

