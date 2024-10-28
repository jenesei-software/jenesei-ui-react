import styled from 'styled-components'

import { DividerWrapperProps } from '.'

export const DividerWrapper = styled.div<DividerWrapperProps>`
  height: ${props => props.$height};
  width: ${props => props.$width || '100%'};
  background: ${props => props.theme.palette[props.$color]};
  border-radius: ${props => props.$radius || '0px'};
`
