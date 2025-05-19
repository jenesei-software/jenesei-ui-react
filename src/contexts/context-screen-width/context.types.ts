import { PropsWithChildren } from 'react'

import { IJeneseiThemeScreens, TJeneseiDevice } from '@local/theme'

export type ProviderScreenWidthProps = PropsWithChildren

export type Screens = keyof IJeneseiThemeScreens

export interface ScreenWidthContextProps {
  screenWidth: Screens
  screens: {
    value: Screens
    isScreen: boolean
  }[]
  screenActual: Screens
}

export type ScreenWidthProps<T> = {
  [K in TJeneseiDevice]?: T
}
