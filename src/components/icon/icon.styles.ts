import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@local/styles/base'
import { KEY_SIZE_DATA } from '@local/theme'

import { StyledLibraryIconIdItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconIdItemProps>`
  ${props => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
    min-height: ${KEY_SIZE_DATA[props.$size].heightIcon}px;

    width: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
    min-width: ${KEY_SIZE_DATA[props.$size].heightIcon}px;

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
