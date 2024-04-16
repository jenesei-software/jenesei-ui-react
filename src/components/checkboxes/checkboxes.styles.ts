import styled, { css } from 'styled-components'

import { CheckboxesWrapperProps, fontInterWithSizeAndWeight } from '../../main'

/****************************************** Size *************************************************/
const CheckboxesSizeLarge = css<CheckboxesWrapperProps>`
  gap: 16px;
  ${fontInterWithSizeAndWeight(16, 600)};
`
const CheckboxesSizeMedium = css<CheckboxesWrapperProps>`
  gap: 12px;
  ${fontInterWithSizeAndWeight(14, 600)};
`
const CheckboxesSizeSmall = css<CheckboxesWrapperProps>`
  gap: 8px;
  ${fontInterWithSizeAndWeight(12, 600)};
`

/****************************************** Default *************************************************/
export const CheckboxesWrapper = styled.div<CheckboxesWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${(props) => props.$width ?? '100%'};
  ${(props) =>
    props.$size === 'large'
      ? CheckboxesSizeLarge
      : props.$size === 'medium'
        ? CheckboxesSizeMedium
        : CheckboxesSizeSmall};
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
