import styled, { css } from 'styled-components'

import {
  InputDefaultChildrenProps,
  ModalLoading,
  StyledInputDefaultProps,
  StyledInputDefaultWrapperProps,
  fontInterWithSizeAndWeight,
} from '../../main'

/****************************************** Hidden *************************************************/
const InputDefaultWrapperHidden = css<StyledInputDefaultWrapperProps>`
  opacity: ${(props) => (props.$isHidden ? 0.3 : 1)};
`

/****************************************** Wrapper *************************************************/
export const StyledInputDefaultWrapper = styled.div<StyledInputDefaultWrapperProps>`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width ?? '100%'};
  ${InputDefaultWrapperHidden};
`
/****************************************** Error *************************************************/
export const InputDefaultErrorMessage = styled.div`
  ${fontInterWithSizeAndWeight(12, 400)};
  position: absolute;
  bottom: -15px;
  left: 10px;
  color: ${(props) => props.theme.colors.danger['100']};
`

export const InputDefaultIsErrorBorder = css<StyledInputDefaultProps>`
  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.red['100']};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${(props) => props.theme.colors.red['100']};
      }
    `}
`
/****************************************** Placeholder *************************************************/
const InputDefaultPlaceholder = css<StyledInputDefaultProps>`
  ${(props) =>
    props.$genre === 'primary'
      ? css`
          &::placeholder,
          &::-ms-input-placeholder {
            ${fontInterWithSizeAndWeight(16, 400)};
            color: ${props.theme.colors.white['100']} !important;
            opacity: 1;
            line-height: 24px;
          }
        `
      : css`
          &::placeholder,
          &::-ms-input-placeholder {
            ${fontInterWithSizeAndWeight(16, 400)};
            color: ${props.theme.colors.gray['8a8a8a']} !important;
            opacity: 1;
          }
        `}
`

/****************************************** Default *************************************************/
export const StyledInputDefaultCSS = css<StyledInputDefaultProps>`
  ${fontInterWithSizeAndWeight(16, 400)};
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid;
  transition: all 0.2s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;

  ${(props) =>
    props.$size === 'large'
      ? InputDefaultSizeLarge
      : props.$size === 'medium'
        ? InputDefaultSizeMedium
        : null};

  ${(props) =>
    props.$genre == 'primary'
      ? InputDefaultGenrePrimary
      : props.$genre === 'secondary'
        ? InputDefaultGenreSecondary
        : null};

  ${(props) =>
    props.$prefixChildren &&
    css`
      padding-left: ${`calc(${props.$prefixChildren.width} + ${props.$prefixChildren.right} + ${props.$prefixChildren.left})`};
    `};

  ${(props) =>
    props.$postfixChildren &&
    css`
      padding-left: ${`calc(${props.$postfixChildren.width} + ${props.$postfixChildren.right} + ${props.$postfixChildren.left})`};
    `};

  ${InputDefaultIsErrorBorder};
`

export const StyledInputDefault = styled.input<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS};
  ${InputDefaultPlaceholder};
`

/****************************************** Children *************************************************/
export const InputDefaultPrefixChildren = styled.div<InputDefaultChildrenProps>`
  position: absolute;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
`

export const InputDefaultPostfixChildren = styled.div<InputDefaultChildrenProps>`
  position: absolute;
  right: ${(props) => props.left};
  width: ${(props) => props.width};
`

/****************************************** Size *************************************************/
const InputDefaultSizeLarge = css<StyledInputDefaultProps>`
  padding: 0px 12px 0px 12px;
  height: 56px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 16px;
`

const InputDefaultSizeMedium = css<StyledInputDefaultProps>`
  padding: 0px 16px 0px 16px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 16px;
`

/****************************************** Genre *************************************************/
const InputDefaultGenrePrimary = css<StyledInputDefaultProps>`
  border-color: transparent;
  background: ${(props) => props.$color};
  color: ${(props) => props.theme.colors.white['100']};
  &:focus,
  &:focus-visible {
    border-color: ${(props) => props.theme.colors.product[100]};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }

  ${(props) =>
    props.$isFocus === true
      ? css`
          border-color: ${(props) => props.theme.colors.product[100]};
        `
      : props.$isFocus === false
        ? css`
            border-color: ${(props) =>
              props.theme.colors.gray.e3e3e6} !important;
          `
        : null};
`

const InputDefaultGenreSecondary = css<StyledInputDefaultProps>`
  ${InputDefaultGenrePrimary};
  color: ${(props) => props.theme.colors.gray[484848]};
  background: transparent;
  border-color: ${(props) => props.$color};
`

/****************************************** ModalLoading *************************************************/
export const InputDefaultStyledModalLoading = styled(ModalLoading)`
  position: absolute;
  right: 12px;
`
