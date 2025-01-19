/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { peerDependencies } from './package.json'

export default defineConfig(() => {
  const isStorybook = process.env.NODE_ENV === 'storybook'
  const isDev = process.env.NODE_ENV === 'dev'

  console.log('isStorybookBuild: ', String(isStorybook))
  console.log('isDev: ', String(isDev))

  return {
    resolve: {
      alias: {
        '@local': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      react(),
      tsconfigPaths(),
      isDev &&
        visualizer({
          open: true,
          filename: 'stats.html',
          gzipSize: true,
          brotliSize: true
        }),
      !isStorybook &&
        dts({
          include: ['src/'],
          exclude: ['src/declaration/styled.d.ts'],
          rollupTypes: true,
          insertTypesEntry: true,
          tsconfigPath: './tsconfig.json'
        })
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: './build',
      rootDir: './src',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: {
          main: resolve(__dirname, 'src/main.ts'),

          ['area-outside']: resolve(__dirname, 'src/areas/outside/index.ts'),
          ['area-preview']: resolve(__dirname, 'src/areas/preview/index.ts'),
          ['area-scroll']: resolve(__dirname, 'src/areas/scroll/index.ts'),
          ['area-skeleton']: resolve(__dirname, 'src/areas/skeleton/index.ts'),
          ['area-smooth']: resolve(__dirname, 'src/areas/smooth/index.ts'),

          ['component-accordion']: resolve(__dirname, 'src/components/accordion/index.ts'),
          // ['component-badge']: resolve(__dirname, 'src/components/badge/index.ts'),
          ['component-button']: resolve(__dirname, 'src/components/button/index.ts'),
          ['component-button-group']: resolve(__dirname, 'src/components/button-group/index.ts'),
          ['component-checkbox']: resolve(__dirname, 'src/components/checkbox/index.ts'),
          ['component-checkbox-group']: resolve(__dirname, 'src/components/checkbox-group/index.ts'),
          // ['component-collapsible']: resolve(__dirname, 'src/components/collapsible/index.ts'),
          ['component-date-picker']: resolve(__dirname, 'src/components/date-picker/index.ts'),
          // ['component-dropdown-menu']: resolve(__dirname, 'src/components/dropdown-menu/index.ts'),
          ['component-icon']: resolve(__dirname, 'src/components/icon/index.ts'),
          ['component-image']: resolve(__dirname, 'src/components/image/index.ts'),
          ['component-input']: resolve(__dirname, 'src/components/input/index.ts'),
          // ['component-input-otp']: resolve(__dirname, 'src/components/input-otp/index.ts'),
          ['component-loading']: resolve(__dirname, 'src/components/loading/index.ts'),
          ['component-pagination']: resolve(__dirname, 'src/components/pagination/index.ts'),
          ['component-ripple']: resolve(__dirname, 'src/components/ripple/index.ts'),
          ['component-select']: resolve(__dirname, 'src/components/select/index.ts'),
          ['component-separator']: resolve(__dirname, 'src/components/separator/index.ts'),
          ['component-stack']: resolve(__dirname, 'src/components/stack/index.ts'),
          ['component-textarea']: resolve(__dirname, 'src/components/textarea/index.ts'),
          ['component-toggle']: resolve(__dirname, 'src/components/toggle/index.ts'),
          ['component-tooltip']: resolve(__dirname, 'src/components/tooltip/index.ts'),
          ['component-typography']: resolve(__dirname, 'src/components/typography/index.ts'),

          ['context-app']: resolve(__dirname, 'src/contexts/context-app/index.ts'),
          // ['context-breadcrumb']: resolve(__dirname, 'src/contexts/context-breadcrumb/index.ts'),
          ['context-cookie']: resolve(__dirname, 'src/contexts/context-cookie/index.ts'),
          ['context-dialog']: resolve(__dirname, 'src/contexts/context-dialog/index.ts'),
          ['context-geolocation']: resolve(__dirname, 'src/contexts/context-geolocation/index.ts'),
          ['context-local-storage']: resolve(__dirname, 'src/contexts/context-local-storage/index.ts'),
          // ['context-menu']: resolve(__dirname, 'src/contexts/context-menu/index.ts'),
          ['context-permission']: resolve(__dirname, 'src/contexts/context-permission/index.ts'),
          ['context-screen-width']: resolve(__dirname, 'src/contexts/context-screen-width/index.ts'),
          ['context-sonner']: resolve(__dirname, 'src/contexts/context-sonner/index.ts'),

          ['layout-auth']: resolve(__dirname, 'src/layouts/auth/index.ts'),

          ['style-base']: resolve(__dirname, 'src/styles/base/index.ts'),
          ['style-theme']: resolve(__dirname, 'src/theme/index.ts'),

          ['consts']: resolve(__dirname, 'src/consts.ts'),
          ['functions']: resolve(__dirname, 'src/functions.ts'),
          ['types']: resolve(__dirname, 'src/types.ts')
        },
        formats: ['es', 'cjs'],
        fileName: (format, name) => `${name}.${format}.js`
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
            'react-loading': 'ReactLoading',
            gsap: 'gsap',
            'country-list-with-dial-code-and-flag': 'FullCountryList',
            'react-number-format': 'reactNumberFormat',
            '@tanstack/react-virtual': 'reactVirtual',
            'react-toggle': 'ReactToggle',
            'react-helmet': 'reactHelmet',
            'js-cookie': 'Cookies',
            '@tanstack/react-router': 'reactRouter',
            'react-helmet-async': 'reactHelmetAsync'
          }
        }
      }
    }
  }
})
