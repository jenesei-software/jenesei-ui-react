import { StyledReactToggle, ToggleProps } from '.'

export const Toggle = (props: ToggleProps) => {
  return (
    <StyledReactToggle
      checked={props.value}
      onChange={() => props.onChange && props.onChange(!props.value)}
      disabled={props.isDisabled}
      $genre={props.genre}
      $isDisabled={props.isDisabled}
      $value={props.value}
      $size={props.size}
      $isError={props.isError}
      tabIndex={0}
    />
  )
}
