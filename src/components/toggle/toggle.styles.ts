import { AnimatePresence, motion } from 'framer-motion'
import ReactToggle from 'react-toggle'
import styled, { css } from 'styled-components'

import { IJeneseiThemeSizeToggle, KEY_SIZE_DATA_TOGGLE } from '@theme/index'

import { StyledToggleProps } from '.'

import 'react-toggle/style.css'

/****************************************** Size *************************************************/
export const StyledReactToggleSize = css<StyledToggleProps>`
  ${props => ToggleSizeConstructor(KEY_SIZE_DATA_TOGGLE[props.$size])};
`
export const ToggleSizeConstructor = (props: IJeneseiThemeSizeToggle) => css`
  & .react-toggle-track {
    height: ${props.height}px;
    width: ${props.width}px;
  }
  & .react-toggle-thumb {
    top: ${props.padding}px;
    left: ${props.padding}px;
    height: ${props.thumb}px;
    width: ${props.thumb}px;
  }

  &.react-toggle--checked .react-toggle-thumb {
    left: calc(100% - ${props.thumb + props.padding}px);
  }
`

/****************************************** Error *************************************************/
export const ToggleIsErrorBorder = css<StyledToggleProps>`
  ${props =>
    props.$isError &&
    css`
      border-color: ${props => props.theme.colors.danger} !important;
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${props => props.theme.colors.danger} !important;
      }
    `}
`

/****************************************** Genre *************************************************/
const StyledReactToggleGenre = css<StyledToggleProps>`
  & div {
    transition:
      all ${props => props.theme.transition},
      outline 0s;
  }
  &.react-toggle {
    outline: 0;
  }
  &.react-toggle--focus {
    & .react-toggle-track {
    }
    & .react-toggle-thumb {
      box-shadow: none !important;
    }
  }
  & .react-toggle-track-check {
    display: none;
  }
  & .react-toggle-track-x {
    display: none;
  }

  &:focus-visible {
    ${props => css`
      & .react-toggle-track {
        outline: 1px solid ${props.theme.colors.focus};
      }
    `};
  }

  &.react-toggle--checked {
    & .react-toggle-track {
      background: ${props => props.theme.colors.toggle[props.$genre].track.rest.active};
      border-color: ${props => props.theme.colors.toggle[props.$genre].border.rest.active};
    }
    & .react-toggle-thumb {
      background: ${props => props.theme.colors.toggle[props.$genre].thumb.rest.active};
      border-color: transparent;
    }
  }

  &.react-toggle:focus-visible {
    & .react-toggle-track {
    }
    & .react-toggle-thumb {
    }
  }

  & .react-toggle-thumb {
    ${props => css`
      background: ${props.theme.colors.toggle[props.$genre].thumb.rest.unActive};
      border-color: transparent;
      box-shadow: ${props => props.theme.effects.toggle.rest} !important;
    `};
  }
  & .react-toggle-track {
    border: 1px solid transparent;
    border-color: ${props => props.theme.colors.toggle[props.$genre].border.rest.unActive};
    background: ${props => props.theme.colors.toggle[props.$genre].track.rest.unActive};
    ${ToggleIsErrorBorder}
  }

  &.react-toggle:hover:not(.react-toggle--disabled) {
    & .react-toggle-thumb {
      ${props => css`
        background: ${props.theme.colors.toggle[props.$genre].thumb.hover.unActive};
        border-color: transparent;
        box-shadow: ${props => props.theme.effects.toggle.hover} !important;
      `};
    }
    & .react-toggle-track {
      border-color: ${props => props.theme.colors.toggle[props.$genre].border.hover.unActive};
      background: ${props => props.theme.colors.toggle[props.$genre].track.hover.unActive};
      ${ToggleIsErrorBorder}
    }
    &.react-toggle--checked {
      & .react-toggle-track {
        background: ${props => props.theme.colors.toggle[props.$genre].track.hover.active};
        border-color: ${props => props.theme.colors.toggle[props.$genre].border.hover.active};
        ${ToggleIsErrorBorder}
      }
      & .react-toggle-thumb {
        background: ${props => props.theme.colors.toggle[props.$genre].thumb.hover.active};
        border-color: transparent;
      }
    }
  }
  &.react-toggle:active:not(.react-toggle--disabled) {
    & .react-toggle-track {
      border-color: ${props => props.theme.colors.toggle[props.$genre].border.hover.active};
      ${ToggleIsErrorBorder}
    }
    & .react-toggle-thumb {
      box-shadow: ${props => props.theme.effects.toggle.active} !important;
    }
  }
`

/****************************************** Disabled *************************************************/
const StyledReactToggleDisabled = css<StyledToggleProps>`
  ${props =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`
export const StyledReactToggle = styled(ReactToggle)<StyledToggleProps>`
  position: relative;
  width: fit-content;
  ${StyledReactToggleGenre};
  ${StyledReactToggleDisabled};
  ${StyledReactToggleSize};
`

export const ToggleWrapper = styled(motion.div)``

export const ToggleCenter = styled(motion.div)``
