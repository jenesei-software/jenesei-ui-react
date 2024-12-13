import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { IJeneseiThemeSizeToggle, KEY_SIZE_DATA_TOGGLE } from '@local/theme'

import { StyledToggleProps } from '.'

/****************************************** Size *************************************************/
const ToggleWrapperSize = css<StyledToggleProps>`
  ${props => ToggleWrapperSizeConstructor(KEY_SIZE_DATA_TOGGLE[props.$size])};
`
const ToggleWrapperSizeConstructor = (props: IJeneseiThemeSizeToggle) => css`
  height: ${props.height}px;
  width: ${props.width}px;
  padding: ${props.padding}px;
  border-radius: 100px;
`

const ToggleCenterSize = css<StyledToggleProps>`
  ${props => ToggleCenterSizeConstructor(KEY_SIZE_DATA_TOGGLE[props.$size])};
`
const ToggleCenterSizeConstructor = (props: IJeneseiThemeSizeToggle) => css`
  height: ${props.thumb}px;
  width: ${props.thumb}px;
  border-radius: 100px;
`

/****************************************** Standard *************************************************/
export const ToggleWrapper = styled(motion.div)<StyledToggleProps>`
  ${ToggleWrapperSize};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  transition:
    border-color ${props => props.theme.transition},
    background-color ${props => props.theme.transition},
    opacity ${props => props.theme.transition},
    outline 0s;

  &:focus-visible {
    outline: 1px solid ${props => props.theme.colors.focus};
  }
  ${props =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `};

  ${props =>
    props.$value
      ? css`
          background: ${props.theme.colors.toggle[props.$genre].active.rest.track};
          border-color: ${props.theme.colors.toggle[props.$genre].active.rest.border};
          justify-content: flex-end;
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].active.hover.track};
            border-color: ${props.theme.colors.toggle[props.$genre].active.hover.border};
          }
        `
      : css`
          background: ${props.theme.colors.toggle[props.$genre].unActive.rest.track};
          border-color: ${props.theme.colors.toggle[props.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].unActive.hover.track};
            border-color: ${props.theme.colors.toggle[props.$genre].unActive.hover.border};
          }
        `};

  ${props =>
    props.$isError &&
    css`
      border-color: ${props.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${props.theme.colors.danger};
      }
    `};
`

export const ToggleCenter = styled(motion.div)<StyledToggleProps>`
  ${ToggleCenterSize};

  transition: box-shadow ${props => props.theme.transition};

  ${props =>
    props.$value
      ? css`
          background: ${props.theme.colors.toggle[props.$genre].active.rest.thumb};
          box-shadow: ${props.theme.colors.toggle[props.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].active.hover.thumb};
            box-shadow: ${props.theme.colors.toggle[props.$genre].active.hover.thumbBoxShadow};
          }
        `
      : css`
          background: ${props.theme.colors.toggle[props.$genre].unActive.rest.thumb};
          box-shadow: ${props.theme.colors.toggle[props.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${props.theme.colors.toggle[props.$genre].unActive.hover.thumb};
            box-shadow: ${props.theme.colors.toggle[props.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`
