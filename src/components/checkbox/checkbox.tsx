import { FC, useCallback } from 'react'
import { useTheme } from 'styled-components'

import {
  CheckboxProps,
  CheckboxWrapper,
  StyledCheckedIconCircle,
  StyledCheckedIconSquare,
  StyledIconCircle,
  StyledIconSquare,
} from '.'
import { ModalLoading } from '../modal-loading'

export const Checkbox: FC<CheckboxProps> = (props) => {
  const handleOnClick = useCallback(
    (checked: boolean) => {
      props.onChange && props.onChange(checked)
    },
    [props],
  )
  const theme = useTheme()
  const children = (
    <>
      {props.checked ? (
        <>
          {props.view == 'square' ? (
            <StyledCheckedIconSquare
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          ) : props.view == 'circle' ? (
            <StyledCheckedIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          ) : (
            <StyledCheckedIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          )}
        </>
      ) : (
        <>
          {props.view == 'square' ? (
            <StyledIconSquare
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          ) : props.view == 'circle' ? (
            <StyledIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          ) : (
            <StyledIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
              $isActive={props.isActive}
            />
          )}
        </>
      )}
      {props.children && props.children}
    </>
  )
  return (
    <CheckboxWrapper
      $genre={props.genre}
      $view={props.view}
      $checked={props.checked}
      $width={props.width}
      $size={props.size}
      $isDisabled={props.isDisabled}
      $isHiddenBorder={props.isHiddenBorder}
      $isActive={props.isActive}
      $isNotBackground={props.isNotBackground}
      $customFontFamily={props.customFontFamily}
      $customFontSize={props.customFontSize}
      $customFontWeight={props.customFontWeight}
      disabled={props.isDisabled}
      tabIndex={0}
      onClick={() => !props.isDisabled && handleOnClick(!props.checked)}
    >
      {props.isOnlyLoading ? (
        props.isLoading ? (
          <ModalLoading
            size={props.size}
            color={theme.colors.checkbox[props.genre].color.rest}
          />
        ) : (
          children
        )
      ) : (
        <>
          {children}
          {props.isLoading && (
            <ModalLoading
              size={props.size}
              color={
                props.isActive
                  ? theme.colors.checkbox[props.genre].color.active
                  : theme.colors.checkbox[props.genre].color.rest
              }
            />
          )}
        </>
      )}
    </CheckboxWrapper>
  )
}
