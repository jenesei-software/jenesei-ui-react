import styled, { css } from 'styled-components'

import { fontInterWithSizeAndWeight } from '../main'

export const UIInputLeftContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 12px;
`

export const UIInputPlaceholder = css`
  ${fontInterWithSizeAndWeight(16, 400)};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  opacity: 1;
  line-height: 24px;
`

export const UIInputPlaceholderPhone = css`
  ${fontInterWithSizeAndWeight(16, 500)};
  color: ${(props) => props.theme.colors.gray['cccccc']};
  opacity: 1;
  line-height: 24px;
`
