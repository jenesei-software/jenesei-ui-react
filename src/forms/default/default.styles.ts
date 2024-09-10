import styled, { css } from 'styled-components'

import { WrapperFormProps } from '.'

/****************************************** Default *************************************************/
export const WrapperFormCSS = css<WrapperFormProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: height ${(props) => props.theme.transition};
  height: auto;
  max-width: ${(props) => props.$width};
  width: 100%;
`

export const WrapperForm = styled.form<WrapperFormProps>`
  ${WrapperFormCSS}
`
