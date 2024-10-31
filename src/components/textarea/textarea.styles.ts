import styled, { css } from 'styled-components'

import { ModalLoading } from '@components/modal-loading'
import { getFontSizeStyles } from '@components/typography'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@theme/index'

import { StyledTextAreaProps, StyledTextAreaWrapperProps, TextAreaErrorMessageProps, TextAreaProps } from '.'

/****************************************** Wrapper *************************************************/
export const StyledTextAreaWrapper = styled.div<StyledTextAreaWrapperProps>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: ${props => props.$width ?? '100%'};
  ${props =>
    props.$width &&
    css`
      max-width: ${props.$width};
    `}
`

/****************************************** Error Size*************************************************/
export const TextAreaErrorMessageSize = css<TextAreaErrorMessageProps>`
  ${props =>
    TextAreaErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })};
`
export const TextAreaErrorMessageSizeConstructor = (
  props: IJeneseiThemeSize & { $isErrorAbsolute: TextAreaProps['isErrorAbsolute'] }
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
export const TextAreaErrorMessage = styled.div<TextAreaErrorMessageProps>`
  ${getFontSizeStyles(12, 400, 'Inter')};
  width: ${props => props.$width ?? '100%'};
  ${TextAreaErrorMessageSize}
`

export const TextAreaIsErrorBorder = css<StyledTextAreaProps>`
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
export const TextAreaPlaceholder = css<StyledTextAreaProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
    line-height: 24px;
  }
`

/****************************************** Genre *************************************************/
const TextAreaGenre = css<StyledTextAreaProps>`
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
export const TextAreaSize = css<StyledTextAreaProps>`
  ${props => TextAreaSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const TextAreaSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding - 6}px ${props.padding}px ${props.padding - 4}px ${props.padding}px;
  border-radius: ${props.radius}px;
`

/****************************************** Hidden *************************************************/
const TextAreaHidden = css<StyledTextAreaProps>`
  opacity: ${props => (props.$isDisabled ? 0.5 : 1)};
`
/****************************************** is PlaystationEffect *************************************************/
export const TextAreaIsTextAreaEffect = css<Pick<StyledTextAreaProps, '$isTextAreaEffect'>>`
  ${props =>
    props.$isTextAreaEffect &&
    css`
      box-shadow: ${props.theme.effects.input.default};
    `}
`

/****************************************** is Resize *************************************************/
const TextAreaIsResize = css<Pick<StyledTextAreaProps, '$isResize'>>`
  ${props =>
    !props.$isResize &&
    css`
      resize: none;
    `}
`
/****************************************** Default *************************************************/
export const StyledTextAreaCSS = css<StyledTextAreaProps>`
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100% !important;
  border: 1px inset;
  transition:
    color,
    border,
    background-color ${props => props.theme.transition},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  text-wrap: auto;

  ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter')};
  ${TextAreaIsResize};
  ${TextAreaSize};
  ${TextAreaGenre};
  ${TextAreaIsErrorBorder};
  ${TextAreaPlaceholder};
  ${TextAreaHidden};
  ${TextAreaIsTextAreaEffect};
`

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${StyledTextAreaCSS};
`

/****************************************** ModalLoading *************************************************/
const TextAreaStyledModalLoadingSize = css<StyledTextAreaProps>`
  ${props => TextAreaStyledModalLoadingConstructor(KEY_SIZE_DATA[props.$size])};
`
const TextAreaStyledModalLoadingConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding - 6}px ${props.padding}px ${props.padding - 4}px ${props.padding}px;
`

export const TextAreaStyledModalLoading = styled(ModalLoading)<StyledTextAreaProps>`
  ${TextAreaStyledModalLoadingSize};
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  box-sizing: content-box;
  backdrop-filter: blur(2px);
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
`
