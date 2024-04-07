import { StyledCheckboxProps } from '.'
import { FontInterR12, FontInterR16, LibraryCheckboxes } from '../../main'
import styled, { css } from 'styled-components'

const StyledCheckboxSizeLarge = css<StyledCheckboxProps>`
  padding: 10px;
  border-radius: 22px;
  ${FontInterR16};
  & svg {
    height: 20px;
    width: 20px;
  }
`
const StyledCheckboxSizeMedium = css<StyledCheckboxProps>`
  padding: 6px;
  border-radius: 16px;
  ${FontInterR12};
  & svg {
    height: 14px;
    width: 14px;
  }
`

export const StyledCheckboxWrapper = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.$width ?? 'max-content'};
  color: ${(props) => props.$color};
  gap: 5px;
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
    props.$size === 'large'
      ? StyledCheckboxSizeLarge
      : StyledCheckboxSizeMedium};
`

export const StyledIconCircle = styled(
  LibraryCheckboxes.Radio
)<StyledCheckboxProps>`
  & #check {
    fill: transparent;
  }
  & #uncheck {
    fill: ${(props) => props.$color};
  }
`
export const StyledCheckedIconCircle = styled(
  LibraryCheckboxes.Radio
)<StyledCheckboxProps>`
  & #check {
    fill: ${(props) => props.$color};
  }
  & #uncheck {
    fill: transparent;
  }
`

export const StyledIconSquare = styled(
  LibraryCheckboxes.Square
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
  LibraryCheckboxes.Square
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
