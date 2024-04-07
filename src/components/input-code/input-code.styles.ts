import { FontInterM16, SpanInterM12 } from '../../fonts'
import {
  StyledUIInputDefaultProps,
  StyledUIInputDefaultCSS,
} from '../input-default'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

export const StyledUIInputCode = styled(
  PatternFormat
)<StyledUIInputDefaultProps>`
  ${StyledUIInputDefaultCSS}
  ${FontInterM16};
`

export const StyledSpanInterM12Error = styled(SpanInterM12)`
  position: absolute;
  top: -20px;
  left: 0;
`
