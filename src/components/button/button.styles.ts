import styled, { css } from 'styled-components'

import { ComponentWithRipple } from '@local/components/ripple'
import { getFontSizeStyles } from '@local/components/typography'
import { addOutline, addTransition } from '@local/styles/add'
import { FlexContainerAndItem } from '@local/styles/base'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { StyledDollarButtonIconsWrapperProps, StyledDollarButtonProps } from '.'

/****************************************** Genre *************************************************/
const ButtonGenre = css<StyledDollarButtonProps>`
  ${props => css`
    background: ${props.theme.colors.button[props.$genre].background.rest};
    border-color: ${props.theme.colors.button[props.$genre].border.rest};
    color: ${props.theme.colors.button[props.$genre].color.rest};
    &:hover {
      ${!props.$isHidden &&
      css`
        background: ${props.theme.colors.button[props.$genre].background.hover};
        border-color: ${props.theme.colors.button[props.$genre].border.hover};
        color: ${props.theme.colors.button[props.$genre].color.hover};
      `}
    }
  `};
`

/****************************************** Disabled *************************************************/
const ButtonDisabled = css<StyledDollarButtonProps>`
  ${props =>
    props.$isHidden
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.button[props.$genre].background.rest} !important;
          color: ${props.theme.colors.button[props.$genre].color.rest} !important;
        `
      : css`
          opacity: 1;
        `}
`
/****************************************** is HiddenBorder *************************************************/
const ButtonIsHiddenBorder = css<StyledDollarButtonProps>`
  ${props =>
    props.$isHiddenBorder &&
    css`
      border: 0px transparent !important;
    `}
`
/****************************************** is Radius *************************************************/
const ButtonIsRadius = css<StyledDollarButtonProps>`
  ${props =>
    props.$isRadius &&
    css`
      border-radius: 100px;
    `}
`
/****************************************** is PlaystationEffect *************************************************/
const ButtonIsPlaystationEffect = css<StyledDollarButtonProps>`
  ${props =>
    props.$isPlaystationEffect &&
    css`
      box-shadow: ${props.theme.effects.button};
    `}
`
/****************************************** Icons Wrapper *************************************************/
export const StyledButtonIconsWrapper = styled.div<StyledDollarButtonIconsWrapperProps>`
  ${props =>
    props.$isIconGroup
      ? css`
          display: flex;
          gap: ${KEY_SIZE_DATA[props.$size].padding - 2}px;
          align-items: center;
          order: ${props.$iconGroupOrder || 'initial'};
        `
      : css`
          display: contents;
        `}
`

/****************************************** Size *************************************************/
export const ButtonSize = css<StyledDollarButtonProps>`
  ${props =>
    ButtonSizeConstructor({
      ...KEY_SIZE_DATA[props.$size],
      isFullSize: props.$isFullSize,
      $width: props.$width,
      $flex: props.$flex,
      $minWidth: props.$minWidth
    })};
`
export const ButtonSizeConstructor = (
  props: IJeneseiThemeSize & {
    isFullSize?: boolean
    $width?: string
    $flex?: string
    $minWidth?: string
  }
) => css`
  height: ${props.height}px;
  min-height: ${props.height}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  ${getFontSizeStyles(props.font, 700, 'Inter')};
  padding: 0px ${props.padding}px;

  ${() =>
    props.isFullSize &&
    css`
      height: 100%;
      border-radius: 0px;
    `};
  ${() =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `};
  ${props.$width === 'asHeight'
    ? css`
        width: ${props.height}px;
        min-width: ${props.height}px;
        padding: 0px;
      `
    : css`
        width: ${props.$width ?? 'max-content'};
        min-width: ${props.$width ? `${props.$width}px` : 'max-content'};
      `};
  ${props.$minWidth === 'asHeight' &&
  css`
    min-width: ${props.height}px;
  `}
`
/****************************************** Border *************************************************/
const ButtonBorder = css`
  border: 1px solid transparent;
`

/****************************************** Flex *************************************************/
const ButtonFlex = css<StyledDollarButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${FlexContainerAndItem};
`
/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledDollarButtonProps>`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${ComponentWithRipple};
  ${ButtonFlex};
  ${ButtonBorder};
  ${ButtonSize};
  ${ButtonGenre};
  ${ButtonDisabled};
  ${ButtonIsHiddenBorder};
  ${ButtonIsRadius};
  ${ButtonIsPlaystationEffect};
  ${addTransition};
  ${addOutline};

  font-family: ${props => props.$customFontFamily};
  font-size: ${props => props.$customFontSize};
  font-weight: ${props => props.$customFontWeight};
`
