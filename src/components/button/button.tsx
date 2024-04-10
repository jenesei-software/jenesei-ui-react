import { FC, memo } from 'react'
import { Ripple } from 'react-ripple-click'
import { useTheme } from 'styled-components'

import { ButtonProps, StyledButton, StyledButtonStyledModalLoading } from '.'
import { LibraryIcon } from '../../main'

export const Button: FC<ButtonProps> = memo(
  (props = { color: 'product', size: 'large' }) => {
    const theme = useTheme()
    const IconComponent = props.icon && LibraryIcon[props.icon]
    return (
      <StyledButton
        tabIndex={0}
        $isHidden={props.isHidden}
        $genre={props.genre}
        $width={props.width}
        $color={props.color ? theme.colors.button[props.color] : '#fff'}
        $size={props.size}
        type={props.type}
        disabled={props.isDisabled}
        className={props.className}
        onClick={() =>
          !props.isLoading &&
          !props.isDisabled &&
          props.onClick &&
          props.onClick()
        }
      >
        {!props.isDisabled && !props.isLoading && <Ripple />}
        {props.isLoading ? (
          <StyledButtonStyledModalLoading
            $size={props.size}
            size={'auto'}
            color={
              props.genre === 'secondary'
                ? props.color
                  ? theme.colors.button[props.color]
                  : '#fff'
                : '#fff'
            }
          />
        ) : (
          <>
            {props.content && props.content}
            {IconComponent && <IconComponent />}
          </>
        )}
      </StyledButton>
    )
  },
)
