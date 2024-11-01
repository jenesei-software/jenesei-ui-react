import styled from 'styled-components'

import { SeparatorWrapperProps } from '.'

export const SeparatorWrapper = styled.div<SeparatorWrapperProps>`
  height: ${props => props.$height};
  width: ${props => props.$width || '100%'};
  background: ${props => props.theme.palette[props.$color]};
  border-radius: ${props => props.$radius || '0px'};
`
