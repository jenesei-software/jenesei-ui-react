import styled, { css } from 'styled-components'

import { StyledLibraryCheckboxesItemProps } from '.'
import { KEY_SIZE_DATA } from '../../main'

export const StyledCheckboxSVG = styled.svg<StyledLibraryCheckboxesItemProps>`
  ${(props) => css`
    height: ${KEY_SIZE_DATA[props.$size].height -
    KEY_SIZE_DATA[props.$size].padding * 2 -
    6}px;
    width: ${KEY_SIZE_DATA[props.$size].height -
    KEY_SIZE_DATA[props.$size].padding * 2 -
    6}px;
  `}
  transition: all 0.3s;
  & path {
    transition: all 0.3s;
  }
`
