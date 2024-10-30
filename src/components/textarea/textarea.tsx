import { useCallback } from 'react'
import { useTheme } from 'styled-components'

import {
  StyledTextArea,
  StyledTextAreaWrapper,
  TextAreaErrorMessage,
  TextAreaProps,
  TextAreaStyledModalLoading
} from '.'

export const TextArea = (props: TextAreaProps) => {
  const theme = useTheme()
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
      <StyledTextAreaWrapper
        $isTextAreaEffect={props.isTextAreaEffect}
        className={props.className}
        $isDisabled={props.isDisabled}
        $width={props.width}
      >
        <StyledTextArea
          $isError={props.isError}
          $isTextAreaEffect={props.isTextAreaEffect}
          $isLoading={props.isLoading}
          $genre={props.genre}
          $size={props.size}
          $isBold={props.isBold}
          $isDisabled={props.isDisabled}
          $height={props.height}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          defaultValue={props.defaultValue}
          value={props.value ?? ''}
          placeholder={props.placeholder}
          onChange={event => handleOnChange(event.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          name={props.name}
          id={props.id}
        />
        {props.isLoading && (
          <TextAreaStyledModalLoading
            $genre={props.genre}
            $size={props.size}
            $height={props.height}
            size={props.size}
            color={theme.colors.input[props.genre].color.rest}
          />
        )}
      </StyledTextAreaWrapper>
      {props.isError && props.errorMessage && (
        <TextAreaErrorMessage $size={props.size} $width={props.width} $isErrorAbsolute={props.isErrorAbsolute}>
          {props.errorMessage}
        </TextAreaErrorMessage>
      )}
    </>
  )
}
