import { PropsWithChildren, ReactNode } from 'react'

import { AddDollarSign } from '@local/types'

export type ProviderDialogProps = PropsWithChildren & {
  zIndex: number
  default: Pick<DialogContentProps, 'maxWidth' | 'maxHeight'>
}

export type DialogLayoutProps = AddDollarSign<Pick<ProviderDialogProps, 'zIndex'>>

export type DialogElementWrapperProps = AddDollarSign<Pick<DialogContentProps, 'maxWidth' | 'maxHeight'>>

export type DialogContextProps = {
  add: (dialog: DialogContentProps) => void
  remove: (id: DialogContentProps['id']) => void
  dialogHistory: DialogContentProps[]
}

export type DialogContextItemProps = {
  add: (dialog: DialogContentProps) => void
  remove: () => void
  id: string | null
}

export type DialogElementProps = Pick<DialogContentProps, 'id' | 'index' | 'content' | 'maxWidth' | 'maxHeight'> &
  Pick<DialogContextItemProps, 'remove'>

export type DialogContentProps = {
  content: ReactNode | false
  maxWidth?: string
  maxHeight?: string
  id?: string
  index?: number
}
