import { memo } from 'react'
import { useTheme } from 'styled-components'

import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultProps,
  InputDefaultStyledModalLoading,
  StyledInputDefault,
  StyledInputDefaultFormat,
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
      {props.format ? (
        <StyledInputDefaultFormat
          $isActive={props.isActive}
          $isError={props.isError}
          $isLoading={props.isLoading}
          $postfixChildren={props?.postfixChildren}
          $prefixChildren={props?.prefixChildren}
          $genre={props.genre}
          $size={props.size}
          $genreType={props.genreType}
          $isBold={props.isBold}
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
        <StyledInputDefault
          $isActive={props.isActive}
          $isError={props.isError}
          $isLoading={props.isLoading}
          $postfixChildren={props?.postfixChildren}
          $prefixChildren={props?.prefixChildren}
          $genre={props.genre}
          $size={props.size}
          $genreType={props.genreType}
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
        <InputDefaultErrorMessage>
          {props.errorMessage}
        </InputDefaultErrorMessage>
      )}
      {props.postfixChildren && (
        <InputDefaultPostfixChildren {...props.postfixChildren} />
      )}
      {props.isLoading && (
        <InputDefaultStyledModalLoading
          $genre={props.genre}
          $genreType={props.genreType}
          $size={props.size}
          size={props.size}
          color={theme.colors.input[props.genre][props.genreType].color.rest}
        />
      )}
    </StyledInputDefaultWrapper>
  )
})
