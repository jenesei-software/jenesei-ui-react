import { FC } from 'react'
import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { ErrorMessageProps, ErrorMessagePropsDollar, addErrorProps, addNewErrorStylesProps } from '.'

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
`

export const addError = css<addErrorProps>`
  ${props =>
    props.$isError &&
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
export const addNewError = css<addNewErrorStylesProps>`
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
  return (
    <>
      {props.isError && props.errorMessage ? (
        <ErrorMessageComponent $size={props.size} $width={props.width} $isErrorAbsolute={props.isErrorAbsolute}>
          {props.errorMessage}
        </ErrorMessageComponent>
      ) : null}
    </>
  )
}
