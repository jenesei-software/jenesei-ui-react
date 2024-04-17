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
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
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
  color: ${(props) => props.theme.colors.danger};
`

export const InputDefaultIsErrorBorder = css<StyledInputDefaultProps>`
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
const InputDefaultPlaceholder = css<StyledInputDefaultProps>`
  &::placeholder,
  &::-ms-input-placeholder {
    ${fontInterWithSizeAndWeight(16, 400)};
    color: ${(props) =>
      props.theme.colors.input[props.$genre][props.$genreType].color
        .placeholder};
    opacity: 1;
    line-height: 24px;
  }
`

/****************************************** Genre *************************************************/
const InputDefaultGenre = css<StyledInputDefaultProps>`
  ${(props) => css`
    background: ${props.theme.colors.input[props.$genre][props.$genreType]
      .background.rest};
    border-color: ${props.theme.colors.input[props.$genre][props.$genreType]
      .border.rest};
    color: ${props.theme.colors.input[props.$genre][props.$genreType].color
      .rest};
    & span {
      color: ${props.theme.colors.input[props.$genre][props.$genreType].color
        .rest};
    }
    & path {
      stroke: ${props.theme.colors.input[props.$genre][props.$genreType].color
        .rest};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.focus};
      border-color: ${props.theme.colors.input[props.$genre][props.$genreType]
        .border.focus};
      background: ${props.theme.colors.input[props.$genre][props.$genreType]
        .background.focus};

      color: ${props.theme.colors.input[props.$genre][props.$genreType].color
        .focus};
      & span {
        color: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .focus};
      }
      & path {
        stroke: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .focus};
      }
    }
    &:hover {
      background: ${props.theme.colors.input[props.$genre][props.$genreType]
        .background.hover};
      border-color: ${props.theme.colors.input[props.$genre][props.$genreType]
        .border.hover};
      color: ${props.theme.colors.input[props.$genre][props.$genreType].color
        .hover};
      & span {
        color: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .hover};
      }
      & path {
        stroke: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .hover};
      }
    }
    ${props.$isFocus &&
    css`
      background: ${props.theme.colors.input[props.$genre][props.$genreType]
        .background.active};
      border-color: ${props.theme.colors.input[props.$genre][props.$genreType]
        .border.active};
      color: ${props.theme.colors.input[props.$genre][props.$genreType].color
        .active};
      & span {
        color: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .active};
      }
      & path {
        stroke: ${props.theme.colors.input[props.$genre][props.$genreType].color
          .active};
      }
    `}
  `};
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
        : props.$size === 'small'
          ? InputDefaultSizeSmall
          : null};

  ${InputDefaultGenre};

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
  padding: 0px 10px 0px 10px;
  height: 38px;
  min-height: 38px;
  max-height: 38px;
  border-radius: 12px;
`

const InputDefaultSizeSmall = css<StyledInputDefaultProps>`
  padding: 0px 8px 0px 8px;
  height: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 8px;
`

/****************************************** ModalLoading *************************************************/
export const InputDefaultStyledModalLoading = styled(ModalLoading)`
  position: absolute;
  display: flex;
  align-items: center;
  right: ${(props) =>
    props.size === 'large'
      ? '12px'
      : props.size === 'medium'
        ? '10px'
        : props.size === 'small'
          ? '8px'
          : null};
`
