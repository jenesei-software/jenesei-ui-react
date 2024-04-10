import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { GlobalStyles as StyledGlobalStyles } from '../src/theme/global-styles'
import { JeneseiTheme } from '../src/theme/index'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import 'react-ripple-click/dist/index.css'

export const preview: Preview = {
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
    GlobalStyles: StyledGlobalStyles,
    Provider: StyledThemeProvider,
    themes: { JeneseiTheme },
  }),
]
