import { FC } from 'react'

import { ModalLoadingProps, StyledReactLoading } from '.'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
      className={props.className}
      color={props.color}
      height={
        props.size === 'medium'
          ? '24px'
          : props.size === 'large'
            ? '34px'
            : 'auto'
      }
      width={
        props.size === 'medium'
          ? '24px'
          : props.size === 'large'
            ? '34px'
            : 'auto'
      }
    />
  )
}
