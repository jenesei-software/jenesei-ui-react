import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../src/theme/global-styles'
import { JeneseiTheme } from '../src/theme/index'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={JeneseiTheme}>
        <GlobalStyles />
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
    GlobalStyles: GlobalStyles,
    Provider: ThemeProvider,
    themes: {
      light: JeneseiTheme,
      dark: JeneseiTheme,
    },
  }),
]
