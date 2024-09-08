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
  ${(props) =>
    props.$genre &&
    css`
      background: ${props.theme.colors.form[props.$genre].background};
      border-color: ${props.theme.colors.form[props.$genre].border};
      color: ${props.theme.colors.form[props.$genre].color};
    `}
`

export const WrapperForm = styled.form<WrapperFormProps>`
  ${(props) => (props.$variant === 'sign' ? WrapperSignForm : WrapperFormCSS)}
`

export const WrapperSignForm = css<WrapperFormProps>`
  ${WrapperFormCSS}
  border-radius: 20px;
  padding: 48px 72px;
  gap: 32px;

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    border-radius: 16px;
    gap: 26px;
    padding: 30px 54px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    border-radius: 0px;
    gap: 20px;
    padding: 16px 22px;
  }
`
