import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { JeneseiTheme, JeneseiGlobalStyles } from '../src/theme/index'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import 'react-ripple-click/dist/index.css'

export const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={JeneseiTheme}>
        <JeneseiGlobalStyles />
        <Story />
      </ThemeProvider>
    ),
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: JeneseiGlobalStyles,
    Provider: ThemeProvider,
    themes: {
      light: JeneseiTheme,
      dark: JeneseiTheme,
    },
  }),
]
