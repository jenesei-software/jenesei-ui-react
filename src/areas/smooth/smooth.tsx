import { FC } from 'react'

import { FlexShortStylesProps, StackMotion } from '@local/components/stack'

export const Smooth: FC<FlexShortStylesProps> = props => {
  return (
    <StackMotion transition={{ duration: 0.3, ease: 'easeOut' }} layout {...props}>
      {props.children}
    </StackMotion>
  )
}
