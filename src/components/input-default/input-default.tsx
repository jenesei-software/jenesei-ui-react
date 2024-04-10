import { memo } from 'react'
import { useTheme } from 'styled-components'

import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultProps,
  StyledInputDefault,
} from '.'
import { UIFrameFlexCenter } from '../../main'

export const InputDefault = memo((props: InputDefaultProps) => {
  const theme = useTheme()

  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      {props.prefixChildren && (
        <InputDefaultPrefixChildren {...props.prefixChildren} />
      )}
      <StyledInputDefault
        {...props.register}
        minLength={props.minLength}
        maxLength={props.maxLength}
        $isOnlyText={props.isOnlyText}
        $isFocus={props.isFocus}
        $isError={props.isError}
        $postfixChildren={props?.postfixChildren}
        $prefixChildren={props?.prefixChildren}
        $genre={props.genre}
        $size={props.size}
        $color={props.color ? theme.colors.button[props.color] : '#fff'}
        disabled={props.isDisabled}
        readOnly={props.isReadOnly}
        required={props.isRequired}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(event) =>
          props.onChange && props.onChange(event.target.value)
        }
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      ></StyledInputDefault>
      {props.isError && props.errorMessage && (
        <InputDefaultErrorMessage>
          {props.errorMessage}
        </InputDefaultErrorMessage>
      )}
      {props.postfixChildren && (
        <InputDefaultPostfixChildren {...props.postfixChildren} />
      )}
    </UIFrameFlexCenter>
  )
})
