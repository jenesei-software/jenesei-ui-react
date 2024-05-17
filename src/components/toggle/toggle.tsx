import { memo } from 'react'

import { StyledReactToggle } from './toggle.styles'
import { ToggleProps } from './toggle.types'

export const Toggle = memo((props: ToggleProps) => {
  return (
    <StyledReactToggle
      checked={props.value}
      onChange={() => props.onChange && props.onChange(!props.value)}
      disabled={props.isDisabled}
      $genre={props.genre}
      $genreType={props.genreType}
      $isDisabled={props.isDisabled}
      $value={props.value}
      $size={props.size}
      tabIndex={0}
    />
  )
})
