import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production') // evita errori con process
  },
  base: './',   // per risorse relative
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'SchemaEditorBundle', // namespace globale
      formats: ['iife'],           // IIFE = bundle standalone
      fileName: () => 'index'      // output: dist/index.js
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      }
    }
  }
});