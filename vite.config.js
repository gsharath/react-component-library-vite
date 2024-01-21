import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
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
  },
  plugins: [react()],
})
