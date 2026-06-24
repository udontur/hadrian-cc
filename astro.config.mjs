// @ts-check

import react from "@astrojs/react"
// import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Manrope",
            cssVariable: "--font-sans",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Shantell Sans",
            cssVariable: "--font-heading",
        }
    ],

    integrations: [react()],
})
