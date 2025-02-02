import styled, { css } from 'styled-components'

import { addColorTransition } from '@local/styles/add'
import { FlexContainerAndItemAndBasic } from '@local/styles/base'
import { KEY_SIZE_DATA } from '@local/theme'

import { StyledLibraryIconIdItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconIdItemProps>`
  color: ${props => (props.$color ? props.theme.palette[props.$color] : 'inherit')};

  ${props => css`
    height: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};
    min-height: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};

    width: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};
    min-width: ${props.$size !== '100%' ? `${KEY_SIZE_DATA[props.$size].heightIcon}px` : '100%'};

    transform: rotate(${props.$turn || 0}deg);
  `}
  ${props =>
    props.$order ||
    css`
      order: ${props.$order};
    `};
  ${addColorTransition};
  & path {
    ${addColorTransition};
  }
  ${FlexContainerAndItemAndBasic};
`
