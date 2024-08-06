import { memo } from 'react'
import { useTheme } from 'styled-components'

import {
  InputErrorMessage,
  InputPostfixChildren,
  InputPrefixChildren,
  InputProps,
  InputStyledModalLoading,
  StyledInput,
  StyledInputFormat,
  StyledInputWrapper,
} from '.'

export const Input = memo((props: InputProps) => {
  const theme = useTheme()

  return (
    <StyledInputWrapper
      className={props.className}
      $isDisabled={props.isDisabled}
      $width={props.width}
    >
      {props.prefixChildren && (
        <InputPrefixChildren {...props.prefixChildren} />
      )}
      {props.format ? (
        <StyledInputFormat
          $isError={props.isError}
          $isLoading={props.isLoading}
          $postfixChildren={props?.postfixChildren}
          $prefixChildren={props?.prefixChildren}
          $genre={props.genre}
          $size={props.size}
          $isBold={props.isBold}
          $isCustomIcon={props.isCustomIcon}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue}
          value={props.value ?? ''}
          placeholder={props.placeholder}
          onValueChange={({ value }) => props.onChange && props.onChange(value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          format={props.format}
          mask={props.mask}
          type={props.formatType}
        />
      ) : (
        <StyledInput
          $isError={props.isError}
          $isLoading={props.isLoading}
          $postfixChildren={props?.postfixChildren}
          $prefixChildren={props?.prefixChildren}
          $genre={props.genre}
          $size={props.size}
          $isBold={props.isBold}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue}
          value={props.value ?? ''}
          placeholder={props.placeholder}
          type={props.type}
          onChange={(event) =>
            props.onChange && props.onChange(event.target.value)
          }
          onBlur={props.onBlur}
          onFocus={props.onFocus}
        />
      )}

      {props.isError && props.errorMessage && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
      {props.postfixChildren && (
        <InputPostfixChildren {...props.postfixChildren} />
      )}
      {props.isLoading && (
        <InputStyledModalLoading
          $genre={props.genre}
          $size={props.size}
          size={props.size}
          color={theme.colors.input[props.genre].color.rest}
        />
      )}
    </StyledInputWrapper>
  )
})
