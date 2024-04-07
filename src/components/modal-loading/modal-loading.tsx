import { ModalLoadingProps, StyledReactLoading } from '.'
import { FC } from 'react'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
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
