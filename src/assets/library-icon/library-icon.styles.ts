import styled, { css } from 'styled-components'

import { FlexShortStyles } from '@components/flex'

import { KEY_SIZE_DATA } from '@theme/index'

import { StyledLibraryIconItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconItemProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
    width: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
  `}
  transition: all ${(props) => props.theme.transition};
  & path {
    transition: all ${(props) => props.theme.transition};
  }
  ${FlexShortStyles};
`
