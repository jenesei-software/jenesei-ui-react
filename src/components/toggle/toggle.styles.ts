import ReactToggle from 'react-toggle'
import styled, { css } from 'styled-components'

import { StyledToggleProps } from '.'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '../../theme'

import 'react-toggle/style.css'

/****************************************** Size *************************************************/
export const StyledReactToggleSize = css<StyledToggleProps>`
  ${(props) => ToggleSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const ToggleSizeConstructor = (props: IJeneseiThemeSize) => css`
  & .react-toggle-track {
    height: ${props.height}px;
    width: ${props.height * 2 + 2}px;
  }
  & .react-toggle-thumb {
    height: ${props.height - 2}px;
    width: ${props.height - 2}px;
  }

  &.react-toggle--checked .react-toggle-thumb {
    left: calc(100% - ${props.height}px);
  }
`

/****************************************** Genre *************************************************/
const StyledReactToggleGenre = css<StyledToggleProps>`
  & div {
    transition:
      all 0.2s,
      outline 0s;
  }
  &.react-toggle {
    outline: 0;
  }
  &.react-toggle:hover:not(.react-toggle--disabled) {
    & .react-toggle-track {
      border-color: ${(props) =>
        props.theme.colors.toggle[props.$genre].border.hover};
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre].background.hover};
    }
  }
  &.react-toggle:active:not(.react-toggle--disabled) {
    & .react-toggle-track {
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre].background.active};
      border-color: ${(props) =>
        props.theme.colors.toggle[props.$genre].border.active};
    }
    & .react-toggle-thumb {
      box-shadow: none !important;
    }
  }
  &.react-toggle--focus {
    & .react-toggle-track {
      border-color: ${(props) =>
        props.theme.colors.toggle[props.$genre].border.focus};
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre].background.focus};
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
  & .react-toggle-thumb {
    ${(props) => css`
      background: ${props.theme.colors.toggle[props.$genre].color.rest};
      border-color: ${props.theme.colors.toggle[props.$genre].background.rest};
    `};
  }

  &:focus-visible {
    ${(props) => css`
      & .react-toggle-track {
        outline: 2px solid ${props.theme.colors.focus};
        border-color: ${props.theme.colors.toggle[props.$genre].border.focus};
        background: ${props.theme.colors.toggle[props.$genre].background.focus};
      }
    `};
  }
  &.react-toggle--checked {
    & .react-toggle-track {
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre].background.active};
    }
    & .react-toggle-thumb {
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre].color.active};
      border-color: ${(props) =>
        props.theme.colors.toggle[props.$genre].background.active};
    }
  }
  & .react-toggle-track {
    border: 1px solid transparent;
    border-color: ${(props) =>
      props.theme.colors.toggle[props.$genre].border.rest};
    background: ${(props) =>
      props.theme.colors.toggle[props.$genre].background.rest};
  }
`

/****************************************** Disabled *************************************************/
const StyledReactToggleDisabled = css<StyledToggleProps>`
  ${(props) =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
`

export const StyledReactToggle = styled(ReactToggle)<StyledToggleProps>`
  ${StyledReactToggleGenre};
  ${StyledReactToggleDisabled};
  ${StyledReactToggleSize};
`
