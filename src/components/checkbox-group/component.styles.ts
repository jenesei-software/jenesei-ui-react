import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { CheckboxGroupWrapperProps } from '.'

/****************************************** Size *************************************************/
export const CheckboxGroupSize = css<CheckboxGroupWrapperProps>`
  ${props => CheckboxGroupSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const CheckboxGroupSizeConstructor = (props: IJeneseiThemeSize) => css`
  gap: ${props.padding - 2}px;
  ${params => getFontSizeStyles(props.font, 700, params.theme.font.family)};
`

/****************************************** Default *************************************************/
export const CheckboxGroupWrapper = styled.div<CheckboxGroupWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${props => props.$width ?? '100%'};
  ${CheckboxGroupSize};
`

export const CheckboxGroupItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxGroupLabel = styled.div`
  user-select: none;
`

export const CheckboxChildren = styled.div`
  user-select: none;
`
