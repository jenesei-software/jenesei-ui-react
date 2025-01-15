import { FC, useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components'

import { Loading } from '@local/components/loading'
import { Ripple } from '@local/main'

import { CheckboxErrorMessage, CheckboxProps, CheckboxWrapper, StyledIcon } from '.'

export const Checkbox: FC<CheckboxProps> = props => {
  const handleOnClick = useCallback(
    (checked: boolean) => {
      props.onChange?.(checked)
    },
    [props]
  )
  const theme = useTheme()
  const children = useMemo(
    () => (
      <>
        <StyledIcon
          size={props.sizeIcon || props.size}
          name={props.view}
          type="checkbox"
          order={props.iconOrder}
          $genre={props.genre}
          $checked={props.checked}
        />
        {props.children && props.children}
      </>
    ),
    [props.checked, props.children, props.genre, props.iconOrder, props.size, props.sizeIcon, props.view]
  )
  return (
    <>
      <CheckboxWrapper
        type="button"
        style={props.style}
        $genre={props.genre}
        $isError={props.isError}
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
        {!props.isDisabled && <Ripple color={theme.colors.checkbox[props.genre].color.rest} />}
        {props.isOnlyLoading ? (
          props.isLoading ? (
            <Loading size={props.size} color={theme.colors.checkbox[props.genre].color.rest} />
          ) : (
            children
          )
        ) : (
          <>
            {children}
            {props.isLoading && <Loading size={props.size} color={theme.colors.checkbox[props.genre].color.rest} />}
          </>
        )}
      </CheckboxWrapper>
      {props.isError && props.errorMessage && (
        <CheckboxErrorMessage $size={props.size} $width={props.width} $isErrorAbsolute={props.isErrorAbsolute}>
          {props.errorMessage}
        </CheckboxErrorMessage>
      )}
    </>
  )
}
