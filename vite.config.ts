import typescript from '@rollup/plugin-typescript'
// import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { peerDependencies } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    // tsconfigPaths(),
    dts({
      include: ['src/'],
      exclude: ['src/theme/styled.d.ts'],
    }),
  ],
  publicDir: false,
  build: {
    manifest: true,
    minify: true,
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'jenesei-ui-react',
      formats: ['es', 'umd'],
      fileName: (format) => `jenesei-ui-react.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: true,
          declaration: true,
          outDir: 'dist',
        }),
      ],
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          'styled-components': 'styled',
          'styled-reset': 'reset',
          react: 'React',
          'react-loading': 'ReactLoading',
          'react-number-format': 'reactNumberFormat',
          '@tanstack/react-virtual': 'reactVirtual',
          gsap: 'gsap',
          'js-cookie': 'Cookies',
          'react-i18next': 'reactI18next',
        },
      },
    },
  },
})
