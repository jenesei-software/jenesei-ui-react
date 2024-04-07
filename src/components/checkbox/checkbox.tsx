import {
  CheckboxProps,
  StyledCheckbox,
  StyledCheckedIconSquareColorBorder,
  StyledCheckedIconCircle,
  StyledCheckedIconSquare,
  StyledIconSquareColorBorder,
  StyledIconCircle,
  StyledIconSquare,
} from '.'
import { FC } from 'react'

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <StyledCheckbox
      placeholder=""
      $genre={props.genre}
      icon={
        props.genre == 'square-color-border' ? (
          <StyledIconSquareColorBorder />
        ) : props.genre == 'square' ? (
          <StyledIconSquare />
        ) : props.genre == 'circle' ? (
          <StyledIconCircle />
        ) : (
          <StyledIconCircle />
        )
      }
      checkedIcon={
        props.genre == 'square-color-border' ? (
          <StyledCheckedIconSquareColorBorder />
        ) : props.genre == 'square' ? (
          <StyledCheckedIconSquare />
        ) : props.genre == 'circle' ? (
          <StyledCheckedIconCircle />
        ) : (
          <StyledCheckedIconCircle />
        )
      }
      onChange={props.onChange}
      checked={props.checked}
    />
  )
}
