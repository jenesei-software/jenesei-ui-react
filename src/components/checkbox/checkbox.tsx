import { FC, useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components'

import { ModalLoading } from '@components/modal-loading'

import { CheckboxProps, CheckboxWrapper, StyledIcon } from '.'

export const Checkbox: FC<CheckboxProps> = (props) => {
  const handleOnClick = useCallback(
    (checked: boolean) => {
      props.onChange && props.onChange(checked)
    },
    [props]
  )
  const theme = useTheme()
  const children = useMemo(
    () => (
      <>
        <StyledIcon size={props.size} name={props.view} type="checkbox" $genre={props.genre} $checked={props.checked} />
        {props.children && props.children}
      </>
    ),
    [props.checked, props.children, props.genre, props.size, props.view]
  )
  return (
    <CheckboxWrapper
      style={props.style}
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
          <ModalLoading size={props.size} color={theme.colors.checkbox[props.genre].color.rest} />
        ) : (
          children
        )
      ) : (
        <>
          {children}
          {props.isLoading && <ModalLoading size={props.size} color={theme.colors.checkbox[props.genre].color.rest} />}
        </>
      )}
    </CheckboxWrapper>
  )
}
