import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

import {
  FontInterM16,
  SpanInterM12,
  StyledInputDefaultCSS,
  StyledInputDefaultProps,
} from '../../main'

export const StyledInputCode = styled(PatternFormat)<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS};
  ${FontInterM16};
`

export const StyledSpanInterM12Error = styled(SpanInterM12)`
  position: absolute;
  top: -20px;
  left: 0;
`
