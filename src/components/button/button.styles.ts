import styled, { css } from 'styled-components'

import { StyledButtonProps } from '.'
import { getFontSizeStyles } from '../../fonts'
import { FlexStyles } from '../../main'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '../../theme'

/****************************************** Genre *************************************************/
const ButtonGenre = css<StyledButtonProps>`
  ${(props) => css`
    background: ${props.theme.colors.button[props.$genre].background.rest};
    border-color: ${props.theme.colors.button[props.$genre].border.rest};
    color: ${props.theme.colors.button[props.$genre].color.rest};
    & span {
      color: ${props.theme.colors.button[props.$genre].color.rest};
    }
    & path {
      stroke: ${props.theme.colors.button[props.$genre].color.rest};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.focus};
      border-color: ${props.theme.colors.button[props.$genre].border.focus};
      background: ${props.theme.colors.button[props.$genre].background.focus};

      color: ${props.theme.colors.button[props.$genre].color.focus};
      & span {
        color: ${props.theme.colors.button[props.$genre].color.focus};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre].color.focus};
      }
    }
    &:hover {
      background: ${props.theme.colors.button[props.$genre].background.hover};
      border-color: ${props.theme.colors.button[props.$genre].border.hover};
      color: ${props.theme.colors.button[props.$genre].color.hover};
      & span {
        color: ${props.theme.colors.button[props.$genre].color.hover};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre].color.hover};
      }
    }
    &:active {
      background: ${props.theme.colors.button[props.$genre].background.active};
      border-color: ${props.theme.colors.button[props.$genre].border.active};
      color: ${props.theme.colors.button[props.$genre].color.active};
      & span {
        color: ${props.theme.colors.button[props.$genre].color.active};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre].color.active};
      }
    }
    ${props.$isActive &&
    css`
      background: ${props.theme.colors.button[props.$genre].background.active};
      border-color: ${props.theme.colors.button[props.$genre].border.active};
      color: ${props.theme.colors.button[props.$genre].color.active};
      & span {
        color: ${props.theme.colors.button[props.$genre].color.active};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre].color.active};
      }
    `}
  `};
`

/****************************************** Disabled *************************************************/
const ButtonDisabled = css<StyledButtonProps>`
  ${(props) =>
    props.$isDisabled || props.$isHidden
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.button[props.$genre].background
            .rest} !important;

          color: ${props.theme.colors.button[props.$genre].color
            .rest} !important;
          & span {
            color: ${props.theme.colors.button[props.$genre].color
              .rest} !important;
          }
          & path {
            stroke: ${props.theme.colors.button[props.$genre].color
              .rest} !important;
          }
        `
      : css`
          opacity: 1;
        `}
`
/****************************************** HiddenBorder *************************************************/
const ButtonHiddenBorder = css<StyledButtonProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border-color: transparent !important;
    `}
`
/****************************************** Size *************************************************/
export const ButtonSize = css<StyledButtonProps>`
  ${(props) =>
    ButtonSizeConstructor({
      ...KEY_SIZE_DATA[props.$size],
      isFullSize: props.$isFullSize,
      $width: props.$width,
    })};
`
export const ButtonSizeConstructor = (
  props: IJeneseiThemeSize & { isFullSize?: boolean; $width?: string },
) => css`
  height: ${props.height}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  ${getFontSizeStyles(props.font, 600, 'Inter')};
  padding: 0px ${props.padding}px;

  ${() =>
    props.isFullSize &&
    css`
      height: 100%;
      border-radius: 0px;
    `}

  ${props.$width === 'asHeight'
    ? css`
        width: ${props.height}px;
        min-width: ${props.height}px;
      `
    : css`
        width: ${props.$width ?? 'max-content'};
        min-width: ${props.$width ?? 'max-content'};
      `}
`
/****************************************** Border *************************************************/
const ButtonBorder = css`
  outline: 1px solid transparent;
  border: 1px solid transparent;
`

/****************************************** Flex *************************************************/
const ButtonFlex = css<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${FlexStyles};
`
/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledButtonProps>`
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition:
    all ${(props) => props.theme.transition},
    outline 0s;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  ${ButtonFlex};
  ${ButtonBorder};
  ${ButtonSize};
  ${ButtonGenre};
  ${ButtonDisabled};
  ${ButtonHiddenBorder};
  font-family: ${(props) => props.$customFontFamily};
  font-size: ${(props) => props.$customFontSize};
  font-weight: ${(props) => props.$customFontWeight};
`
