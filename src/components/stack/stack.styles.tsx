import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@local/styles/base'

import { StyledStackProps } from '.'

export const StyledStack = styled.div<StyledStackProps>`
  ${FlexContainerAndItemAndBasic}

  ${props =>
    props.$isHover &&
    css`
      border-radius: 4px;
      transition:
        background-color ${props => props.theme.transition},
        outline 0s;
      &:hover {
        background-color: ${props => props.theme.palette.black05};
      }
    `}
`
