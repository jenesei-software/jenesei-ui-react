import styled, { css } from 'styled-components'

import { getFontSizeStyles } from '@local/components/typography'
import { IJeneseiThemeSize, JeneseiPalette, KEY_SIZE_DATA, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import {
  DollarFlexBasicProps,
  DollarFlexContainerAndItemAndBasicProps,
  DollarFlexContainerAndItemProps,
  DollarFlexContainerProps,
  DollarFlexItemProps
} from '.'

const FlexContainer = css<DollarFlexContainerProps>`
  display: flex;
  ${({ $flexDirection }) =>
    $flexDirection &&
    css`
      flex-direction: ${$flexDirection};
    `}
  ${({ $flexWrap }) =>
    $flexWrap &&
    css`
      flex-wrap: ${$flexWrap};
    `}
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
  ${({ $alignItems }) =>
    $alignItems &&
    css`
      align-items: ${$alignItems};
    `}
  ${({ $alignContent }) =>
    $alignContent &&
    css`
      align-content: ${$alignContent};
    `}
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap};
    `}
`

const FlexItem = css<DollarFlexItemProps>`
  ${({ $order }) =>
    $order &&
    css`
      order: ${$order};
    `}
  ${({ $flexGrow }) =>
    $flexGrow &&
    css`
      flex-grow: ${$flexGrow};
    `}
  ${({ $flexShrink }) =>
    $flexShrink &&
    css`
      flex-shrink: ${$flexShrink};
    `}
  ${({ $flexBasis }) =>
    $flexBasis &&
    css`
      flex-basis: ${$flexBasis};
    `}
  ${({ $alignSelf }) =>
    $alignSelf &&
    css`
      align-self: ${$alignSelf};
    `}
`

const FlexBasic = css<DollarFlexBasicProps>`
  ${({ $m }) =>
    $m &&
    css`
      margin: ${$m};
    `}
  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: ${$mt};
    `}
  ${({ $mr }) =>
    $mr &&
    css`
      margin-right: ${$mr};
    `}
  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${$mb};
    `}
  ${({ $ml }) =>
    $ml &&
    css`
      margin-left: ${$ml};
    `}
    ${({ $br }) =>
    $br &&
    css`
      border-radius: ${$br};
    `}
    ${({ $bs }) =>
    $bs &&
    css`
      box-sizing: ${$bs};
    `}
    ${({ $maxTransition }) =>
    $maxTransition &&
    css`
      transition: all ${props => props.theme.transition.default};
    `}
  ${({ $mx }) =>
    $mx &&
    css`
      margin-left: ${$mx};
      margin-right: ${$mx};
    `}
  ${({ $my }) =>
    $my &&
    css`
      margin-top: ${$my};
      margin-bottom: ${$my};
    `}
  ${({ $p }) =>
    $p &&
    css`
      padding: ${$p};
    `}
  ${({ $pt }) =>
    $pt &&
    css`
      padding-top: ${$pt};
    `}
  ${({ $pr }) =>
    $pr &&
    css`
      padding-right: ${$pr};
    `}
  ${({ $pb }) =>
    $pb &&
    css`
      padding-bottom: ${$pb};
    `}
  ${({ $pl }) =>
    $pl &&
    css`
      padding-left: ${$pl};
    `}
  ${({ $px }) =>
    $px &&
    css`
      padding-left: ${$px};
      padding-right: ${$px};
    `}
  ${({ $py }) =>
    $py &&
    css`
      padding-top: ${$py};
      padding-bottom: ${$py};
    `}
  ${({ $w }) =>
    $w &&
    css`
      width: ${$w};
    `}
  ${({ $h }) =>
    $h &&
    css`
      height: ${$h};
    `}
  ${({ $minW }) =>
    $minW &&
    css`
      min-width: ${$minW};
    `}
  ${({ $maxW }) =>
    $maxW &&
    css`
      max-width: ${$maxW};
    `}
  ${({ $minH }) =>
    $minH &&
    css`
      min-height: ${$minH};
    `}
  ${({ $maxH }) =>
    $maxH &&
    css`
      max-height: ${$maxH};
    `}
  ${({ $bg }) =>
    $bg &&
    css`
      background: ${JeneseiPalette[$bg]};
    `}
  ${({ $color }) =>
    $color &&
    css`
      color: ${JeneseiPalette[$color]};
    `}
`

export const FlexContainerAndItem = css<DollarFlexContainerAndItemProps>`
  ${FlexContainer}
  ${FlexItem}
`

export const FlexContainerAndItemAndBasic = css<DollarFlexContainerAndItemAndBasicProps>`
  ${FlexContainerAndItem}
  ${FlexBasic}
`

export const removeScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-horizontal {
    display: none;
  }

  &::-webkit-scrollbar-vertical {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`

export const addTransition = css`
  transition:
    outline 0s,
    opacity ${props => props.theme.transition.default},
    transform ${props => props.theme.transition.default},
    background-color ${props => props.theme.transition.default},
    height ${props => props.theme.transition.default},
    max-height ${props => props.theme.transition.default},
    width ${props => props.theme.transition.default},
    color ${props => props.theme.transition.default},
    visibility ${props => props.theme.transition.default},
    box-shadow ${props => props.theme.transition.default},
    border-color ${props => props.theme.transition.default},
    left ${props => props.theme.transition.default},
    right ${props => props.theme.transition.default},
    grid-template-areas ${props => props.theme.transition.default},
    grid-template-rows ${props => props.theme.transition.default},
    grid-template-columns ${props => props.theme.transition.default};
`

export const addGridTransition = css`
  transition:
    grid-template-areas ${props => props.theme.transition.default},
    grid-template-rows ${props => props.theme.transition.default},
    grid-template-columns ${props => props.theme.transition.default};
`

export const addColorTransition = css`
  transition:
    outline 0s,
    opacity ${props => props.theme.transition.default},
    background-color ${props => props.theme.transition.default},
    color ${props => props.theme.transition.default},
    box-shadow ${props => props.theme.transition.default},
    border-color ${props => props.theme.transition.default};
`

export const addOutline = css`
  outline: 2px solid transparent;
  outline-offset: 1px;
  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.focus};
  }
`

export const addError = css<{ $isError?: boolean }>`
  ${props =>
    props.$isError &&
    css`
      border-color: ${props => props.theme.colors.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${props => props.theme.colors.danger};
      }
    `};
`

type ErrorMessagePropsDollar = AddDollarSign<ErrorMessageProps>
type ErrorMessageProps = {
  errorMessage?: string

  isError?: boolean

  isErrorAbsolute?: boolean

  size: TJeneseiThemeSize

  width?: string
}

export const ErrorMessageSize = css<ErrorMessagePropsDollar>`
  ${props => ErrorMessageSizeConstructor({ ...KEY_SIZE_DATA[props.$size], $isErrorAbsolute: props.$isErrorAbsolute })};
`
export const ErrorMessageSizeConstructor = (
  props: IJeneseiThemeSize & { $isErrorAbsolute: ErrorMessageProps['isErrorAbsolute'] }
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

export const ErrorMessage = styled.div<ErrorMessagePropsDollar>`
  ${getFontSizeStyles(12, 400, 'Inter')};
  width: ${props => props.$width ?? '100%'};
  ${ErrorMessageSize}
`
