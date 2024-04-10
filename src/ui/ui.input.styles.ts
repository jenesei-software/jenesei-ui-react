import styled, { css } from 'styled-components'

import { FontInterM16, FontInterR16 } from '../main'

export const UIInputLeftContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 12px;
`

export const UIInputPlaceholder = css`
  ${FontInterR16};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  opacity: 1;
  line-height: 24px;
`

export const UIInputPlaceholderPhone = css`
  ${FontInterM16};
  color: ${(props) => props.theme.colors.gray['cccccc']};
  opacity: 1;
  line-height: 24px;
`
