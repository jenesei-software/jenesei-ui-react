import { StyledButtonProps } from '.'
import { FontInterSB10, FontInterSB16 } from '../../main'
import styled, { css } from 'styled-components'

const StyledButtonGenrePrimary = css<StyledButtonProps>`
  background: ${(props) => props.$color};
  color: ${(props) => props.theme.colors.white['100']};
  border: 2px solid transparent;
  & span {
    color: ${(props) => props.theme.colors.white['100']};
  }
  & path {
    stroke: ${(props) => props.theme.colors.white['100']};
  }
`
const StyledButtonGenreSecondary = css<StyledButtonProps>`
  background: transparent;
  color: ${(props) => props.$color};
  border: 2px solid ${(props) => props.$color};
  & span {
    color: ${(props) => props.$color};
  }
  & path {
    stroke: ${(props) => props.$color};
  }
`

const StyledButtonHiddenTrue = css`
  opacity: 0.3;
`
const StyledButtonHiddenFalse = css`
  opacity: 1;
`

const StyledButtonSizeLarge = css<StyledButtonProps>`
  height: 56px;
  border-radius: 16px;
  ${FontInterSB16};
  & svg {
    height: 20px;
    width: 20px;
  }
  padding: 0px 14px;
`
const StyledButtonSizeMedium = css<StyledButtonProps>`
  height: 36px;
  border-radius: 12px;
  ${FontInterSB10};
  & svg {
    height: 14px;
    width: 14px;
  }
  padding: 0px 8px;
`

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;
  width: ${(props) => props.$width ?? '100%'};
  ${(props) =>
    props.$size === 'large' ? StyledButtonSizeLarge : StyledButtonSizeMedium};
  ${(props) =>
    props.$genre === 'primary'
      ? StyledButtonGenrePrimary
      : StyledButtonGenreSecondary};
  ${(props) =>
    props.$isHidden ? StyledButtonHiddenTrue : StyledButtonHiddenFalse};
`
