import { css } from 'styled-components'

import { TypographyCSSProps } from '.'

export const TypographyCSS = css<TypographyCSSProps>`
  position: relative;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;
  flex: 1 0 0;
`
