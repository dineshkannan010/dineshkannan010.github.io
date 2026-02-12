import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',               // <--- Tells Vite to build into the "docs" folder
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
