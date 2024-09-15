import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { useState } from 'react'
import 'styled-components'

import { DatePicker, DateProps } from '.'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
}

export default meta
type Story = StoryObj<typeof DatePicker>

const DatePickerWrapper: React.FC<DateProps> = (props) => {
  const startDate = moment
    .utc()
    .subtract(100, 'years')
    .startOf('year')
    .valueOf()
  const endDate = moment.utc().add(1, 'year').startOf('year').valueOf()

  const [value, setValue] = useState<number>(
    moment.utc().startOf('day').valueOf(),
  )
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  return (
    <DatePicker
      {...props}
      placeholder="Month"
      value={value}
      onChange={handleSelectChange}
      startDate={startDate}
      endDate={endDate}
    />
  )
}

export const Default: Story = {
  render: (args) => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
  },
}
