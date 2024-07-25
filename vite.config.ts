import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { peerDependencies } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-styled-components', { displayName: false }]],

        env: {
          development: {
            plugins: [
              ['babel-plugin-styled-components', { displayName: true }],
            ],
          },
        },
      },
    }),
    tsconfigPaths(),
    dts({
      include: ['src/'],
      exclude: ['src/theme/styled.d.ts'],
    }),
  ],
  publicDir: false,
  build: {
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'jenesei-react-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `jenesei-react-ui.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
})
