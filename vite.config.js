import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs keep the build portable: `dist/` works on a root domain
  // (Vercel/Netlify/custom domain) and on GitHub Pages project sites served
  // from `https://<user>.github.io/<repo>/`.
  base: './',
  plugins: [react()],
})
