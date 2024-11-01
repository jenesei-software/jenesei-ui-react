import { AddDollarSign } from 'src/types'

export interface PaginationProps {
  genre: 'black'
  index: number
  length: number
  isInfinity?: boolean
  viewQuantity?: number
  changeIndex: (index: number) => void
}

export type PaginationQuantityWrapperProps = AddDollarSign<Pick<PaginationProps, 'viewQuantity' | 'index' | 'length'>>
