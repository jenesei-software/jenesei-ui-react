import styled from 'styled-components'

import { SelectImageWrapperProps } from '.'

export const SelectImageWrapper = styled.div<SelectImageWrapperProps>`
  display: flex;
  width: ${props => props.$width || '100%'};
`
