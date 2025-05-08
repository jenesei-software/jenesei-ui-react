import { FC, useCallback, useMemo } from 'react'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'
import { KEY_SIZE_DATA } from '@local/theme/theme'
import { TJeneseiThemeSize } from '@local/theme/theme.interface'

import { PaginationProps, PaginationQuantityButtons, PaginationQuantityWrapper } from '.'

export const Pagination: FC<PaginationProps> = props => {
  const isDisabledPrevious = useMemo(() => props.index == 0 && !props.isInfinity, [props.index, props.isInfinity])
  const isDisabledNext = useMemo(
    () => props.index == props.length - 1 && !props.isInfinity,
    [props.index, props.isInfinity, props.length]
  )

  const size: TJeneseiThemeSize = useMemo(() => 'small', [])
  const gap = useMemo(() => 12, [])
  const widthIndex = useMemo(() => KEY_SIZE_DATA[size].height, [size])
  const gapString = useMemo(() => `${gap}px`, [gap])

  const handlePrevious = useCallback(() => {
    if (props.index == 0) {
      if (props.isInfinity) {
        props.changeIndex(props.length - 1)
      }
    } else {
      props.changeIndex(props.index - 1)
    }
  }, [props])

  const handleNext = useCallback(() => {
    if (props.index == props.length - 1) {
      if (props.isInfinity) {
        props.changeIndex(0)
      }
    } else {
      props.changeIndex(props.index + 1)
    }
  }, [props])

  const indexesRight = useMemo(() => props.length - 1 - props.index, [props.index, props.length])
  const indexesLeft = useMemo(() => props.index, [props.index])

  const approximateVisibleMiddle = useMemo(() => Math.floor(props.viewQuantity / 2), [props.viewQuantity])

  const left = useMemo(() => {
    let calculation = 0
    if (indexesLeft <= approximateVisibleMiddle) {
      calculation = 0
    } else if (indexesRight <= approximateVisibleMiddle) {
      calculation = props.length - props.viewQuantity
    } else {
      calculation = indexesLeft - approximateVisibleMiddle
    }
    return `-${calculation * widthIndex + calculation * gap}px`
  }, [indexesLeft, approximateVisibleMiddle, indexesRight, widthIndex, gap, props.length, props.viewQuantity])

  const width = useMemo(() => `${props.viewQuantity * 30 + (props.viewQuantity - 1) * 12}px`, [props.viewQuantity])

  return (
    <Stack sx={{ default: { gap: gapString } }}>
      <Button
        isDisabled={isDisabledPrevious}
        isHidden={isDisabledPrevious}
        onClick={handlePrevious}
        size={size}
        genre={props.genre}
        icon={{
          type: 'id',
          name: 'Arrow2',
          order: -1,
          turn: 90
        }}
      >
        Previous
      </Button>
      <PaginationQuantityWrapper $left={left} $width={width}>
        <PaginationQuantityButtons $left={left} $width={width}>
          {Array.from({ length: props.length }).map((_, i) => (
            <Button
              key={i}
              width="asHeight"
              size={size}
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
        size={size}
        genre={props.genre}
        icon={{
          type: 'id',
          name: 'Arrow2',
          turn: -90
        }}
      >
        Next
      </Button>
    </Stack>
  )
}
