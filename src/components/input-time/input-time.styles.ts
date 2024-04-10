import styled, { css } from 'styled-components'

import { StyledInputDefaultCSS, StyledInputDefaultProps } from '../../main'
import { UIInputPlaceholder } from '../../main'
import { FontInterR16 } from '../../main'

export const InputTimeStyledInputDefault = styled.div<
  StyledInputDefaultProps & {
    $isPlaceholder?: boolean
    $isDisabled?: boolean
  }
>`
  width: 100%;
  ${StyledInputDefaultCSS};
  ${(props) =>
    !props.$isDisabled &&
    css`
      &:focus {
        border-radius: 16px 16px 0px 0px;
        & #input-time {
          display: flex;
          z-index: 1;
        }
      }
    `};

  ${(props) => props.$isPlaceholder && UIInputPlaceholder}
`

export const StyledInputTime = styled.div<
  Pick<StyledInputDefaultProps, '$isError'>
>`
  display: none;
  width: 100%;
  height: 112px;
  position: absolute;
  left: -2px;
  top: 40px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  border: 2px solid ${(props) => props.theme.colors.product[100]};
  background: ${(props) => props.theme.colors.gray.f8f8f8};
  & ::-webkit-scrollbar {
    height: 8px !important;
    width: 8px !important;
  }
  & ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray.f3f5f7};
  }

  & ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: ${(props) => props.theme.colors.gray.b7cbd7};
    border: 2px solid ${(props) => props.theme.colors.gray.f3f5f7} !important;
    background-clip: border-box;
  }
  ${(props) =>
    props.$isError &&
    css`
      border: 2px solid ${(props) => props.theme.colors.danger[100]};
    `}
  border-top: 0px;
  border-radius: 0px 0px 16px 16px;
  transition: border-color 0.2s;
`

export const StyledInputItems = styled.div`
  width: 50%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledInputItem = styled.div<{ $isChoice?: boolean }>`
  ${FontInterR16};
  width: 100%;
  height: 24px;
  min-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${(props) => props.theme.colors.product[20]};
  }
  ${(props) =>
    props.$isChoice &&
    css`
      color: ${(props) => props.theme.colors.product[100]};
    `}
`
