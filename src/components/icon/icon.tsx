import { JeneseiThemeVariables } from '@theme/theme'

import { LibraryIconItemProps, StyledSVG } from '.'
import LibraryIconCheckboxJSON from './icon-checkbox.json'
import LibraryIconCurvedJSON from './icon-curved.json'

export const Icon = (props: LibraryIconItemProps) => {
  const icon =
    props.type == 'curved'
      ? LibraryIconCurvedJSON[props.name]
      : props.type === 'checkbox'
        ? LibraryIconCheckboxJSON[props.name]
        : null

  const primaryColor = JeneseiThemeVariables[props.primaryColor ?? 'grayKaren']
  const secondColor = props.secondColor ? JeneseiThemeVariables[props.secondColor] : primaryColor

  if (!icon) {
    console.warn(`Icon ${props.name} not found in the library.`)
    return null
  }

  const getFillColor = (fillType?: string): string | undefined => {
    if (fillType === 'primaryColor') return primaryColor
    if (fillType === 'secondColor') return secondColor
    return undefined
  }

  const renderPaths = () =>
    icon.paths.map((path, index) => (
      <path
        key={index}
        id={'id' in path ? path.id : undefined}
        d={path.d}
        clipRule="evenodd"
        fillRule="evenodd"
        fill={'fill' in path ? getFillColor(path.fill) : undefined}
      />
    ))

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
      {renderPaths()}
    </StyledSVG>
  )
}
