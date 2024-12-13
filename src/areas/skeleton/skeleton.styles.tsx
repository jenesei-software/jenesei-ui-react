import styled, { css, keyframes } from 'styled-components'

import { Stack } from '@local/components/stack'

import { StyledSkeletonProps } from '.'

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

export const StyledSkeleton = styled(Stack)<StyledSkeletonProps>`
  background: transition;
  transition: background ${props => props.theme.transition};

  ${props => css`
    ${props.$visible &&
    css`
      background: rgba(130, 130, 130, 0.2);
      background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
      );
      background-size: 800px 100px;
      animation: ${shimmer} 2s infinite ease-out;
    `}
  `}
  & > * {
    opacity: ${props => (props.$visible ? 0 : 1)};
    transition: opacity ${props => props.theme.transition};
  }
`
