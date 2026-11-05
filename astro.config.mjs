import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlospacheco0.github.io',
  base: '/Landing-mirador-del-cielo',
  vite: {
    plugins: [tailwindcss()]
  }
});

