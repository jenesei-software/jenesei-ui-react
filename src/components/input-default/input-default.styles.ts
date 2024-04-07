import {
  FontInterR12,
  TInputGenre,
  UIInputAuth,
  UIInputPlaceholder,
  UIInputUser,
  UIInputUserMin,
} from '../../main'
import styled, { css } from 'styled-components'

export interface StyledUIInputDefaultProps {
  $genre: TInputGenre
  $prefixWidth?: string
  $prefixLeft?: string
  $prefixRight?: string
  $isFocus?: boolean
  $isOnlyText?: boolean
  $isError?: boolean
}

export const StyledUIInputDefaultIsErrorOutlineCSS = css<
  Pick<StyledUIInputDefaultProps, '$isError'>
>`
  ${(props) =>
    props.$isError &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.danger['100']};
      &:focus,
      &:active,
      &:focus-visible {
        outline: 2px solid ${(props) => props.theme.colors.danger['100']};
      }
    `}
`

export const StyledUIInputDefaultIsErrorBorderCSS = css<
  Pick<StyledUIInputDefaultProps, '$isError'>
>`
  ${(props) =>
    props.$isError &&
    css`
      border: 2px solid ${(props) => props.theme.colors.danger['100']};
      &:focus,
      &:active,
      &:focus-visible {
        border: 2px solid ${(props) => props.theme.colors.danger['100']};
      }
    `}
`

export const StyledUIInputDefaultCSS = css<StyledUIInputDefaultProps>`
  ${(props) =>
    props.$genre == 'auth'
      ? UIInputAuth
      : props.$genre === 'user-min'
        ? UIInputUserMin
        : UIInputUser}
  ${(props) =>
    props.$isOnlyText &&
    css`
      transition: background-color 0.2s;
      background: transparent;
      outline: none;
      &:focus,
      &:focus-visible {
        background: ${(props) => props.theme.colors.gray.f8f8f8};
      }
    `}
  ${StyledUIInputDefaultIsErrorOutlineCSS};
  padding-left: ${(props) =>
    props.$prefixWidth &&
    `calc(${props.$prefixWidth} + ${props.$prefixLeft} + ${props.$prefixRight})`};
`
export const StyledUIInputDefault = styled.input<StyledUIInputDefaultProps>`
  ${StyledUIInputDefaultCSS}
`

export const InputDefaultErrorMessage = styled.div`
  ${FontInterR12};
  position: absolute;
  bottom: -15px;
  left: 10px;
  color: ${(props) => props.theme.colors.danger['100']};
`

export const InputDefaultPrefixContent = styled.div<{
  $width: string
  $left: string
}>`
  ${UIInputPlaceholder};
  position: absolute;
  left: ${(props) => props.$left};
  width: ${(props) => props.$width};
`
