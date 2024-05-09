import styled, { css } from 'styled-components'

import { TJeneseiFontFamily } from '../main'

export * from './inter'

export interface SpanInterProps {
  color?: string
  width?: string
  textAlign?: 'center'
  textWrap?: 'nowrap'
}

export const fontInterBase = css<SpanInterProps>`
  font-style: normal;
  line-height: normal;
  text-align: ${(props) => props.textAlign};
  text-wrap: ${(props) => props.textWrap};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
`

export const getFontStyles = (
  size: number,
  weight: number,
  family: TJeneseiFontFamily,
) => css`
  ${fontInterBase};
  font-family: ${family};
  font-size: ${size}px;
  font-weight: ${weight};
`

export const SpanFont = styled.span<SpanInterProps>`
  ${fontInterBase};
`
