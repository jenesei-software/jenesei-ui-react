import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { FC, useState } from 'react'
import 'styled-components'

import { localeMonths } from '@local/consts'

import { SelectDateProps, SelectMonth } from '../components/select'

const meta: Meta<typeof SelectMonth> = {
  component: SelectMonth,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectMonth>

const defaultArgs: Partial<SelectDateProps> = {
  size: 'medium',
  genre: 'gray',
  sx: {
    default: {
      width: '300px'
    }
  },
  monthsLocale: localeMonths
}

const SelectMonthWrapper: FC<SelectDateProps> = props => {
  const [value, setValue] = useState<number>(moment.utc().valueOf())
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  return <SelectMonth {...props} placeholder="Month" value={value} onChange={handleSelectChange} />
}

export const Month: Story = {
  render: args => <SelectMonthWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
