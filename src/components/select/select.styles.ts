import styled, { css } from 'styled-components'

import { StyledInput, StyledInputCSS } from '@local/components/input'
import { IJeneseiThemeSize } from '@local/theme'
import { KEY_SIZE_DATA } from '@local/theme/theme'

import {
  SelectStyledFooterProps,
  SelectStyledInputProps,
  SelectStyledListProps,
  SelectStyledOptionProps,
  SelectWrapperProps
} from '.'

export const SelectWrapper = styled.div<SelectWrapperProps>`
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.input[props.$genre].background.rest};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.input[props.$genre].color.rest};
    border: 4px solid ${props => props.theme.colors.input[props.$genre].background.rest};
    background-clip: padding-box;
  }

  width: ${props => props.$width ?? '100%'};
  position: relative;

  ${props =>
    !props.$isDisabled &&
    css`
      &:focus-within {
        &:after {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          bottom: -1px;
          right: -1px;
          border: 1px ${props.theme.colors.focus} solid;
          border-radius: ${`${props.$radius + 1}px`};
          pointer-events: none;
          height: calc(100% + var(--after-height));
        }
      }
    `}

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`

export const DropdownListParentSize = css<SelectStyledListProps>`
  ${props => props.$size && DropdownListParentSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const DropdownListParentSizeConstructor = (props: IJeneseiThemeSize) => css`
  border-radius: 0px 0px ${props.radius}px ${props.radius}px;
`

export const DropdownListParent = styled.div<SelectStyledListProps>`
  outline: none;
  display: none;

  height: 0px;
  width: 100%;

  position: absolute;

  overflow: hidden;
  overflow-y: auto;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  background: ${props => props.theme.colors.input[props.$genre].background.rest};
  border: solid 1px ${props => props.theme.colors.input[props.$genre].border.rest};
  border-top: 0px !important;
  ${DropdownListParentSize};
  ${props =>
    !props.$isShowScroll &&
    css`
      &::-webkit-scrollbar {
        display: none;
      }

      &::-webkit-scrollbar-horizontal {
        display: none;
      }

      &::-webkit-scrollbar-vertical {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }
    `};
`

export const DropdownList = styled.ul`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;

  transform: translateZ(0);
`

export const DropdownOption = styled.li<SelectStyledOptionProps>`
  ${StyledInputCSS};
  border: 0px;
  display: flex;
  align-items: center;
  border-radius: 0;
  opacity: 1;
  border: 0px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`

export const DropdownOptionHoverAndCheckedSize = css<SelectStyledOptionProps>`
  ${props => DropdownOptionHoverAndCheckedSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const DropdownOptionHoverAndCheckedSizeConstructor = (props: IJeneseiThemeSize) => css`
  width: calc(100% - ${props.padding - 6}px);
  height: calc(100% - ${props.padding - 8}px);
  border-radius: ${props.radius}px;
`

export const DropdownOptionHoverAndChecked = styled.div<SelectStyledOptionProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  ${DropdownOptionHoverAndCheckedSize};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  &:hover {
    background: ${props => props.theme.colors.select[props.$genre].background.select};
    color: ${props => props.theme.colors.select[props.$genre].color.select};
    & span {
      color: ${props => props.theme.colors.select[props.$genre].color.select};
    }
    & path {
      ${props =>
        !props.$isCustomIcon &&
        css`
          fill: ${props.theme.colors.select[props.$genre].color.select};
        `}
    }
  }
  ${props =>
    props.$checked &&
    css`
      background: ${props.theme.colors.select[props.$genre].background.select};
      border-color: ${props.theme.colors.select[props.$genre].border.select};
      color: ${props.theme.colors.select[props.$genre].color.select};
      & span {
        color: ${props.theme.colors.select[props.$genre].color.select};
      }
      & path {
        ${!props.$isCustomIcon &&
        css`
          fill: ${props.theme.colors.select[props.$genre].color.select};
        `}
      }
    `}
`

export const DropdownFooter = styled.li<SelectStyledFooterProps>`
  ${StyledInputCSS};
  display: flex;
  align-items: center;
  border-radius: 0;
  opacity: 1;
  border: 0px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  padding: 0px;
  flex-shrink: 0;
  margin-top: auto;
`

export const DropdownErase = styled.div`
  margin-left: auto;
  height: 100%;
`

export const DropdownSelectAll = styled.div`
  margin-right: auto;
  height: 100%;
`

export const SelectStyledInput = styled(StyledInput)<SelectStyledInputProps>`
  ${props =>
    !props.$isError &&
    css`
      outline: none !important;
    `}
`
