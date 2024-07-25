import styled, { css } from 'styled-components'

import {
  JeneseiThemeVariables,
  JeneseiThemeVariablesKeys,
  TJeneseiFontFamily,
} from '@theme/index'

export type FontProps = {
  $size: number
  $color?: JeneseiThemeVariablesKeys
  $textAlign?: 'center'
  $textWrap?: 'nowrap'
  $height?: number
  $weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  $family: TJeneseiFontFamily
}

export type PartialFontProps = Partial<FontProps>

export const getFontSizeStyles = (
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

export const SpanFontCSS = css<PartialFontProps>`
  font-style: normal;

  ${(props) =>
    props.$family &&
    css`
      font-family: ${props.$family};
    `};
  ${(props) =>
    props.$size &&
    css`
      font-size: ${props.$size}px;
    `};
  ${(props) =>
    props.$weight &&
    css`
      font-weight: ${props.$weight};
    `};
  ${(props) =>
    props.$height &&
    css`
      line-height: ${props.$height}px;
    `};
  ${(props) =>
    props.$color &&
    css`
      color: ${JeneseiThemeVariables[props.$color]};
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

export const SpanFont = styled.span<FontProps>`
  ${SpanFontCSS}
`

export const TitleH1 = styled.h1<PartialFontProps>`
  ${SpanFontCSS}
`

export const TitleH2 = styled.h2<PartialFontProps>`
  ${SpanFontCSS}
`

export const TitleH3 = styled.h3<PartialFontProps>`
  ${SpanFontCSS}
`

export const TitleH4 = styled.h4<PartialFontProps>`
  ${SpanFontCSS}
`

export const TitleH5 = styled.h5<PartialFontProps>`
  ${SpanFontCSS}
`

export const TitleH6 = styled.h6<PartialFontProps>`
  ${SpanFontCSS}
`
