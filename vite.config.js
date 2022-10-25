import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {},
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // esbuildCommonjs(['vite-dev-demo-sheldon'])
      ]
    }
  },
  plugins: [
    reactRefresh({
      include: 'src/*.tsx',
    }),
    viteCommonjs({
      exclude: ['@react-refresh'],
    }),
  ]
})
