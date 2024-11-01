import { FC } from 'react'

import { Button } from '@components/button'
import { Stack } from '@components/flex'

import { PaginationProps, PaginationQuantityButtons, PaginationQuantityWrapper } from '.'

export const Pagination: FC<PaginationProps> = props => {
  const isDisabledPrevious = props.index == 0 && !props.isInfinity
  const isDisabledNext = props.index == props.length - 1 && !props.isInfinity
  const handlePrevious = () => {
    if (props.index == 0) {
      if (props.isInfinity) {
        props.changeIndex(props.length - 1)
      }
    } else {
      props.changeIndex(props.index - 1)
    }
  }
  const handleNext = () => {
    if (props.index == props.length - 1) {
      if (props.isInfinity) {
        props.changeIndex(0)
      }
    } else {
      props.changeIndex(props.index + 1)
    }
  }
  return (
    <Stack gap="12px">
      <Button
        isDisabled={isDisabledPrevious}
        isHidden={isDisabledPrevious}
        onClick={handlePrevious}
        size={'small'}
        genre={props.genre}
        iconName="ArrowLeft2"
        iconOrder={-1}
      >
        Previous
      </Button>
      <PaginationQuantityWrapper $index={props.index} $length={props.length} $viewQuantity={props.viewQuantity}>
        <PaginationQuantityButtons $index={props.index} $length={props.length} $viewQuantity={props.viewQuantity}>
          {Array.from({ length: props.length }).map((_, i) => (
            <Button
              key={i}
              minWidth="asHeight"
              size={'small'}
              genre={i === props.index ? 'blackBorder' : 'white'}
              onClick={() => props.changeIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
        </PaginationQuantityButtons>
      </PaginationQuantityWrapper>
      <Button
        isDisabled={isDisabledNext}
        isHidden={isDisabledNext}
        onClick={handleNext}
        size={'small'}
        genre={props.genre}
        iconName="ArrowRight2"
      >
        Next
      </Button>
    </Stack>
  )
}
