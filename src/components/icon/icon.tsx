import { FC, memo } from 'react'

import { LibraryIcon } from '@assets/library-icon'

import { JeneseiThemeVariables } from '@theme/index'

import { IconProps } from '.'

export const Icon: FC<IconProps> = memo((props) => {
  const IconComponent = props.icon && LibraryIcon[props.icon]
  return (
    <IconComponent
      id="jenesei-icon"
      {...props}
      color={JeneseiThemeVariables[props.color]}
      size={props.size}
    />
  )
})
