import { FC, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { ErrorMessageProps, ErrorMessagePropsDollar, addErrorStylesProps } from '.'
import { WordsPullUp } from '../motion'

const ErrorMessageSize = css<ErrorMessagePropsDollar>`
  ${props =>
    props.$size
      ? ErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })
      : null};
`
const ErrorMessageSizeConstructor = (
  props: IJeneseiThemeSize & { $isErrorAbsolute: ErrorMessageProps['isErrorAbsolute'] }
) => css`
  ${props.$isErrorAbsolute
    ? css`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${props.padding}px;
        color: ${props => props.theme.colors.danger};
      `
    : css`
        position: static;
        padding: 0px ${props.padding}px;
        color: ${props => props.theme.colors.danger};
      `}
`

export const ErrorMessageComponent = styled.div<ErrorMessagePropsDollar>`
  ${props => getFontSizeStyles(12, 400, props.theme.font.family)};
  width: ${props => props.$width ?? '100%'};
  ${ErrorMessageSize}
  display: flex;
`
export const addError = css<addErrorStylesProps>`
  ${props =>
    props.$error?.isError &&
    css`
      border-color: ${props => props.theme.colors.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${props => props.theme.colors.danger};
      }
    `};
`
export const ErrorMessage: FC<ErrorMessageProps> = props => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)
  useEffect(() => {
    if (props.errorMessage && props.isError) {
      setLocalError(props.errorMessage)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    } else {
      timeoutRef.current = setTimeout(() => setLocalError(null), 1000)
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }
  }, [props.errorMessage, props.isError])
  return (
    <>
      {localError ? (
        <ErrorMessageComponent $size={props.size} $width={props.width} $isErrorAbsolute={props.isErrorAbsolute}>
          <WordsPullUp text={localError} />
        </ErrorMessageComponent>
      ) : null}
    </>
  )
}
