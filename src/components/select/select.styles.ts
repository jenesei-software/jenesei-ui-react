import styled, { css } from 'styled-components'

import { StyledSelectWrapperProps } from '.'
import {
  IJeneseiThemeSizeData,
  InputDefaultPlaceholder,
  KEY_SIZE_DATA,
  getFontStyles,
} from '../../main'

export const StyledSelectIsError = css<StyledSelectWrapperProps>`
  ${(props) =>
    props.$isError &&
    css`
      & .input-select__control--menu-is-open,
      & .input-select__control,
      & .input-select__menu {
        border-color: ${(props) => props.theme.colors.danger} !important;
      }
    `}
`

/****************************************** Size *************************************************/
export const StyledSelectSize = css<StyledSelectWrapperProps>`
  ${(props) => StyledSelectSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const StyledSelectSizeConstructor = (
  props: IJeneseiThemeSizeData,
) => css`
  & .input-select__control {
    border-radius: ${props.radius}px;
    height: ${props.height}px;
    min-height: ${props.height}px;
    max-height: ${props.height}px;
  }

  & .input-select__value-container {
    padding: 2px ${props.padding}px;
  }

  & .input-select__indicator {
    padding-right: ${props.padding}px;
  }

  & .input-select__control--menu-is-open {
    border-radius: ${props.radius}px ${props.radius}px 0px 0px;
  }

  & .input-select__menu {
    border-radius: 0px 0px ${props.radius}px ${props.radius}px;
  }
  & .input-select__menu-portal {
    top: 54px;
  }
  & .input-select__menu-list {
    padding-bottom: ${props.height * 0.2}px;
  }
  & .input-select__option {
    height: ${props.height - 6}px;
    padding-left: 8px;
  }
`

export const StyledSelectStyleUser = css<StyledSelectWrapperProps>`
  & .input-select__control {
    background: #f8f8f8;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid transparent;
    }
  }

  & .input-select__input-container,
  & .input-select__single-value {
    color: #1f1f1f;
  }
  & .input-select__control--menu-is-open {
    background: #f8f8f8;
    border: 2px solid ${(props) => props.theme.colors.focus};
    border-bottom: 2px solid transparent;
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.focus};
      border-bottom: 2px solid transparent;
    }
  }
  & .input-select__menu {
    background-color: #f8f8f8;
    border: 2px solid ${(props) => props.theme.colors.focus};
    border-top: 0px solid transparent;
  }
  & .input-select__option {
    color: #1f1f1f;
    &:hover {
      /* background-color: #1f1f1f; */
    }
  }
`

export const StyledSelectWrapper = styled.div<StyledSelectWrapperProps>`
  width: 100%;
  & .input-select__control--menu-is-open,
  & .input-select__control--is-focused {
    box-shadow: none;
  }
  & .input-select__input-container,
  & .input-select__single-value {
    ${getFontStyles(16, 600, 'Inter')};
  }
  & .input-select__menu {
    margin: 0px;
    margin-top: -2px;
    box-shadow: none;
    overflow: hidden;
    z-index: 5;
  }
  & .input-select__option {
    ${getFontStyles(16, 600, 'Inter')};
    display: flex;
    align-items: center;
    padding: 0;
  }
  & .input-select__value-container {
    height: 100%;
    ${(props) =>
      props.$isCustomPlaceholder &&
      css`
        padding: 0px !important;
      `}
  }
  & .input-select__placeholder {
    ${InputDefaultPlaceholder};
  }
  & .input-select__indicator-separator {
    background-color: transparent;
  }
  & .input-select__option--is-focused {
    background-color: transparent;
  }
  & .input-select__option--is-selected {
    background-color: transparent;
  }
  & .input-select__indicator {
    /* color: black !important; */
    visibility: ${(props) => (props.$isHideArrow ? 'hidden' : 'visible')};
  }
  & .input-select__value-container--is-multi {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start !important;
  }
  & .input-select__multi-value {
    min-width: min-content;
    background-color: transparent;
    margin: 0px;
    &:last-of-type {
      cursor: pointer;
      & .input-select__multi-value__label {
        & span {
          display: none;
        }
      }
    }
  }
  & .input-select__multi-value__remove {
    display: none;
  }
  & .input-select__multi-value__label {
    ${getFontStyles(16, 600, 'Inter')};
    padding: 2px;
    color: #1f1f1f;
  }
  & .input-select__option--is-isDisabled {
    opacity: 0.5;
  }
  & .input-select__control {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    &:hover {
      border: 2px solid transparent;
    }
  }
  & .input-select__menu-portal {
    left: auto;
    z-index: 5;
  }
  & .input-select__menu-list {
    padding: 0;
  }

  ${StyledSelectStyleUser};
  ${StyledSelectIsError};

  ${StyledSelectSize};
`

export const StyledSelectStyledSpanRobotoR16 = styled.span`
  ${getFontStyles(16, 600, 'Inter')};
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  width: -webkit-fill-available;
`

export const UserMultiValueLabelComma = styled.span`
  ${getFontStyles(16, 600, 'Inter')};
`
