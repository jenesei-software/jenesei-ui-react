import styled, { css } from 'styled-components'

import { ComponentWithRipple } from '@local/components/ripple'
import { getFontSizeStyles } from '@local/components/typography'
import { addCustomFont, addOutline, addTransition } from '@local/styles/add'
import { addSX } from '@local/styles/sx'
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
      isWidthAsHeight: props.$isWidthAsHeight
    })};
`
export const ButtonSizeConstructor = (
  props: IJeneseiThemeSize & {
    isFullSize?: boolean
    isWidthAsHeight?: boolean
  }
) => css`
  height: ${props.height}px;
  min-height: ${props.height}px;
  border-radius: ${props.radius}px;
  gap: ${props.padding - 2}px;
  ${params => getFontSizeStyles(props.font, 700, params.theme.font.family)};
  padding: 0px ${props.padding}px;

  ${() =>
    props.isFullSize &&
    css`
      height: 100%;
      width: 100%;
      border-radius: 0px;
    `};
  ${props.isWidthAsHeight &&
  css`
    width: ${props.height}px;
    min-width: ${props.height}px;
    padding: 0px;
  `};
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
`
/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledDollarButtonProps>`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${ComponentWithRipple};
  ${ButtonBorder};
  ${ButtonSize};
  ${ButtonGenre};
  ${ButtonDisabled};
  ${ButtonIsHiddenBorder};
  ${ButtonIsRadius};
  ${ButtonIsPlaystationEffect};
  ${addTransition};
  ${addOutline};
  ${addCustomFont};
  ${ButtonFlex};
  ${addSX};
`
