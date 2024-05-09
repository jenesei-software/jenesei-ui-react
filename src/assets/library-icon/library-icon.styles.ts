import styled, { css } from 'styled-components'

import { StyledLibraryIconItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconItemProps>`
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
              : null};
  transition: all 0.3s;
  & > {
    transition: all 0.3s;
  }
`
