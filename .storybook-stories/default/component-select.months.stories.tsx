import type { Meta, StoryObj } from '@storybook/react-vite'
import moment from 'moment'
import { FC, useState } from 'react'
import 'styled-components'

import { SelectMonths, SelectMonthsProps } from '@local/components/select'
import { Stack } from '@local/components/stack'
import { localeMonths } from '@local/consts'

const meta: Meta<typeof SelectMonths> = {
  component: SelectMonths,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectMonths>

const defaultArgs: Partial<SelectMonthsProps> = {
  size: 'medium',
  genre: 'gray',
  monthsLocale: localeMonths
}

const SelectMonthWrapper: FC<SelectMonthsProps> = props => {
  const [value, setValue] = useState<number[]>([moment.utc().startOf('month').valueOf()])
  const handleSelectChange = (value: number[]) => {
    setValue(value)
  }

  return (
    <Stack
      sx={{
        default: {
          width: '400px',
          height: '500px',
          padding: '10px'
        }
      }}
    >
      <SelectMonths
        {...props}
        placeholder="Month"
        isShowIconClear
        isShowIconFetching
        isShowIconToggle
        isFetching
        value={value}
        onChange={handleSelectChange}
      />
    </Stack>
  )
}

export const Months: Story = {
  render: args => <SelectMonthWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
