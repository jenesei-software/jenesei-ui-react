import { FC } from 'react'

import { ModalLoadingProps, StyledReactLoading } from '.'
import { KEY_SIZE_DATA } from '../../main'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
      type="spinningBubbles"
      className={props.className}
      color={props.color}
      size={props.size}
      height={
        KEY_SIZE_DATA[props.size].height -
        KEY_SIZE_DATA[props.size].padding * 2 -
        6
      }
      width={
        KEY_SIZE_DATA[props.size].height -
        KEY_SIZE_DATA[props.size].padding * 2 -
        6
      }
    />
  )
}
