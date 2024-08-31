import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { useState } from 'react'
import 'styled-components'

import { SelectDateProps, SelectMonth } from '.'

const meta: Meta<typeof SelectMonth> = {
  component: SelectMonth,
  title: 'Select/Month',
}

export default meta
type Story = StoryObj<typeof SelectMonth>

const defaultArgs: Partial<SelectDateProps> = {
  size: 'medium',
  genre: 'gray',
  width: '300px',
}

const SelectMonthWrapper: React.FC<SelectDateProps> = (props) => {
  const [value, setValue] = useState<number>(moment.utc().valueOf())
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  return <SelectMonth {...props} placeholder="Month" value={value} onChange={handleSelectChange} />
}

export const Month: Story = {
  render: (args) => <SelectMonthWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}