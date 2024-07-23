import { FC } from 'react'

import { ButtonGroupProps, ButtonGroupWrapper } from '.'
import { Button } from '../../main'

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroupWrapper
      $position={props.position}
      className={props.className}
      id="jenesei-button-group"
    >
      {props.value?.map((button, id) => {
        return <Button key={id} {...button} width={props.width ?? 'auto'} />
      })}
    </ButtonGroupWrapper>
  )
}
