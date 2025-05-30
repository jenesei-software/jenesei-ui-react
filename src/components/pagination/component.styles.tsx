import styled from 'styled-components'

import { addTransition } from '@local/styles/add'

import { PaginationQuantityWrapperProps } from '.'

export const PaginationQuantityWrapper = styled.div<PaginationQuantityWrapperProps>`
  position: relative;
  width: ${props => props.$width};
  overflow: hidden;
  margin: -2px;
  padding: 2px;
  ${addTransition};
`

export const PaginationQuantityButtons = styled.div<PaginationQuantityWrapperProps>`
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px ${props => props.$gap}px;
  left: ${props => props.$left};
  ${addTransition};
`
