import {
  CheckboxProps,
  StyledCheckboxWrapper,
  StyledCheckedIconCircle,
  StyledCheckedIconSquare,
  StyledIconCircle,
  StyledIconSquare,
} from '.'
import { FC, useCallback } from 'react'
import { useTheme } from 'styled-components'

export const Checkbox: FC<CheckboxProps> = (
  props = {
    genre: 'circle',
    width: 'max-content',
    size: 'large',
  }
) => {
  const theme = useTheme()
  const color = theme.colors.checkbox[props.color ?? 'gray']
  const handleOnClick = useCallback(
    (checked: boolean) => {
      props.onChange && props.onChange(checked)
    },
    [props]
  )
  return (
    <StyledCheckboxWrapper
      $color={color}
      $checked={props.checked}
      $width={props.width}
      $size={props.size}
      tabIndex={0}
      onClick={() => handleOnClick(!props.checked)}
    >
      {props.checked ? (
        <>
          {props.genre == 'square' ? (
            <StyledCheckedIconSquare $color={color} />
          ) : props.genre == 'circle' ? (
            <StyledCheckedIconCircle $color={color} />
          ) : (
            <StyledCheckedIconCircle $color={color} />
          )}
        </>
      ) : (
        <>
          {props.genre == 'square' ? (
            <StyledIconSquare $color={color} />
          ) : props.genre == 'circle' ? (
            <StyledIconCircle $color={color} />
          ) : (
            <StyledIconCircle $color={color} />
          )}
        </>
      )}
      {props.content && props.content}
    </StyledCheckboxWrapper>
  )
}
