import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import '@fontsource/inter/100.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'

import { ProviderPermission } from '../src/providers/provider-permission'
import { JeneseiGlobalStyles, JeneseiTheme } from '../src/theme/index'

import 'react-ripple-click/dist/index.css'

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ProviderPermission serviceWorkerPath={'/service-worker.js'}>
          <ThemeProvider theme={JeneseiTheme}>
            <JeneseiGlobalStyles />
            <Story />
          </ThemeProvider>
        </ProviderPermission>
      )
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
