import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { InputIsInputEffect, StyledInputPattern } from '@local/components/input'
import { getFontSizeStyles } from '@local/components/typography'
import { addOutline, addRemoveScrollbar, addTransition } from '@local/styles/add'
import { addSX } from '@local/styles/sx'
import { KEY_SIZE_DATA } from '@local/theme/theme'
import { IJeneseiThemeSize } from '@local/theme/theme.interface'

import {
  DateDropdownDayProps,
  DateDropdownListProps,
  DateStyledInputProps,
  DateStyledListProps,
  DateWrapperProps
} from '.'

export const DateWrapper = styled.div<DateWrapperProps>`
  width: 100%;
  position: relative;
  ${addSX};
`

export const DateDropdownListParent = styled(motion.div)<DateStyledListProps>`
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

  ${addRemoveScrollbar};
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
  ${addTransition};

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
  ${params => getFontSizeStyles(12, 700, params.theme.font.family)};

  ${addOutline};
`
export const DateDropdownDaySizeConstructor = (props: IJeneseiThemeSize) => css`
  border-radius: ${props.radius}px;
  ${params => getFontSizeStyles(12, 700, params.theme.font.family)};
`

export const DateDropdownDay = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
`
export const DateDropdownDayOfWeek = styled.button<DateDropdownDayProps>`
  ${DateDropdownDaySize}
  opacity: 1;
  background-color: transparent;
`
export const DateStyledInput = styled(StyledInputPattern)<DateStyledInputProps>``
