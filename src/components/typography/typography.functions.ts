import { css } from 'styled-components'

import { TypographyCSSProps } from '.'

export const getFontSizeStyles = (
  size: TypographyCSSProps['$size'],
  weight: TypographyCSSProps['$weight'],
  family: TypographyCSSProps['$family'],
  height?: TypographyCSSProps['$height'],
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
