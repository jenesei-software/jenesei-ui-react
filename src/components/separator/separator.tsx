import { FC } from 'react'

import { JeneseiThemeVariablesKeys } from '@local/theme/theme.interface'

import { SeparatorProps, SeparatorWrapper } from '.'

const DEFAULT_SEPARATOR_SIZE = '1px'

export const Separator: FC<SeparatorProps> = props => {
  const height = !props.height ? (props.type == 'horizontal' ? DEFAULT_SEPARATOR_SIZE : '100%') : props.height
  const width = !props.width ? (props.type == 'vertical' ? DEFAULT_SEPARATOR_SIZE : '100%') : props.width
  const color: JeneseiThemeVariablesKeys = props.color || 'grayMonica'
  return <SeparatorWrapper $radius={props.radius} $color={color} $height={height} $width={width} />
}
