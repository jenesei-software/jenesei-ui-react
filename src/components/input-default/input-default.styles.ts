import styled, { css } from 'styled-components'

import {
  InputDefaultChildrenProps,
  ModalLoading,
  StyledInputDefaultProps,
  StyledInputDefaultWrapperProps,
  getFontStyles,
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
  ${getFontStyles(12, 400, 'Inter')};
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
export const InputDefaultPlaceholder = css<StyledInputDefaultProps>`
  ${getFontStyles(16, 400, 'Inter')};
  color: ${(props) =>
    props.theme.colors.input[props.$genre][props.$genreType].color.placeholder};
  opacity: 1;
  line-height: 24px;
`

export const InputPhonePlaceholder = css`
  ${getFontStyles(16, 500, 'Inter')};
  color: ${(props) => props.theme.colors.other['cccccc']};
  opacity: 1;
  line-height: 24px;
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
  ${getFontStyles(16, 400, 'Inter')};
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
        : props.$size === 'largeMedium'
          ? InputDefaultSizeLargeMedium
          : props.$size === 'mediumSmall'
            ? InputDefaultSizeMediumSmall
            : props.$size === 'small'
              ? InputDefaultSizeSmall
              : InputDefaultSizeLarge};

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

  &::placeholder,
  &::-ms-input-placeholder {
    ${InputDefaultPlaceholder};
  }
`

export const StyledInputDefault = styled.input<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS};
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
  padding: 0px 14px;
  height: 56px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 16px;
`

const InputDefaultSizeLargeMedium = css<StyledInputDefaultProps>`
  padding: 0px 12px;
  height: 49px;
  min-height: 49px;
  max-height: 49px;
  border-radius: 14px;
`

const InputDefaultSizeMedium = css<StyledInputDefaultProps>`
  padding: 0px 10px;
  height: 42px;
  min-height: 42px;
  max-height: 42px;
  border-radius: 12px;
`

const InputDefaultSizeMediumSmall = css<StyledInputDefaultProps>`
  padding: 0px 8px;
  height: 35px;
  min-height: 35px;
  max-height: 35px;
  border-radius: 10px;
`

const InputDefaultSizeSmall = css<StyledInputDefaultProps>`
  padding: 0px 6px;
  height: 28px;
  min-height: 28px;
  max-height: 28px;
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
