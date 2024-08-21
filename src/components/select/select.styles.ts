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
  --scrollbar-width: 16px;
  --scrollbar-background: ${(props) =>
    props.theme.colors.input[props.$genre].background.rest};
  --scrollbar-thumb-background: ${(props) =>
    props.theme.colors.input[props.$genre].color.rest};
  --scrollbar-thumb-border: 4px solid
    ${(props) => props.theme.colors.input[props.$genre].background.rest};

  width: ${(props) => props.$width ?? '100%'};
  position: relative;

  &:focus-within {
    &:after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      border: 2px ${(props) => props.theme.colors.focus} solid;
      border-radius: ${(props) => `${props.$radius + 1}px`};
      pointer-events: none;
      z-index: 10;
      height: calc(100% + ${(props) => `${props.$parentListHeight}px`});
    }
  }
  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
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
  border: solid 2px
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
  display: flex;
  align-items: center;
  border-radius: 0;
  opacity: 1;
  border: 0px;
  cursor: pointer;
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
  outline: none !important;
`
