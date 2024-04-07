import { StyledUIInputDefaultCSS, StyledUIInputDefaultProps } from '../../main'
import {
  UIInputLeftContainer,
  UIInputPlaceholder,
  UIInputPlaceholderPhone,
} from '../../main'
import { FontInterM16 } from '../../main'
import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

export const StyledUIInputPhone = styled(PatternFormat)<
  StyledUIInputDefaultProps & {
    $isPhoneFocus: boolean
    $isLeftContainer?: boolean
    $isBold?: boolean
  }
>`
  ${StyledUIInputDefaultCSS};
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

export const UIInputPhoneStyledUIInputLeftContainer = styled(
  UIInputLeftContainer
)`
  gap: 12px;
`
