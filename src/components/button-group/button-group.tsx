import { FC, memo } from 'react'

import { ButtonGroupProps, ButtonGroupWrapper, StyledButton } from '.'

export const ButtonGroup: FC<ButtonGroupProps> = memo((props) => {
  return (
    <ButtonGroupWrapper className={props.className} id="jenesei-button-group">
      {props.value?.map((e) => <StyledButton {...e} />)}
    </ButtonGroupWrapper>
  )
})
