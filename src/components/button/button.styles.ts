import styled, { css } from 'styled-components'

import { StyledButtonProps } from '.'
import { getFontStyles } from '../../main'

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
    props.$isDisabled || props.$isHidden
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
  gap: 12px;
  ${getFontStyles(16, 600, 'Inter')};
  padding: 0px 14px;
`

const ButtonSizeLargeMedium = css<StyledButtonProps>`
  height: 49px;
  border-radius: 14px;
  gap: 10px;
  ${getFontStyles(14, 600, 'Inter')};
  padding: 0px 12px;
`

const ButtonSizeMedium = css<StyledButtonProps>`
  height: 42px;
  border-radius: 12px;
  gap: 8px;
  ${getFontStyles(12, 600, 'Inter')};
  padding: 0px 10px;
`

const ButtonSizeMediumSmall = css<StyledButtonProps>`
  height: 35px;
  border-radius: 10px;
  gap: 6px;
  ${getFontStyles(10, 600, 'Inter')};
  padding: 0px 8px;
`

const ButtonSizeSmall = css<StyledButtonProps>`
  height: 28px;
  border-radius: 8px;
  gap: 4px;
  ${getFontStyles(8, 600, 'Inter')};
  padding: 0px 6px;
`

/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledButtonProps>`
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition: all 0.3s;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) =>
    props.$size === 'large'
      ? ButtonSizeLarge
      : props.$size === 'medium'
        ? ButtonSizeMedium
        : props.$size === 'largeMedium'
          ? ButtonSizeLargeMedium
          : props.$size === 'mediumSmall'
            ? ButtonSizeMediumSmall
            : props.$size === 'small'
              ? ButtonSizeSmall
              : ButtonSizeLarge};

  font-family: ${(props) => props.$customFontFamily};
  font-size: ${(props) => props.$customFontSize};
  font-weight: ${(props) => props.$customFontWeight};
  width: ${(props) => props.$width ?? 'max-content'};
  min-width: ${(props) => props.$width ?? 'max-content'};

  ${ButtonGenre};
  ${ButtonDisabled};
`
