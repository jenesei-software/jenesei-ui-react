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
    size: 'large',
    genre: 'gray',
    placeholder: 'White placeholder?',
    width: '300px',
  },
  size: 'large',
  checkboxProps: {
    genre: 'gray',
    view: 'circle',
    size: 'medium',
    isHiddenBorder: true,
  },
  optionProps: {
    size: 'large',
    genre: 'gray',
    isCustomIcon: true,
  },
  listProps: {
    size: 'large',
    genre: 'gray',
  },
}

interface IOption extends ISelectItem {}

const SelectWrapper: React.FC<SelectProps<IOption>> = (props) => {
  const [option] = useState<IOption[]>([
    { label: 'Partnership', value: 0 },
    { label: 'Service request', value: 1 },
    { label: 'Career', value: 2 },
    { label: 'Other', value: 3 },
    { label: 'Partnership', value: 4 },
    { label: 'Service request', value: 5 },
    { label: 'Career', value: 6 },
    { label: 'Other', value: 7 },
    { label: 'Partnership', value: 8 },
    { label: 'Service request', value: 9 },
    { label: 'Career', value: 10 },
    { label: 'Other', value: 11 },
  ])
  const [value, setValue] = useState<IOption[]>([option[0]])

  const handleChange = (option: IOption[]) => {
    console.log(option)
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
