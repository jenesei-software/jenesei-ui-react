import { PropsWithChildren, ReactNode } from 'react'

import { AddDollarSign } from '@local/types'

export type ProviderDialogProps = PropsWithChildren & {
  zIndex: number
  default: Pick<DialogContentProps<object>, 'maxWidth' | 'maxHeight'>
}

export type DialogLayoutProps = AddDollarSign<Pick<ProviderDialogProps, 'zIndex'>>

export type DialogElementWrapperProps = AddDollarSign<Pick<DialogContentProps<object>, 'maxWidth' | 'maxHeight'>>

export type DialogContextProps<T extends object> = {
  add: (dialog: DialogContentProps<T>) => void
  remove: (id: DialogContentProps<T>['id']) => void
  update: (dialog: DialogContentProps<T>) => void
  dialogHistory: DialogContentProps<T>[]
}

export type DialogContextItemProps<T extends object> = {
  add: (dialog: DialogContentProps<T>) => void
  remove: () => void
  id: string | null
}

export type DialogElementProps = Pick<
  DialogContentProps<object>,
  'id' | 'index' | 'content' | 'maxWidth' | 'maxHeight' | 'props'
> &
  Pick<DialogContextItemProps<object>, 'remove'>

export type DialogContentProps<T extends object> = {
  content?: (props?: T, remove?: () => void) => ReactNode
  props?: T
  maxWidth?: string
  maxHeight?: string
  id?: string
  index?: number
}
