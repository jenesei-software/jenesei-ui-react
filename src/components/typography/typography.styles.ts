import styled, { css } from 'styled-components'

import { JeneseiThemeVariables } from '@local/theme/theme'

import { TypographyCSSProps } from '.'

const SpanFontCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;
  line-height: ${props => props.theme.font.lineHeight};

  ${props =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `};
  ${props =>
    props.$cursor &&
    css`
      cursor: ${props.$cursor};
    `};
  ${props =>
    props.$align &&
    css`
     text-align ${props.$align};
    `};
  ${props =>
    props.$wrap &&
    css`
     text-wrap ${props.$wrap};
    `};
  ${props =>
    props.$decoration &&
    css`
     text-decoration ${props.$decoration};
    `};
  ${props =>
    props.$transform &&
    css`
     text-transform ${props.$transform};
    `};
  ${props =>
    props.$overflow &&
    css`
     overflow ${props.$overflow};
    `};
  ${props =>
    props.$clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.$clamp};
    `};
  ${props =>
    props.$clampOrient &&
    css`
      -webkit-box-orient: ${props.$clampOrient};
    `};
  ${props =>
    props.$family &&
    css`
      font-family: ${props.$family};
    `};
  ${props =>
    props.$size &&
    css`
      font-size: ${props.$size}px;
    `};
  ${props =>
    props.$weight &&
    css`
      font-weight: ${props.$weight};
    `};
  ${props =>
    props.$height &&
    css`
      line-height: ${props.$height}px;
    `};
  ${props =>
    props.$color &&
    css`
      color: ${JeneseiThemeVariables[props.$color]};
    `};

  ${props =>
    props.$isHoverUnderlining &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `};
`

export const SpanFont = styled.span<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH1 = styled.h1<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH2 = styled.h2<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH3 = styled.h3<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH4 = styled.h4<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH5 = styled.h5<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH6 = styled.h6<TypographyCSSProps>`
  ${SpanFontCSS}
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH7 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
  }
  ${SpanFontCSS};
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH8 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
  }
  ${SpanFontCSS};
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`

export const TitleH9 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
  }
  ${SpanFontCSS};
  ${props =>
    props.$device &&
    css`
      font-size: ${props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault[props.$device]}px;
    `}
`
