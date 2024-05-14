import styled, { css } from 'styled-components'

import {
  CheckboxesWrapperProps,
  IJeneseiThemeSizeData,
  KEY_SIZE_DATA,
  getFontStyles,
} from '../../main'

/****************************************** Size *************************************************/
export const CheckboxesSize = css<CheckboxesWrapperProps>`
  ${(props) => CheckboxesSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const CheckboxesSizeConstructor = (props: IJeneseiThemeSizeData) => css`
  gap: ${props.padding - 2}px;
  ${getFontStyles(props.font, 600, 'Inter')};
`

/****************************************** Default *************************************************/
export const CheckboxesWrapper = styled.div<CheckboxesWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${(props) => props.$width ?? '100%'};
  ${CheckboxesSize};
`

export const CheckboxesItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxesLabel = styled.div`
  user-select: none;
`

export const CheckboxChildren = styled.div`
  user-select: none;
`
