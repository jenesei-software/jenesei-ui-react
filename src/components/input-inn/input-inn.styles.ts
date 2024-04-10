import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

import { StyledInputDefaultCSS, StyledInputDefaultProps } from '../../main'

export const StyledInputINN = styled(PatternFormat)<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS}
`
