import { FlexShortStylesProps } from '@local/components/stack'
import { AddDollarSign } from '@local/types'

type DefaultSkeletonProps = {
  visible?: boolean
}

export type SkeletonProps = FlexShortStylesProps & DefaultSkeletonProps
export type StyledSkeletonProps = FlexShortStylesProps & AddDollarSign<DefaultSkeletonProps>
