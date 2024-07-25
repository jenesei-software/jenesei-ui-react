import { FC } from 'react'

import { KEY_SIZE_DATA } from '@theme/index'

import { ModalLoadingProps, StyledReactLoading } from '.'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
      type="spinningBubbles"
      className={props.className}
      color={props.color}
      size={props.size}
      height={KEY_SIZE_DATA[props.size].heightIcon + 4}
      width={KEY_SIZE_DATA[props.size].heightIcon + 4}
    />
  )
}
