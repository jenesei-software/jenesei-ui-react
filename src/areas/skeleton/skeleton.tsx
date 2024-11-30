import { FC } from 'react'

import { SkeletonProps, StyledSkeleton } from '.'

export const Skeleton: FC<SkeletonProps> = props => {
  return (
    <StyledSkeleton {...props} $visible={props.visible}>
      {props.children}
    </StyledSkeleton>
  )
}
