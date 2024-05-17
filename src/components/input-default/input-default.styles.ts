import { PatternFormat } from 'react-number-format'
import styled, { css } from 'styled-components'

import { getFontStyles } from '../../fonts'
import { IJeneseiThemeSizeData, KEY_SIZE_DATA } from '../../theme'
import { ModalLoading } from '../modal-loading'
import {
  InputDefaultChildrenProps,
  StyledInputDefaultProps,
  StyledInputDefaultWrapperProps,
} from './input-default.types'

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
  ::placeholder,
  ::-webkit-input-placeholder {
    ${(props) => getFontStyles(16, props.$isBold ? 500 : 400, 'Inter')};
    color: ${(props) =>
      props.theme.colors.input[props.$genre][props.$genreType].color
        .placeholder};
    opacity: 1;
    line-height: 24px;
  }
  :-ms-input-placeholder {
    ${(props) => getFontStyles(16, props.$isBold ? 500 : 400, 'Inter')};
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
    ${props.$isActive &&
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

/****************************************** Size *************************************************/
export const InputDefaultSize = css<StyledInputDefaultProps>`
  ${(props) => InputDefaultSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const InputDefaultSizeConstructor = (
  props: IJeneseiThemeSizeData,
) => css`
  padding: 0px ${props.padding}px;
  height: ${props.height}px;
  min-height: ${props.height}px;
  max-height: ${props.height}px;
  border-radius: ${props.radius}px;
`

/****************************************** Default *************************************************/
export const StyledInputDefaultCSS = css<StyledInputDefaultProps>`
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

  ${(props) => getFontStyles(16, props.$isBold ? 500 : 400, 'Inter')};
  ${InputDefaultSize};
  ${InputDefaultGenre};
  ${InputDefaultIsErrorBorder};
  ${InputDefaultPlaceholder};
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
`

export const StyledInputDefault = styled.input<StyledInputDefaultProps>`
  ${StyledInputDefaultCSS};
`

export const StyledInputDefaultFormat = styled(
  PatternFormat,
)<StyledInputDefaultProps>`
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

/****************************************** ModalLoading *************************************************/
export const InputDefaultStyledModalLoading = styled(
  ModalLoading,
)<StyledInputDefaultProps>`
  position: absolute;
  display: flex;
  align-items: center;
  right: ${(props) => KEY_SIZE_DATA[props.$size].padding}px;
`
