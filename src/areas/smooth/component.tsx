import { FC } from 'react'

import { StackMotion, StackProps } from '@local/components/stack'

export const Smooth: FC<StackProps> = props => {
  return (
    <StackMotion transition={{ duration: 0.3, ease: 'easeOut' }} layout {...props}>
      {props.children}
    </StackMotion>
  )
}
