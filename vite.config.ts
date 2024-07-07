import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cross-stitch-color-conversion/',
  plugins: [react()],
  resolve: {alias: []},
})
