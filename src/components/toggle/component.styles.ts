import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { addTransition } from '@local/styles/add'
import { addError } from '@local/styles/error'
import { IThemeSizePropertyToggle, KEY_SIZE_DATA_TOGGLE } from '@local/theme'

import { StyledToggleProps } from '.'

/****************************************** Size *************************************************/
const ToggleWrapperSize = css<StyledToggleProps>`
  ${props => ToggleWrapperSizeConstructor(KEY_SIZE_DATA_TOGGLE[props.$size])};
`
const ToggleWrapperSizeConstructor = (props: IThemeSizePropertyToggle) => css`
  height: ${props.height}px;
  width: ${props.width}px;
  padding: ${props.padding}px;
  border-radius: 100px;
`

const ToggleCenterSize = css<StyledToggleProps>`
  ${props => ToggleCenterSizeConstructor(KEY_SIZE_DATA_TOGGLE[props.$size])};
`
const ToggleCenterSizeConstructor = (props: IThemeSizePropertyToggle) => css`
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

  ${addTransition};

  &:focus-visible {
    outline: 1px solid ${props => props.theme.states.focus};
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

  ${addError};
`

export const ToggleCenter = styled(motion.div)<StyledToggleProps>`
  ${ToggleCenterSize};
  ${addTransition};

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
