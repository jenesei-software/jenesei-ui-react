import styled, { css } from 'styled-components'

import { StyledLibraryCheckboxesItemProps } from '.'

export const StyledCheckboxSVG = styled.svg<StyledLibraryCheckboxesItemProps>`
  ${(props) =>
    props.$size === 'large'
      ? css`
          height: 22px;
          width: 22px;
        `
      : props.$size === 'largeMedium'
        ? css`
            height: 19px;
            width: 19px;
          `
        : props.$size === 'medium'
          ? css`
              height: 16px;
              width: 16px;
            `
          : props.$size === 'mediumSmall'
            ? css`
                height: 13px;
                width: 13px;
              `
            : props.$size === 'small'
              ? css`
                  height: 10px;
                  width: 10px;
                `
              : null}
`
