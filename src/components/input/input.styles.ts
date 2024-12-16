import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { Loading } from '@local/components/loading'
import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import {
  InputErrorMessageProps,
  InputProps,
  StyledInputChildrenProps,
  StyledInputProps,
  StyledInputWrapperProps
} from '.'

/****************************************** Wrapper *************************************************/
export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${props => props.$width ?? '100%'};
`

/****************************************** Error Size*************************************************/
export const InputErrorMessageSize = css<InputErrorMessageProps>`
  ${props =>
    InputErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })};
`
export const InputErrorMessageSizeConstructor = (
  props: IJeneseiThemeSize & { $isErrorAbsolute: InputProps['isErrorAbsolute'] }
) => css`
  ${props.$isErrorAbsolute
    ? css`
        position: absolute;
        padding-top: 6px;
        padding-left: ${props.padding}px;
        color: ${props => props.theme.colors.danger};
      `
    : css`
        position: static;
        padding: 0px ${props.padding}px;
        color: ${props => props.theme.colors.danger};
      `}
`

/****************************************** Error *************************************************/
export const InputErrorMessage = styled.div<InputErrorMessageProps>`
  ${getFontSizeStyles(12, 400, 'Inter')};
  width: ${props => props.$width ?? '100%'};
  ${InputErrorMessageSize}
`

export const InputIsErrorBorder = css<StyledInputProps>`
  ${props =>
    props.$isError &&
    css`
      border-color: ${props => props.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${props => props.theme.colors.danger};
      }
    `}
`

/****************************************** Placeholder *************************************************/
export const InputPlaceholder = css<StyledInputProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: ${props => props.theme.font.lineHeight};
  }
  &:-ms-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: ${props => props.theme.font.lineHeight};
  }
`

/****************************************** Genre *************************************************/
const InputGenre = css<StyledInputProps>`
  ${props => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};
    & span {
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    & path {
      ${!props.$isCustomIcon &&
      css`
        fill: ${props.theme.colors.input[props.$genre].color.rest};
      `}
    }
    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
      & span {
        color: ${props.theme.colors.input[props.$genre].color.rest};
      }
      & path {
        ${!props.$isCustomIcon &&
        css`
          fill: ${props.theme.colors.input[props.$genre].color.rest};
        `}
      }
    }
    &:hover {
      background: ${props.theme.colors.input[props.$genre].background.hover};
      border-color: ${props.theme.colors.input[props.$genre].border.hover};
      color: ${props.theme.colors.input[props.$genre].color.hover};
      & span {
        color: ${props.theme.colors.input[props.$genre].color.hover};
      }
      & path {
        ${!props.$isCustomIcon &&
        css`
          fill: ${props.theme.colors.input[props.$genre].color.rest};
        `}
      }
    }
    &:focus-visible {
      outline: 1px solid ${props.theme.colors.focus};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      background: ${props.theme.colors.input[props.$genre].background.rest};

      color: ${props.theme.colors.input[props.$genre].color.rest};
      & span {
        color: ${props.theme.colors.input[props.$genre].color.rest};
      }
      & path {
        ${!props.$isCustomIcon &&
        css`
          fill: ${props.theme.colors.input[props.$genre].color.rest};
        `}
      }
    }
  `};
`

/****************************************** Size *************************************************/
export const InputSize = css<StyledInputProps>`
  ${props => InputSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const InputSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: 0px ${props.padding}px;
  height: ${props.height}px;
  min-height: ${props.height}px;
  max-height: ${props.height}px;
  border-radius: ${props.radius}px;
`

/****************************************** Hidden *************************************************/
const InputHidden = css<StyledInputProps>`
  opacity: ${props => (props.$isDisabled ? 0.5 : 1)};
`
/****************************************** is PlaystationEffect *************************************************/
export const InputIsInputEffect = css<Pick<StyledInputProps, '$isInputEffect'>>`
  ${props =>
    props.$isInputEffect &&
    css`
      box-shadow: ${props.theme.effects.input};
    `}
`

/****************************************** Default *************************************************/
export const StyledInputCSS = css<StyledInputProps>`
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  border: 1px inset;
  transition:
    all ${props => props.theme.transition.default},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;

  ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
  line-height: ${props => props.theme.font.lineHeight};

  ${InputSize};
  ${InputGenre};
  ${InputIsErrorBorder};
  ${InputPlaceholder};
  ${InputHidden};
  ${InputIsInputEffect};
  ${props =>
    props.$prefixChildren &&
    css`
      padding-left: ${`calc(${props.$prefixChildren.width} + ${props.$prefixChildren.right} + ${props.$prefixChildren.left})`};
    `};

  ${props =>
    props.$postfixChildren &&
    css`
      padding-right: ${`calc(${props.$postfixChildren.width} + ${props.$postfixChildren.right} + ${props.$postfixChildren.left})`};
    `};
`

export const StyledInput = styled.input<StyledInputProps>`
  ${StyledInputCSS};
`

export const StyledInputFormat = styled(PatternFormat)<StyledInputProps>`
  ${StyledInputCSS};
`

/****************************************** Children *************************************************/
export const InputPrefixChildren = styled.div<StyledInputChildrenProps>`
  position: absolute;
  left: ${props => props.$left};
  width: ${props => props.$width};
  opacity: ${props => (props.$isDisabled ? 0.5 : 1)};
  height: 100%;
  transition:
    all ${props => props.theme.transition.default},
    outline 0s;
`

export const InputPostfixChildren = styled.div<StyledInputChildrenProps>`
  position: absolute;
  right: ${props => props.$right};
  width: ${props => props.$width};
  opacity: ${props => (props.$isDisabled ? 0.5 : 1)};
  height: 100%;
  transition:
    all ${props => props.theme.transition.default},
    outline 0s;
`

/****************************************** Loading *************************************************/
const InputStyledLoadingSize = css<StyledInputProps>`
  ${props => InputStyledLoadingConstructor(KEY_SIZE_DATA[props.$size])};
`
const InputStyledLoadingConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding - 6}px ${props.padding}px ${props.padding - 4}px ${props.padding}px;
`

export const InputStyledLoading = styled(Loading)<StyledInputProps>`
  ${InputStyledLoadingSize};
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  box-sizing: content-box;
`
