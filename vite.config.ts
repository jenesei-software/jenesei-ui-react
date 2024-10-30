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
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      react(),
      tsconfigPaths(),
      !isStorybookBuild &&
        dts({
          include: ['src/'],
          exclude: ['src/declaration/styled.d.ts', 'src/declaration/jenesei-web-id-api.d.ts'],
          rollupTypes: true,
          insertTypesEntry: true,
          tsconfigPath: './tsconfig.json'
        })
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: './dist',
      rootDir: './src',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'jenesei-ui-react',
        formats: ['es', 'umd'],
        fileName: format => `jenesei-ui-react.${format}.js`
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
        output: {
          globals: {
            'styled-components': 'styled',
            'styled-reset': 'reset',
            react: 'React',
            'react-dom': 'ReactDOM',
            moment: 'moment',
            'react-ripple-click': 'reactRippleClick',
            'react-loading': 'ReactLoading',
            gsap: 'gsap',
            'awesome-phonenumber': 'awesomePhonenumber',
            'country-list-with-dial-code-and-flag': 'FullCountryList',
            'react-number-format': 'reactNumberFormat',
            '@tanstack/react-virtual': 'reactVirtual',
            'react-toggle': 'ReactToggle',
            'react-helmet': 'reactHelmet',
            'js-cookie': 'Cookies'
          }
        }
      }
    }
  }
})
