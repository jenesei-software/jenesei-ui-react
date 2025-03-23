import styled, { css, keyframes } from 'styled-components'

import { Stack } from '@local/components/stack'
import { addTransition } from '@local/styles/add'

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
  background: transparent;

  ${props => css`
    ${!props.$visible &&
    css`
      ${props.$type === 'secondary'
        ? css`
            background: rgba(130, 130, 130, 0.4);
            background: linear-gradient(
              to right,
              rgba(130, 130, 130, 0.4) 8%,
              rgba(130, 130, 130, 0.5) 18%,
              rgba(130, 130, 130, 0.4) 33%
            );
          `
        : css`
            background: rgba(130, 130, 130, 0.2);
            background: linear-gradient(
              to right,
              rgba(130, 130, 130, 0.2) 8%,
              rgba(130, 130, 130, 0.3) 18%,
              rgba(130, 130, 130, 0.2) 33%
            );
          `}
      background-size: 800px 100px;
      animation: ${shimmer} 2s infinite ease-out;
    `}
  `}
  ${addTransition};
  & > * {
    opacity: ${props => (!props.$visible ? 0 : 1)};
    ${addTransition};
  }
`
