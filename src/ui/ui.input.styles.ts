import styled, { css } from 'styled-components'

import { getFontStyles } from '../main'

export const UIInputLeftContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 12px;
`

export const UIInputPlaceholder = css`
  ${getFontStyles(16, 400, 'Inter')};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  opacity: 1;
  line-height: 24px;
`

export const UIInputPlaceholderPhone = css`
  ${getFontStyles(16, 500, 'Inter')};
  color: ${(props) => props.theme.colors.gray['cccccc']};
  opacity: 1;
  line-height: 24px;
`
