import { FC } from 'react'

import { JeneseiPalette, KEY_SIZE_DATA } from '@local/theme'

import { LoadingProps, StyledReactLoading } from '.'

export const Loading: FC<LoadingProps> = props => {
  return (
    <StyledReactLoading
      type={props.type ?? 'spinningBubbles'}
      className={props.className}
      color={props.colorKey ? JeneseiPalette[props.colorKey] : (props.color ?? JeneseiPalette.currentColor)}
      height={KEY_SIZE_DATA[props.size].heightIcon}
      width={KEY_SIZE_DATA[props.size].heightIcon}
      $order={props.order}
    />
  )
}
