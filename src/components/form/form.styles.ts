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
  gap: ${props.padding + 6}px;
  padding: ${props.padding}px;
  width: ${props.$width || '100%'};
  ${getFontSizeStyles(props.font, 600, 'Inter')};
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    gap: ${props.padding + 2}px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    gap: ${props.padding - 2}px;
  }
`

/****************************************** Default *************************************************/
export const WrapperForm = styled.form<WrapperFormProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: height ${(props) => props.theme.transition};
  ${WrapperFormSize}
  height: auto;
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
