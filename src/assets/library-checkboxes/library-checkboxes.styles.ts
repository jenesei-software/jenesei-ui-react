import styled, { css } from 'styled-components'

import { KEY_SIZE_DATA } from '@theme/index'

import { StyledLibraryCheckboxesItemProps } from '.'

export const StyledCheckboxSVG = styled.svg<StyledLibraryCheckboxesItemProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    width: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
  `}
  transition: all ${(props) => props.theme.transition};
  & path {
    transition: all ${(props) => props.theme.transition};
  }
`
