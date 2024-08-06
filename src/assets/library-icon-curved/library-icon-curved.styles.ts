import styled, { css } from 'styled-components'

import { FlexShortStyles } from '@components/flex'

import { KEY_SIZE_DATA } from '@theme/index'

import { StyledLibraryIconCurvedItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconCurvedItemProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
    width: ${KEY_SIZE_DATA[props.$size].heightIcon + 4}px;
  `}
  transition: all ${(props) => props.theme.transition};
  & path {
    transition: all ${(props) => props.theme.transition};
  }
  ${FlexShortStyles};
`
