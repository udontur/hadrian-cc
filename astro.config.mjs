// @ts-check

import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Manrope",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.google(),
        name: "Shantell Sans",
        cssVariable: "--font-heading",
      },
      {
        provider: fontProviders.google(),
        name: "VT323",
        cssVariable: "--font-mono",
      },
      {
        provider: fontProviders.google(),
        name: "LXGW WenKai Mono TC",
        cssVariable: "--font-chinese"
      }
    ],
    svgo: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})
