import styled from 'styled-components'

import { CheckboxesWrapperProps } from '../../main'

/****************************************** Default *************************************************/
export const CheckboxesWrapper = styled.div<CheckboxesWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  width: ${(props) => props.$width ?? '100%'};
`

export const CheckboxesItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxesLabel = styled.div`
  user-select: none;
`
