import { JeneseiPalette } from '@local/theme/theme'

import { LibraryIconItemProps, StyledSVG } from '.'
import LibraryIconCheckboxJSON from './component-checkbox.json'
import LibraryIconIdJSON from './component-id.json'
import LibraryIconLoadingJSON from './component-loading.json'

export const Icon = (props: LibraryIconItemProps) => {
  const icon =
    props.type == 'id'
      ? LibraryIconIdJSON[props.name]
      : props.type === 'checkbox'
        ? LibraryIconCheckboxJSON[props.name]
        : props.type === 'loading'
          ? LibraryIconLoadingJSON[props.name]
          : null

  const primaryColor = props.primaryColor ? JeneseiPalette[props.primaryColor] : 'currentColor'
  const secondColor = props.secondColor ? JeneseiPalette[props.secondColor] : 'currentColor'

  if (!icon) {
    console.warn(`Icon ${props.name} not found in the library.`)
    return null
  }

  const getFillColor = (fillType?: string): string | undefined => {
    if (fillType === 'primaryColor') return primaryColor
    if (fillType === 'secondColor') return secondColor
    return 'currentColor'
  }

  const contentPaths =
    (props.type == 'id' || props.type === 'checkbox') && typeof icon === 'object' && 'paths' in icon
      ? (icon.paths ?? []).map((path, index) => (
          <path
            key={index}
            id={'id' in path ? (path.id as string) : undefined}
            d={path.d}
            clipRule="evenodd"
            fillRule="evenodd"
            fill={'fill' in path ? getFillColor(path.fill as string) : 'currentColor'}
          />
        ))
      : null

  const contentLoadings = props.type == 'loading' ? (icon as string) : null

  return (
    <StyledSVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      $size={props.size}
      $turn={props.turn}
      $order={props.order}
      $color={props.primaryColor || undefined}
      $sx={props.sx}
      className={props.className}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
      dangerouslySetInnerHTML={contentLoadings ? { __html: contentLoadings } : undefined}
    >
      {contentPaths}
    </StyledSVG>
  )
}
