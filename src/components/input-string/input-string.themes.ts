import { FontInterR16 } from '../../fonts'
import { JeneseiTheme } from '../../theme'
import { css } from 'styled-components'

/****************************************** Theme Cloud *************************************************/
export const ThemeCloudInputStringPlaceholder = css`
  &::placeholder {
    color: ${JeneseiTheme.colors.black['40']};
    font-weight: 700;
    opacity: 1;
  }
  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${JeneseiTheme.colors.black['40']};
  }
`
export const ThemeCloudInputString = css`
  ${FontInterR16};
  ${ThemeCloudInputStringPlaceholder};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${JeneseiTheme.colors.black['60']};
  background: ${JeneseiTheme.colors.white[100]};
  color: ${JeneseiTheme.colors.black['80']};
  box-shadow: ${JeneseiTheme.effects.input.default};
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${JeneseiTheme.colors.black['100']};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`
