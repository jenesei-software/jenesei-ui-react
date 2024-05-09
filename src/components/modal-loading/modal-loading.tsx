import { FC } from 'react'

import { ModalLoadingProps, StyledReactLoading } from '.'

export const ModalLoading: FC<ModalLoadingProps> = (props) => {
  return (
    <StyledReactLoading
      className={props.className}
      color={props.color}
      size={props.size}
      height={
        props.size === 'large'
          ? 22
          : props.size === 'largeMedium'
            ? 19
            : props.size === 'medium'
              ? 16
              : props.size === 'mediumSmall'
                ? 13
                : props.size === 'small'
                  ? 10
                  : 22
      }
      width={
        props.size === 'large'
          ? 22
          : props.size === 'largeMedium'
            ? 19
            : props.size === 'medium'
              ? 16
              : props.size === 'mediumSmall'
                ? 13
                : props.size === 'small'
                  ? 10
                  : 22
      }
    />
  )
}
