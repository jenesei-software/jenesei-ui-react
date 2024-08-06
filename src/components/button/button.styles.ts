import styled, { css } from 'styled-components'

import { FlexStyles } from '@components/flex'

import { getFontSizeStyles } from '@fonts/index'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@theme/index'

import { StyledButtonProps } from '.'

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
      fill: ${props.theme.colors.button[props.$genre].color.rest};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.focus};
    }
    &:hover {
      ${!props.$isHidden &&
      css`
        background: ${props.theme.colors.button[props.$genre].background.hover};
        border-color: ${props.theme.colors.button[props.$genre].border.hover};
        color: ${props.theme.colors.button[props.$genre].color.hover};
        & span {
          color: ${props.theme.colors.button[props.$genre].color.hover};
        }
        & path {
          fill: ${props.theme.colors.button[props.$genre].color.hover};
        }
      `}
    }
  `};
`

/****************************************** Disabled *************************************************/
const ButtonDisabled = css<StyledButtonProps>`
  ${(props) =>
    props.$isHidden
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
            fill: ${props.theme.colors.button[props.$genre].color
              .rest} !important;
          }
        `
      : css`
          opacity: 1;
        `}
`
/****************************************** is HiddenBorder *************************************************/
const ButtonIsHiddenBorder = css<StyledButtonProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border: 0px transparent !important;
    `}
`
/****************************************** is Radius *************************************************/
const ButtonIsRadius = css<StyledButtonProps>`
  ${(props) =>
    props.$isRadius &&
    css`
      border-radius: 100px;
    `}
`
/****************************************** is PlaystationEffect *************************************************/
const ButtonIsPlaystationEffect = css<StyledButtonProps>`
  ${(props) =>
    props.$isPlaystationEffect &&
    css`
      box-shadow: ${props.theme.effects.button.playstation};
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
        padding: 0px;
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
  ${ButtonIsHiddenBorder};
  ${ButtonIsRadius};
  ${ButtonIsPlaystationEffect};
  font-family: ${(props) => props.$customFontFamily};
  font-size: ${(props) => props.$customFontSize};
  font-weight: ${(props) => props.$customFontWeight};
`
