import { ReactElement } from 'react'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface ProviderAppProps {
  children: React.ReactNode
  defaultBgColor: JeneseiThemeVariablesKeys
  defaultBgImage?: string
  defaultTitle: string
  defaultDescription: string
  isScrollOutlet?: boolean
  notification?: {
    component: ReactElement
    height?: string
    heightMobile?: string
    heightTablet?: string
    isFixed?: boolean
  }
  header?: {
    component: ReactElement
    height?: string
    heightMobile?: string
    heightTablet?: string
  }
  nav?: {
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
  leftAside?: {
    component: ReactElement
    width?: string
    widthMobile?: string
    widthTablet?: string
    isTopHeader?: boolean
    isTopFooter?: boolean
    isTopNav?: boolean
  }
  rightAside?: {
    component: ReactElement
    width?: string
    widthMobile?: string
    widthTablet?: string
    isTopHeader?: boolean
    isTopFooter?: boolean
    isTopNav?: boolean
  }
}

export interface AppContextProps {
  changeBgColor: (color: JeneseiThemeVariablesKeys) => void
  changeBgImage: (image: string) => void
  changeTitle: (title: string) => void
  changeDescription: (description: string) => void
  setDefaultBgColor: () => void
  setDefaultBgImage: () => void
  setDefaultTitle: () => void
  setDefaultDescription: () => void
  historyBgColor: (step: number) => void
  historyTitle: (title: number) => void
  historyBgImage: (step: number) => void
  historyDescription: (description: number) => void
}

export interface ProviderAppWrapperProps {
  $bgColor: ProviderAppProps['defaultBgColor']
  $bgImage: ProviderAppProps['defaultBgImage'] | null
}

export interface ProviderAppOutletProps {
  $isScrollOutlet?: boolean
  $notification?: ProviderAppProps['notification']
  $header?: ProviderAppProps['header']
  $nav?: ProviderAppProps['nav']
  $footer?: ProviderAppProps['footer']
  $leftAside?: ProviderAppProps['leftAside']
  $rightAside?: ProviderAppProps['rightAside']
}
