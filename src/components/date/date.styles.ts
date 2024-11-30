import styled, { css } from 'styled-components'

import { InputIsInputEffect, StyledInput } from '@components/input'
import { getFontSizeStyles } from '@components/typography'

import { KEY_SIZE_DATA } from '@theme/theme'
import { IJeneseiThemeSize } from '@theme/theme.interface'

import {
  DateDropdownDayProps,
  DateDropdownListProps,
  DateStyledInputProps,
  DateStyledListProps,
  DateWrapperProps
} from '.'

export const DateWrapper = styled.div<DateWrapperProps>`
  width: ${props => props.$width ?? '100%'};
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
  max-width: 270px;

  position: absolute;

  overflow: hidden;
  overflow-y: auto;

  margin: 0;
  padding: 0;
  margin-top: 6px;

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
  ${props => props.$size && DateDropdownListSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const DateDropdownListSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding}px;
  border-radius: ${props.radius}px;
`

export const DateDropdownList = styled.div<DateDropdownListProps>`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-top: 6px;
  transform: translateZ(0);
  background: ${props => props.theme.colors.input[props.$genre].background.rest};
  border: solid 1px ${props => props.theme.colors.input[props.$genre].border.rest};
  ${dateDropdownListSize}
  ${InputIsInputEffect};
  justify-content: flex-start;
  gap: 10px;
`

export const DateDropdownDays = styled.div<{ $rows: number }>`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${props => props.$rows}, 28px);
  justify-content: space-between;
`

export const DateDropdownDaySize = css<DateDropdownDayProps>`
  ${props =>
    props.$size &&
    DateDropdownDaySizeConstructor({
      ...KEY_SIZE_DATA[props.$size]
    })};
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  background: ${props => props.theme.colors.date[props.$genre].background.rest};
  border-color: ${props => props.theme.colors.date[props.$genre].border.rest};
  color: ${props => props.theme.colors.date[props.$genre].color.rest};
  outline: 1px solid transparent;
  border: 1px solid transparent;
  grid-row: ${props => props.$row};
  grid-column: ${props => props.$column};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    ${props => css`
      background: ${props.theme.colors.date[props.$genre].background.hover};
      border-color: ${props.theme.colors.date[props.$genre].border.hover};
      color: ${props.theme.colors.date[props.$genre].color.hover};
    `}
  }
  transition:
    all ${props => props.theme.transition},
    outline 0s;

  ${props =>
    props.$isWeekend &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.weekend};
      border-color: ${props.theme.colors.date[props.$genre].border.weekend};
      color: ${props.theme.colors.date[props.$genre].color.weekend};
    `}
  ${props =>
    props.$isToday &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.today};
      border-color: ${props.theme.colors.date[props.$genre].border.today};
      color: ${props.theme.colors.date[props.$genre].color.today};
    `}
    ${props =>
    props.$isChoice &&
    css`
      background: ${props.theme.colors.date[props.$genre].background.choice};
      border-color: ${props.theme.colors.date[props.$genre].border.choice};
      color: ${props.theme.colors.date[props.$genre].color.choice};
    `}
    ${props =>
    !props.$isCurrentMonth &&
    css`
      opacity: 0.5;
    `}
  ${getFontSizeStyles(12, 700, 'Inter')}
`
export const DateDropdownDaySizeConstructor = (props: IJeneseiThemeSize) => css`
  border-radius: ${props.radius}px;
  ${getFontSizeStyles(12, 700, 'Inter')};
`

export const DateDropdownDay = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
`
export const DateDropdownDayOfWeek = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
  opacity: 1;
  background-color: transparent;
`
export const DateStyledInput = styled(StyledInput)<DateStyledInputProps>``
