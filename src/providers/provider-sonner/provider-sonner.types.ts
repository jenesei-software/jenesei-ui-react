import { PropsWithChildren, ReactNode } from 'react'

export type ProviderSonnerProps = PropsWithChildren & {
  theme: 'standard'
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'bottom-center' | 'top-center'
  visibleToasts?: number
  default: Omit<SonnerContentProps, 'index'>
}

export type SonnerElementProps = {
  id: SonnerContentProps['id']
  title: SonnerContentProps['title']
  description: SonnerContentProps['description']
  button: SonnerContentProps['button']
  index: number
  handleOnClick: (id: SonnerContentProps['id'], hidingMode?: SonnerContentProps['hidingMode']) => void
  isMoreThanLastViewIndexPlusOne: boolean
  isMoreThanLastViewIndex: boolean
  isHovered: boolean
  isLastViewIndex: boolean
}

export type SonnerContextProps = {
  toast: (content: Omit<SonnerContentProps, 'index'>) => void
  remove: (id: SonnerContentProps['id']) => void
  contentHistory: SonnerContentProps[]
}

export type SonnerContentProps = {
  hidingMode?: 'clickOnSonner' | 'clickOnButton'
  hidingTime?: number
  description?: string | ReactNode
  title?: string | ReactNode
  id?: string
  button?:
    | {
        content?: string | ReactNode
        onClick?: () => void
      }
    | false
  index: number
}
