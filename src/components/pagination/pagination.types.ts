export interface PaginationProps {
  genre: 'black'
  index: number
  length: number
  isInfinity?: boolean
  viewQuantity: number
  changeIndex: (index: number) => void
}

export interface PaginationQuantityWrapperProps {
  $left: string
  $width: string
}
