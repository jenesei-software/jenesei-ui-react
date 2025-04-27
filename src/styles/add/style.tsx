import { css } from 'styled-components'

import { TJeneseiFontFamily } from '@local/theme'

import { addErrorProps } from '.'

export const addRemoveScrollbar = css`
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

export const addTransitionWithoutSize = css`
  transition:
    outline 0s,
    opacity ${props => props.theme.transition.default},
    transform ${props => props.theme.transition.default},
    background-color ${props => props.theme.transition.default},
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

export const addBorder = css`
  border: 1px solid transparent;
  &:focus-visible {
    border-color: ${props => props.theme.colors.focus};
  }
`

export const addRemoveOutline = css`
  outline: 0px solid transparent;
  outline-offset: 0px;
  &:focus-visible {
    outline: 0px solid ${props => props.theme.colors.focus};
  }
`

export const addCustomFont = css<{
  $customFontFamily?: TJeneseiFontFamily
  $customFontSize?: number | string
  $customFontWeight?: number
}>`
  ${props =>
    props.$customFontFamily &&
    css`
     font-family ${props.$customFontFamily};
    `};
  ${props =>
    props.$customFontSize &&
    css`
     font-size ${props.$customFontSize};
    `};
  ${props =>
    props.$customFontWeight &&
    css`
     font-weight ${props.$customFontWeight};
    `};
`

export const addError = css<addErrorProps>`
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
