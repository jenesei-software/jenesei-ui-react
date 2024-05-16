import ReactToggle from 'react-toggle'
import styled, { css } from 'styled-components'

import { StyledToggleProps } from '.'
import { IJeneseiThemeSizeData, KEY_SIZE_DATA } from '../../theme'

import 'react-toggle/style.css'

/****************************************** Size *************************************************/
export const StyledReactToggleSize = css<StyledToggleProps>`
  ${(props) => ToggleSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const ToggleSizeConstructor = (props: IJeneseiThemeSizeData) => css`
  & .react-toggle-track {
    height: ${props.height}px;
    width: ${props.height * 2 + 2}px;
  }
  & .react-toggle-thumb {
    height: ${props.height - 2}px;
    width: ${props.height - 2}px;
  }

  &.react-toggle--checked .react-toggle-thumb {
    left: calc(100% - ${props.height - 2 - 1}px);
  }
`

/****************************************** Genre *************************************************/
const StyledReactToggleGenre = css<StyledToggleProps>`
  &.react-toggle {
    outline: 0;
  }
  &.react-toggle:hover:not(.react-toggle--disabled) {
    & .react-toggle-track {
      background: ${(props) =>
        props.theme.colors.toggle[props.$genre][props.$genreType].background
          .hover};
    }
  }
  &.react-toggle:active:not(.react-toggle--disabled) {
    & .react-toggle-thumb {
      box-shadow: none !important;
    }
  }
  &.react-toggle--focus {
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
      background: ${props.theme.colors.toggle[props.$genre][props.$genreType]
        .color.rest} !important;
      border-color: ${props.theme.colors.toggle[props.$genre][props.$genreType]
        .background.rest} !important;

      ${props.$value &&
      css`
        background: ${props.theme.colors.toggle[props.$genre][props.$genreType]
          .color.active} !important;
        border-color: ${props.theme.colors.toggle[props.$genre][
          props.$genreType
        ].background.active} !important;
      `}
    `};
  }
  &:focus-visible {
    ${(props) => css`
      & .react-toggle-track {
        outline: 2px solid
          ${props.theme.colors.toggle[props.$genre][props.$genreType].color
            .rest};
      }
    `};
  }
  & .react-toggle-track {
    ${(props) => css`
      background: ${props.theme.colors.toggle[props.$genre][props.$genreType]
        .background.rest} !important;
      ${props.$value &&
      css`
        background: ${props.theme.colors.toggle[props.$genre][props.$genreType]
          .background.active} !important;
      `}
    `};
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
