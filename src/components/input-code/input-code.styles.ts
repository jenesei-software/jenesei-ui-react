import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

import { StyledInputDefaultCSS, StyledInputDefaultProps } from '../../main'

export const StyledInputCode = styled(PatternFormat)<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS}
`
