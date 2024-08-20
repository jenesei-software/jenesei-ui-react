import { FC, memo } from 'react'

import { LibraryIconCurved } from '@assets/library-icon-curved'

import { JeneseiThemeVariables } from '@theme/index' 

import { IconProps } from '.'

export const Icon: FC<IconProps> = memo((props) => {
  const IconComponent = props.icon && LibraryIconCurved[props.icon]
  return (
    <IconComponent
      id="jenesei-icon"
      {...props}
      color={JeneseiThemeVariables[props.color]}
      size={props.size}
    />
  )
})
