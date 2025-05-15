import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { addOutline, addTransitionWithoutSize } from '@local/styles/add'
import { addError } from '@local/styles/error'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { StyledTextAreaProps, StyledTextAreaWrapperProps } from '.'

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

/****************************************** Placeholder *************************************************/
export const TextAreaPlaceholder = css<StyledTextAreaProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, props.theme.font.family, props.theme.font.lineHeight)};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, props.theme.font.family, props.theme.font.lineHeight)};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
`

/****************************************** Genre *************************************************/
const TextAreaGenre = css<StyledTextAreaProps>`
  ${props => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};

    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    &:hover {
      background: ${props.theme.colors.input[props.$genre].background.hover};
      border-color: ${props.theme.colors.input[props.$genre].border.hover};
      color: ${props.theme.colors.input[props.$genre].color.hover};
    }
    &:focus-visible {
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      background: ${props.theme.colors.input[props.$genre].background.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
  `};
`

/****************************************** Size *************************************************/
export const TextAreaSize = css<StyledTextAreaProps>`
  ${props => TextAreaSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const TextAreaSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding - 4}px ${props.padding}px ${props.padding - 6}px ${props.padding}px;
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
      box-shadow: ${props.theme.effects.input};
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
  width: 100% !important;
  border: 1px solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-wrap: auto;

  ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, props.theme.font.family, props.theme.font.lineHeight)};

  ${TextAreaIsResize};
  ${TextAreaSize};
  ${TextAreaGenre};
  ${TextAreaPlaceholder};
  ${TextAreaHidden};
  ${TextAreaIsTextAreaEffect};
  ${addTransitionWithoutSize};
  ${addOutline};
  ${addError};
`

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${StyledTextAreaCSS};
`

// /****************************************** Loading *************************************************/
// const TextAreaStyledLoadingSize = css<StyledTextAreaProps>`
//   ${props => TextAreaStyledLoadingConstructor(KEY_SIZE_DATA[props.$size])};
// `
// const TextAreaStyledLoadingConstructor = (props: IJeneseiThemeSize) => css`
//   padding: ${props.padding - 6}px ${props.padding}px ${props.padding - 4}px ${props.padding}px;
// `

// export const TextAreaStyledLoading = styled(Loading)<StyledTextAreaProps>`
//   ${TextAreaStyledLoadingSize};
//   position: absolute;
//   display: flex;
//   align-items: center;
//   right: 0px;
//   box-sizing: content-box;
//   backdrop-filter: blur(2px);
//   mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
// `
