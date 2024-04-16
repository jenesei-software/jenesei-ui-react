import styled, { css } from 'styled-components'

import { StyledCheckboxProps } from '.'
import { LibraryCheckboxes, fontInterWithSizeAndWeight } from '../../main'

/****************************************** Size *************************************************/
const CheckboxSizeLarge = css<StyledCheckboxProps>`
  padding: 10px;
  border-radius: 22px;
  max-height: 42px;
  ${fontInterWithSizeAndWeight(16, 600)};
  & svg {
    height: 20px;
    width: 20px;
  }
`
const CheckboxSizeMedium = css<StyledCheckboxProps>`
  padding: 6px;
  border-radius: 18px;
  max-height: 31px;
  ${fontInterWithSizeAndWeight(14, 600)};
  & svg {
    height: 16px;
    width: 16px;
  }
`
const CheckboxSizeSmall = css<StyledCheckboxProps>`
  padding: 6px;
  border-radius: 16px;
  max-height: 29px;
  ${fontInterWithSizeAndWeight(12, 600)};
  & svg {
    height: 14px;
    width: 14px;
  }
`
/****************************************** Genre *************************************************/
export const CheckboxGenre = css<StyledCheckboxProps>`
  ${(props) => css`
    background: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
      .background.rest};
    border-color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
      .border.rest};
    color: ${props.theme.colors.checkbox[props.$genre][props.$genreType].color
      .rest};
    & span {
      color: ${props.theme.colors.checkbox[props.$genre][props.$genreType].color
        .rest};
    }
    &:focus-visible {
      outline: 2px solid ${props.theme.colors.focus};
      border-color: ${props.theme.colors.checkbox[props.$genre][
        props.$genreType
      ].border.focus};
      background: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
        .background.focus};
      color: ${props.theme.colors.checkbox[props.$genre][props.$genreType].color
        .focus};
      & span {
        color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
          .color.focus};
      }
    }
    &:hover {
      background: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
        .background.hover};
      border-color: ${props.theme.colors.checkbox[props.$genre][
        props.$genreType
      ].border.hover};
      color: ${props.theme.colors.checkbox[props.$genre][props.$genreType].color
        .hover};
      & span {
        color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
          .color.hover};
      }
    }
    ${props.$isActive &&
    css`
      background: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
        .background.active};
      border-color: ${props.theme.colors.checkbox[props.$genre][
        props.$genreType
      ].border.active};
      color: ${props.theme.colors.checkbox[props.$genre][props.$genreType].color
        .active};
      & span {
        color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
          .color.active};
      }
    `}
  `};
`
/****************************************** Disabled *************************************************/
const CheckboxDisabled = css<StyledCheckboxProps>`
  ${(props) =>
    props.$isDisabled
      ? css`
          opacity: 0.5;
          background: ${props.theme.colors.checkbox[props.$genre][
            props.$genreType
          ].background.rest} !important;
          border-color: ${props.theme.colors.checkbox[props.$genre][
            props.$genreType
          ].border.rest} !important;
          color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
            .color.rest} !important;
          & span {
            color: ${props.theme.colors.checkbox[props.$genre][props.$genreType]
              .color.rest} !important;
          }
        `
      : css`
          opacity: 1;
        `}
`

/****************************************** HiddenBorder *************************************************/
const CheckboxHiddenBorder = css<StyledCheckboxProps>`
  ${(props) =>
    props.$isHiddenBorder &&
    css`
      border-color: transparent !important;
    `}
`
/****************************************** Default *************************************************/
export const CheckboxWrapper = styled.button<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.$width ?? 'max-content'};
  gap: 10px;
  cursor: pointer;
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition: all 0.2s;
  & {
    user-select: none;
  }
  ${CheckboxGenre};
  ${(props) =>
    props.$size === 'large'
      ? CheckboxSizeLarge
      : props.$size === 'medium'
        ? CheckboxSizeMedium
        : CheckboxSizeSmall};
  ${CheckboxDisabled}
  ${CheckboxHiddenBorder};
`

/****************************************** Styled *************************************************/
export const StyledIconCircle = styled(
  LibraryCheckboxes.Radio,
)<StyledCheckboxProps>`
  & #check {
    fill: transparent;
  }
  & #uncheck {
    fill: ${(props) =>
      props.$isActive
        ? props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .active
        : props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .rest};
  }
`
export const StyledCheckedIconCircle = styled(
  LibraryCheckboxes.Radio,
)<StyledCheckboxProps>`
  & #check {
    fill: ${(props) =>
      props.$isActive
        ? props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .active
        : props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .rest};
  }
  & #uncheck {
    fill: transparent;
  }
`

export const StyledIconSquare = styled(
  LibraryCheckboxes.Square,
)<StyledCheckboxProps>`
  & #center {
    fill: transparent;
  }
  & #not-center {
    stroke: ${(props) =>
      props.$isActive
        ? props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .active
        : props.theme.colors.checkbox[props.$genre][props.$genreType].color
            .rest};
  }
  & #center-white {
    fill: transparent;
  }
`
export const StyledCheckedIconSquare = styled(
  LibraryCheckboxes.Square,
)<StyledCheckboxProps>`
  & #center {
    fill: ${(props) =>
      props.theme.colors.checkbox[props.$genre][props.$genreType].color.rest};
  }
  & #not-center {
    fill: transparent;
    stroke: ${(props) =>
      props.theme.colors.checkbox[props.$genre][props.$genreType].color.rest};
  }
  & #center-white {
    fill: ${(props) =>
      props.$genreType === 'primary'
        ? props.theme.colors.checkbox[props.$genre][props.$genreType].background
            .rest
        : props.theme.colors.white};
  }
`
