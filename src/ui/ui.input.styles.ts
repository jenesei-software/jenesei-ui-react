import { StyledUIInputDefaultProps } from '../main'
import { FontInterM16, FontInterR16 } from '../main'
import styled, { css } from 'styled-components'

export type TInputGenre = 'auth' | 'user' | 'user-min'
// | 'agreements'
// | 'input'
// | 'objects-edit'

export const UIInputLeftContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  left: 12px;
`

export const UIInputLine = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e3e3e6;
`

export const UIInputIcon = styled.div`
  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  & svg {
    width: 19px;
    height: 19px;
    & path {
    }
  }
`
export const UIInputPlaceholder = css`
  ${FontInterR16};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  opacity: 1;
  line-height: 24px;
`
export const UIInputPlaceholderPhone = css`
  ${FontInterM16};
  color: ${(props) => props.theme.colors.gray['cccccc']};
  opacity: 1;
  line-height: 24px;
`
export const UIInputAuth = css<Pick<StyledUIInputDefaultProps, '$isFocus'>>`
  ${FontInterR16};
  padding: 0px 12px 0px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 52px;
  min-height: 52px;
  max-height: 52px;
  line-height: 24px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 16px;
  border: none;
  outline: 2px solid ${(props) => props.theme.colors.gray.e3e3e6};
  transition: outline-color 0.2s;
  background: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &::placeholder {
    ${UIInputPlaceholder}
  }

  &::-ms-input-placeholder {
    ${UIInputPlaceholder}
  }
  &:focus,
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.product[100]};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
  ${(props) =>
    props.$isFocus &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.product[100]};
    `};
  ${(props) =>
    props.$isFocus === false &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.gray.e3e3e6} !important;
    `}
`

export const UIInputUser = css<Pick<StyledUIInputDefaultProps, '$isFocus'>>`
  ${UIInputAuth};
  outline: 2px solid transparent;
  padding: 0px 24px 0px 24px;
  color: ${(props) => props.theme.colors.gray['1f1f1f']};
  background: ${(props) => props.theme.colors.gray.f8f8f8};
  ${(props) =>
    props.$isFocus &&
    css`
      outline: 2px solid ${(props) => props.theme.colors.product[100]};
    `}
  ${(props) =>
    props.$isFocus === false &&
    css`
      outline: 2px solid transparent !important;
    `}
`

export const UIInputUserMin = css<Pick<StyledUIInputDefaultProps, '$isFocus'>>`
  ${UIInputUser};
  padding: 0px 16px 0px 16px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 16px;
`
