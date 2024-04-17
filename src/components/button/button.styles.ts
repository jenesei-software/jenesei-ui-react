import styled, { css } from 'styled-components'

import { StyledButtonProps } from '.'
import { fontInterWithSizeAndWeight } from '../../main'

/****************************************** Genre *************************************************/
const ButtonGenre = css<StyledButtonProps>`
  ${(props) => css`
    background: ${props.theme.colors.button[props.$genre][props.$genreType]
      .background.rest};
    border-color: ${props.theme.colors.button[props.$genre][props.$genreType]
      .border.rest};
    color: ${props.theme.colors.button[props.$genre][props.$genreType].color
      .rest};
    & span {
      color: ${props.theme.colors.button[props.$genre][props.$genreType].color
        .rest};
    }
    & path {
      stroke: ${props.theme.colors.button[props.$genre][props.$genreType].color
        .rest};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.focus};
      border-color: ${props.theme.colors.button[props.$genre][props.$genreType]
        .border.focus};
      background: ${props.theme.colors.button[props.$genre][props.$genreType]
        .background.focus};

      color: ${props.theme.colors.button[props.$genre][props.$genreType].color
        .focus};
      & span {
        color: ${props.theme.colors.button[props.$genre][props.$genreType].color
          .focus};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre][props.$genreType]
          .color.focus};
      }
    }
    &:hover {
      background: ${props.theme.colors.button[props.$genre][props.$genreType]
        .background.hover};
      border-color: ${props.theme.colors.button[props.$genre][props.$genreType]
        .border.hover};
      color: ${props.theme.colors.button[props.$genre][props.$genreType].color
        .hover};
      & span {
        color: ${props.theme.colors.button[props.$genre][props.$genreType].color
          .hover};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre][props.$genreType]
          .color.hover};
      }
    }
    ${props.$isActive &&
    css`
      background: ${props.theme.colors.button[props.$genre][props.$genreType]
        .background.active};
      border-color: ${props.theme.colors.button[props.$genre][props.$genreType]
        .border.active};
      color: ${props.theme.colors.button[props.$genre][props.$genreType].color
        .active};
      & span {
        color: ${props.theme.colors.button[props.$genre][props.$genreType].color
          .active};
      }
      & path {
        stroke: ${props.theme.colors.button[props.$genre][props.$genreType]
          .color.active};
      }
    `}
  `};
`

/****************************************** Disabled *************************************************/
const ButtonDisabled = css<StyledButtonProps>`
  ${(props) =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.button[props.$genre][
            props.$genreType
          ].background.rest} !important;

          color: ${props.theme.colors.button[props.$genre][props.$genreType]
            .color.rest} !important;
          & span {
            color: ${props.theme.colors.button[props.$genre][props.$genreType]
              .color.rest} !important;
          }
          & path {
            stroke: ${props.theme.colors.button[props.$genre][props.$genreType]
              .color.rest} !important;
          }
        `
      : css`
          opacity: 1;
        `}
`

/****************************************** Size *************************************************/
const ButtonSizeLarge = css<StyledButtonProps>`
  height: 56px;
  border-radius: 16px;
  gap: 8px;
  ${fontInterWithSizeAndWeight(16, 600)};
  padding: 0px 14px;
`

const ButtonSizeMedium = css<StyledButtonProps>`
  height: 38px;
  border-radius: 12px;
  gap: 6px;
  ${fontInterWithSizeAndWeight(14, 600)};
  padding: 0px 10px;
`

const ButtonSizeSmall = css<StyledButtonProps>`
  height: 30px;
  border-radius: 8px;
  gap: 4px;
  ${fontInterWithSizeAndWeight(12, 600)};
  padding: 0px 8px;
`

/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledButtonProps>`
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
  width: ${(props) => props.$width ?? '100%'};
  ${(props) =>
    props.$size === 'large'
      ? ButtonSizeLarge
      : props.$size === 'medium'
        ? ButtonSizeMedium
        : ButtonSizeSmall};
  ${ButtonGenre};
  ${ButtonDisabled};
`
