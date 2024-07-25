import styled, { css } from 'styled-components'

import { StyledInput, StyledInputCSS } from '@components/input'

import {
  SelectStyledFooterProps,
  SelectStyledInputProps,
  SelectStyledListProps,
  SelectStyledOptionProps,
  SelectWrapperProps,
} from '.'

export const SelectWrapper = styled.div<SelectWrapperProps>`
  width: ${(props) => props.$width ?? '100%'};
  position: relative;
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
  z-index: 1;

  box-sizing: border-box;

  background: ${(props) =>
    props.theme.colors.input[props.$genre].background.rest};
  border: 2px solid
    ${(props) => props.theme.colors.input[props.$genre].border.rest};
  border-top: 0px !important;

  ${(props) =>
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
    `}
`

export const DropdownList = styled.ul`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
`

export const DropdownOption = styled.li<SelectStyledOptionProps>`
  ${StyledInputCSS};
  display: flex;
  align-items: center;
  border-radius: 0;
  opacity: 1;
  border: 0px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelectedItem &&
    props.theme.colors.input[props.$genre]?.background.active};
  padding-left: ${(props) => props.$isCheckboxProps && `0px`};
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
  &:active {
    background: ${(props) =>
      props.theme.colors.input[props.$genre].background.rest};
  }
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

export const SelectStyledInput = styled(StyledInput)<SelectStyledInputProps>``
