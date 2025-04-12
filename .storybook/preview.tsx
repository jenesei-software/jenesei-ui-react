import { useGSAP } from '@gsap/react'
import type { Preview } from '@storybook/react'
import gsap from 'gsap'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ProviderDialog } from '../src/contexts/context-dialog'
import { ProviderGeolocation } from '../src/contexts/context-geolocation'
import { ProviderPermission } from '../src/contexts/context-permission'
import { JeneseiGlobalStyles, JeneseiTheme } from '../src/theme/index'

import '@fontsource/inter/100.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

gsap.registerPlugin(useGSAP)

const preview: Preview = {
  decorators: [
    Story => {
      return (
        <ProviderPermission>
          <ProviderGeolocation>
            <ThemeProvider theme={JeneseiTheme}>
              <JeneseiGlobalStyles />
              <ProviderDialog zIndex={1000}>
                <Story />
              </ProviderDialog>
            </ThemeProvider>
          </ProviderGeolocation>
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
