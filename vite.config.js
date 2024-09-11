import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the build
    sourcemap: true, // Optional: Generates source maps for debugging
  },
  server: {
    port: 3000, // Local development port
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Local JSON Server during development
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 3000, // Port for previewing the production build
  },
});
