import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'url'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        // pages, components or other separated code.
        wizard: fileURLToPath(new URL('wizard.html', import.meta.url)),
        upload: fileURLToPath(new URL('upload.html', import.meta.url)),

        // file containing shared styling.
        theme: fileURLToPath(new URL('src/theme.scss', import.meta.url)),
      },
      output: {
        /**
         * A function that is called per chunk to return such a pattern. Chunk files contain shared syntax.
         * @param {*} chunkInfo 
         * @returns 
         */
        chunkFileNames: (chunkInfo) => {
          return `assets/js/theme.js`;
        },

        /**
         * A function that is called per entry chunk to return such a pattern.
         * @param {PreRenderedChunk} entryInfo 
         * @returns 
         */
        entryFileNames: (entryInfo) => {
          return `assets/js/pages/${entryInfo.name}.js`;
        },

        /**
         * A function that is called per asset to return such a pattern.
         * @param {*} assetInfo 
         * @returns 
         */
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "theme.css") {
            return `assets/css/${assetInfo.name}`;
          }
          return `assets/css/pages/${assetInfo.name}`;
        }
      }
    },
  },
});
