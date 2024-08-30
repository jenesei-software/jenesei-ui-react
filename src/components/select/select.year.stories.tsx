import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { useState } from 'react'
import 'styled-components'

import { SelectYear, SelectYearProps } from '.'

const meta: Meta<typeof SelectYear> = {
  component: SelectYear,
  title: 'Select/Year',
}

export default meta
type Story = StoryObj<typeof SelectYear>

const defaultArgs: Partial<SelectYearProps> = {
  size: 'medium',
  genre: 'gray',
  width: '300px',
}

const SelectYearWrapper: React.FC<SelectYearProps> = (props) => {
  const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
  const endDate = moment.utc().startOf('year').valueOf()

  const [value, setValue] = useState<number>(moment.utc().valueOf())
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  return (
    <SelectYear
      {...props}
      placeholder="Year"
      value={value}
      onChange={handleSelectChange}
      startDate={startDate}
      endDate={endDate}
    />
  )
}

export const Year: Story = {
  render: (args) => <SelectYearWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}
