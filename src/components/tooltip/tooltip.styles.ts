import { motion } from 'framer-motion'
import styled from 'styled-components'

import { addTransition } from '@local/styles/base'

import { TooltipArrowProps, TooltipBoxProps } from '.'

export const TooltipContainer = styled.div`
  display: contents;
`

export const TooltipBox = styled(motion.div)<TooltipBoxProps>`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  width: auto;
  min-width: 0;

  padding: 8px;
  border-radius: 6px;

  background-color: ${props => props.theme.palette.grayPatricia};
  color: ${props => props.theme.palette.whiteStandard};

  white-space: ${props => props.$whiteSpace ?? 'normal'};
  max-width: ${props => props.$maxWidth ?? '300px'};
  max-height: ${props => props.$maxHeight ?? '200px'};

  opacity: ${props => (props.$visible ? '1' : '0')};
  ${addTransition};
`

export const TooltipArrow = styled.div<TooltipArrowProps>`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${props => (props.$visible ? '1' : '0')};
  ${addTransition};
`
