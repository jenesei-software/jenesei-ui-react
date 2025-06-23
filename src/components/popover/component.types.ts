import { CSSProperties, PropsWithChildren, Ref } from 'react'

import { addErrorStylesProps } from '@local/styles/error'
import { addSXProps, addSXStyleProps } from '@local/styles/sx'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography'

export type PopoverProps = PropsWithChildren & {
  padding?: number
  maxWidth?: string
  maxHeight?: string
  isOpen: boolean
  floatingStyles: CSSProperties
  onClose?: () => void
  ref?: Ref<HTMLElement | null>
} & addSXProps &
  addSXTypographyProps

export type StyledPopoverProps = AddDollarSign<Pick<PopoverProps, 'maxWidth' | 'maxHeight' | 'padding'>> &
  addSXStyleProps &
  addErrorStylesProps &
  addSXTypographyStyleProps
