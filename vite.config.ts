import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Deployed to GitHub Pages at https://bala4426.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
