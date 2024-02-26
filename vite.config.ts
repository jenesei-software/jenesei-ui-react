import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import ts from 'vite-plugin-ts'

export default defineConfig({
  plugins: [react(), ts()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'jenesei-react-ui',
    },
    rollupOptions: {},
  },
})
