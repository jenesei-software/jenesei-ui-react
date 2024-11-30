import {
  DollarFlexContainerAndItemAndBasicProps,
  FlexBasicProps,
  FlexContainerProps,
  FlexItemProps
} from '@styles/base'
import { CSSProperties, PropsWithChildren } from 'react'
import { AddDollarSign } from 'src/types'

export interface FlexShortStylesProps extends FlexContainerProps, FlexItemProps, FlexBasicProps, PropsWithChildren {
  style?: CSSProperties
  className?: string
  isHover?: boolean
  onClick?: () => void
}

export type StyledStackProps = DollarFlexContainerAndItemAndBasicProps &
  AddDollarSign<Pick<FlexShortStylesProps, 'isHover'>>
