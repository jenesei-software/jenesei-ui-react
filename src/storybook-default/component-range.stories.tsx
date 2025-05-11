import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Input } from '@local/components/input'
import { Stack } from '@local/components/stack'

import { Range, RangeProps } from '../components/range'

const meta: Meta<typeof Range> = {
  component: Range,
  title: 'Component/Range'
}

export default meta

type Story = StoryObj<typeof Range>

const RangeWrapper: FC<RangeProps> = props => {
  const [min, setMin] = useState<number>(100)
  const [max, setMax] = useState<number>(1000000)

  return (
    <Stack sx={{ default: { flexDirection: 'column', gap: '4px', padding: '10px', width: '500px' } }}>
      <Input
        propsNumeric={{
          allowLeadingZeros: false,
          thousandSeparator: ' ',
          allowNegative: false,
          allowedDecimalSeparators: ['.'],
          decimalScale: 2,
          decimalSeparator: ',',
          suffix: ' $',
          isAllowed: values => {
            const { floatValue } = values
            return (floatValue ?? 0) >= 0 && (floatValue ?? 0) <= (max ?? 10000000)
          }
        }}
        isReadOnly
        variety="numeric"
        placeholder="От"
        value={min.toString()}
        onChange={e => {
          const newValue = e.floatValue
          console.log(newValue)
          if (newValue !== undefined) setMin(newValue)
        }}
        genre="realebail-white"
        size="small"
      />
      <Input
        propsNumeric={{
          allowLeadingZeros: false,
          thousandSeparator: ' ',
          allowNegative: false,
          allowedDecimalSeparators: ['.'],
          decimalScale: 2,
          decimalSeparator: ',',
          suffix: ' $',
          isAllowed: values => {
            const { floatValue } = values
            return (floatValue ?? 0) >= (min ?? 0) && (floatValue ?? 0) <= 10000000
          }
        }}
        isReadOnly
        variety="numeric"
        placeholder="От"
        value={max.toString()}
        onChange={e => {
          const newValue = e.floatValue
          console.log(newValue)
          if (newValue !== undefined) setMax(newValue)
        }}
        genre="realebail-white"
        size="small"
      />
      <Range
        {...props}
        min={0}
        max={1000000}
        values={[min, max]}
        onChange={newValue => {
          setMin(newValue[0])
          setMax(newValue[1])
        }}
      />
    </Stack>
  )
}

export const Default: Story = {
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000
  }
}
