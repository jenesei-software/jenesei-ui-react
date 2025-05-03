import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { addSX } from '@local/styles/sx'

import { StyledStackProps } from '.'

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  ${addSX}

  ${props =>
    props.$isHover &&
    css`
      transition:
        background-color ${props => props.theme.transition.default},
        outline 0s;
      &:hover {
        background-color: ${props => props.theme.palette.black05};
      }
    `}
`

export const StyledStackMotion = styled(motion.div)<StyledStackProps>`
  ${addSX}

  ${props =>
    props.$isHover &&
    css`
      transition:
        background-color ${props => props.theme.transition.default},
        outline 0s;
      &:hover {
        background-color: ${props => props.theme.palette.black05};
      }
    `}
`
