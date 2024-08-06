import { FC, useCallback } from 'react'
import { useTheme } from 'styled-components'

import { ModalLoading } from '@components/modal-loading'

import {
  CheckboxProps,
  CheckboxWrapper,
  StyledCheckedIconCircle,
  StyledCheckedIconSquare,
  StyledIconCircle,
  StyledIconSquare,
} from '.'

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
            />
          ) : props.view == 'circle' ? (
            <StyledCheckedIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
            />
          ) : (
            <StyledCheckedIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
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
            />
          ) : props.view == 'circle' ? (
            <StyledIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
            />
          ) : (
            <StyledIconCircle
              size={props.size}
              $size={props.size}
              $genre={props.genre}
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
              color={theme.colors.checkbox[props.genre].color.rest}
            />
          )}
        </>
      )}
    </CheckboxWrapper>
  )
}
