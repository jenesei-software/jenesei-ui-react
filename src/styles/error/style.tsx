import { FC } from 'react'
import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { ErrorMessageProps, ErrorMessagePropsDollar } from '.'

const ErrorMessageSize = css<ErrorMessagePropsDollar>`
  ${props => ErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })};
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
