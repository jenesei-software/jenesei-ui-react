import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SliderImage = styled(motion.div)`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform, opacity;

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`

export const SliderDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  background-color: ${props => props.theme.palette.whiteStandard};
  border-radius: 5px;
  opacity: 0.8;
  cursor: pointer;
`
