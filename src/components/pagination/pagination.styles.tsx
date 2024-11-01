import styled, { css } from 'styled-components'

import { PaginationQuantityWrapperProps } from '.'

export const PaginationQuantityWrapper = styled.div<PaginationQuantityWrapperProps>`
  position: relative;
  ${props =>
    props.$viewQuantity &&
    css`
      width: ${props.$viewQuantity * 30 + (props.$viewQuantity - 1) * 12}px;
      overflow: hidden;
    `}
`

export const PaginationQuantityButtons = styled.div<PaginationQuantityWrapperProps>`
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  ${props =>
    props.$viewQuantity &&
    css`
      overflow: hidden;
      left: -${props.$index * 30}px;
    `}
`
