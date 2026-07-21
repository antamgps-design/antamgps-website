<<<<<<< HEAD
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
=======
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ vite:{ plugins:[tailwindcss()] } });
>>>>>>> bdd1a8d (Deploy An Tam GPS data build v1)
