import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 2000,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: [
        '**/dist/**',
        '**/0_WBS/**',
        '**/public/images/**',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.webp',
        '**/*.mp4',
        '**/*.git/**'
      ]
    }
  }
})
// Reload static assets cache (face_painting_hero added - 2026-09-17)
