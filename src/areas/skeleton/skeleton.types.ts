import { FlexShortStylesProps } from '@local/components/stack'
import { AddDollarSign } from '@local/types'

type SkeletonDefaultProps = {
  defaultVisible?: boolean
  type?: 'primary' | 'secondary'
}

interface SkeletonIsShowProps extends SkeletonDefaultProps {
  visible: boolean
}

interface SkeletonTimeProps extends SkeletonDefaultProps {
  time: number
}

export type SkeletonProps = FlexShortStylesProps & (SkeletonIsShowProps | SkeletonTimeProps)
export type StyledSkeletonProps = FlexShortStylesProps &
  AddDollarSign<Pick<SkeletonIsShowProps & SkeletonTimeProps, 'visible' | 'type'>>
