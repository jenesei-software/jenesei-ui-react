import styled, { css } from 'styled-components'

import { TJeneseiFontFamily } from '../theme'

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

export const SpanInter = styled.span<SpanInterProps>`
  ${fontInterBase};
`

export const SpanInterSB10 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(10, 600, 'Inter')};
`

export const SpanInterSB14 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(14, 600, 'Inter')};
`

export const SpanInterSB16 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(16, 600, 'Inter')};
`

export const SpanInterSB18 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(18, 600, 'Inter')};
`

export const SpanInterSB20 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(20, 600, 'Inter')};
`

export const SpanInterM12 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(12, 500, 'Inter')};
`

export const SpanInterM14 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(14, 500, 'Inter')};
`

export const SpanInterM16 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(16, 500, 'Inter')};
`

export const SpanInterM18 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(18, 500, 'Inter')};
`

export const SpanInterM20 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(20, 500, 'Inter')};
`

export const SpanInterB14 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(14, 700, 'Inter')};
`

export const SpanInterB16 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(16, 700, 'Inter')};
`

export const SpanInterB20 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(20, 700, 'Inter')};
`

export const SpanInterB32 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(32, 700, 'Inter')};
`

export const SpanInterB36 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(36, 700, 'Inter')};
`

export const SpanInterR12 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(12, 400, 'Inter')};
`

export const SpanInterR14 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(14, 400, 'Inter')};
`

export const SpanInterR16 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(16, 400, 'Inter')};
`

export const SpanInterR20 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(20, 400, 'Inter')};
`

export const SpanInterR24 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(24, 400, 'Inter')};
`

export const SpanInterR36 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(36, 400, 'Inter')};
`

export const SpanInterT10 = styled(SpanInter)<SpanInterProps>`
  ${getFontStyles(100, 100, 'Inter')};
`
