import styled, { css } from 'styled-components'

import { TJeneseiFontFamily } from '../theme'

export interface FontProps {
  $color?: string
  $size: number
  $textAlign?: 'center'
  $textWrap?: 'nowrap'
  $height?: number
  $weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  $family: TJeneseiFontFamily
}

export const getFontStyles = (
  size: FontProps['$size'],
  weight: FontProps['$weight'],
  family: FontProps['$family'],
  height?: FontProps['$height'],
) => css`
  font-family: ${family};
  font-style: normal;
  line-height: normal;
  font-size: ${size}px;
  font-weight: ${weight};
  ${height &&
  css`
    line-height: ${height}px;
  `}
`

export const SpanFont = styled.span<FontProps>`
  font-family: ${(props) => props.$family};
  font-style: normal;
  line-height: normal;
  font-size: ${(props) => props.$size}px;
  font-weight: ${(props) => props.$weight};

  ${(props) =>
    props.$height &&
    css`
      line-height: ${props.$height}px;
    `};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${(props) =>
    props.$textAlign &&
    css`
      text-align: ${props.$textAlign};
    `};
  ${(props) =>
    props.$textWrap &&
    css`
      text-wrap: ${props.$textWrap};
    `}
`
