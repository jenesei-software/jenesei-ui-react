import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { ISelectItem, Select, SelectProps } from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
}

export default meta
type Story = StoryObj<typeof Select>

const defaultArgs: Partial<SelectProps<IOption>> = {
  inputProps: {
    genre: 'gray',
    size: 'large',
    isError: false,
    isDisabled: false,
    isActive: undefined,
    isRequired: false,
    isReadOnly: false,
    isLoading: false,
    placeholder: 'White placeholder?',
    width: '300px',
  },
}

interface IOption extends ISelectItem {}
const SelectWrapper: React.FC<SelectProps<IOption>> = (props) => {
  const [option] = useState([
    { label: 'Partnership', value: 'Partnership', id: 0 },
    { label: 'Service request', value: 'Service request', id: 1 },
    { label: 'Career', value: 'Career', id: 2 },
    { label: 'Other', value: 'Other', id: 3 },
    { label: 'Partnership', value: 'Partnership', id: 4 },
    { label: 'Service request', value: 'Service request', id: 5 },
    { label: 'Career', value: 'Career', id: 6 },
    { label: 'Other', value: 'Other', id: 7 },
    { label: 'Partnership', value: 'Partnership', id: 8 },
    { label: 'Service request', value: 'Service request', id: 9 },
    { label: 'Career', value: 'Career', id: 10 },
    { label: 'Other', value: 'Other', id: 11 },
  ])
  const [value, setValue] = useState<IOption[]>([option[0]])

  const handleChange = (option: IOption[]) => {
    setValue(option)
  }

  return (
    <Select<IOption>
      {...props}
      option={option}
      value={value}
      onChange={handleChange}
    />
  )
}

export const String: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}
