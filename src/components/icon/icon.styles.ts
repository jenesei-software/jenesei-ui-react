import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@local/styles/base'
import { KEY_SIZE_DATA } from '@local/theme'

import { StyledLibraryIconCurvedItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconCurvedItemProps>`
  ${props => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    min-height: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;

    width: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    min-width: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;

    transform: rotate(${props.$turn || 0}deg);
  `}
  ${props =>
    props.$order ||
    css`
      order: ${props.$order};
    `}
  transition: all ${props => props.theme.transition.default};
  & path {
    transition: all ${props => props.theme.transition.default};
  }
  ${FlexContainerAndItemAndBasic};
`
