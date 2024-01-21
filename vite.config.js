import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import {browserslistToTargets} from 'lightningcss';
// import browserslist from 'browserslist';

// https://vitejs.dev/config/
export default defineConfig({
  // css: {
  //   transformer: 'lightningcss',
  //   lightningcss: {
  //     targets: browserslistToTargets(browserslist('>= 0.25%'))
  //   }
  // },
  build: {
    // cssMinify: 'lightningcss',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        components: path.resolve(__dirname, './src/components/index.js'),
        utility: path.resolve(__dirname, './src/utility/index.js'),
        // theme: path.resolve(__dirname, './src/lib/theme/theme.css'),
      },
      name: 'react-component-library-vite',
      // the proper extensions will be added
      // fileName: 'react-lib-vite',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react','react-dom','styled-components'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
    // sourcemap:true,
    emptyOutDir: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
