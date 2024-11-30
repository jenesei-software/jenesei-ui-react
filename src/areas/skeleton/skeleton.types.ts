import { AddDollarSign } from 'src/types'

import { FlexShortStylesProps } from '@components/stack'

type DefaultSkeletonProps = {
  visible?: boolean
}

export type SkeletonProps = FlexShortStylesProps & DefaultSkeletonProps
export type StyledSkeletonProps = FlexShortStylesProps & AddDollarSign<DefaultSkeletonProps>
