import { JeneseiThemeVariables } from '@theme/theme'

import { LibraryIconCurvedItemProps, StyledSVG } from '.'
import LibraryIconCurvedJSON from './icon-curved.json'

export const Icon = (props: LibraryIconCurvedItemProps) => {
  const icon = props.type == 'curved' ? LibraryIconCurvedJSON[props.name] : null

  const primaryColor = JeneseiThemeVariables[props.primaryColor ?? 'grayKaren']
  const secondColor = props.secondColor
    ? JeneseiThemeVariables[props.secondColor]
    : primaryColor

  if (!icon) {
    console.warn(`Icon ${props.name} not found in the library.`)
    return null
  }

  return (
    <StyledSVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      $size={props.size}
      $turn={props.turn}
      $order={props.order}
      className={props.className}
      onClick={props.onClick}
      {...props.styles}
    >
      {icon.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          clipRule="evenodd"
          fillRule="evenodd"
          fill={path.fill === 'primaryColor' ? primaryColor : secondColor}
        />
      ))}
    </StyledSVG>
  )
}
