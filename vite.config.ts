import react from '@vitejs/plugin-react'
import { promises as fs } from 'fs'
import path, { dirname, resolve } from 'path'
import process from 'process'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { peerDependencies } from './package.json'

export default defineConfig(() => {
  const isStorybook = process.env.NODE_ENV === 'storybook'

  console.log('isStorybookBuild: ', String(isStorybook))

  return {
    resolve: {
      alias: {
        '@local': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      pluginUpdateReadme(),
      react(),
      tsconfigPaths(),
      !isStorybook &&
        dts({
          include: ['src/'],
          exclude: ['src/declaration/styled-components.d.ts'],
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
      lib: {
        entry: {
          ['style-theme']: resolve(__dirname, 'src/theme/index.ts'),

          ['style-add']: resolve(__dirname, 'src/styles/add/index.ts'),
          ['style-error']: resolve(__dirname, 'src/styles/error/index.ts'),
          ['style-sx']: resolve(__dirname, 'src/styles/sx/index.ts'),

          ['types']: resolve(__dirname, 'src/types.ts'),

          ['functions']: resolve(__dirname, 'src/functions.ts'),

          ['consts']: resolve(__dirname, 'src/consts.ts'),

          ['component-range']: resolve(__dirname, 'src/components/range/index.ts'),
          ['component-accordion']: resolve(__dirname, 'src/components/accordion/index.ts'),
          ['component-button']: resolve(__dirname, 'src/components/button/index.ts'),
          ['component-button-group']: resolve(__dirname, 'src/components/button-group/index.ts'),
          ['component-checkbox']: resolve(__dirname, 'src/components/checkbox/index.ts'),
          ['component-checkbox-group']: resolve(__dirname, 'src/components/checkbox-group/index.ts'),
          ['component-date-picker']: resolve(__dirname, 'src/components/date-picker/index.ts'),
          ['component-icon']: resolve(__dirname, 'src/components/icon/index.ts'),
          ['component-image']: resolve(__dirname, 'src/components/image/index.ts'),
          ['component-input']: resolve(__dirname, 'src/components/input/index.ts'),
          ['component-input-otp']: resolve(__dirname, 'src/components/input-otp/index.ts'),
          ['component-map']: resolve(__dirname, 'src/components/map/index.ts'),
          ['component-pagination']: resolve(__dirname, 'src/components/pagination/index.ts'),
          ['component-ripple']: resolve(__dirname, 'src/components/ripple/index.ts'),
          ['component-select']: resolve(__dirname, 'src/components/select/index.ts'),
          ['component-select-image']: resolve(__dirname, 'src/components/select-image/index.ts'),
          ['component-separator']: resolve(__dirname, 'src/components/separator/index.ts'),
          ['component-slider']: resolve(__dirname, 'src/components/slider/index.ts'),
          ['component-stack']: resolve(__dirname, 'src/components/stack/index.ts'),
          ['component-textarea']: resolve(__dirname, 'src/components/textarea/index.ts'),
          ['component-toggle']: resolve(__dirname, 'src/components/toggle/index.ts'),
          ['component-tooltip']: resolve(__dirname, 'src/components/tooltip/index.ts'),
          ['component-typography']: resolve(__dirname, 'src/components/typography/index.ts'),

          ['area-outside']: resolve(__dirname, 'src/areas/outside/index.ts'),
          ['area-preview']: resolve(__dirname, 'src/areas/preview/index.ts'),
          ['area-scroll']: resolve(__dirname, 'src/areas/scroll/index.ts'),
          ['area-skeleton']: resolve(__dirname, 'src/areas/skeleton/index.ts'),
          ['area-smooth']: resolve(__dirname, 'src/areas/smooth/index.ts'),

          ['layout-auth']: resolve(__dirname, 'src/layouts/auth/index.ts'),

          ['hooks-use-debounced-callback']: resolve(__dirname, 'src/hooks/use-debounced-callback/index.ts'),
          ['hooks-use-deep-compare-memoize']: resolve(__dirname, 'src/hooks/use-deep-compare-memoize/index.ts'),

          ['context-app']: resolve(__dirname, 'src/contexts/context-app/index.ts'),
          ['context-cookie']: resolve(__dirname, 'src/contexts/context-cookie/index.ts'),
          ['context-dialog']: resolve(__dirname, 'src/contexts/context-dialog/index.ts'),
          ['context-geolocation']: resolve(__dirname, 'src/contexts/context-geolocation/index.ts'),
          ['context-local-storage']: resolve(__dirname, 'src/contexts/context-local-storage/index.ts'),
          ['context-permission']: resolve(__dirname, 'src/contexts/context-permission/index.ts'),
          ['context-screen-width']: resolve(__dirname, 'src/contexts/context-screen-width/index.ts'),
          ['context-sonner']: resolve(__dirname, 'src/contexts/context-sonner/index.ts')
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
            'react-number-format': 'reactNumberFormat',
            '@tanstack/react-virtual': 'reactVirtual',
            'js-cookie': 'Cookies',
            '@tanstack/react-router': 'reactRouter'
          }
        }
      }
    }
  }
})

function pluginUpdateReadme() {
  return {
    name: 'update-readme-script',
    buildStart() {
      const __filename = fileURLToPath(import.meta.url)
      const __dirname = dirname(__filename)

      // Путь к файлам
      const packageJsonPath = resolve(__dirname, 'package.json')
      const readmePath = resolve(__dirname, 'README.md')

      // Асинхронная функция для обновления README
      async function updateReadme() {
        // Загрузка package.json
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))

        // Извлечение peerDependencies
        const peerDependencies = packageJson.peerDependencies || {}

        // Формирование команд для установки
        const commands = Object.keys(peerDependencies)
          .map(dep => `npm install ${dep} --save`)
          .join('\n')

        // Формирование секции установки
        const installSection = `
## Installing dependencies

To work correctly you need to install the following dependencies:

\`\`\`bash
${commands}
\`\`\`
`

        // Чтение содержимого README.md
        const readmeContent = await fs.readFile(readmePath, 'utf8')

        // Определение места для вставки
        const insertionPoint = '# IMPORTANT' // Название секции, после которой нужно вставить новый текст

        if (readmeContent.includes(insertionPoint)) {
          // Найти позицию вставки
          const insertionIndex = readmeContent.indexOf(insertionPoint) + insertionPoint.length

          // Сформировать обновлённое содержание
          const beforeInsertion = readmeContent.slice(0, insertionIndex).trim()
          const newContent = beforeInsertion + '\n\n' + installSection

          // Записать изменённое содержимое обратно в файл
          await fs.writeFile(readmePath, newContent, 'utf8')
          console.log('README обновлён с командой установки зависимостей.')
        } else {
          console.log('Не удалось найти секцию для вставки в README.')
        }
      }

      // Вызов асинхронной функции
      updateReadme().catch(console.error)
    }
  }
}
