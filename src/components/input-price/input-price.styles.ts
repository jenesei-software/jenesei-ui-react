import CurrencyInput from 'react-currency-input-field'
import styled from 'styled-components'

import { StyledInputDefaultCSS, StyledInputDefaultProps } from '../../main'

export const StyledInputPrice = styled(CurrencyInput)<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS}
`
