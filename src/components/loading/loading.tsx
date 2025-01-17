import { FC } from 'react'

import { JeneseiThemeVariables, KEY_SIZE_DATA } from '@local/theme'

import { LoadingProps, StyledReactLoading } from '.'

export const Loading: FC<LoadingProps> = props => {
  return (
    <StyledReactLoading
      type={props.type ?? 'spinningBubbles'}
      className={props.className}
      color={
        props.colorKey ? JeneseiThemeVariables[props.colorKey] : (props.color ?? JeneseiThemeVariables.currentColor)
      }
      height={KEY_SIZE_DATA[props.size].heightIcon + 4}
      width={KEY_SIZE_DATA[props.size].heightIcon + 4}
      $order={props.order}
    />
  )
}
