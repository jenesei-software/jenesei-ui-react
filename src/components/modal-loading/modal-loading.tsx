import { FC } from 'react'

import { ModalLoadingProps, StyledReactLoading } from '.'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
      className={props.className}
      color={props.color}
      size={props.size}
      height={
        props.size === 'medium'
          ? '22px'
          : props.size === 'large'
            ? '28px'
            : 'auto'
      }
      width={
        props.size === 'medium'
          ? '22px'
          : props.size === 'large'
            ? '28px'
            : 'auto'
      }
    />
  )
}
