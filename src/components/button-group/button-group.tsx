import { FC } from 'react'

import {
  ButtonGroupProps,
  ButtonGroupWrapper,
  StyledButtonForButtonGroup,
} from '.'

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroupWrapper
      position={props.position}
      className={props.className}
      id="jenesei-button-group"
    >
      {props.value?.map((button, id) => {
        return (
          <StyledButtonForButtonGroup
            key={id}
            {...button}
            width={props.width ?? 'auto'}
            position={props.position}
          />
        )
      })}
    </ButtonGroupWrapper>
  )
}
