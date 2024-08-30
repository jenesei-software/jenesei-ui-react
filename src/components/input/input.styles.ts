import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { ModalLoading } from '@components/modal-loading'
import { getFontSizeStyles } from '@components/typography'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@theme/index'

import { InputChildrenProps, InputErrorMessageProps, StyledInputProps, StyledInputWrapperProps } from '.'

/****************************************** Hidden *************************************************/
const InputWrapperHidden = css<StyledInputWrapperProps>`
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
`

/****************************************** Wrapper *************************************************/
export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => props.$width ?? '100%'};
  ${InputWrapperHidden};
`

/****************************************** Error *************************************************/
export const InputErrorMessage = styled.div<InputErrorMessageProps>`
  ${getFontSizeStyles(12, 400, 'Inter')};
  width: ${(props) => props.$width ?? '100%'};
  ${(props) =>
    props.$isErrorAbsolute
      ? css`
          position: absolute;
          top: calc(100% + 6px);
          left: 6px;
          color: ${(props) => props.theme.colors.danger};
        `
      : css`
          position: static;
          padding: 6px;
          color: ${(props) => props.theme.colors.danger};
        `}
`

export const InputIsErrorBorder = css<StyledInputProps>`
  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${(props) => props.theme.colors.danger};
      }
    `}
`

/****************************************** Placeholder *************************************************/
export const InputPlaceholder = css<StyledInputProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${(props) => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    ${(props) => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${(props) => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: 24px;
  }
`

/****************************************** Genre *************************************************/
const InputGenre = css<StyledInputProps>`
  ${(props) => css`
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
      outline: 2px solid ${props.theme.colors.focus};
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
  ${(props) => InputSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const InputSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: 0px ${props.padding}px;
  height: ${props.height}px;
  min-height: ${props.height}px;
  max-height: ${props.height}px;
  border-radius: ${props.radius}px;
`

/****************************************** Default *************************************************/
export const StyledInputCSS = css<StyledInputProps>`
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid;
  transition:
    all ${(props) => props.theme.transition},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;

  ${(props) => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
  ${InputSize};
  ${InputGenre};
  ${InputIsErrorBorder};
  ${InputPlaceholder};
  ${(props) =>
    props.$prefixChildren &&
    css`
      padding-left: ${`calc(${props.$prefixChildren.width} + ${props.$prefixChildren.right} + ${props.$prefixChildren.left})`};
    `};

  ${(props) =>
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
export const InputPrefixChildren = styled.div<InputChildrenProps>`
  position: absolute;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: 100%;
`

export const InputPostfixChildren = styled.div<InputChildrenProps>`
  position: absolute;
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  height: 100%;
`

/****************************************** ModalLoading *************************************************/
export const InputStyledModalLoading = styled(ModalLoading)<StyledInputProps>`
  position: absolute;
  display: flex;
  align-items: center;
  right: ${(props) => KEY_SIZE_DATA[props.$size].padding}px;
`
