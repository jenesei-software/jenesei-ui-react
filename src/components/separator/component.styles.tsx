import styled from 'styled-components'

import { addSX } from '@local/styles/sx'

import { SeparatorWrapperProps } from '.'

const DEFAULT_SEPARATOR_SIZE = '1px'

export const SeparatorWrapper = styled.div<SeparatorWrapperProps>`
  height: ${props => (props.$type === 'horizontal' ? DEFAULT_SEPARATOR_SIZE : '100%')};
  width: ${props => (props.$type === 'vertical' ? DEFAULT_SEPARATOR_SIZE : '100%')};
  background: ${props => props.$color && props.theme.palette[props.$color]};
  border-radius: ${props => props.$radius || '0px'};
  ${addSX};
`
