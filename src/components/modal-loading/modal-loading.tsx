import { FC } from 'react'

import { JeneseiThemeVariables, KEY_SIZE_DATA } from '@theme/index'

import { ModalLoadingProps, StyledReactLoading } from '.'

export const ModalLoading: FC<ModalLoadingProps> = props => {
  return (
    <StyledReactLoading
      type={props.type ?? 'spinningBubbles'}
      className={props.className}
      color={props.colorKey ? JeneseiThemeVariables[props.colorKey] : (props.color ?? 'white')}
      height={KEY_SIZE_DATA[props.size].heightIcon + 4}
      width={KEY_SIZE_DATA[props.size].heightIcon + 4}
      $order={props.order}
    />
  )
}
