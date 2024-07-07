import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cross-stitch/',
  plugins: [react()],
  resolve: {alias: []},
})
