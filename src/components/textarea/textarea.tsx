import { useCallback, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'

import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme/theme'

import { StyledTextArea, StyledTextAreaWrapper, TextAreaProps } from '.'

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

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleHeight = useCallback(
    (contentHeight: number) => {
      if (textareaRef.current) {
        const minHeight = KEY_SIZE_DATA[props.size].height
        const maxHeight = Math.max(KEY_SIZE_DATA[props.size].height, contentHeight)

        textareaRef.current.style.height = `${minHeight}px`
        const scrollHeight = textareaRef.current.scrollHeight

        let newHeight = contentHeight
        if (props.isAutoHeight && !props.height) {
          newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight))
        } else {
          newHeight = Math.max(minHeight, contentHeight)
        }

        textareaRef.current.style.height = `${newHeight}px`
        textareaRef.current.style.minHeight = `${minHeight}px`
        textareaRef.current.style.maxHeight = `${maxHeight}px`

        if (textareaRef.current.scrollHeight > maxHeight) {
          textareaRef.current.style.overflowY = 'auto'
        } else {
          textareaRef.current.style.overflowY = 'hidden'
        }
      }
    },
    [props.height, props.isAutoHeight, props.size]
  )
  const checkHeight = useCallback(() => {
    if (props.height) {
      handleHeight(props.height)
    } else {
      if (props.maxRows) {
        const lineHeight = theme.font.sizeDefault.default * theme.font.lineHeight
        const initialHeight = props.maxRows ? lineHeight * props.maxRows : lineHeight
        handleHeight(initialHeight + KEY_SIZE_DATA[props.size].padding * 2 - 8)
      } else {
        handleHeight(KEY_SIZE_DATA[props.size].height)
      }
    }
  }, [handleHeight, props.height, props.maxRows, props.size, theme.font.lineHeight, theme.font.sizeDefault.default])

  useEffect(() => {
    checkHeight()
  }, [checkHeight, props.isAutoHeight, props.value])

  return (
    <>
      <StyledTextAreaWrapper
        $isTextAreaEffect={props.isTextAreaEffect}
        className={props.className}
        $isDisabled={props.isDisabled}
        $width={props.width}
      >
        <StyledTextArea
          ref={textareaRef}
          $isResize={props.isResize}
          $isError={props.isError}
          $isTextAreaEffect={props.isTextAreaEffect}
          $isLoading={props.isLoading}
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
          onChange={event => handleOnChange(event.target.value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          name={props.name}
          id={props.id}
        />
        {/* {props.isLoading && (
          <TextAreaStyledLoading
            $genre={props.genre}
            $size={props.size}
            size={props.size}
            color={theme.colors.input[props.genre].color.rest}
          />
        )} */}
      </StyledTextAreaWrapper>
      <ErrorMessage
        isError={props.isError}
        errorMessage={props.errorMessage}
        size={props.size}
        width={props.width}
        isErrorAbsolute={props.isErrorAbsolute}
      />
    </>
  )
}
