import { ReactElement } from 'react'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface ProviderAppProps {
  children: React.ReactNode
  defaultBgColor: JeneseiThemeVariablesKeys
  defaultBgImage?: string
  isScrollOutlet?: boolean
  header?: {
    component: ReactElement
    height?: string
    heightMobile?: string
    heightTablet?: string
  }
  footer?: {
    component: ReactElement
    height?: string
    heightMobile?: string
    heightTablet?: string
  }
  leftSection?: {
    component: ReactElement
    width?: string
    widthMobile?: string
    widthTablet?: string
    isTopHeader?: boolean
    isTopFooter?: boolean
  }
  rightSection?: {
    component: ReactElement
    width?: string
    widthMobile?: string
    widthTablet?: string
    isTopHeader?: boolean
    isTopFooter?: boolean
  }
}

export interface AppContextProps {
  changeBgColor: (color: JeneseiThemeVariablesKeys) => void
  changeBgImage: (image: string) => void
}

export interface ProviderAppWrapperProps {
  $bgColor: ProviderAppProps['defaultBgColor']
  $bgImage: ProviderAppProps['defaultBgImage'] | null
}

export interface ProviderAppOutletProps {
  $isScrollOutlet?: boolean
  $header?: ProviderAppProps['header']
  $footer?: ProviderAppProps['footer']
  $leftSection?: ProviderAppProps['leftSection']
  $rightSection?: ProviderAppProps['rightSection']
}
