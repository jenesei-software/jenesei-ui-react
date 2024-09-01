import { ProviderAxiosWebId } from '@jenesei-software/jenesei-web-id-api'
import type { Preview } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { JeneseiGlobalStyles, JeneseiTheme } from '../src/theme/index'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import 'react-ripple-click/dist/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={JeneseiTheme}>
            <JeneseiGlobalStyles />
            <Story />
          </ThemeProvider>
        </QueryClientProvider>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
