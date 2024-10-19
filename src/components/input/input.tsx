import { getExample } from 'awesome-phonenumber'
import FullCountryList from 'country-list-with-dial-code-and-flag'
import { useCallback } from 'react'
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

export const Input = (props: InputProps) => {
  const theme = useTheme()

  const handleOnChange = useCallback(
    (value: string) => {
      if (props.isNoSpaces) {
        const valueWithoutSpaces = value.replace(/\s+/g, '')
        props.onChange && props.onChange(valueWithoutSpaces)
      } else {
        props.onChange && props.onChange(value)
      }
    },
    [props],
  )

  return (
    <>
      <StyledInputWrapper
        $isInputEffect={props.isInputEffect}
        className={props.className}
        $isDisabled={props.isDisabled}
        $width={props.width}
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
            $isCustomIcon={props.isCustomIcon}
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
          />
        ) : (
          <StyledInput
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
            onChange={(event) => handleOnChange(event.target.value)}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            name={props.name}
            id={props.id}
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
        {props.isLoading && (
          <InputStyledModalLoading
            $genre={props.genre}
            $size={props.size}
            size={props.size}
            color={theme.colors.input[props.genre].color.rest}
          />
        )}
      </StyledInputWrapper>
      {props.isError && props.errorMessage && (
        <InputErrorMessage $size={props.size} $width={props.width} $isErrorAbsolute={props.isErrorAbsolute}>
          {props.errorMessage}
        </InputErrorMessage>
      )}
    </>
  )
}

function formatPhoneNumber(dialCode: string, international: string) {
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
    placeholder: placeholderNumber,
  }
}

export const InputPhone = (
  props: Omit<InputProps, 'format' | 'mask' | 'formatType'> & {
    countryCode?: string
    countryDialCode?: string
  },
) => {
  const countryCode = props?.countryCode ?? null
  const country = countryCode ? FullCountryList.findOneByCountryCode(countryCode) : null
  const countryDialCode = props?.countryDialCode ?? country?.dial_code
  const data = countryDialCode && countryCode ? getExample(countryCode) : null
  const formattedPhoneNumber =
    data && data.number?.international && countryDialCode
      ? formatPhoneNumber(countryDialCode, data.number?.international)
      : null

  return (
    <Input
      {...props}
      placeholder={formattedPhoneNumber?.placeholder ? undefined : props.placeholder}
      format={formattedPhoneNumber?.format}
      isAllowEmptyFormatting
      mask="_"
      isDisabled={!formattedPhoneNumber || props.isDisabled}
      formatType="tel"
    />
  )
}
