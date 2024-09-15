import styled, { css } from 'styled-components'

import { Icon } from '@components/icon'
import { getFontSizeStyles } from '@components/typography'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@theme/index'

import { StyledCheckboxProps, StyledIconProps } from '.'

/****************************************** Size *************************************************/
export const CheckboxSize = css<StyledCheckboxProps>`
  ${(props) => CheckboxSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const CheckboxSizeConstructor = (props: IJeneseiThemeSize) => css`
  height: ${props.height}px;
  border-radius: ${props.radius + 12}px;
  gap: ${props.padding - 2}px;
  ${getFontSizeStyles(props.font, 700, 'Inter')};
  padding: 0px ${props.padding - 4}px;
`

/****************************************** Genre *************************************************/
export const CheckboxGenre = css<StyledCheckboxProps>`
  ${(props) => css`
    background: ${props.theme.colors.checkbox[props.$genre].background.rest};
    border-color: ${props.theme.colors.checkbox[props.$genre].border.rest};
    color: ${props.theme.colors.checkbox[props.$genre].color.rest};
    & span {
      color: ${props.theme.colors.checkbox[props.$genre].color.rest};
    }
    &:focus-visible {
      outline: 1px solid ${props.theme.colors.focus};
    }
    &:hover {
      background: ${props.theme.colors.checkbox[props.$genre].background.hover};
      border-color: ${props.theme.colors.checkbox[props.$genre].border.hover};
      color: ${props.theme.colors.checkbox[props.$genre].color.hover};
      & span {
        color: ${props.theme.colors.checkbox[props.$genre].color.hover};
      }
    }
  `};
`

/****************************************** Disabled *************************************************/
const CheckboxDisabled = css<StyledCheckboxProps>`
  ${(props) =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.checkbox[props.$genre].background
            .rest} !important;
          border-color: ${props.theme.colors.checkbox[props.$genre].border
            .rest} !important;
          color: ${props.theme.colors.checkbox[props.$genre].color
            .rest} !important;
          & span {
            color: ${props.theme.colors.checkbox[props.$genre].color
              .rest} !important;
          }
        `
      : css`
          opacity: 1;
        `}
`

/****************************************** HiddenBorder *************************************************/
const CheckboxHiddenBorder = css<StyledCheckboxProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border-color: transparent !important;
    `}
`

/****************************************** Default *************************************************/
export const CheckboxWrapper = styled.button<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition: all ${(props) => props.theme.transition};

  & {
    user-select: none;
  }
  cursor: pointer;

  ${CheckboxGenre};
  ${CheckboxDisabled}
  ${CheckboxHiddenBorder};
  ${CheckboxSize};

  font-family: ${(props) => props.$customFontFamily};
  font-size: ${(props) => props.$customFontSize};
  font-weight: ${(props) => props.$customFontWeight};
  width: ${(props) => props.$width ?? 'max-content'};
  min-width: ${(props) => props.$width ?? 'max-content'};
  background-color: ${(props) => props.$isNotBackground && 'transparent'};
`

/****************************************** Styled *************************************************/
export const StyledIcon = styled(Icon)<StyledIconProps>`
  ${(props) =>
    props.$checked
      ? css`
          & #check {
            fill: ${props.theme.colors.checkbox[props.$genre].color.rest};
          }
          & #uncheck {
            fill: transparent;
          }
        `
      : css`
          & #check {
            fill: transparent;
          }
          & #uncheck {
            fill: ${props.theme.colors.checkbox[props.$genre].color.rest};
          }
        `}
`
