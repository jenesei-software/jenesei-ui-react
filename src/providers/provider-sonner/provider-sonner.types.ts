import { PropsWithChildren, ReactNode } from 'react'

export type ProviderSonnerProps = PropsWithChildren & {
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

export type SonnerContextProps = {
  toast: (content: SonnerContentProps) => void
  contentHistory: SonnerContentProps[]
  removeToast: (id: SonnerContentProps['id']) => void
}

export type SonnerContentProps = {
  title: ProviderSonnerProps['defaultTitle']
  description?: ProviderSonnerProps['defaultDescription']
  hidingMode?: ProviderSonnerProps['defaultHidingMode']
  hidingTime?: ProviderSonnerProps['defaultHidingTime']
  button?: ProviderSonnerProps['defaultButton']
  index?: number
  id?: string
}
