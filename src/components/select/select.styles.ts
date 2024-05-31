import styled, { css } from 'styled-components'

import {
  SelectStyledInputProps,
  SelectStyledOptionProps,
  SelectWrapperProps,
} from '.'
import { StyledInput, StyledInputCSS } from '../input'

export const SelectWrapper = styled.div<SelectWrapperProps>`
  width: ${(props) => props.$width ?? '100%'};
  position: relative;
`

export const DropdownList = styled.ul<{
  $genre: SelectStyledInputProps['$genre']
  $isShowScroll?: boolean
}>`
  outline: none;
  display: none;
  height: 0px;

  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.white};
  border: 2px solid
    ${(props) => props.theme.colors.input[props.$genre].border.rest};
  border-top: 0px !important;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;

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

export const DropdownOption = styled.li<SelectStyledOptionProps>`
  ${StyledInputCSS};
  display: flex;
  align-items: center;
  border-radius: 0;
  opacity: 0;
  border: 0px;
  cursor: pointer;
  background-color: ${(props) => props.$isSelectedItem && `#fff`};
  padding-left: ${(props) => props.$isCheckboxProps && `0px`};
`

export const SelectStyledInput = styled(StyledInput)<SelectStyledInputProps>``
