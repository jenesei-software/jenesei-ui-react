import { motion } from 'framer-motion'
import styled from 'styled-components'

import { addOutline } from '@local/styles/add'

import { DialogElementWrapperProps, DialogLayoutProps } from '.'

export const DialogLayout = styled(motion.div)<DialogLayoutProps>`
  position: fixed;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.palette.black50};
  z-index: ${props => props.$zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const DialogElementWrapper = styled(motion.dialog)<DialogElementWrapperProps>`
  ${addOutline};
  max-width: ${props => props.$maxWidth};
  max-height: ${props => props.$maxHeight};
  border-radius: ${props => props.$borderRadius};
  background: ${props => props.$background && props.theme.palette[props.$background]};
  padding: ${props => props.$padding};
  width: max-content;
  height: max-content;
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`
export const DialogContent = styled(motion.div)``
