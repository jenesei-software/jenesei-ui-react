import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

import {
  InputDefaultPlaceholder,
  InputPhonePlaceholder,
  StyledInputDefaultCSS,
  StyledInputDefaultProps,
  getFontStyles,
} from '../../main'

export const StyledInputPhone = styled(PatternFormat)<
  StyledInputDefaultProps & {
    $isPhoneFocus: boolean
    $isBold?: boolean
  }
>`
  ${StyledInputDefaultCSS};
  ${(props) => props.$isBold && getFontStyles(16, 500, 'Inter')};
  ${(props) =>
    !props.$isPhoneFocus
      ? props.$isBold
        ? InputPhonePlaceholder
        : InputDefaultPlaceholder
      : ''}
`
