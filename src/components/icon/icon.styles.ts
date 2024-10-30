import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@components/flex'

import { KEY_SIZE_DATA } from '@theme/index'

import { StyledLibraryIconCurvedItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconCurvedItemProps>`
  ${props => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    width: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    transform: rotate(${props.$turn || 0}deg);
  `}
  ${props =>
    props.$order ||
    css`
      order: ${props.$order};
    `}
  transition: all ${props => props.theme.transition};
  & path {
    transition: all ${props => props.theme.transition};
  }
  ${FlexContainerAndItemAndBasic};
`
