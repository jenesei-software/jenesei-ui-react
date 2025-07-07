import { useMergeRefs } from '@floating-ui/react'
import { useCallback, useEffect, useMemo, useRef } from 'react'
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

  const refLocal = useRef<HTMLTextAreaElement>(null)
  const ref = useMergeRefs([refLocal, props.ref])

  const sizeHeight = useMemo(() => props.sizeHeight ?? KEY_SIZE_DATA[props.size].height, [props.size, props.sizeHeight])
  const sizePadding = useMemo(
    () => props.sizePadding ?? KEY_SIZE_DATA[props.size].padding,
    [props.size, props.sizePadding]
  )

  const handleHeight = useCallback(
    (contentHeight: number) => {
      if (refLocal.current) {
        const minHeight = sizeHeight
        const maxHeight = Math.max(sizeHeight, contentHeight)

        refLocal.current.style.height = `${minHeight}px`
        const scrollHeight = refLocal.current.scrollHeight
        let newHeight = contentHeight
        if (props.isAutoHeight && !props.height) {
          newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight))
        } else {
          newHeight = Math.max(minHeight, contentHeight)
        }

        refLocal.current.style.height = `${newHeight}px`
        refLocal.current.style.minHeight = `${minHeight}px`
        refLocal.current.style.maxHeight = `${maxHeight}px`

        if (refLocal.current.scrollHeight > maxHeight) {
          refLocal.current.style.overflowY = 'auto'
        } else {
          refLocal.current.style.overflowY = 'hidden'
        }
      }
    },
    [props.height, props.isAutoHeight, sizeHeight]
  )
  const checkHeight = useCallback(() => {
    if (props.height) {
      handleHeight(props.height)
    } else {
      if (props.maxRows) {
        const lineHeight = theme.font.sizeDefault.default * theme.font.lineHeight
        const initialHeight = props.maxRows ? lineHeight * props.maxRows : lineHeight
        handleHeight(initialHeight + sizePadding - 8)
      } else {
        handleHeight(sizeHeight)
      }
    }
  }, [
    handleHeight,
    props.height,
    props.maxRows,
    sizeHeight,
    sizePadding,
    theme.font.lineHeight,
    theme.font.sizeDefault.default
  ])

  useEffect(() => {
    checkHeight()
  }, [checkHeight, props.isAutoHeight, props.value])

  return (
    <>
      <StyledTextAreaWrapper $isTextAreaEffect={props.isTextAreaEffect} $isDisabled={props.isDisabled} $sx={props.sx}>
        <StyledTextArea
          className={props.className}
          ref={ref}
          $isResize={props.isResize}
          $error={props.error}
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
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}
