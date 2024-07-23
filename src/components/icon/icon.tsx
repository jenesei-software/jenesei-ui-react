import { FC, memo } from 'react'

import { IconProps } from '.'
import { LibraryIcon } from '../../assets/library-icon'
import { JeneseiThemeVariables } from '../../main'

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
