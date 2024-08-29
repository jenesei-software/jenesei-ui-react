import styled, { css } from 'styled-components'

import { StyledInput } from '@components/input'

import { KEY_SIZE_DATA } from '@theme/theme'
import { IJeneseiThemeSize } from '@theme/theme.interface'

import {
  DateDropdownListProps,
  DateStyledInputProps,
  DateStyledListProps,
  DateWrapperProps,
} from '.'

export const DateWrapper = styled.div<DateWrapperProps>`
  width: ${(props) => props.$width ?? '100%'};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`

export const DateDropdownListParent = styled.div<DateStyledListProps>`
  outline: none;
  display: none;

  height: 0px;
  width: 100%;
  max-width: 360px;

  position: absolute;

  overflow: hidden;
  overflow-y: auto;

  margin: 0;
  padding: 0;
  margin-top: 6px;
  z-index: 1;

  box-sizing: border-box;
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
`

/****************************************** Size *************************************************/
export const dateDropdownListSize = css<DateDropdownListProps>`
  ${(props) =>
    props.$size && DateDropdownListSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const DateDropdownListSizeConstructor = (
  props: IJeneseiThemeSize,
) => css`
  padding: ${props.padding}px;
  border-radius: ${props.radius}px;
`

export const DateDropdownList = styled.div<DateDropdownListProps>`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: 6px;
  transform: translateZ(0);
  background: ${(props) =>
    props.theme.colors.input[props.$genre].background.rest};
  border: solid 2px
    ${(props) => props.theme.colors.input[props.$genre].border.rest};
  ${dateDropdownListSize}
`

export const DateDropdownDays = styled.div`
  display: grid;
  column-gap: auto;
  row-gap: auto;
`
export const DateDropdownDay = styled.div<{ $row: number; $column: number }>`
  grid-row: ${(props) => props.$row};
  grid-column: ${(props) => props.$column};
`

export const DateStyledInput = styled(StyledInput)<DateStyledInputProps>``
