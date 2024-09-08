import { FC } from 'react'

import { DividerProps, DividerWrapper } from '.'

export const Divider: FC<DividerProps> = (props) => {
  return <DividerWrapper $radius={props.radius} $color={props.color} $height={props.height} $width={props.width} />
}
