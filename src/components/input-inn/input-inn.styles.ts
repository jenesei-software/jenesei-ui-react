import { StyledUIInputDefaultCSS, StyledUIInputDefaultProps } from '../../main'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

export const StyledUIInputINN = styled(
  PatternFormat
)<StyledUIInputDefaultProps>`
  ${StyledUIInputDefaultCSS}
`
