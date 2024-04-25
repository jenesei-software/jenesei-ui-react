import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { InputPhoneProps, StyledInputPhone } from '.'
import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultStyledModalLoading,
  StyledInputDefaultWrapper,
} from '../input-default'

export const InputPhone = (props: InputPhoneProps) => {
  const theme = useTheme()

  const [format, setFormat] = useState<string>('+7 (900) 000-00-00')
  useEffect(() => {
    if (props.value) {
      setFormat('+7 (9##) ###-##-##')
    } else {
      setFormat('+7 (900) 000-00-00')
    }
  }, [props.value])
  return (
    <StyledInputDefaultWrapper
      className={props.className}
      $isDisabled={props.isDisabled}
      $width={props.width}
    >
      {props.prefixChildren && (
        <InputDefaultPrefixChildren {...props.prefixChildren} />
      )}
      <StyledInputPhone
        $isFocus={props.isFocus}
        $isError={props.isError}
        $isLoading={props.isLoading}
        $postfixChildren={props?.postfixChildren}
        $prefixChildren={props?.prefixChildren}
        $genre={props.genre}
        $size={props.size}
        $genreType={props.genreType}
        disabled={props.isDisabled}
        readOnly={props.isReadOnly}
        required={props.isRequired}
        defaultValue={props.defaultValue}
        value={props.value}
        $isPhoneFocus={format === '+7 (9##) ###-##-##'}
        onValueChange={({ value }) => props.onChange && props.onChange(value)}
        placeholder="+7 (900) 000-00-00"
        format={format}
        mask="_"
        displayType="input"
        allowEmptyFormatting
        inputMode="tel"
        onFocus={() => {
          setFormat('+7 (9##) ###-##-##')
        }}
        onBlur={() => {
          if (!props.value) {
            setFormat('+7 (900) 000-00-00')
          }
        }}
      />
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
}
