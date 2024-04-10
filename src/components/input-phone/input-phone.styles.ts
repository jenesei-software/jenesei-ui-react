import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { StyledInputDefaultCSS, StyledInputDefaultProps } from '../../main'
import {
  UIInputLeftContainer,
  UIInputPlaceholder,
  UIInputPlaceholderPhone,
} from '../../main'
import { FontInterM16 } from '../../main'

export const StyledInputPhone = styled(PatternFormat)<
  StyledInputDefaultProps & {
    $isPhoneFocus: boolean
    $isLeftContainer?: boolean
    $isBold?: boolean
  }
>`
  ${StyledInputDefaultCSS};
  ${(props) =>
    props.$isLeftContainer &&
    css`
      padding-left: 68px;
    `}
  ${(props) => props.$isBold && FontInterM16};
  ${(props) =>
    !props.$isPhoneFocus
      ? props.$isBold
        ? UIInputPlaceholderPhone
        : UIInputPlaceholder
      : ''}
`

export const UIInputPhoneStyledInputLeftContainer = styled(
  UIInputLeftContainer,
)`
  gap: 12px;
`
