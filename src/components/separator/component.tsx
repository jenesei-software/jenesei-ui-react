import { FC } from 'react'

import { IThemePaletteKeys } from '@local/theme/theme.interface'

import { SeparatorProps, SeparatorWrapper } from '.'

export const Separator: FC<SeparatorProps> = props => {
  const color: IThemePaletteKeys = props.color || 'grayMonica'
  return <SeparatorWrapper $radius={props.radius} $color={color} $sx={props.sx} $type={props.type} />
}
