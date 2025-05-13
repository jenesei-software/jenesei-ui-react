import { PropsWithChildren } from 'react'

import { IJeneseiThemeScreens } from '@local/theme'

export type ProviderScreenWidthProps = PropsWithChildren

export type Screens = keyof IJeneseiThemeScreens

export interface ScreenWidthContextProps {
  screenWidth: Screens
  screens: {
    value: Screens
    isScreen: boolean
  }[]
  screenActual: {
    value: Screens
    isScreen: boolean
  }
}
