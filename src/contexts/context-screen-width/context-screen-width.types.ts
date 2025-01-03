import { PropsWithChildren } from 'react'

import { IJeneseiThemeScreens } from '@local/theme'

export type ProviderScreenWidthProps = PropsWithChildren

export type Screens = keyof IJeneseiThemeScreens

export interface ScreenWidthContextProps {
  isTabletMobile: boolean
  isTablet: boolean
  isMobile: boolean
  isOther: boolean
  screenWidth: Screens | 'other'
}
