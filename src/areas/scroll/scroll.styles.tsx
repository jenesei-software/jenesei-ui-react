import styled, { css } from 'styled-components'

import { Stack } from '@local/components/stack'

import { StyledScrollProps } from '.'

export const StyledScroll = styled(Stack)<StyledScrollProps>`
  overflow-x: hidden;
  overflow-y: hidden;

  ${props => css`
    ${props.$horizontal &&
    css`
      overflow-x: auto;
    `}

    ${props.$vertical &&
    css`
      overflow-y: auto;
    `}

    ${props.$isAlwaysHorizontal &&
    css`
      overflow-x: scroll;
    `}

    ${props.$isAlwaysVertical &&
    css`
      overflow-y: scroll;
    `}
  `}
`
