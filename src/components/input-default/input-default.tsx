import { memo } from 'react'
import { useTheme } from 'styled-components'

import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultProps,
  InputDefaultStyledModalLoading,
  StyledInputDefault,
  StyledInputDefaultWrapper,
} from '.'

export const InputDefault = memo((props: InputDefaultProps) => {
  const theme = useTheme()

  return (
    <StyledInputDefaultWrapper
      className={props.className}
      $isDisabled={props.isDisabled}
      $width={props.width}
    >
      {props.prefixChildren && (
        <InputDefaultPrefixChildren {...props.prefixChildren} />
      )}
      <StyledInputDefault
        {...props.register}
        $isFocus={props.isFocus}
        $isError={props.isError}
        $isLoading={props.isLoading}
        $postfixChildren={props?.postfixChildren}
        $prefixChildren={props?.prefixChildren}
        $genre={props.genre}
        $size={props.size}
        $genreType={props.genreType}
        disabled={props.isDisabled || props.isReadOnly}
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
      {props.isLoading && (
        <InputDefaultStyledModalLoading
          size={props.size}
          color={theme.colors.input[props.genre][props.genreType].color.rest}
        />
      )}
    </StyledInputDefaultWrapper>
  )
})
