import { memo } from 'react'

import { StyledReactToggle, ToggleProps } from '.'

export const Toggle = memo((props: ToggleProps) => {
  return (
    <StyledReactToggle
      checked={props.value}
      onChange={() => props.onChange && props.onChange(!props.value)}
      disabled={props.isDisabled}
      $genre={props.genre}
      $isDisabled={props.isDisabled}
      $value={props.value}
      $size={props.size}
      tabIndex={0}
    />
  )
})
