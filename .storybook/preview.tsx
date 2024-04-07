import { GlobalStyles as StyledGlobalStyles } from '../src/theme/global-styles'
import { JeneseiTheme } from '../src/theme/index'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import 'react-ripple-click/dist/index.css'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

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
