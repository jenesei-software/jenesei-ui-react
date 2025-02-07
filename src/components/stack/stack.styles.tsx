import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@local/styles/base'

import { StyledStackProps } from '.'

export const StyledStack = styled.div<StyledStackProps>`
  ${FlexContainerAndItemAndBasic}

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
  ${FlexContainerAndItemAndBasic}

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
