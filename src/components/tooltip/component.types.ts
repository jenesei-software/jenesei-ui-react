import { Placement } from '@floating-ui/react'
import { PropsWithChildren, ReactNode } from 'react'

import { addSXProps } from '@local/styles/sx'

import { PopoverProps } from '../popover'
import { addSXTypographyProps } from '../typography'

export type TooltipProps = PropsWithChildren &
  Pick<PopoverProps, 'genre' | 'size' | 'maxHeight' | 'maxWidth'> & {
    content: ReactNode
    placement?: Placement
    offset?: number
    isDisabled?: boolean
  } & addSXProps &
  addSXTypographyProps
