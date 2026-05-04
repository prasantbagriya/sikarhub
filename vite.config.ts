import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'node-fetch': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'node-fetch/src/index.js': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'cross-fetch': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'isomorphic-fetch': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'whatwg-fetch': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'formdata-polyfill': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'formdata-polyfill/FormData.js': path.resolve(__dirname, 'src/fetch-polyfill.js'),
        'formdata-polyfill/esm.min.js': path.resolve(__dirname, 'src/fetch-polyfill.js'),
      },
    },
    optimizeDeps: {
      exclude: ['node-fetch', 'formdata-polyfill', 'cross-fetch', 'isomorphic-fetch', 'whatwg-fetch'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
