import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
    dts({
      include: ['src/'],
    }),
  ],
  publicDir: false,
  build: {
    sourcemap: true,
    rollupOptions: {
      onLog(level, log, handler) {
        if (
          log.cause &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (log.cause as any)?.message ==
            `Can't resolve original location of error.`
        ) {
          return
        }
        handler(level, log)
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'jenesei-react-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `jenesei-react-ui.${format}.js`,
    },
  },
})
