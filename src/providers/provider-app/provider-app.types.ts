import { PropsWithChildren, ReactElement } from 'react'

import { PreviewAdditionalProps } from '@components/preview'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface ProviderAppProps extends PropsWithChildren {
  defaultPreview?: PreviewAdditionalProps
  defaultBgColor: JeneseiThemeVariablesKeys
  defaultStatusBarColor: JeneseiThemeVariablesKeys
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
  changePreview: (newPreviewProps: PreviewAdditionalProps) => void

  changeStatusBarColor: (color: JeneseiThemeVariablesKeys) => void
  changeBgColor: (color: JeneseiThemeVariablesKeys) => void
  changeBgImage: (image: string) => void
  changeTitle: (title: string) => void
  changeDescription: (description: string) => void
  setDefaultStatusBarColor: () => void
  setDefaultBgColor: () => void
  setDefaultBgImage: () => void
  setDefaultTitle: () => void
  setDefaultDescription: () => void
  historyStatusBarColor: (step: number) => void
  historyBgColor: (step: number) => void
  historyTitle: (step: number) => void
  historyBgImage: (step: number) => void
  historyDescription: (step: number) => void
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
