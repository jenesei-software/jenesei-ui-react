import { CSSProperties, PropsWithChildren } from 'react'

import {
  DollarFlexContainerAndItemAndBasicProps,
  FlexBasicProps,
  FlexContainerProps,
  FlexItemProps
} from '@local/styles/base'
import { AddDollarSign } from '@local/types'

export interface FlexShortStylesProps extends FlexContainerProps, FlexItemProps, FlexBasicProps, PropsWithChildren {
  style?: CSSProperties
  className?: string
  isHover?: boolean
  onClick?: () => void
}

export type StyledStackProps = DollarFlexContainerAndItemAndBasicProps &
  AddDollarSign<Pick<FlexShortStylesProps, 'isHover'>>
