import styled, { css } from 'styled-components'

import {
  FontInterR12,
  FontInterR16,
  InputDefaultChildrenProps,
  StyledInputDefaultProps,
} from '../../main'

/****************************************** Error *************************************************/
export const InputDefaultErrorMessage = styled.div`
  ${FontInterR12};
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

/****************************************** Default *************************************************/
export const StyledInputDefaultCSS = css<StyledInputDefaultProps>`
  ${FontInterR16};
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
  ${StyledInputDefaultCSS}
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

  &::placeholder,
  &::-ms-input-placeholder {
    ${FontInterR16};
    color: ${(props) => props.theme.colors.white['100']} !important;
    opacity: 1 !important;
    line-height: 24px !important;
  }
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

  &::placeholder,
  &::-ms-input-placeholder {
    ${FontInterR16};
    color: ${(props) => props.theme.colors.gray['8a8a8a']};
    opacity: 1;
  }
`
