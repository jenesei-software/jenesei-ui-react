import { FC, memo } from 'react'

import {
  ButtonGroupProps,
  ButtonGroupWrapper,
  StyledButtonForButtonGroup,
} from '.'

export const ButtonGroup: FC<ButtonGroupProps> = memo((props) => {
  return (
    <ButtonGroupWrapper
      $position={props.position}
      className={props.className}
      id="jenesei-button-group"
    >
      {props.value?.map((e) => (
        <StyledButtonForButtonGroup
          {...e}
          width={props.width ?? 'auto'}
          $position={props.position}
        />
      ))}
    </ButtonGroupWrapper>
  )
})
