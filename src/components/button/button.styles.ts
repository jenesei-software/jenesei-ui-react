import styled, { css } from 'styled-components'

import { StyledButtonProps } from '.'
import { FontInterSB10, FontInterSB16, ModalLoading } from '../../main'

/****************************************** Genre *************************************************/
const ButtonGenrePrimary = css<StyledButtonProps>`
  background: ${(props) => props.$color};
  color: ${(props) => props.theme.colors.white['100']};
  border-color: transparent;
  & span {
    color: ${(props) => props.theme.colors.white['100']};
  }
  & path {
    stroke: ${(props) => props.theme.colors.white['100']};
  }
  &:focus-visible {
    border-color: ${(props) => props.theme.colors.visible.button.primary};
  }
`
const ButtonGenreSecondary = css<StyledButtonProps>`
  background: transparent;
  color: ${(props) => props.$color};
  border-color: ${(props) => props.$color};
  & span {
    color: ${(props) => props.$color};
  }
  & path {
    stroke: ${(props) => props.$color};
  }
  &:focus-visible {
    border-color: ${(props) => props.theme.colors.visible.button.secondary};
  }
`

/****************************************** Hidden *************************************************/
const ButtonHiddenTrue = css`
  opacity: 0.3;
`
const ButtonHiddenFalse = css`
  opacity: 1;
`

/****************************************** Size *************************************************/
const ButtonSizeLarge = css<StyledButtonProps>`
  height: 56px;
  border-radius: 16px;
  ${FontInterSB16};
  & svg {
    height: 20px;
    width: 20px;
  }
  padding: 0px 14px;
`
const ButtonSizeMedium = css<StyledButtonProps>`
  height: 36px;
  border-radius: 12px;
  ${FontInterSB10};
  & svg {
    height: 14px;
    width: 14px;
  }
  padding: 0px 8px;
`

/****************************************** Styled *************************************************/
export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: 2px solid;
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
  ${(props) => (props.$size === 'large' ? ButtonSizeLarge : ButtonSizeMedium)};
  ${(props) =>
    props.$genre === 'primary' ? ButtonGenrePrimary : ButtonGenreSecondary};
  ${(props) => (props.$isHidden ? ButtonHiddenTrue : ButtonHiddenFalse)};
`

export const StyledButtonStyledModalLoading = styled(
  ModalLoading,
)<StyledButtonProps>`
  & svg {
    ${(props) =>
      props.$size === 'large'
        ? css`
            height: 28px;
            width: 28px;
          `
        : css`
            height: 22px;
            width: 22px;
          `};
  }
`
