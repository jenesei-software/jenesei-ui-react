import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { TooltipBoxProps } from '.'

export const TooltipContainer = styled.div`
  display: contents;
`

/****************************************** TooltipBox Size *************************************************/
export const addTooltipBoxSize = css<TooltipBoxProps>`
  ${props =>
    addTooltipBoxSizeConstructor({
      ...KEY_SIZE_DATA[props.$size ?? 'medium']
    })};
`
export const addTooltipBoxSizeConstructor = (props: IJeneseiThemeSize) => css`
  display: flex;
  border-radius: ${props.radius}px;
  padding: ${props.padding}px ${props.padding}px 0px ${props.padding}px;
  gap: ${props.padding - 2}px;
  :after {
    content: '';
    display: block;
    height: ${props.padding}px;
    width: 100%;
  }
`

/****************************************** TooltipBox *************************************************/
export const TooltipBox = styled(motion.div)<TooltipBoxProps>`
  position: absolute;
  z-index: 9999;
  width: auto;
  min-width: 0;

  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${props => props.theme.palette.grayPatricia};
  color: ${props => props.theme.palette.whiteStandard};
  box-shadow: ${props => props.theme.effects.button};
  white-space: ${props => props.$whiteSpace ?? 'normal'};
  max-width: ${props => props.$maxWidth ?? '300px'};
  max-height: ${props => props.$maxHeight ?? '200px'};
  ${addTooltipBoxSize};
`
