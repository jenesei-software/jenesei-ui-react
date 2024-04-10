import styled from 'styled-components'

import { FontInterR16 } from '../../main'

/****************************************** Default *************************************************/
export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
`

export const CheckboxesItem = styled.div<{
  $checked: boolean
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxesLabel = styled.div`
  ${FontInterR16};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  user-select: none;
`
