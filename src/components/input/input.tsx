import { getExample } from 'awesome-phonenumber'
import FullCountryList from 'country-list-with-dial-code-and-flag'
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

  return (
    <>
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
            $isError={props?.isError}
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
            onValueChange={({ value }) =>
              props.onChange && props.onChange(value)
            }
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
            name={props.name}
            id={props.id}
          />
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
      {props.isError && props.errorMessage && (
        <InputErrorMessage
          $width={props.width}
          $isErrorAbsolute={props.isErrorAbsolute}
        >
          {props.errorMessage}
        </InputErrorMessage>
      )}
    </>
  )
}

function formatPhoneNumber(dialCode: string, international: string) {
  const numberWithoutDialCode = international.replace(dialCode, '').trim()

  const formattedNumber = numberWithoutDialCode.replace(/\d/g, '#')
  const placeholderNumber = numberWithoutDialCode.replace(/\d/g, '_')
  return {
    format: `${dialCode} ${formattedNumber}`,
    placeholder: `${dialCode} ${placeholderNumber}`,
  }
}

export const InputPhone = (
  props: Omit<InputProps, 'format' | 'mask' | 'formatType'> & {
    countryCode?: string
    countryDialCode?: string
  },
) => {
  const countryCode = props?.countryCode ?? null
  const country = countryCode
    ? FullCountryList.findOneByCountryCode(countryCode)
    : null
  const dialCode = props?.countryDialCode ?? country?.dial_code
  const data = dialCode && countryCode ? getExample(countryCode) : null
  const formattedPhoneNumber =
    data && data.number?.international && dialCode
      ? formatPhoneNumber(dialCode, data.number?.international)
      : null

  return (
    <Input
      {...props}
      placeholder={
        formattedPhoneNumber?.placeholder ? undefined : props.placeholder
      }
      format={formattedPhoneNumber?.format}
      isAllowEmptyFormatting
      mask="_"
      isDisabled={!formattedPhoneNumber || props.isDisabled}
      formatType="tel"
    />
  )
}
