import { FocusEventHandler } from 'react'

import { AddDollarSign } from '@local/types'

import { InputStandardProps } from '../input/component.types'

export type RangeProps = {
  values: number[]
  // colors: string[]
  onChange: (values: number[]) => void
  step: number
  min: number
  max: number
  isShowMarker?: boolean
  onBlur?: FocusEventHandler<HTMLDivElement>
} & Pick<InputStandardProps, 'size' | 'genre' | 'id' | 'width' | 'isError' | 'errorMessage' | 'isErrorAbsolute'>

export type RangeWrapperProps = AddDollarSign<Pick<RangeProps, 'size' | 'width' | 'isError'>>
export type RangeComponentProps = AddDollarSign<Pick<RangeProps, 'size' | 'genre'>>
