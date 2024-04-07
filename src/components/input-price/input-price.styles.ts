import { StyledUIInputDefaultCSS, StyledUIInputDefaultProps } from '../../main'
import CurrencyInput from 'react-currency-input-field'
import styled from 'styled-components'

export const StyledInputPrice = styled(
  CurrencyInput
)<StyledUIInputDefaultProps>`
  ${StyledUIInputDefaultCSS}
`
