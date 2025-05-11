import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Range, RangeProps } from '../components/range'

const meta: Meta<typeof Range> = {
  component: Range,
  title: 'Component/Range'
}

export default meta

type Story = StoryObj<typeof Range>

const RangeWrapper: FC<RangeProps> = props => {
  const [value, setValue] = useState<RangeProps['values']>(props.values ?? [0, 0])

  return (
    <Range
      {...props}
      values={value}
      onChange={newValue => {
        setValue(newValue)
      }}
    />
  )
}

export const Default: Story = {
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    values: [0, 100000],
    min: 0,
    max: 100000,
    step: 1000
  }
}
