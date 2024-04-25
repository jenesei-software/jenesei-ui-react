import { FC, memo } from 'react'
import { Ripple } from 'react-ripple-click'
import { useTheme } from 'styled-components'

import { ButtonProps, StyledButton } from '.'
import { LibraryIcon, ModalLoading } from '../../main'

export const Button: FC<ButtonProps> = memo((props) => {
  const theme = useTheme()
  const IconComponent = props.icon && LibraryIcon[props.icon]
  return (
    <StyledButton
      tabIndex={0}
      $genre={props.genre}
      $genreType={props.genreType}
      $width={props.width}
      $size={props.size}
      $isDisabled={props.isDisabled || props.isHidden}
      $isActive={props.isActive}
      disabled={props.isDisabled}
      type={props.type}
      className={props.className}
      onClick={() =>
        !props.isLoading &&
        !props.isDisabled &&
        props.onClick &&
        props.onClick()
      }
    >
      {!props.isDisabled && !props.isLoading && <Ripple />}
      {props.isOnlyLoading ? (
        props.isLoading ? (
          <ModalLoading
            size={props.size}
            color={theme.colors.button[props.genre][props.genreType].color.rest}
          />
        ) : (
          <>
            {props.children && props.children}
            {IconComponent && <IconComponent size={props.size} />}
          </>
        )
      ) : (
        <>
          {props.children && props.children}
          {IconComponent && <IconComponent size={props.size} />}
          {props.isLoading && (
            <ModalLoading
              size={props.size}
              color={
                props.isActive
                  ? theme.colors.button[props.genre][props.genreType].color
                      .active
                  : theme.colors.button[props.genre][props.genreType].color.rest
              }
            />
          )}
        </>
      )}
    </StyledButton>
  )
})
