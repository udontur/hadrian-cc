// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
          {
              provider: fontProviders.google(),
              name: "Manrope",
              cssVariable: "--font-manrope"
          },
          {
              provider: fontProviders.google(),
              name: "Shantell Sans",
              cssVariable: "--font-shantell"
          }
      ],
      svgo: true
  },

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [react()]
});