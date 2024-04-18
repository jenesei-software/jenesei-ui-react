import styled, { css } from 'styled-components'

import { StyledLibraryCheckboxesItemProps } from '.'

export const StyledCheckboxSVG = styled.svg<StyledLibraryCheckboxesItemProps>`
  ${(props) =>
    props.$size === 'large'
      ? css`
          height: 20px;
          width: 20px;
        `
      : props.$size === 'medium'
        ? css`
            height: 14px;
            width: 14px;
          `
        : props.$size === 'small'
          ? css`
              height: 10px;
              width: 10px;
            `
          : null}
`
