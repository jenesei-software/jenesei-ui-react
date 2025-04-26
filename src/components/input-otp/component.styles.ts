import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { InputOTPWrapperProps } from '.'

/****************************************** Size *************************************************/
export const InputOTPSize = css<InputOTPWrapperProps>`
  ${props => InputOTPSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const InputOTPSizeConstructor = (props: IJeneseiThemeSize) => css`
  gap: ${props.padding - 2}px;
`

export const InputOTPWrapper = styled.div<InputOTPWrapperProps>`
  display: flex;
  ${InputOTPSize};
`
