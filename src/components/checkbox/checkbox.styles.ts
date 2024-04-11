import styled, { css } from 'styled-components'

import { StyledCheckboxProps } from '.'
import { LibraryCheckboxes, fontInterWithSizeAndWeight } from '../../main'

/****************************************** Size *************************************************/
const CheckboxSizeLarge = css<StyledCheckboxProps>`
  padding: 10px;
  border-radius: 22px;
  ${fontInterWithSizeAndWeight(16, 400)};
  & svg {
    height: 20px;
    width: 20px;
  }
`
const CheckboxSizeMedium = css<StyledCheckboxProps>`
  padding: 6px;
  border-radius: 16px;
  ${fontInterWithSizeAndWeight(12, 400)};
  & svg {
    height: 14px;
    width: 14px;
  }
`

/****************************************** Default *************************************************/
export const CheckboxWrapper = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.$width ?? 'max-content'};
  color: ${(props) => props.$color};
  gap: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.2s;
  & {
    user-select: none;
  }
  &:hover {
    background-color: ${(props) => `${props.$color}1a`};
  }
  &:focus-visible {
    background-color: ${(props) => `${props.$color}3a`};
  }
  &:active {
    background-color: ${(props) => `${props.$color}4a`};
  }
  ${(props) =>
    props.$size === 'large' ? CheckboxSizeLarge : CheckboxSizeMedium};
`

/****************************************** Styled *************************************************/
export const StyledIconCircle = styled(
  LibraryCheckboxes.Radio,
)<StyledCheckboxProps>`
  & #check {
    fill: transparent;
  }
  & #uncheck {
    fill: ${(props) => props.$color};
  }
`
export const StyledCheckedIconCircle = styled(
  LibraryCheckboxes.Radio,
)<StyledCheckboxProps>`
  & #check {
    fill: ${(props) => props.$color};
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
    stroke: ${(props) => props.$color};
  }
  & #center-white {
    fill: transparent;
  }
`
export const StyledCheckedIconSquare = styled(
  LibraryCheckboxes.Square,
)<StyledCheckboxProps>`
  & #center {
    fill: ${(props) => props.$color};
  }
  & #not-center {
    fill: transparent;
    stroke: ${(props) => props.$color};
  }
  & #center-white {
    fill: ${(props) => props.theme.colors.white['100']};
  }
`
