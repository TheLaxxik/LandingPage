// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://taskflow.esticode.sk',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: 'jh80nfpn',
      dataset: 'production',
      useCdn: false,
    })
  ]
});