import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the GitHub Pages user site root: https://thecotne.github.io/
const config = defineConfig({
  base: '/',
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      // Full static site generation: prerender every page to static HTML so the
      // output can be served by GitHub Pages with no server runtime.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
      },
      pages: [{ path: '/', prerender: { enabled: true } }],
    }),
    viteReact(),
  ],
})

export default config
