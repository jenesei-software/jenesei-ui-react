import styled, { css } from 'styled-components'

import { StyledLibraryIconItemProps } from '.'
import { FlexShortStyles } from '../../main'
import { KEY_SIZE_DATA } from '../../theme'

export const StyledSVG = styled.svg<StyledLibraryIconItemProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
    width: ${KEY_SIZE_DATA[props.$size].heightIcon}px;
  `}
  transition: all 0.3s;
  & path {
    transition: all 0.3s;
  }
  ${FlexShortStyles};
`
