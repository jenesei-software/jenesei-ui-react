import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

import {
  InputDefaultPlaceholder,
  InputPhonePlaceholder,
  StyledInputDefaultCSS,
  StyledInputDefaultProps,
  fontInterWithSizeAndWeight,
} from '../../main'

export const StyledInputPhone = styled(PatternFormat)<
  StyledInputDefaultProps & {
    $isPhoneFocus: boolean
    $isBold?: boolean
  }
>`
  ${StyledInputDefaultCSS};
  ${(props) => props.$isBold && fontInterWithSizeAndWeight(16, 500)};
  ${(props) =>
    !props.$isPhoneFocus
      ? props.$isBold
        ? InputPhonePlaceholder
        : InputDefaultPlaceholder
      : ''}
`
