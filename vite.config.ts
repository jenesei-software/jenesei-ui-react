import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { peerDependencies } from './package.json'

export default defineConfig(() => {
  const isStorybookBuild = process.env.BUILD_STORYBOOK === 'true'

  return {
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
              plugins: [['babel-plugin-styled-components', { displayName: true }]],
            },
          },
        },
      }),
      tsconfigPaths(),
      !isStorybookBuild &&
        dts({
          include: ['src/'],
          exclude: ['src/declaration/styled.d.ts'],
          rollupTypes: true,
          insertTypesEntry: true,
          tsConfigFilePath: './tsconfig.json',
        }),
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: 'dist',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'jenesei-ui-react',
        formats: ['es', 'umd'],
        fileName: (format) => `jenesei-ui-react.${format}.js`,
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
        output: {
          sourcemap: false,
          globals: {
            // 'styled-components': 'styled',
            // 'react-ripple-click': 'reactRippleClick',
            // 'styled-reset': 'reset',
            // react: 'react',
            // 'react-loading': 'ReactLoading',
            // 'react-number-format': 'reactNumberFormat',
            // '@tanstack/react-virtual': 'reactVirtual',
            // gsap: 'gsap',
            // 'js-cookie': 'Cookies',
            // 'react-i18next': 'reactI18next',
            // 'react-helmet': 'reactHelmet',
            // 'react-toggle': 'ReactToggle',
            // 'react-dom': 'ReactDOM',
            // moment: 'moment',
            // yup: 'yup',
            // 'awesome-phonenumber': 'awesomePhonenumber',
            // 'country-list-with-dial-code-and-flag': 'FullCountryList',
          },
        },
      },
    },
  }
})
