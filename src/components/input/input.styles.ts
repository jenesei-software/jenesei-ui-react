import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { addError, addOutline, addTransition } from '@local/styles/add'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { StyledInputChildrenProps, StyledInputProps, StyledInputWrapperProps } from '.'

/****************************************** Wrapper *************************************************/
export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${props =>
    props.$width === 'asHeight'
      ? css`
          width: ${KEY_SIZE_DATA[props.$size].height}px;
          min-width: ${KEY_SIZE_DATA[props.$size].height}px;
          & input {
            text-align: center;
          }
        `
      : css`
          width: ${props.$width ?? '100%'};
        `};
`

/****************************************** Placeholder *************************************************/
export const InputPlaceholder = css<StyledInputProps>`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter', props.theme.font.lineHeight)};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter', props.theme.font.lineHeight)};
    color: ${props => props.theme.colors.input[props.$genre].color.placeholder};
    opacity: 1;
  }
`

/****************************************** Genre *************************************************/
const InputGenre = css<StyledInputProps>`
  ${props => css`
    background: ${props.theme.colors.input[props.$genre].background.rest};
    border-color: ${props.theme.colors.input[props.$genre].border.rest};
    color: ${props.theme.colors.input[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
    }
    ${!props.$isNotShowHoverStyle &&
    css`
      &:hover {
        background: ${props.theme.colors.input[props.$genre].background.hover};
        border-color: ${props.theme.colors.input[props.$genre].border.hover};
        color: ${props.theme.colors.input[props.$genre].color.hover};
      }
    `}
    &:focus-visible {
      background: ${props.theme.colors.input[props.$genre].background.rest};
      border-color: ${props.theme.colors.input[props.$genre].border.rest};
      color: ${props.theme.colors.input[props.$genre].color.rest};
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
  width: 100%;
  border: 1px inset;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${props => getFontSizeStyles(16, props.$isBold ? 500 : 400, 'Inter', props.theme.font.lineHeight)};

  ${InputSize};
  ${InputGenre};
  ${InputPlaceholder};
  ${InputHidden};
  ${InputIsInputEffect};
  ${addOutline};
  ${addTransition};
  ${addError};

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
  ${addTransition};
`

export const InputPostfixChildren = styled.div<StyledInputChildrenProps>`
  position: absolute;
  right: ${props => props.$right};
  width: ${props => props.$width};
  opacity: ${props => (props.$isDisabled ? 0.5 : 1)};
  height: 100%;
  ${addTransition};
`

/****************************************** Loading *************************************************/
// const InputStyledLoadingSize = css<StyledInputProps>`
//   ${props => InputStyledLoadingConstructor(KEY_SIZE_DATA[props.$size])};
// `
// const InputStyledLoadingConstructor = (props: IJeneseiThemeSize) => css`
//   padding: ${props.padding - 6}px ${props.padding}px ${props.padding - 4}px ${props.padding}px;
// `

// // export const InputStyledLoading = styled(Loading)<StyledInputProps>`
// //   ${InputStyledLoadingSize};
// //   position: absolute;
// //   display: flex;
// //   align-items: center;
// //   right: 0px;
// //   box-sizing: content-box;
// // `
