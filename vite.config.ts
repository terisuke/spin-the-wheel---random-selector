import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/spin-the-wheel---random-selector/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
