import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@components/typography'

import { KEY_SIZE_DATA } from '@theme/theme'
import { IJeneseiThemeSize } from '@theme/theme.interface'

import { WrapperFormProps } from '.'

/****************************************** Size *************************************************/
export const WrapperFormSize = css<WrapperFormProps>`
  ${(props) =>
    props.$size &&
    WrapperFormSizeConstructor({
      ...KEY_SIZE_DATA[props.$size],
      $width: props.$width,
    })};
`
export const WrapperFormSizeConstructor = (props: IJeneseiThemeSize & { $width?: string }) => css`
  border: 1px solid transparent;
  border-radius: ${props.radius + props.padding}px;
  gap: ${props.padding - 2}px;
  padding: ${props.padding}px;
  width: ${props.$width || '100%'};
  ${getFontSizeStyles(props.font, 600, 'Inter')};
`

/****************************************** Default *************************************************/
export const WrapperForm = styled.form<WrapperFormProps>`
  position: absolute;
  display: flex;
  align-items: center;

  ${WrapperFormSize}

  ${(props) =>
    props.$genre &&
    css`
      background: ${props.theme.colors.form[props.$genre].background};
      border-color: ${props.theme.colors.form[props.$genre].border};
      color: ${props.theme.colors.form[props.$genre].color};
    `}

  ${(props) =>
    !props.$isBorder &&
    css`
      border: none;
    `}
    ${(props) =>
    !props.$isPadding &&
    css`
      padding: none;
    `}
`
