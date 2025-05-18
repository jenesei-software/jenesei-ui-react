import { PropsWithChildren, ReactElement } from 'react'

import { PreviewAdditionalProps } from '@local/areas/preview'
import { JeneseiPaletteKeys, TJeneseiDevice } from '@local/theme'
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
    height?: {
      [K in TJeneseiDevice]?: string
    }
    zIndex?: number
  }
  header?: {
    component: ReactElement
    height?: {
      [K in TJeneseiDevice]?: string
    }
    zIndex?: number
  }
  nav?: {
    component: ReactElement
    height?: {
      [K in TJeneseiDevice]?: string
    }
    zIndex?: number
  }
  footer?: {
    component: ReactElement
    height?: {
      [K in TJeneseiDevice]?: string
    }
    zIndex?: number
  }
  leftAside?: {
    component: ReactElement
    width?: {
      [K in TJeneseiDevice]?: string
    }
    isTopHeader?: boolean
    isTopFooter?: boolean
    isTopNav?: boolean
    zIndex?: number
  }
  rightAside?: {
    component: ReactElement
    width?: {
      [K in TJeneseiDevice]?: string
    }
    isTopHeader?: boolean
    isTopFooter?: boolean
    isTopNav?: boolean
    zIndex?: number
  }
  main?: {
    zIndex?: number
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
  setHistoryTitle: (step: number) => void
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

export type ProviderAppOutletChildrenProps = AddDollarSign<Pick<ProviderAppProps, 'main'>>
