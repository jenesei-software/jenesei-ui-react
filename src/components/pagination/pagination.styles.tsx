import styled from 'styled-components'

import { addTransition } from '@local/styles/add'

import { PaginationQuantityWrapperProps } from '.'

export const PaginationQuantityWrapper = styled.div<PaginationQuantityWrapperProps>`
  position: relative;
  width: ${props => props.$width};
  overflow: hidden;
  ${addTransition};
`

export const PaginationQuantityButtons = styled.div<PaginationQuantityWrapperProps>`
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  left: ${props => props.$left};
  ${addTransition};
`
