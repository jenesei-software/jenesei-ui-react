import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { SelectYear, SelectYearProps } from '../components/select'

const meta: Meta<typeof SelectYear> = {
  component: SelectYear,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectYear>

const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
const endDate = moment.utc().startOf('day').valueOf()
const value = moment.utc().valueOf()

const defaultArgs: Partial<SelectYearProps> = {
  size: 'medium',
  genre: 'gray',
  sx: {
    default: {
      width: '300px'
    }
  },
  startDate: startDate,
  endDate: endDate,
  value: value
}

const SelectYearWrapper: FC<SelectYearProps> = props => {
  const [value, setValue] = useState<number>(props.value)
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value])
  return <SelectYear {...props} placeholder="Year" value={value} onChange={handleSelectChange} />
}

export const Year: Story = {
  render: args => <SelectYearWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
