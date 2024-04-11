import styled, { css } from 'styled-components'

export interface SpanInterProps {
  color?: string
  width?: string
  textAlign?: 'center'
  textWrap?: 'nowrap'
}

const fontInterBase = css<SpanInterProps>`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
`

export const fontInterWithSizeAndWeight = (size: number, weight: number) => css`
  ${fontInterBase};
  font-size: ${size}px;
  font-weight: ${weight};
`

export const SpanInter = styled.span<SpanInterProps>`
  ${fontInterBase};
`

export const SpanInterSB10 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(10, 600)};
`

export const SpanInterSB14 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(14, 600)};
`

export const SpanInterSB16 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(16, 600)};
`

export const SpanInterSB18 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(18, 600)};
`

export const SpanInterSB20 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(20, 600)};
`

export const SpanInterM12 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(12, 500)};
`

export const SpanInterM14 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(14, 500)};
`

export const SpanInterM16 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(16, 500)};
`

export const SpanInterM18 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(18, 500)};
`

export const SpanInterM20 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(20, 500)};
`

export const SpanInterB14 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(14, 700)};
`

export const SpanInterB16 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(16, 700)};
`

export const SpanInterB20 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(20, 700)};
`

export const SpanInterB32 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(32, 700)};
`

export const SpanInterB36 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(36, 700)};
`

export const SpanInterR12 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(12, 400)};
`

export const SpanInterR14 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(14, 400)};
`

export const SpanInterR16 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(16, 400)};
`

export const SpanInterR20 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(20, 400)};
`

export const SpanInterR24 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(24, 400)};
`

export const SpanInterR36 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(36, 400)};
`

export const SpanInterT10 = styled(SpanInter)<SpanInterProps>`
  ${fontInterWithSizeAndWeight(100, 100)};
`
