import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { liveDesigner } from '@pinegrow/vite-plugin';

export default defineConfig({
  plugins: [
    vue(),
    liveDesigner({
      // Configuration for Pinegrow Live Designer
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@assets": "./src/assets/",
    },
  },
});
