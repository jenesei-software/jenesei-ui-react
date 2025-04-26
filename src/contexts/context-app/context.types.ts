import { PropsWithChildren, ReactElement } from 'react'

import { PreviewAdditionalProps } from '@local/areas/preview'
import { JeneseiPaletteKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface ProviderAppProps extends PropsWithChildren {
  defaultPreview?: PreviewAdditionalProps
  defaultBgColor: JeneseiPaletteKeys
  defaultStatusBarColor: JeneseiPaletteKeys
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

  changeStatusBarColor: (color: JeneseiPaletteKeys) => void
  changeBgColor: (color: JeneseiPaletteKeys) => void
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

export type ProviderAppOutletProps = Partial<
  AddDollarSign<
    Pick<ProviderAppProps, 'isScrollOutlet' | 'notification' | 'header' | 'nav' | 'footer' | 'leftAside' | 'rightAside'>
  >
>
