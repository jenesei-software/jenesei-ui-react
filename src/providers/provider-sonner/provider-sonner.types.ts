import { PropsWithChildren, ReactNode } from 'react'

export type ProviderSonnerProps = PropsWithChildren & {
  maxViewIndex?: number
  defaultHidingMode?: 'clickOnSonner' | 'clickOnButton'
  defaultHidingTime?: number
  defaultDescription?: string | ReactNode | false
  defaultTitle?: string | ReactNode | false
  defaultButton?:
    | {
        text?: string | ReactNode
        onClick?: () => void
      }
    | false
}

export type SonnerElementProps = {
  id: SonnerContentProps['id']
  title: SonnerContentProps['title']
  description: SonnerContentProps['description']
  index: number
  buttonText: ReactNode
  handleOnClick: (id: SonnerContentProps['id'], hidingMode?: SonnerContentProps['hidingMode']) => void
  isMoreThanLastViewIndexPlusOne: boolean
  isMoreThanLastViewIndex: boolean
  isHovered: boolean
  isLastViewIndex: boolean
}

export type SonnerContextProps = {
  toast: (content: Omit<SonnerContentProps, 'index'>) => void
  contentHistory: SonnerContentProps[]
  removeToast: (id: SonnerContentProps['id']) => void
}

export type SonnerContentProps = {
  title: ProviderSonnerProps['defaultTitle']
  description?: ProviderSonnerProps['defaultDescription']
  hidingMode?: ProviderSonnerProps['defaultHidingMode']
  hidingTime?: ProviderSonnerProps['defaultHidingTime']
  button?: ProviderSonnerProps['defaultButton']
  index: number
  id?: string
}
