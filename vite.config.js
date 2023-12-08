


import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build: {
      rollupOptions: {
        input: {
          appComponent1: fileURLToPath(new URL('e1.html', import.meta.url)),
          appComponent2: fileURLToPath(new URL('e2.html', import.meta.url)),
          styling: fileURLToPath(new URL('src/s.scss', import.meta.url)),
        },
        output: {
            entryFileNames: `assets/pck/[name].js`,
            chunkFileNames: `assets/base/[name].js`,
            
            
            
            /**
             * Given the output file a name based on conditions.
             * @param {*} assetInfo 
             * @returns 
             */
            assetFileNames: (assetInfo) => {
              // assetFileNames: `assets/[name].[ext]`,
              if (assetInfo.name == 'styling.css')
                return 'assets/css/holmatro.css';
              return assetInfo.name;
            }
        }
      },
    },
  })