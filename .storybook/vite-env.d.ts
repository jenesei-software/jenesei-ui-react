/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  // Add other Vite-specific env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
