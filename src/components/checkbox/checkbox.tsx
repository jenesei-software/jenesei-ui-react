import { FC, useCallback } from 'react'
import { Ripple } from 'react-ripple-click'
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
              $genre={props.genre}
              $genreType={props.genreType}
            />
          ) : props.view == 'circle' ? (
            <StyledCheckedIconCircle
              $genre={props.genre}
              $genreType={props.genreType}
            />
          ) : (
            <StyledCheckedIconCircle
              $genre={props.genre}
              $genreType={props.genreType}
            />
          )}
        </>
      ) : (
        <>
          {props.view == 'square' ? (
            <StyledIconSquare
              $genre={props.genre}
              $genreType={props.genreType}
            />
          ) : props.view == 'circle' ? (
            <StyledIconCircle
              $genre={props.genre}
              $genreType={props.genreType}
            />
          ) : (
            <StyledIconCircle
              $genre={props.genre}
              $genreType={props.genreType}
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
      $genreType={props.genreType}
      $view={props.view}
      $checked={props.checked}
      $width={props.width}
      $size={props.size}
      $isDisabled={props.isDisabled}
      $isHiddenBorder={props.isHiddenBorder}
      disabled={props.isDisabled}
      tabIndex={0}
      onClick={() => !props.isDisabled && handleOnClick(!props.checked)}
    >
      {!props.isDisabled && !props.isLoading && <Ripple />}
      {props.isOnlyLoading ? (
        props.isLoading ? (
          <ModalLoading
            size={props.size}
            color={theme.colors.button[props.genre][props.genreType].color.rest}
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
                theme.colors.button[props.genre][props.genreType].color.rest
              }
            />
          )}
        </>
      )}
    </CheckboxWrapper>
  )
}
