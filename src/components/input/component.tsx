import { forwardRef, useCallback } from 'react'

import { ErrorMessage } from '@local/styles/error'

import {
  InputPostfixChildren,
  InputPrefixChildren,
  InputProps,
  StyledInput,
  StyledInputFormat,
  StyledInputWrapper
} from '.'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const handleOnChange = useCallback(
    (value: string) => {
      if (props.isNoSpaces) {
        const valueWithoutSpaces = value.replace(/\s+/g, '')
        props.onChange?.(valueWithoutSpaces)
      } else {
        props.onChange?.(value)
      }
    },
    [props]
  )

  return (
    <>
      <StyledInputWrapper
        $isInputEffect={props.isInputEffect}
        className={props.className}
        $isDisabled={props.isDisabled}
        $width={props.width}
        $size={props.size}
      >
        {props.prefixChildren && (
          <InputPrefixChildren
            $left={props.prefixChildren.left}
            $right={props.prefixChildren.right}
            $isDisabled={props.isDisabled}
            $width={props.prefixChildren.width}
          >
            {props.prefixChildren.children}
          </InputPrefixChildren>
        )}
        {props.format ? (
          <StyledInputFormat
            $isInputEffect={props.isInputEffect}
            $isError={props?.isError}
            $isLoading={props.isLoading}
            $postfixChildren={props?.postfixChildren}
            $prefixChildren={props?.prefixChildren}
            $genre={props.genre}
            $size={props.size}
            $isBold={props.isBold}
            $isDisabled={props.isDisabled}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue}
            value={props.value ?? ''}
            placeholder={props.placeholder}
            onValueChange={({ value }) => handleOnChange(value)}
            allowEmptyFormatting={props.isAllowEmptyFormatting}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            format={props.format}
            mask={props.mask}
            type={props.formatType}
            name={props.name}
            id={props.id}
            onKeyDown={props.onKeyDown}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            tabIndex={props.tabIndex}
          />
        ) : (
          <StyledInput
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            minLength={props.minLength}
            ref={ref}
            $isError={props.isError}
            $isInputEffect={props.isInputEffect}
            $isLoading={props.isLoading}
            $postfixChildren={props?.postfixChildren}
            $prefixChildren={props?.prefixChildren}
            $genre={props.genre}
            $size={props.size}
            $isBold={props.isBold}
            $isDisabled={props.isDisabled}
            disabled={props.isDisabled}
            readOnly={props.isReadOnly}
            required={props.isRequired}
            defaultValue={props.defaultValue}
            value={props.value ?? ''}
            placeholder={props.placeholder}
            type={props.type}
            autoComplete={props.autocomplete}
            onInput={event => {
              const input = event.target as HTMLInputElement
              handleOnChange(input.value)
            }}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            name={props.name}
            id={props.id}
            tabIndex={props.tabIndex}
            onKeyDown={props.onKeyDown}
          />
        )}

        {props.postfixChildren && (
          <InputPostfixChildren
            $left={props.postfixChildren.left}
            $right={props.postfixChildren.right}
            $isDisabled={props.isDisabled}
            $width={props.postfixChildren.width}
          >
            {props.postfixChildren.children}
          </InputPostfixChildren>
        )}
        {/* {props.isLoading && (
          <InputStyledLoading
            $genre={props.genre}
            $size={props.size}
            size={props.size}
            color={theme.colors.input[props.genre].color.rest}
          />
        )} */}
      </StyledInputWrapper>
      <ErrorMessage
        isError={props.isError}
        errorMessage={props.errorMessage}
        size={props.size}
        width={props.width}
        isErrorAbsolute={props.isErrorAbsolute}
      />
    </>
  )
})

Input.displayName = 'Input'

export function formatPhoneNumber(dialCode: string, international: string) {
  function isDigit(char: string): boolean {
    return /\d/.test(char)
  }

  let formattedNumber = ''
  let placeholderNumber = ''
  let dialCodeIndex = 0

  if (dialCode.length === 0) {
    return { format: '', placeholder: '' }
  }

  for (let i = 0; i < international.length; i++) {
    const char = international.charAt(i)

    if (char === dialCode.charAt(dialCodeIndex)) {
      formattedNumber += char
      placeholderNumber += isDigit(char) ? '#' : char
      dialCodeIndex++
    } else {
      if (isDigit(char)) {
        formattedNumber += '#'
        placeholderNumber += '-'
      } else {
        formattedNumber += char
        placeholderNumber += char
      }
    }
  }

  while (dialCodeIndex < dialCode.length) {
    formattedNumber += dialCode.charAt(dialCodeIndex)
    placeholderNumber += dialCode.charAt(dialCodeIndex)
    dialCodeIndex++
  }

  return {
    format: formattedNumber,
    placeholder: placeholderNumber
  }
}
